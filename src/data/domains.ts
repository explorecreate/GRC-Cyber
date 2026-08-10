import type { Domain } from './types'

// Matches the current official CGRC Certification Exam Outline published by ISC2
// (the organization that writes and proctors the exam) — domain names, order, and
// weights are sourced directly from isc2.org/certifications/cgrc, not the older
// "CAP" domain names some third-party prep material still uses. Each domain maps
// 1:1 to a step of the NIST RMF (see /cgrc/nist), which is why the order matches.
export const domains: Domain[] = [
  {
    id: 'governance',
    number: 1,
    title: 'Security and Privacy Governance, Risk Management, and Compliance Program',
    weight: '16%',
    rmfStep: 'Prepare',
    overview:
      'The exam\'s foundation domain: building the organizational program that everything else sits on top of. It combines governance (policy, roles, legal/regulatory obligations, ethics) with the risk management program that governance exists to support — organizational risk tolerance, enterprise risk management, and integrating risk management into the SDLC from day one. If you can\'t explain why an organization needs a governance and risk program before you talk about controls, you\'re missing the exam\'s starting point.',
    keyConcepts: [
      'Governance structures: boards, risk committees, CISO/CRO reporting lines, three lines of defense model',
      'Legal, regulatory, and contractual requirements (FISMA, Privacy Act, HIPAA, GDPR, SOX as comparators)',
      'Organizational policies, standards, procedures, and guidelines — and how they differ',
      'Security and privacy roles & responsibilities (Authorizing Official, ISSO, System Owner, Privacy Officer)',
      '(ISC)² Code of Ethics and professional conduct expectations',
      'Risk management strategy and organizational risk tolerance/appetite',
      'Enterprise risk management (ERM) vs. system-level risk management',
      'Integrating risk management into the System Development Life Cycle (SDLC)',
      'Business Impact Analysis (BIA) and its inputs to risk decisions',
      'Supply chain risk management (SCRM) at the program level',
    ],
    aiNote:
      'The current outline adds AI-specific governance tasks here: establishing policy and accountability for AI systems, defining organizational risk tolerance for algorithmic decision-making, and accounting for the global AI regulatory landscape (e.g., the EU AI Act) alongside traditional privacy/security law. See the NIST AI RMF deep-dive in the AI Learning Center for the direct counterpart to this domain.',
    resources: [
      { title: 'CGRC Certification Overview', source: 'ISC2', url: 'https://www.isc2.org/certifications/cgrc', kind: 'article' },
      { title: 'ISC2 CGRC Domain 1: Information Security Risk Management Program', source: 'Infosec Institute', url: 'https://www.infosecinstitute.com/resources/isc2-cgrc/isc2-cgrc-domain-1-information-security-risk-management-program/', kind: 'article' },
      { title: 'NIST SP 800-39 — Managing Information Security Risk', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/39/final', kind: 'pdf' },
      { title: '(ISC)² Code of Ethics', source: 'ISC2', url: 'https://www.isc2.org/ethics', kind: 'article' },
    ],
  },
  {
    id: 'scope',
    number: 2,
    title: 'Scope of the System',
    weight: '10%',
    rmfStep: 'Categorize',
    overview:
      'Before you can secure a system you must define its boundary. This domain covers system categorization under FIPS 199, defining the authorization boundary, and the growing challenge of assessing risk introduced by vendors, cloud providers, and interconnected systems — third-party risk lives here because it\'s fundamentally a question of what falls inside your scope.',
    keyConcepts: [
      'Authorization boundary definition and system interconnections',
      'FIPS 199 categorization (Confidentiality/Integrity/Availability impact levels)',
      'System types: general support system vs. major application',
      'Third-party/vendor risk assessment, SLAs, and shared responsibility models (cloud)',
      'Interconnection Security Agreements (ISAs) and Memoranda of Understanding (MOUs)',
      'Supply chain risk at the system/component level (SBOM, provenance)',
    ],
    aiNote:
      'Scoping now explicitly considers whether an AI/ML component is inside the authorization boundary — including third-party foundation models accessed via API, which introduce a supply-chain-style dependency even though no code is hosted on your own infrastructure.',
    resources: [
      { title: 'FIPS 199 & 200 Compliance: Comparing Security Standards', source: 'Ignyte Platform', url: 'https://www.ignyteplatform.com/blog/compliance/fips-199-200-compliance/', kind: 'article' },
      { title: 'FIPS 199 — Standards for Security Categorization', source: 'NIST', url: 'https://csrc.nist.gov/pubs/fips/199/final', kind: 'pdf' },
      { title: 'Cloud Shared Responsibility Model', source: 'CISA', url: 'https://www.cisa.gov/', kind: 'article' },
    ],
  },
  {
    id: 'control-selection',
    number: 3,
    title: 'Selection and Approval of Framework, Security, and Privacy Controls',
    weight: '14%',
    rmfStep: 'Select',
    overview:
      'The "Select" step of the RMF: choosing an appropriate control framework and baseline, tailoring it to the system, and getting stakeholder approval before anything gets implemented. This is a decision-and-documentation domain — you\'re choosing what controls apply, not yet building them.',
    keyConcepts: [
      'NIST SP 800-53 control families and control structure (control, enhancement, parameter)',
      'Control baselines (Low/Moderate/High) and tailoring (scoping, compensating controls)',
      'Privacy controls and the privacy control baseline (SP 800-53B / the PT control family)',
      'Common controls, hybrid controls, and system-specific controls — deciding allocation before implementation',
      'Organization-defined parameters (ODPs) and documenting selection rationale',
      'Stakeholder approval of the selected control set',
    ],
    aiNote:
      'Selection now includes deciding which controls (or AI-specific overlays) address "black box" model risk, algorithmic transparency, and explainability requirements — treated as a first-class category alongside traditional confidentiality/integrity/availability controls.',
    resources: [
      { title: 'NIST SP 800-53 Rev.5 — Security and Privacy Controls', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', kind: 'pdf' },
      { title: 'NIST SP 800-53B — Control Baselines', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/b/final', kind: 'pdf' },
    ],
  },
  {
    id: 'control-implementation',
    number: 4,
    title: 'Implementation of Security and Privacy Controls',
    weight: '17%',
    rmfStep: 'Implement',
    overview:
      'The RMF\'s "Implement" step now stands on its own as the single largest domain on the exam. Selecting a control on paper is not the same as building it correctly — this domain covers actually deploying the technical, operational, and management controls chosen in Domain 3, documenting exactly how each one is implemented, and making sure that implementation is verifiable before an assessor ever looks at it.',
    keyConcepts: [
      'Translating a control\'s base statement into a concrete technical/operational/management implementation',
      'System Security Plan (SSP) — documenting how each selected control is actually implemented (NIST SP 800-18)',
      'Implementing common controls, hybrid controls, and system-specific controls correctly, including inheritance documentation',
      'Secure configuration management and hardening baselines as an implementation activity',
      'Integrating control implementation into the SDLC / DevSecOps pipeline rather than bolting it on afterward',
      'Verifying implementation readiness before formal assessment (self-testing, peer review)',
    ],
    aiNote:
      'Implementation-stage AI tasks include deploying monitoring for model drift and data poisoning, implementing guardrails/output filtering for generative AI systems, and documenting how "black box" risk is mitigated in practice — not just selected on paper.',
    resources: [
      { title: 'NIST SP 800-18 Rev.1 — Guide for Developing Security Plans', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/18/r1/final', kind: 'pdf' },
      { title: 'How to Make a Useful SSP: System Security Plans That Work', source: 'UberEther', url: 'https://uberether.com/how-to-make-an-ssp/', kind: 'article' },
      { title: 'NIST SP 800-53 Rev.5 — Security and Privacy Controls', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', kind: 'pdf' },
    ],
  },
  {
    id: 'assessment-audit',
    number: 5,
    title: 'Assessment/Audit of Security and Privacy Controls',
    weight: '16%',
    rmfStep: 'Assess',
    overview:
      'Once controls are implemented, someone independent has to verify they actually work. This domain covers assessment planning, methods (examine/interview/test), the Security Assessment Plan and Report, and how findings feed the POA&M — the RMF\'s "Assess" step.',
    keyConcepts: [
      'Security Assessment Plan (SAP) and Security Assessment Report (SAR)',
      'Assessment methods: examine, interview, test — and depth/coverage attributes',
      'NIST SP 800-53A — assessment procedures aligned to 800-53 controls',
      'Independence of assessors; assessor qualifications; reciprocity of existing assessments',
      'Plan of Action and Milestones (POA&M) — creation, tracking, closure',
      'Audit vs. assessment vs. continuous monitoring — how they differ in purpose',
    ],
    aiNote:
      'Assessing AI systems adds testing for bias, robustness against adversarial inputs, and validating that model behavior matches documented intent — assessment methods (examine/interview/test) still apply, but the "mechanism" being tested is now a model rather than only traditional software.',
    resources: [
      { title: 'NIST SP 800-53A Rev.5 — Assessing Security and Privacy Controls', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/a/r5/final', kind: 'pdf' },
      { title: 'An Introduction to the Plan of Actions and Milestones (POA&M)', source: 'YouTube', url: 'https://www.youtube.com/watch?v=DmjRAJc2xXs', kind: 'video' },
    ],
  },
  {
    id: 'system-compliance',
    number: 6,
    title: 'System Compliance',
    weight: '14%',
    rmfStep: 'Authorize',
    overview:
      'The RMF\'s "Authorize" step: the Authorizing Official reviews the authorization package (SSP, SAR, POA&M) and makes a formal, risk-based decision about whether the system is compliant enough to operate. This domain is about that decision itself — what goes into it, who makes it, and what the possible outcomes are.',
    keyConcepts: [
      'Authorization package contents (SSP, SAR, POA&M) and the Authorization to Operate (ATO) decision',
      'Authorizing Official (AO) responsibilities and risk acceptance vs. risk transfer',
      'Types of authorization: full ATO, interim authorization to test (IATT), denial of authorization',
      'Residual risk and how it\'s communicated to the AO for a compliance decision',
      'Authorization termination dates and the conditions attached to a compliance decision',
      'Reciprocity — accepting another organization\'s existing authorization instead of re-authorizing from scratch',
    ],
    aiNote:
      'AI-specific compliance decisions weigh algorithmic transparency and regulatory posture (e.g., does this AI use case fall under a "high-risk" category in applicable law?) alongside traditional residual risk before the AO signs off.',
    resources: [
      { title: 'Understanding Baselines and Impact Levels for FedRAMP Authorizations', source: 'FedRAMP.gov', url: 'https://www.fedramp.gov/rev5/baselines', kind: 'article' },
    ],
  },
  {
    id: 'compliance-maintenance',
    number: 7,
    title: 'Compliance Maintenance',
    weight: '13%',
    rmfStep: 'Monitor',
    overview:
      'Authorization is a point-in-time decision — the RMF only works if compliance is actively maintained afterward. This domain covers Information Security Continuous Monitoring (ISCM), change management, ongoing/event-driven reauthorization, and the incident response and contingency planning that keep a system\'s compliance posture valid over time rather than frozen at the moment of the last ATO.',
    keyConcepts: [
      'ISCM strategy: what to monitor, how often, and against what triggers (NIST SP 800-137)',
      'Ongoing authorization and event-driven reauthorization when significant changes occur',
      'Security metrics, dashboards, and automated data feeds for monitoring',
      'Incident response lifecycle (Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-Incident Activity)',
      'Business Continuity Plan (BCP), Disaster Recovery Plan (DRP), and Continuity of Operations Plan (COOP)',
      'Recovery Time Objective (RTO) and Recovery Point Objective (RPO)',
      'Tabletop, functional, and full-scale exercises; lessons learned feeding back into risk management',
      'System decommissioning and secure disposal at end of life',
    ],
    aiNote:
      'Maintaining compliance for AI systems means continuously monitoring for model drift, retraining-triggered reauthorization, and incident response plans that specifically cover AI failure modes (e.g., a model producing harmful or biased output at scale) — not just traditional system outages.',
    resources: [
      { title: 'NIST SP 800-137 — Information Security Continuous Monitoring', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/137/final', kind: 'pdf' },
      { title: 'NIST SP 800-61 Rev.2 — Computer Security Incident Handling Guide', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/61/r2/final', kind: 'pdf' },
      { title: 'NIST SP 800-34 Rev.1 — Contingency Planning Guide', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/34/r1/final', kind: 'pdf' },
      { title: 'Understanding the NIST SP 800-61 Incident Response Lifecycle, Simplified', source: 'YouTube', url: 'https://www.youtube.com/watch?v=BPQVaz6asdo', kind: 'video' },
    ],
  },
]

export function getDomain(id: string): Domain | undefined {
  return domains.find((d) => d.id === id)
}
