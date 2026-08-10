import type { Domain } from './types'

export const domains: Domain[] = [
  {
    id: 'governance',
    number: 1,
    title: 'Security and Privacy Governance, Compliance, and Ethics',
    weight: '17%',
    overview:
      'Governance sets the organizational foundation for risk management: policy, legal and regulatory obligations, organizational structure, and the ethical framework that everything else in CGRC sits on top of. If you can\'t explain why an organization needs a governance program before you talk about controls, you\'re missing the exam\'s starting point.',
    keyConcepts: [
      'Governance structures: boards, risk committees, CISO/CRO reporting lines, three lines of defense model',
      'Legal, regulatory, and contractual requirements (FISMA, Privacy Act, HIPAA, GDPR, SOX as comparators)',
      'Organizational policies, standards, procedures, and guidelines — and how they differ',
      'Security and privacy roles & responsibilities (Authorizing Official, ISSO, System Owner, Privacy Officer)',
      '(ISC)² Code of Ethics and professional conduct expectations',
      'Documentation hierarchy: policy → standard → procedure → guideline',
      'Integrating privacy governance alongside security governance (not as an afterthought)',
    ],
    resources: [
      { title: 'ISC2 CGRC Domain 1: Information Security Risk Management Program', source: 'Infosec Institute', url: 'https://www.infosecinstitute.com/resources/isc2-cgrc/isc2-cgrc-domain-1-information-security-risk-management-program/', kind: 'article' },
      { title: 'CGRC Certification Overview', source: 'ISC2', url: 'https://www.isc2.org/certifications/cgrc', kind: 'article' },
      { title: 'NIST RMF Governance Roles', source: 'NIST', url: 'https://csrc.nist.gov/projects/risk-management/about-rmf', kind: 'doc' },
      { title: '(ISC)² Code of Ethics', source: 'ISC2', url: 'https://www.isc2.org/ethics', kind: 'article' },
    ],
  },
  {
    id: 'risk-management',
    number: 2,
    title: 'Risk Management Program',
    weight: '15%',
    overview:
      'This domain covers building and running an organization-wide risk management program: identifying risk tolerance, integrating risk management into the enterprise architecture and SDLC, and running the risk management lifecycle continuously rather than as a one-time event.',
    keyConcepts: [
      'Risk management strategy and organizational risk tolerance/appetite',
      'Enterprise risk management (ERM) vs. system-level risk management',
      'Integrating RMF into the System Development Life Cycle (SDLC)',
      'Risk register, risk framing, and risk assessment methodologies',
      'Common vulnerabilities and threat sources; threat modeling basics',
      'Business Impact Analysis (BIA) and its inputs to risk decisions',
      'Supply chain risk management (SCRM) at the program level',
    ],
    resources: [
      { title: 'NIST SP 800-30 Rev.1 — Guide for Conducting Risk Assessments', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/30/r1/final', kind: 'pdf' },
      { title: 'NIST Risk Management Framework Implementation Step by Step', source: 'YouTube', url: 'https://www.youtube.com/watch?v=egDb4DxP7hQ', kind: 'video' },
      { title: 'NIST SP 800-39 — Managing Information Security Risk', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/39/final', kind: 'pdf' },
    ],
  },
  {
    id: 'third-party-risk',
    number: 3,
    title: 'Scope of the Information System / Third-Party Risk',
    weight: '13%',
    overview:
      'Before you can secure a system you must define its boundary. This domain covers system categorization, authorization boundaries, and the growing challenge of assessing risk introduced by vendors, cloud providers, and interconnected systems.',
    keyConcepts: [
      'Authorization boundary definition and system interconnections',
      'FIPS 199 categorization (Confidentiality/Integrity/Availability impact levels)',
      'System types: general support system vs. major application',
      'Third-party/vendor risk assessment, SLAs, and shared responsibility models (cloud)',
      'Interconnection Security Agreements (ISAs) and Memoranda of Understanding (MOUs)',
      'Supply chain risk at the system/component level (SBOM, provenance)',
    ],
    resources: [
      { title: 'FIPS 199 & 200 Compliance: Comparing Security Standards', source: 'Ignyte Platform', url: 'https://www.ignyteplatform.com/blog/compliance/fips-199-200-compliance/', kind: 'article' },
      { title: 'FIPS 199 — Standards for Security Categorization', source: 'NIST', url: 'https://csrc.nist.gov/pubs/fips/199/final', kind: 'pdf' },
      { title: 'Cloud Shared Responsibility Model', source: 'CISA', url: 'https://www.cisa.gov/', kind: 'article' },
    ],
  },
  {
    id: 'controls',
    number: 4,
    title: 'Selection and Approval of Security and Privacy Controls',
    weight: '15%',
    overview:
      'This is the heart of the "Select" and "Implement" steps of the RMF: choosing an appropriate control baseline, tailoring it to the system, documenting it in the System Security Plan, and getting stakeholder approval before implementation.',
    keyConcepts: [
      'NIST SP 800-53 control families and control structure (control, enhancement, parameter)',
      'Control baselines (Low/Moderate/High) and tailoring (scoping, compensating controls)',
      'System Security Plan (SSP) — purpose and required content',
      'Privacy controls and the privacy control baseline (linking to 800-53 Appendix J concepts / SP 800-53B)',
      'Common controls, hybrid controls, and system-specific controls',
      'Control implementation and control inheritance across systems',
    ],
    resources: [
      { title: 'NIST SP 800-53 Rev.5 — Security and Privacy Controls', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', kind: 'pdf' },
      { title: 'NIST SP 800-53B — Control Baselines', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/b/final', kind: 'pdf' },
      { title: 'How to Make a Useful SSP: System Security Plans That Work', source: 'UberEther', url: 'https://uberether.com/how-to-make-an-ssp/', kind: 'article' },
    ],
  },
  {
    id: 'assessment-audit',
    number: 5,
    title: 'Assessment/Audit of Security and Privacy Controls',
    weight: '14%',
    overview:
      'Once controls are implemented, someone independent has to verify they actually work. This domain covers assessment planning, methods (examine/interview/test), the Security Assessment Plan and Report, and how findings feed the POA&M.',
    keyConcepts: [
      'Security Assessment Plan (SAP) and Security Assessment Report (SAR)',
      'Assessment methods: examine, interview, test — and depth/coverage attributes',
      'NIST SP 800-53A — assessment procedures aligned to 800-53 controls',
      'Independence of assessors; assessor qualifications',
      'Plan of Action and Milestones (POA&M) — creation, tracking, closure',
      'Audit vs. assessment vs. continuous monitoring — how they differ in purpose',
    ],
    resources: [
      { title: 'NIST SP 800-53A Rev.5 — Assessing Security and Privacy Controls', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/a/r5/final', kind: 'pdf' },
      { title: 'An Introduction to the Plan of Actions and Milestones (POA&M)', source: 'YouTube', url: 'https://www.youtube.com/watch?v=DmjRAJc2xXs', kind: 'video' },
    ],
  },
  {
    id: 'authorization',
    number: 6,
    title: 'Continuous Monitoring',
    weight: '13%',
    overview:
      'Authorization is a point-in-time risk decision made by an Authorizing Official — but the RMF only works if monitoring continues afterward. This domain covers the authorization package, the AO\'s risk-acceptance decision, and building an Information Security Continuous Monitoring (ISCM) program that keeps that decision valid over time.',
    keyConcepts: [
      'Authorization package contents (SSP, SAR, POA&M) and the Authorization to Operate (ATO) decision',
      'Authorizing Official (AO) responsibilities and risk acceptance vs. risk transfer',
      'Types of authorization: full ATO, interim authorization to test (IATT), denial of authorization',
      'ISCM strategy: what to monitor, how often, and against what triggers',
      'Ongoing authorization and event-driven reauthorization',
      'Security metrics, dashboards, and automated data feeds for monitoring',
    ],
    resources: [
      { title: 'NIST SP 800-137 — Information Security Continuous Monitoring', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/137/final', kind: 'pdf' },
      { title: 'Understanding Baselines and Impact Levels for FedRAMP Authorizations', source: 'FedRAMP.gov', url: 'https://www.fedramp.gov/rev5/baselines', kind: 'article' },
    ],
  },
  {
    id: 'incident-management',
    number: 7,
    title: 'Continuity, Disaster Recovery, and Incident Management',
    weight: '13%',
    overview:
      'The final domain covers what happens when controls fail or a disruption occurs: incident response, business continuity, and disaster recovery planning, and how those plans get tested and improved over time.',
    keyConcepts: [
      'Incident response lifecycle (Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-Incident Activity)',
      'Business Continuity Plan (BCP) vs. Disaster Recovery Plan (DRP) vs. Continuity of Operations Plan (COOP)',
      'Recovery Time Objective (RTO) and Recovery Point Objective (RPO)',
      'Incident categorization and reporting requirements (e.g., US-CERT/CISA reporting)',
      'Tabletop exercises, functional exercises, and full-scale tests',
      'Lessons learned and feedback into risk management and controls',
    ],
    resources: [
      { title: 'NIST SP 800-61 Rev.2 — Computer Security Incident Handling Guide', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/61/r2/final', kind: 'pdf' },
      { title: 'NIST SP 800-34 Rev.1 — Contingency Planning Guide', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/34/r1/final', kind: 'pdf' },
      { title: 'Understanding the NIST SP 800-61 Incident Response Lifecycle, Simplified', source: 'YouTube', url: 'https://www.youtube.com/watch?v=BPQVaz6asdo', kind: 'video' },
    ],
  },
]

export function getDomain(id: string): Domain | undefined {
  return domains.find((d) => d.id === id)
}
