import type { QuizQuestion } from './types'

export const quizQuestions: QuizQuestion[] = [
  // ---- Governance ----
  {
    id: 'gov-1',
    domainId: 'governance',
    question: 'Which document sits highest in an organization\'s security documentation hierarchy?',
    options: ['Procedure', 'Guideline', 'Policy', 'Standard'],
    correctIndex: 2,
    explanation:
      'Policy is the highest-level, mandatory statement of management intent. Standards implement policy with mandatory specifics, procedures give step-by-step instructions, and guidelines are recommended (not mandatory) practices.',
  },
  {
    id: 'gov-2',
    domainId: 'governance',
    question: 'The "three lines of defense" model separates risk responsibility into which groups?',
    options: [
      'Executives, board, shareholders',
      'Operational management, risk/compliance functions, internal audit',
      'IT, HR, Legal',
      'Federal, state, local government',
    ],
    correctIndex: 1,
    explanation:
      'The three lines are: (1) operational management that owns and manages risk day-to-day, (2) risk/compliance functions that oversee and monitor, and (3) internal audit that provides independent assurance.',
  },
  {
    id: 'gov-3',
    domainId: 'governance',
    question: 'Who is generally responsible for the day-to-day security posture of a specific information system?',
    options: ['Authorizing Official', 'Information System Security Officer (ISSO)', 'Chief Financial Officer', 'External auditor'],
    correctIndex: 1,
    explanation:
      'The ISSO handles day-to-day security operations and serves as the point of contact for the system, while the AO makes the formal risk-acceptance/authorization decision.',
  },
  {
    id: 'gov-4',
    domainId: 'governance',
    question: 'FISMA primarily applies to which type of organization?',
    options: ['Private healthcare providers', 'US federal agencies and their systems', 'European Union member states', 'Publicly traded companies only'],
    correctIndex: 1,
    explanation:
      'The Federal Information Security Modernization Act (FISMA) requires US federal agencies to develop, document, and implement agency-wide information security programs.',
  },
  {
    id: 'gov-5',
    domainId: 'governance',
    question: 'What does the (ISC)² Code of Ethics primarily govern?',
    options: [
      'Technical configuration standards for firewalls',
      'The professional conduct expected of certified individuals',
      'Federal budget approval processes',
      'Cloud vendor SLA terms',
    ],
    correctIndex: 1,
    explanation:
      'The Code of Ethics sets expected professional and ethical conduct for (ISC)² certification holders, including protecting society and acting honorably.',
  },
  {
    id: 'gov-6',
    domainId: 'governance',
    question: 'A "standard" in the policy hierarchy is best described as:',
    options: [
      'An optional best practice',
      'A mandatory, specific requirement that implements a policy',
      'A high-level statement of management intent',
      'A step-by-step technical instruction',
    ],
    correctIndex: 1,
    explanation: 'Standards are mandatory and specific (e.g., "passwords must be at least 14 characters"), sitting between broad policy and detailed procedures.',
  },

  // ---- Risk Management ----
  {
    id: 'risk-1',
    domainId: 'risk-management',
    question: 'Which NIST publication provides guidance specifically for conducting risk assessments?',
    options: ['SP 800-53', 'SP 800-30', 'SP 800-18', 'FIPS 200'],
    correctIndex: 1,
    explanation: 'NIST SP 800-30 Rev.1, "Guide for Conducting Risk Assessments," details the methodology for assessing threats, vulnerabilities, likelihood, and impact.',
  },
  {
    id: 'risk-2',
    domainId: 'risk-management',
    question: 'Risk tolerance is best defined as:',
    options: [
      'The total elimination of all identified risk',
      'The level of risk an organization is willing to accept in pursuit of its objectives',
      'A synonym for vulnerability',
      'The dollar cost of a single control',
    ],
    correctIndex: 1,
    explanation: 'Risk tolerance reflects how much risk leadership is willing to accept — risk management doesn\'t eliminate risk, it manages it to an acceptable level.',
  },
  {
    id: 'risk-3',
    domainId: 'risk-management',
    question: 'Integrating risk management into the SDLC is most effective when it begins during which phase?',
    options: ['Only after deployment', 'Requirements/design, at the earliest phases', 'Only during decommissioning', 'Only during the assess step of RMF'],
    correctIndex: 1,
    explanation: 'Building risk management in from requirements and design ("shift left") is far cheaper and more effective than retrofitting security after development.',
  },
  {
    id: 'risk-4',
    domainId: 'risk-management',
    question: 'Enterprise Risk Management (ERM) differs from system-level risk management primarily because it:',
    options: [
      'Only applies to IT systems',
      'Considers risk holistically across the whole organization, not just one system',
      'Is required only for cloud systems',
      'Replaces the need for a risk register',
    ],
    correctIndex: 1,
    explanation: 'ERM takes an organization-wide view (financial, operational, reputational, and cyber risk together), while system-level risk management focuses on an individual system.',
  },
  {
    id: 'risk-5',
    domainId: 'risk-management',
    question: 'A Business Impact Analysis (BIA) primarily helps an organization determine:',
    options: [
      'Which firewall vendor to select',
      'The criticality of business functions and impact of their disruption',
      'The exact wording of a security policy',
      'Employee salary bands',
    ],
    correctIndex: 1,
    explanation: 'A BIA identifies critical functions and quantifies the impact of disruption, feeding directly into RTO/RPO targets and continuity planning.',
  },
  {
    id: 'risk-6',
    domainId: 'risk-management',
    question: 'Under NIST SP 800-30, risk is generally a function of:',
    options: [
      'Cost and schedule only',
      'Threat, vulnerability, likelihood, and impact',
      'Number of employees',
      'Number of open POA&M items',
    ],
    correctIndex: 1,
    explanation: 'SP 800-30 frames risk as arising from threat sources exploiting vulnerabilities, evaluated by likelihood of occurrence and resulting impact.',
  },

  // ---- Third-Party / Scope ----
  {
    id: 'tpr-1',
    domainId: 'third-party-risk',
    question: 'FIPS 199 is used to determine:',
    options: [
      'The specific technical controls a system must implement',
      'The security categorization (Low/Moderate/High) of a system based on C-I-A impact',
      'Which vendor to select for cloud hosting',
      'The incident response team roster',
    ],
    correctIndex: 1,
    explanation: 'FIPS 199 establishes standards for categorizing information and systems based on potential impact to confidentiality, integrity, and availability.',
  },
  {
    id: 'tpr-2',
    domainId: 'third-party-risk',
    question: 'An Interconnection Security Agreement (ISA) is primarily used to:',
    options: [
      'Document technical security requirements for a connection between two systems',
      'Replace the need for a System Security Plan',
      'Set employee compensation for security roles',
      'Categorize a system under FIPS 199',
    ],
    correctIndex: 0,
    explanation: 'An ISA documents the technical and security requirements for interconnecting two systems, often paired with an MOU covering the business terms.',
  },
  {
    id: 'tpr-3',
    domainId: 'third-party-risk',
    question: 'In a cloud "shared responsibility model," the customer is typically always responsible for:',
    options: [
      'Physical data center security',
      'Data classification and access management within their environment',
      'The cloud provider\'s hypervisor patching',
      'Global network backbone availability',
    ],
    correctIndex: 1,
    explanation: 'Regardless of service model (IaaS/PaaS/SaaS), the customer retains responsibility for data classification and configuring access to their own data/resources.',
  },
  {
    id: 'tpr-4',
    domainId: 'third-party-risk',
    question: 'An authorization boundary should be drawn around:',
    options: [
      'Every system in the entire organization',
      'The set of resources and components under a single AO\'s authority for one authorization',
      'Only physical hardware, never cloud resources',
      'Only systems that have had a security incident',
    ],
    correctIndex: 1,
    explanation: 'The authorization boundary defines exactly what is included in a specific authorization decision — resources the AO is accountable for.',
  },
  {
    id: 'tpr-5',
    domainId: 'third-party-risk',
    question: 'A Software Bill of Materials (SBOM) primarily supports:',
    options: [
      'Employee performance reviews',
      'Supply chain risk management by inventorying software components',
      'Physical access control logging',
      'Setting the RTO for a system',
    ],
    correctIndex: 1,
    explanation: 'An SBOM lists the components (including third-party/open-source) in a piece of software, helping identify supply chain risk like vulnerable dependencies.',
  },

  // ---- Controls ----
  {
    id: 'ctrl-1',
    domainId: 'controls',
    question: 'Which NIST publication contains the actual catalog of security and privacy controls?',
    options: ['SP 800-37', 'SP 800-53', 'SP 800-61', 'SP 800-34'],
    correctIndex: 1,
    explanation: 'NIST SP 800-53 Rev.5 is the control catalog, organized into families (AC, AU, IA, SC, etc.) with base controls and enhancements.',
  },
  {
    id: 'ctrl-2',
    domainId: 'controls',
    question: 'A control implemented once and inherited by multiple systems is called a:',
    options: ['System-specific control', 'Hybrid control', 'Common control', 'Compensating control'],
    correctIndex: 2,
    explanation: 'Common controls are implemented centrally and inherited by multiple systems, avoiding duplicated implementation and assessment effort.',
  },
  {
    id: 'ctrl-3',
    domainId: 'controls',
    question: 'The System Security Plan (SSP) primarily documents:',
    options: [
      'The organization\'s annual budget',
      'The system\'s security requirements and the controls in place or planned to meet them',
      'Employee disciplinary actions',
      'The marketing plan for a new product',
    ],
    correctIndex: 1,
    explanation: 'The SSP is the central document describing the system, its boundary, and how each selected control is implemented (NIST SP 800-18 guidance).',
  },
  {
    id: 'ctrl-4',
    domainId: 'controls',
    question: 'Tailoring a control baseline can include all of the following EXCEPT:',
    options: ['Scoping guidance', 'Applying compensating controls', 'Setting organization-defined parameters', 'Ignoring the categorization result entirely'],
    correctIndex: 3,
    explanation: 'Tailoring adjusts controls to fit the system context, but it must be documented and justified — it never means ignoring the categorization outright.',
  },
  {
    id: 'ctrl-5',
    domainId: 'controls',
    question: 'A control implemented partly by a common control provider and partly by the system owner is called:',
    options: ['A hybrid control', 'A compensating control', 'An inherited-only control', 'A privacy control'],
    correctIndex: 0,
    explanation: 'Hybrid controls have part of their implementation provided centrally (inherited) and part implemented specifically by the system.',
  },

  // ---- Assessment/Audit ----
  {
    id: 'aa-1',
    domainId: 'assessment-audit',
    question: 'Which document reports the results and findings of a control assessment?',
    options: ['Security Assessment Plan (SAP)', 'Security Assessment Report (SAR)', 'System Security Plan (SSP)', 'ISCM Strategy'],
    correctIndex: 1,
    explanation: 'The SAR documents assessment results, including findings, risk ratings, and recommendations — it follows the SAP, which is the plan for the assessment itself.',
  },
  {
    id: 'aa-2',
    domainId: 'assessment-audit',
    question: 'Which of the following is NOT one of the standard control assessment methods in SP 800-53A?',
    options: ['Examine', 'Interview', 'Test', 'Negotiate'],
    correctIndex: 3,
    explanation: 'The three assessment methods are examine (review specifications), interview (talk to individuals), and test (exercise mechanisms/activities).',
  },
  {
    id: 'aa-3',
    domainId: 'assessment-audit',
    question: 'A POA&M item should generally include all of the following EXCEPT:',
    options: ['A description of the weakness', 'A resource estimate', 'A target completion date', 'The AO\'s personal home address'],
    correctIndex: 3,
    explanation: 'POA&M entries track weaknesses, remediation actions, resources, and milestones/dates — not personal contact details of officials.',
  },
  {
    id: 'aa-4',
    domainId: 'assessment-audit',
    question: 'Assessor independence matters most because it:',
    options: [
      'Reduces the assessment cost',
      'Ensures unbiased, objective evaluation of control effectiveness',
      'Is legally required only for private companies',
      'Speeds up the categorization step',
    ],
    correctIndex: 1,
    explanation: 'An assessor with no stake in the outcome provides a more credible, objective evaluation than someone assessing their own implementation.',
  },
  {
    id: 'aa-5',
    domainId: 'assessment-audit',
    question: 'Continuous monitoring differs from a one-time assessment primarily by:',
    options: [
      'Never involving a human',
      'Providing ongoing, recurring insight into control effectiveness rather than a single point-in-time check',
      'Only applying to privacy controls',
      'Replacing the need for an SSP',
    ],
    correctIndex: 1,
    explanation: 'Continuous monitoring is an ongoing process that keeps risk information current, versus an assessment that captures a snapshot at one point in time.',
  },

  // ---- Authorization / Continuous Monitoring ----
  {
    id: 'auth-1',
    domainId: 'authorization',
    question: 'The Authorization to Operate (ATO) decision is ultimately made by:',
    options: ['The ISSO', 'The Authorizing Official (AO)', 'The external auditor', 'The system\'s end users'],
    correctIndex: 1,
    explanation: 'The AO is the senior official who formally accepts responsibility for operating a system at an acceptable level of risk and issues the ATO.',
  },
  {
    id: 'auth-2',
    domainId: 'authorization',
    question: 'An Interim Authorization to Test (IATT) permits a system to:',
    options: [
      'Operate permanently in production',
      'Operate temporarily in a test environment, not production',
      'Skip the assessment step entirely',
      'Be exempt from all future monitoring',
    ],
    correctIndex: 1,
    explanation: 'IATT is a limited-duration authorization for testing purposes only — it is not a production authorization.',
  },
  {
    id: 'auth-3',
    domainId: 'authorization',
    question: 'NIST SP 800-137 provides guidance specifically on:',
    options: ['Incident handling', 'Information Security Continuous Monitoring (ISCM)', 'Contingency planning', 'Control assessment procedures'],
    correctIndex: 1,
    explanation: 'SP 800-137 defines the ISCM strategy and process for maintaining ongoing awareness of security and risk posture.',
  },
  {
    id: 'auth-4',
    domainId: 'authorization',
    question: 'Ongoing authorization relies most heavily on:',
    options: [
      'A single assessment performed once every five years with no updates',
      'Near-real-time or recurring monitoring data feeding the AO\'s risk decision',
      'Eliminating the need for an AO',
      'Ignoring system changes between authorizations',
    ],
    correctIndex: 1,
    explanation: 'Ongoing authorization uses continuous monitoring data so the AO\'s risk picture stays current, rather than relying solely on a static multi-year cycle.',
  },
  {
    id: 'auth-5',
    domainId: 'authorization',
    question: 'The authorization package typically includes:',
    options: [
      'SSP, SAR, and POA&M',
      'Only the employee handbook',
      'Only the marketing plan',
      'Only the incident response plan',
    ],
    correctIndex: 0,
    explanation: 'The AO reviews the System Security Plan, Security Assessment Report, and Plan of Action and Milestones to make the authorization decision.',
  },

  // ---- Incident Management ----
  {
    id: 'im-1',
    domainId: 'incident-management',
    question: 'Which phase comes immediately after "Detection & Analysis" in the NIST incident response lifecycle?',
    options: ['Preparation', 'Containment, Eradication & Recovery', 'Post-Incident Activity', 'Categorization'],
    correctIndex: 1,
    explanation: 'NIST SP 800-61\'s lifecycle is Preparation → Detection & Analysis → Containment/Eradication/Recovery → Post-Incident Activity.',
  },
  {
    id: 'im-2',
    domainId: 'incident-management',
    question: 'Recovery Time Objective (RTO) measures:',
    options: [
      'The maximum acceptable data loss in time',
      'The maximum acceptable downtime before a function must be restored',
      'The dollar cost of an outage',
      'The number of staff needed for recovery',
    ],
    correctIndex: 1,
    explanation: 'RTO is the target maximum duration a process/system can be unavailable before unacceptable impact occurs — distinct from RPO, which measures data loss.',
  },
  {
    id: 'im-3',
    domainId: 'incident-management',
    question: 'A Disaster Recovery Plan (DRP) is best described as focused on:',
    options: [
      'Restoring IT systems and infrastructure after a disaster',
      'Employee benefits during a disaster',
      'Marketing communications only',
      'Vendor contract negotiation',
    ],
    correctIndex: 0,
    explanation: 'DRP specifically addresses restoring technology infrastructure, while BCP covers the broader continuation of business functions.',
  },
  {
    id: 'im-4',
    domainId: 'incident-management',
    question: 'A tabletop exercise is best described as:',
    options: [
      'A live, full-scale failover of production systems',
      'A discussion-based walkthrough of a scenario without operational systems being affected',
      'A mandatory annual audit',
      'A type of penetration test',
    ],
    correctIndex: 1,
    explanation: 'Tabletop exercises are discussion-based, low-cost ways to validate plans and train staff without disrupting live operations.',
  },
  {
    id: 'im-5',
    domainId: 'incident-management',
    question: 'Recovery Point Objective (RPO) is best described as:',
    options: [
      'The maximum tolerable amount of data loss, measured in time',
      'The maximum downtime tolerable for a system',
      'The number of backup servers required',
      'The staff headcount for the incident response team',
    ],
    correctIndex: 0,
    explanation: 'RPO defines how much data loss (measured backward in time from the incident) is acceptable, driving backup frequency decisions.',
  },
]

export function getQuestionsByDomain(domainId: string): QuizQuestion[] {
  return quizQuestions.filter((q) => q.domainId === domainId)
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}
