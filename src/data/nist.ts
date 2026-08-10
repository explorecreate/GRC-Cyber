import type { NistItem } from './types'

export const rmfSteps: NistItem[] = [
  {
    id: 'prepare',
    title: '1. Prepare',
    summary:
      'Carry out essential activities to help the organization manage security and privacy risk before a system enters the RMF — set the stage at both the org and system level.',
    points: [
      'Identify key risk management roles (AO, ISSO, System Owner, Privacy Officer)',
      'Establish organizational risk management strategy and risk tolerance',
      'Identify common controls available for inheritance',
      'Conduct organization- and system-level risk assessments',
    ],
  },
  {
    id: 'categorize',
    title: '2. Categorize',
    summary:
      'Determine the adverse impact to the organization if the system\'s confidentiality, integrity, or availability were compromised, using FIPS 199 and NIST SP 800-60.',
    points: [
      'Identify information types processed, stored, and transmitted',
      'Assign Low/Moderate/High impact per FIPS 199 for C-I-A',
      'Document the categorization decision and rationale',
      'Register the system in the organization\'s system inventory',
    ],
  },
  {
    id: 'select',
    title: '3. Select',
    summary:
      'Choose, tailor, and document the controls needed to protect the system, based on the categorization and using SP 800-53 / 800-53B baselines.',
    points: [
      'Select initial control baseline (Low/Moderate/High) from SP 800-53B',
      'Tailor controls: scoping, compensating controls, parameter values',
      'Allocate controls as system-specific, hybrid, or common',
      'Develop the continuous monitoring strategy for the system',
      'Document everything in the System Security Plan (SSP)',
    ],
  },
  {
    id: 'implement',
    title: '4. Implement',
    summary: 'Implement the controls in the SSP and document how each control is implemented in practice.',
    points: [
      'Deploy technical, operational, and management controls',
      'Update the SSP with implementation details',
      'Coordinate with system engineering / secure development practices',
    ],
  },
  {
    id: 'assess',
    title: '5. Assess',
    summary:
      'An independent assessor determines whether controls are implemented correctly, operating as intended, and producing the desired outcome, using SP 800-53A procedures.',
    points: [
      'Develop and approve the Security Assessment Plan (SAP)',
      'Assess controls via examine, interview, and test methods',
      'Produce the Security Assessment Report (SAR) with findings',
      'Develop the initial Plan of Action and Milestones (POA&M)',
    ],
  },
  {
    id: 'authorize',
    title: '6. Authorize',
    summary:
      'The Authorizing Official reviews the authorization package (SSP, SAR, POA&M) and makes a risk-based decision to operate the system.',
    points: [
      'AO reviews residual risk against organizational risk tolerance',
      'Decision options: authorize, interim authorization to test, or deny',
      'Issue the Authorization to Operate (ATO) with any conditions',
      'Communicate authorization decision and risk to stakeholders',
    ],
  },
  {
    id: 'monitor',
    title: '7. Monitor',
    summary:
      'Continuously monitor control effectiveness, system changes, and risk posture to keep the authorization decision valid over time (SP 800-137 ISCM).',
    points: [
      'Track system and environment changes; assess impact',
      'Perform ongoing control assessments per the monitoring strategy',
      'Update SSP, SAR, and POA&M as risk posture changes',
      'Report security/privacy posture to the AO; support ongoing authorization',
    ],
  },
]

export const nistPublications: NistItem[] = [
  {
    id: '800-37',
    title: 'NIST SP 800-37 Rev.2',
    summary: 'Risk Management Framework for Information Systems and Organizations — the master RMF process document.',
    points: [
      'Defines the 7-step RMF process',
      'Integrates privacy risk management alongside security',
      'Emphasizes risk management as an organization-wide activity, not just a system-level exercise',
    ],
  },
  {
    id: '800-53',
    title: 'NIST SP 800-53 Rev.5',
    summary: 'Security and Privacy Controls for Information Systems and Organizations — the control catalog.',
    points: [
      '20 control families (AC, AU, CA, CM, IA, IR, RA, SC, SI, PL, PM, PT, and more)',
      'Each control has a base statement plus optional enhancements',
      'Outcome-based, technology-neutral control language',
    ],
  },
  {
    id: '800-53a',
    title: 'NIST SP 800-53A Rev.5',
    summary: 'Assessing Security and Privacy Controls — assessment procedures mapped to each 800-53 control.',
    points: [
      'Defines assessment objects: specifications, mechanisms, activities, individuals',
      'Provides examine/interview/test procedures per control',
      'Used to build the Security Assessment Plan',
    ],
  },
  {
    id: '800-30',
    title: 'NIST SP 800-30 Rev.1',
    summary: 'Guide for Conducting Risk Assessments — the "how" of assessing likelihood and impact.',
    points: [
      'Risk = function of threat, vulnerability, likelihood, and impact',
      'Covers threat sources, threat events, and vulnerabilities',
      'Provides qualitative/semi-quantitative risk scales',
    ],
  },
  {
    id: '800-18',
    title: 'NIST SP 800-18 Rev.1',
    summary: 'Guide for Developing Security Plans for Federal Information Systems — the SSP template guidance.',
    points: [
      'Defines required SSP sections and content',
      'Covers roles responsible for SSP development and maintenance',
    ],
  },
  {
    id: 'fips-199-200',
    title: 'FIPS 199 & FIPS 200',
    summary: 'Mandatory federal standards for categorization (199) and minimum security requirements (200).',
    points: [
      'FIPS 199: security categorization based on C-I-A impact (Low/Moderate/High)',
      'FIPS 200: minimum security requirements across 17 security-related areas, satisfied via SP 800-53 controls',
    ],
  },
  {
    id: '800-60',
    title: 'NIST SP 800-60 Vol. 1 & 2',
    summary: 'Guide for Mapping Types of Information and Information Systems to Security Categories — the companion reference used alongside FIPS 199.',
    points: [
      'Provides pre-defined provisional impact levels for common federal information types',
      'Volume 1 covers the categorization methodology; Volume 2 is the information-type reference tables',
      'Helps ensure consistent categorization decisions across agencies',
    ],
  },
  {
    id: '800-39',
    title: 'NIST SP 800-39',
    summary: 'Managing Information Security Risk — establishes the three-tiered risk management approach the RMF sits inside.',
    points: [
      'Defines risk management at Tier 1 (organization), Tier 2 (mission/business process), Tier 3 (information system)',
      'Introduces the risk management cycle: Frame, Assess, Respond, Monitor',
      'Positions the RMF (SP 800-37) as the Tier 3 implementation of this broader strategy',
    ],
  },
  {
    id: '800-137',
    title: 'NIST SP 800-137',
    summary: 'Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations.',
    points: [
      'Defines a 6-step ISCM process: Define, Establish, Implement, Analyze/Report, Respond, Review/Update',
      'Drives the Monitor step of the RMF and supports ongoing/continuous authorization',
      'Covers metrics, status reporting, and automated data feeds (e.g., via SCAP)',
    ],
  },
  {
    id: '800-171',
    title: 'NIST SP 800-171 Rev.2',
    summary: 'Protecting Controlled Unclassified Information (CUI) in Nonfederal Systems and Organizations.',
    points: [
      'Applies to contractors and nonfederal organizations handling federal CUI',
      'A streamlined subset (14 families) derived from the SP 800-53 moderate baseline',
      'Foundation for DoD\'s CMMC (Cybersecurity Maturity Model Certification) requirements',
    ],
  },
  {
    id: '800-61',
    title: 'NIST SP 800-61 Rev.2',
    summary: 'Computer Security Incident Handling Guide — the standard reference for incident response process.',
    points: [
      'Defines the incident response lifecycle: Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-Incident Activity',
      'Covers incident categorization, prioritization, and coordination/reporting',
      'Feeds directly into Domain 7 (Continuity, DR, and Incident Management)',
    ],
  },
]
