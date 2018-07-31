import { Form } from './form';

export const FORMS: Form[] = [
    { riskType: undefined, questions: [
        'The asset has a broad surface area to the identified threat',
        'The threat does not require significant resources to materialize',
        'Not all ways the threat can manifest and impact the asset have been mitigated',
        'One or more ways the threat can manifest and impact the asset have mitigations that can fail (or no mitigations at all)',
        'The threat to the asset can occur at any time',
        'The threat to the asset can occur without meeting special pre-conditions at the time',
        'When the threat occurs, it will do damage internally within the company (besides to the asset itself)',
        'When the threat occurs, it will do damage externally to the company (besides to the asset itself)',
        'The asset has or creates significant value to the company',
        'Restoring the asset inivolves significant cost to the company'
    ]},
    { riskType: 'Financial', questions: [
        'The threat does not require special skills or knowledge to materialize',
        'The circumstances leading to the threat materializing are relatively common',
        'The asset is not fully protected against the threat',
        'There are known gaps in the current protection of the asset',
        'The threat to the asset can occur at any time',
        'The threat to the asset can occur without meeting pre-conditions',
        'When the threat occurs, it will cause fallout within the company (besides to the asset)',
        'When the threat occurs, it will cause fallout outside the company (besides to the asset)',
        'The asset has significant value to the company',
        'Replacing the asset involves significant cost to the company'
    ]},
    { riskType: 'Legal & Compliance', questions: [
        'The threat does not require special knowledge or expertise to materialize',
        'The threat does not require significant resources to materialize',
        'The asset is not fully protected against the threat',
        'There are known gaps in the current mitigations against the threat',
        'The threat to the asset can occur at any time',
        'The threat to the asset can occur without meeting pre-conditions',
        'When the threat occurs, it will cause consequences within the compnay (besides to the asset)',
        'When the threat occurs, it will cause consequences outside the company (besides to the asset)',
        'The asset has or creates significant value to the company',
        'Restoring the asset involves significant cost to the company'
    ]},
    { riskType: 'Operational', questions: [
        'The threat requries special expertise to avert',
        'The threat requires significant resources to avert',
        'The asset is not fully protected against the threat',
        'There are known gaps in the current mitigations against the threat',
        'The threat to the asset can occur at any time',
        'The threat to the asset can occur without meeting pre-conditions',
        'When the threat occurs, it will cause consequences within the company (besides to the asset)',
        'When the threat occurs, it will cause consequences outside the company (besides to the asset)',
        'The asset has or creates significant value to the company',
        'The repair or replacement of the asset involves significant costs'
    ]},
    { riskType: 'Privacy', questions: [
        'The threat does not require special expertise to materialize',
        'The threat does not require significant resources to materialize',
        'The asset is not fully protected against the threat',
        'There are known weaknesses in the current defenses of the asset',
        'The threat to the asset can occur at any time',
        'The threat to the asset can occur without meeting pre-conditions',
        'When the threat occurs, it will cause consequences within the company (besides to the asset)',
        'When the threat occurs, it will cause consequences outside the company (besides to the asset)',
        'The asset creates significant value for the company',
        'Restoring the asset involves significant cost to the company'
    ]},
    { riskType: 'Project', questions: [
        'The threat requires special skills or expertise to avert',
        'The threat requires significant resources to avert',
        'The asset is not fully protected against the threat',
        'There are known gaps in the current mitigations against the threat',
        'The threat to the asset can occur at any time',
        'The threat to the asset can occur without meeting pre-conditions',
        'There will be consequences from internal sources (besides to the asset itself)',
        'There will be consequences from external sources (besides to the asset itself)',
        'The asset creates significant value for the company',
        'Restoring the asset involves significant cost to the company'
    ]},
    { riskType: 'Reputational', questions: [
        'The threat requires special skills or expertise to avert',
        'The threat requires significant resources to avert',
        'The asset is not fully protected against the threat',
        'There are known gaps in the current mitigations against the threat',
        'The threat to the asset can occur at any time',
        'The threat to the asset can occur without meeting pre-conditions',
        'When the threat occurs, it will cause fallout within the company (besides to the asset)',
        'When the threat occurs, it will cause fallout outside the company (besides to the asset)',
        'The asset has or creates significant business value',
        'The restoration of the asset involves significant costs'
    ]},
    { riskType: 'Security', questions: [
        'The attack can be completed with common skills',
        'The attack can be completed without significant resources',
        'The asset is not fully protected against the threat',
        'There are known weaknesses in the current defenses of the asset',
        'The vulnerability is always present in the asset',
        'The attack can be performed without meeting pre-conditions',
        'There will be consequences from internal sources (besides to the asset itself)',
        'There will be consequences from external sources (besides to the asset itself)',
        'The asset has or creates significant business value',
        'The repair or replacement of the asset involves significant costs'
    ]},
    { riskType: 'Strategic & Competitive', questions: [
        'The threat requires special skills or expertise to avert',
        'The threat requires significant resources to avert',
        'The asset is not fully protected against the threat',
        'There are known gaps in the current mitigations against the threat',
        'The threat to the asset can occur at any time',
        'The threat to the asset can occur without meeting pre-conditions',
        'There will be consequences from internal sources (besides to the asset itself)',
        'There will be consequences from external sources (besides to the asset itself)',
        'The asset has or creates significant business value',
        'The restoration of the asset involves significant costs'
    ]}
]