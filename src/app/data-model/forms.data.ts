import { Form } from './form';

// See README.md for some notes on the rationale of the permutations of questions used.
export const FORMS: Form[] = [
    { riskType: undefined, questions: [
        'The threat requires significant skills, knowledge, or expertise to avert', // TWEAK "or"s
        'The threat requires significant resources to avert',
        'Not all ways the threat can manifest and impact the asset have been mitigated',
        'Existing mitigations against the threat have known limitations or gaps', // TWEAK "or"s
        'Vulnerability to the threat is present at all times',
        'The threat to the asset can occur without meeting special pre-conditions at the time',
        'When the threat occurs, it will have consequences within the company (besides to the asset)',
        'When the threat occurs, it will have consequences outside the company (besides to the asset)',
        'The asset has, or creates significant business value', // TWEAK "or"s
        'Restoring, replacing, or repairing the asset involves significant cost to the company' // TWEAK "or"s
    ]},
    { riskType: 'Financial', questions: [
        'The threat requires significant knowledge, or expertise to avert',
        'The threat requires significant resources to avert',
        'Not all ways the threat can manifest and impact the asset have been mitigated',
        'Existing mitigations against the threat have known limitations or gaps',
        'Vulnerability to the threat is present at all times',
        'The threat to the asset can occur without meeting special pre-conditions at the time',
        'When the threat occurs, it will cause fallout within the company',
        'When the threat occurs, it will have consequences outside the company (besides to the asset)',
        'The asset has, or creates significant value to the company',
        'Restoring, or replacing the asset involves significant cost to the company'
    ]},
    { riskType: 'Legal & Compliance', questions: [
        'The threat requires significant skills, knowledge, or expertise to avert',
        'The threat requires significant resources to avert',
        'Not all ways the threat can manifest and impact the asset have been mitigated',
        'Existing mitigations against the threat have known limitations or gaps',
        'Vulnerability to the threat is present at all times',
        'The threat to the asset can occur without meeting special pre-conditions at the time',
        'When the threat occurs, it will have consequences within the company (besides to the asset)',
        'When the threat occurs, it will cause fallout outside the company',
        'The asset has, or creates significant business value',
        'Restoring, or repairing the asset involves significant cost to the company'
    ]},
    { riskType: 'Operational', questions: [
        'The threat requires significant skills, knowledge, or expertise to avert',
        'The threat requires significant resources to avert',
        'Not all ways the threat can manifest and impact the asset have been mitigated',
        'Existing mitigations against the threat have known limitations or gaps',
        'Vulnerability to the threat is present at all times',
        'The threat to the asset can occur without meeting special pre-conditions at the time',
        'When the threat occurs, it will have consequences within the company (besides to the asset)',
        'When the threat occurs, it will have consequences outside the company (besides to the asset)',
        'The asset has, or creates significant value to the company',
        'Restoring, replacing, or repairing the asset involves significant cost to the company'
    ]},
    { riskType: 'Privacy', questions: [
        'The threat requires only limited or common skills, knowledge, or expertise to materialize',
        'The threat requires only limited resources to materialize',
        'Not all ways the threat can manifest and impact the asset have been mitigated',
        'Existing protection of the asset has known limitations or gaps',
        'Vulnerability to the threat is present at all times',
        'The threat to the asset can occur without meeting special pre-conditions at the time',
        'When the threat occurs, it will have consequences within the company (besides to the asset)',
        'When the threat occurs, it will cause fallout outside the company',
        'The asset has, or creates significant business value',
        'Restoring, or repairing the asset involves significant cost to the company'
    ]},
    { riskType: 'Project', questions: [
        'The threat requires significant skills, knowledge, or expertise to avert',
        'The threat requires significant resources to avert',
        'Not all ways the threat can manifest and impact the asset have been mitigated',
        'Existing mitigations against the threat have known limitations or gaps',
        'Vulnerability to the threat is present at all times',
        'The threat to the asset can occur without meeting special pre-conditions at the time',
        'When the threat occurs, it will have consequences within the company (besides to the asset)',
        'When the threat occurs, it will have consequences outside the company (besides to the asset)',
        'The asset has, or creates significant value to the company',
        'Restoring, replacing, or repairing the asset involves significant cost to the company'
    ]},
    { riskType: 'Reputational', questions: [
        'The threat requires significant skills, or expertise to avert',
        'The threat requires significant resources to avert',
        'Not all ways the threat can manifest and impact the asset have been mitigated',
        'Existing protection of the asset has known limitations or gaps',
        'Vulnerability to the threat is present at all times',
        'The threat to the asset can occur without meeting special pre-conditions at the time',
        'When the threat occurs, it will cause fallout within the company',
        'When the threat occurs, it will have consequences outside the company (besides to the asset)',
        'The asset has, or creates significant business value',
        'Restoring, or repairing the asset involves significant cost to the company'
    ]},
    { riskType: 'Security', questions: [
        'The threat requires only limited or common skills, knowledge, or expertise to materialize',
        'The threat requires only limited resources to materialize',
        'Not all ways the threat can manifest and impact the asset have been mitigated',
        'Existing mitigations against the threat have known limitations or gaps',
        'Vulnerability to the threat is present at all times',
        'The threat to the asset can occur without meeting special pre-conditions at the time',
        'When the threat occurs, it will have consequences within the company (besides to the asset)',
        'When the threat occurs, it will cause fallout outside the company',
        'The asset has, or creates significant business value',
        'Restoring, or repairing the asset involves significant cost to the company'
    ]},
    { riskType: 'Strategic & Competitive', questions: [
        'The threat requires significant skills, knowledge, or expertise to avert',
        'The threat requires significant resources to avert',
        'Not all ways the threat can manifest and impact the asset have been mitigated',
        'Existing mitigations against the threat have known limitations or gaps',
        'Vulnerability to the threat is present at all times',
        'The threat to the asset can occur without meeting special pre-conditions at the time',
        'When the threat occurs, it will cause fallout within the company',
        'When the threat occurs, it will have consequences outside the company (besides to the asset)',
        'The asset has, or creates significant business value',
        'Restoring, or replacing the asset involves significant cost to the company'
    ]}
]
