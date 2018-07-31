import { Form } from "./form";

export class Assessment {
    // Derived from "answers"
    public likelihood: string;
    public likelihoodColor: string;
    public impact: string;
    public impactColor: string;
    public risk: string;
    public riskColor: string;

    constructor(public asset: string, public threat: string, public form: Form, public answers: boolean[]) {
        this.calculateFactors();
    }
    
    //
    // Methods to assess risk based on "answers" and populate "likelihood", "impact", and "risk".
    //

    calculateFactors(): void {
        // Small = 0, Medium = 1, Large = 2
        var threatScope = (this.answers[0] ? 1 : 0) + (this.answers[1] ? 1 : 0);

        // Complete = 0,  Partial = 1, Incomplete = 2
        var protectionCapability = (this.answers[2] ? 1 : 0) + (this.answers[3] ? 1 : 0);

        // Rarely = 0, Periodically = 1, Always = 2
        var occurrence = (this.answers[4] ? 1 : 0) + (this.answers[5] ? 1 : 0);

        // Limited = 0, Material = 1, Damaging = 2
        var harm = (this.answers[6] ? 1 : 0) + (this.answers[7] ? 1 : 0);

        // Peripheral, Supporting, Essential
        var valuation = (this.answers[8] ? 1 : 0) + (this.answers[9] ? 1 : 0);

        // Limited = 0, Occasionally = 1, Consistently = 2
        var attackEffectiveness = this.trimRange(threatScope + protectionCapability);

        // Low = 0, Moderate = 1, High = 1
        var likelihood = this.trimRange(occurrence + attackEffectiveness);

        // Low = 0, Moderate = 1, High = 1
        var impact = this.trimRange(harm + valuation);

        // Low = 0, Moderate = 1, High = 1
        var risk = this.trimRange(likelihood + impact);

        // Update outputs
        this.likelihood = this.mapValue(likelihood);
        this.likelihoodColor = this.mapColour(likelihood);
        this.impact = this.mapValue(impact);
        this.impactColor = this.mapColour(impact);
        this.risk = this.mapValue(risk);
        this.riskColor = this.mapColour(risk);
    }

    private trimRange(valuation: number): number {
        switch (valuation) {
            case 0:
            case 1:
              return 0;
            case 2:
              return 1;
            case 3:
            case 4:
              return 2;
            default:
              return 1;
        }
    }

    private mapValue(valuation: number): string {
        switch (valuation) {
            case 0: return "Low";
            case 1: return "Medium";
            case 2: return "High";
            default: return "Indeterminate";
        }
    }

    private mapColour(valuation: number): string {
        switch (valuation) {
            case 0: return "green";
            case 1: return "orange";
            case 2: return "red";
            default: return "grey";
        }
    }
}