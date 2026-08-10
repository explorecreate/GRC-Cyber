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

  // ---- Governance (additional) ----
  {
    id: 'gov-7',
    domainId: 'governance',
    question: 'A "guideline" in the policy hierarchy is best described as:',
    options: [
      'A mandatory, enforceable requirement',
      'A recommended, non-mandatory practice',
      'A federal law',
      'A step-by-step technical procedure that must be followed exactly',
    ],
    correctIndex: 1,
    explanation: 'Guidelines are recommended practices — helpful advice for meeting standards, but not mandatory the way policies and standards are.',
  },
  {
    id: 'gov-8',
    domainId: 'governance',
    question: 'Which role is typically accountable for an organization\'s privacy program specifically (as distinct from security)?',
    options: ['Privacy Officer', 'Network Administrator', 'Help Desk Technician', 'Procurement Officer'],
    correctIndex: 0,
    explanation: 'The Privacy Officer owns privacy-specific governance, working alongside (but distinct from) security roles like the ISSO or CISO.',
  },
  {
    id: 'gov-9',
    domainId: 'governance',
    question: 'Internal audit\'s role in the three lines of defense model is to:',
    options: [
      'Implement controls day-to-day',
      'Provide independent assurance on the effectiveness of risk management and controls',
      'Approve the annual security budget',
      'Write the organization\'s marketing policy',
    ],
    correctIndex: 1,
    explanation: 'Internal audit is the third line — independent of both operations and risk/compliance functions — providing objective assurance to leadership.',
  },
  {
    id: 'gov-10',
    domainId: 'governance',
    question: 'Which of these is a legal/regulatory driver most associated with protecting individual health information?',
    options: ['FISMA', 'HIPAA', 'FIPS 199', 'SP 800-53A'],
    correctIndex: 1,
    explanation: 'HIPAA governs protection of health information; FISMA is the broader federal information-security law, and the others are NIST security-categorization/assessment publications.',
  },
  {
    id: 'gov-11',
    domainId: 'governance',
    question: 'Integrating privacy governance "alongside" security governance (rather than as an afterthought) primarily means:',
    options: [
      'Privacy is reviewed only after a breach occurs',
      'Privacy requirements are considered together with security requirements from the start of governance planning',
      'Privacy and security teams should never communicate',
      'Privacy only applies to marketing data',
    ],
    correctIndex: 1,
    explanation: 'Modern governance treats privacy as a first-class, parallel discipline to security, not a bolt-on step handled later.',
  },
  {
    id: 'gov-12',
    domainId: 'governance',
    question: 'Which best describes the relationship between policy, standard, and procedure?',
    options: [
      'They are interchangeable terms for the same document',
      'Policy states intent, standards set mandatory specifics, procedures give step-by-step instructions to meet them',
      'Procedures are optional; policies are the only mandatory documents',
      'Standards are set by individual employees, not the organization',
    ],
    correctIndex: 1,
    explanation: 'Each layer narrows in scope and specificity: policy (why/what, mandatory), standard (specific mandatory requirement), procedure (how, step-by-step).',
  },

  // ---- Risk Management (additional) ----
  {
    id: 'risk-7',
    domainId: 'risk-management',
    question: 'A risk register is best described as:',
    options: [
      'A list of all employees with security clearances',
      'A tool for documenting identified risks, their ratings, owners, and treatment plans',
      'A synonym for the System Security Plan',
      'A log of every login attempt to a system',
    ],
    correctIndex: 1,
    explanation: 'A risk register tracks identified risks along with likelihood/impact ratings, ownership, and planned treatment — a core risk management artifact.',
  },
  {
    id: 'risk-8',
    domainId: 'risk-management',
    question: 'Which of the following is a common risk treatment/response option?',
    options: ['Accept, transfer, mitigate, avoid', 'Encrypt, hash, salt, sign', 'Examine, interview, test', 'Prepare, categorize, select'],
    correctIndex: 0,
    explanation: 'The standard risk response options are to accept, transfer (e.g., insurance), mitigate (reduce via controls), or avoid the risk entirely.',
  },
  {
    id: 'risk-9',
    domainId: 'risk-management',
    question: 'A threat source in risk assessment terminology refers to:',
    options: [
      'A weakness in a system that could be exploited',
      'The origin of a potential adverse event, e.g., a hacker, insider, or natural disaster',
      'The dollar value assigned to an asset',
      'The control used to reduce risk',
    ],
    correctIndex: 1,
    explanation: 'A threat source is the entity or circumstance (human, environmental, technical) that could trigger a threat event; a vulnerability is the weakness it might exploit.',
  },
  {
    id: 'risk-10',
    domainId: 'risk-management',
    question: 'Qualitative risk assessment differs from quantitative risk assessment because it:',
    options: [
      'Always produces a precise dollar figure',
      'Uses descriptive scales (e.g., Low/Moderate/High) rather than precise numeric values',
      'Is only used for privacy risk, never security risk',
      'Requires no human judgment at all',
    ],
    correctIndex: 1,
    explanation: 'Qualitative assessments use relative/descriptive ratings, while quantitative assessments attempt to assign numeric values like dollar impact or probability percentages.',
  },
  {
    id: 'risk-11',
    domainId: 'risk-management',
    question: 'Which NIST publication focuses on organization-wide (not just system-level) risk management?',
    options: ['SP 800-39', 'SP 800-53A', 'SP 800-18', 'FIPS 199'],
    correctIndex: 0,
    explanation: 'SP 800-39, "Managing Information Security Risk," addresses risk management at the organization, mission/business process, and information system tiers.',
  },
  {
    id: 'risk-12',
    domainId: 'risk-management',
    question: 'Vulnerability, in risk assessment terms, is best defined as:',
    options: [
      'A weakness that could be exploited by a threat source',
      'The organization\'s tolerance for risk',
      'A completed control assessment',
      'The AO\'s formal risk decision',
    ],
    correctIndex: 0,
    explanation: 'A vulnerability is a weakness in a system, process, or control that a threat source could exploit to cause harm.',
  },

  // ---- Third-Party / Scope (additional) ----
  {
    id: 'tpr-6',
    domainId: 'third-party-risk',
    question: 'A "major application" (as opposed to a general support system) is typically distinguished by:',
    options: [
      'Requiring no security controls at all',
      'Performing a clearly defined function posing significant risk, warranting special management attention',
      'Being hosted exclusively on-premises',
      'Always being categorized as Low impact',
    ],
    correctIndex: 1,
    explanation: 'Major applications perform a distinct function significant enough to require dedicated security planning, as opposed to general support systems providing shared infrastructure.',
  },
  {
    id: 'tpr-7',
    domainId: 'third-party-risk',
    question: 'In an IaaS (Infrastructure as a Service) model, the cloud provider is typically responsible for:',
    options: [
      'The customer\'s application code',
      'The physical infrastructure, virtualization layer, and host hardware',
      'The customer\'s data classification decisions',
      'The customer\'s identity and access management policy',
    ],
    correctIndex: 1,
    explanation: 'In IaaS, the provider secures the physical/virtualization layer while the customer remains responsible for the OS, applications, and data on top of it.',
  },
  {
    id: 'tpr-8',
    domainId: 'third-party-risk',
    question: 'Third-party risk assessments are important primarily because:',
    options: [
      'Vendors are never a source of risk',
      'An organization\'s risk exposure extends to the vendors and systems it depends on',
      'They eliminate the need for an SSP',
      'They replace the need for FIPS 199 categorization',
    ],
    correctIndex: 1,
    explanation: 'Risk doesn\'t stop at your own systems — vendors, suppliers, and interconnected third parties can introduce risk that your organization ultimately bears.',
  },
  {
    id: 'tpr-9',
    domainId: 'third-party-risk',
    question: 'Which best describes the difference between an ISA and an MOU in an interconnection?',
    options: [
      'They are identical documents required by law to be combined into one',
      'The ISA covers technical/security requirements; the MOU covers the business/administrative agreement',
      'The MOU is a technical document; the ISA is a legal contract',
      'Neither document is ever used in federal systems',
    ],
    correctIndex: 1,
    explanation: 'The MOU documents the terms and responsibilities of the relationship; the ISA documents the technical security requirements for the actual connection.',
  },

  // ---- Controls (additional) ----
  {
    id: 'ctrl-6',
    domainId: 'controls',
    question: 'A control enhancement in SP 800-53 is best described as:',
    options: [
      'A completely separate, unrelated control',
      'An addition that increases the strength or adds functionality to a base control',
      'A control that only applies to Low-impact systems',
      'A synonym for a compensating control',
    ],
    correctIndex: 1,
    explanation: 'Enhancements build on a base control, adding capability or rigor (e.g., a base access-control statement plus an enhancement requiring automated enforcement).',
  },
  {
    id: 'ctrl-7',
    domainId: 'controls',
    question: 'Which NIST publication provides the pre-defined Low/Moderate/High control baselines?',
    options: ['SP 800-53B', 'SP 800-30', 'SP 800-137', 'SP 800-61'],
    correctIndex: 0,
    explanation: 'SP 800-53B, "Control Baselines for Information Systems and Organizations," provides the starting-point baselines that get tailored per system.',
  },
  {
    id: 'ctrl-8',
    domainId: 'controls',
    question: 'A compensating control is used when:',
    options: [
      'The organization wants to skip documentation entirely',
      'A baseline control cannot be implemented as specified, and an alternative control provides equivalent protection',
      'A system has no categorization yet',
      'The AO has not yet been assigned',
    ],
    correctIndex: 1,
    explanation: 'Compensating controls provide equivalent or comparable protection when the originally specified control isn\'t feasible for a given system or environment.',
  },
  {
    id: 'ctrl-9',
    domainId: 'controls',
    question: 'Privacy controls in the NIST framework are best understood as:',
    options: [
      'Entirely separate from security controls with no overlap',
      'Integrated alongside security controls, addressing privacy-specific risks such as PII handling',
      'Only relevant to marketing departments',
      'A subset of physical security controls only',
    ],
    correctIndex: 1,
    explanation: 'SP 800-53 Rev.5 integrates privacy controls directly into the catalog (e.g., the PT family), reflecting that privacy and security risk management are integrated, not siloed.',
  },

  // ---- Assessment/Audit (additional) ----
  {
    id: 'aa-6',
    domainId: 'assessment-audit',
    question: 'The "depth" attribute of an assessment method refers to:',
    options: [
      'How many assessors are involved',
      'The rigor and level of detail applied when examining, interviewing, or testing',
      'The physical location of the assessment',
      'The cost of the assessment',
    ],
    correctIndex: 1,
    explanation: 'Depth describes how thoroughly an assessment method is applied (e.g., a basic review vs. a detailed, comprehensive analysis).',
  },
  {
    id: 'aa-7',
    domainId: 'assessment-audit',
    question: 'A finding in a Security Assessment Report that is NOT remediated before authorization should be:',
    options: [
      'Ignored, since the SAR is final',
      'Documented as a POA&M item so it can be tracked to resolution',
      'Removed from all documentation',
      'Reassigned to a different system entirely',
    ],
    correctIndex: 1,
    explanation: 'Unremediated findings become POA&M entries, ensuring residual risk is tracked and addressed even after authorization.',
  },
  {
    id: 'aa-8',
    domainId: 'assessment-audit',
    question: 'Which best distinguishes an internal audit from a control assessment under RMF?',
    options: [
      'They are the same activity with different names',
      'An audit often has a compliance/assurance focus and broader organizational scope, while an RMF assessment is control-specific for a given system',
      'Audits are never independent',
      'Assessments always precede categorization',
    ],
    correctIndex: 1,
    explanation: 'While related, audits often serve a broader assurance/compliance purpose, whereas RMF control assessments are scoped specifically to verifying a system\'s controls.',
  },

  // ---- Authorization / Continuous Monitoring (additional) ----
  {
    id: 'auth-6',
    domainId: 'authorization',
    question: 'If an AO determines residual risk is unacceptable and cannot be mitigated, the appropriate decision is to:',
    options: [
      'Issue an ATO anyway to avoid delays',
      'Deny authorization to operate',
      'Ignore the SAR findings',
      'Delegate the decision to the ISSO permanently',
    ],
    correctIndex: 1,
    explanation: 'When residual risk exceeds organizational tolerance and cannot be adequately mitigated, the AO should deny authorization rather than accept unacceptable risk.',
  },
  {
    id: 'auth-7',
    domainId: 'authorization',
    question: 'A significant change to a system (e.g., a major architecture change) after authorization typically requires:',
    options: [
      'No action, since the ATO covers all future changes automatically',
      'An impact analysis and possibly reauthorization or an updated risk determination',
      'Immediate decommissioning of the system',
      'A brand-new FIPS 199 categorization only, with nothing else',
    ],
    correctIndex: 1,
    explanation: 'Significant changes can alter a system\'s risk posture, triggering a change-impact analysis and potentially event-driven reauthorization.',
  },
  {
    id: 'auth-8',
    domainId: 'authorization',
    question: 'Security metrics and dashboards used in ISCM primarily serve to:',
    options: [
      'Replace the need for any human risk decision-making',
      'Provide the AO and stakeholders with current, actionable visibility into risk and control effectiveness',
      'Only satisfy annual compliance paperwork',
      'Track employee attendance',
    ],
    correctIndex: 1,
    explanation: 'ISCM metrics and dashboards translate raw monitoring data into actionable risk visibility for decision-makers, supporting ongoing authorization.',
  },

  // ---- Incident Management (additional) ----
  {
    id: 'im-6',
    domainId: 'incident-management',
    question: 'Post-Incident Activity in the NIST incident response lifecycle primarily focuses on:',
    options: [
      'Immediately closing the incident with no further action',
      'Capturing lessons learned and feeding improvements back into policies, controls, and future response',
      'Assigning blame to individual employees',
      'Skipping documentation to save time',
    ],
    correctIndex: 1,
    explanation: 'Post-incident activity captures lessons learned, ensuring the organization improves its controls, plans, and response capability going forward.',
  },
  {
    id: 'im-7',
    domainId: 'incident-management',
    question: 'Which entity is a common destination for incident reporting for U.S. federal agencies?',
    options: ['CISA', 'OSHA', 'FCC', 'FTC'],
    correctIndex: 0,
    explanation: 'CISA (Cybersecurity and Infrastructure Security Agency) is the primary federal body agencies report significant cyber incidents to.',
  },
  {
    id: 'im-8',
    domainId: 'incident-management',
    question: 'A functional exercise, compared to a tabletop exercise, typically:',
    options: [
      'Involves no discussion at all',
      'Simulates an incident more realistically, actively exercising some systems/procedures rather than just discussing them',
      'Is always cheaper to run than a tabletop',
      'Is only used for physical security drills',
    ],
    correctIndex: 1,
    explanation: 'Functional exercises go a step further than tabletop discussions by actively exercising some plans, procedures, or systems in a simulated scenario.',
  },
  {
    id: 'im-9',
    domainId: 'incident-management',
    question: 'Continuity of Operations Plan (COOP) is most closely associated with:',
    options: [
      'Commercial marketing strategy',
      'Ensuring essential government/agency functions continue during emergencies',
      'Software development lifecycle management',
      'Vendor contract negotiation'
    ],
    correctIndex: 1,
    explanation: 'COOP is a federal-agency-focused continuity plan specifically ensuring essential functions and leadership succession continue during emergencies.',
  },

  // ---- Governance (round 3) ----
  {
    id: 'gov-13',
    domainId: 'governance',
    question: 'A "procedure" in the documentation hierarchy is best described as:',
    options: [
      'A high-level statement of management intent',
      'Step-by-step instructions for carrying out a policy or standard',
      'An optional, non-binding suggestion',
      'A federal law',
    ],
    correctIndex: 1,
    explanation: 'Procedures translate policy and standards into concrete, repeatable steps — "how exactly do I do this," as opposed to "what must be done."',
  },
  {
    id: 'gov-14',
    domainId: 'governance',
    question: 'Which of the following best describes "accountability" in a governance context?',
    options: [
      'Everyone shares equal, undifferentiated responsibility for every decision',
      'A specific individual or role is designated as answerable for a given decision or outcome',
      'Accountability applies only to the CEO',
      'Accountability is the same thing as authority',
    ],
    correctIndex: 1,
    explanation: 'Good governance assigns clear accountability — a named role answerable for an outcome — rather than diffusing responsibility so broadly that no one owns it.',
  },
  {
    id: 'gov-15',
    domainId: 'governance',
    question: 'GDPR is most useful in a CGRC context as an example of:',
    options: [
      'A US federal law identical to FISMA',
      'A non-US regulatory framework illustrating how privacy/legal obligations shape governance',
      'A NIST special publication',
      'An (ISC)² ethics requirement',
    ],
    correctIndex: 1,
    explanation: 'GDPR is used as a comparator to show that legal/regulatory drivers of governance extend beyond US federal law like FISMA.',
  },

  // ---- Risk Management (round 3) ----
  {
    id: 'risk-13',
    domainId: 'risk-management',
    question: 'Risk avoidance, as a treatment option, means:',
    options: [
      'Purchasing insurance to cover potential losses',
      'Eliminating the activity or exposure that creates the risk entirely',
      'Accepting the risk as-is without change',
      'Reducing the risk with additional controls',
    ],
    correctIndex: 1,
    explanation: 'Avoidance removes the risk by not engaging in the risky activity at all — e.g., declining to launch a product feature that would introduce unacceptable exposure.',
  },
  {
    id: 'risk-14',
    domainId: 'risk-management',
    question: 'Risk transfer commonly takes which form?',
    options: [
      'Ignoring the risk entirely',
      'Purchasing cyber insurance or outsourcing the risky function to a third party under contract',
      'Increasing the system\'s FIPS 199 categorization',
      'Writing a new organizational policy with no other action',
    ],
    correctIndex: 1,
    explanation: 'Transfer shifts some financial or operational impact of a risk to another party, commonly via insurance or contractual risk-sharing.',
  },
  {
    id: 'risk-15',
    domainId: 'risk-management',
    question: 'A risk assessment conducted at the organizational tier (per SP 800-39) primarily supports:',
    options: [
      'Only a single system\'s authorization decision',
      'Enterprise-wide risk management strategy and investment decisions',
      'Only employee performance reviews',
      'Physical badge issuance',
    ],
    correctIndex: 1,
    explanation: 'SP 800-39\'s tiered approach uses organization-level risk assessments to inform strategy and resource allocation across the entire enterprise, not just one system.',
  },

  // ---- Third-Party / Scope (round 3) ----
  {
    id: 'tpr-10',
    domainId: 'third-party-risk',
    question: 'In a SaaS (Software as a Service) model, the customer typically retains responsibility for:',
    options: [
      'Patching the underlying operating system',
      'Data classification, user access management, and appropriate use of the application',
      'Maintaining the physical data center',
      'Managing the hypervisor',
    ],
    correctIndex: 1,
    explanation: 'In SaaS, the provider manages nearly the entire stack; the customer\'s responsibility narrows to how they classify, access, and use their own data within the app.',
  },
  {
    id: 'tpr-11',
    domainId: 'third-party-risk',
    question: 'A system interconnection that is discovered but was never documented poses risk primarily because:',
    options: [
      'Undocumented connections cannot technically transmit data',
      'It falls outside the authorization boundary\'s documented risk picture, meaning its risk was never assessed or accepted',
      'It automatically triggers a FIPS 199 recategorization',
      'It has no effect on system risk',
    ],
    correctIndex: 1,
    explanation: 'An undocumented interconnection means risk is flowing across a boundary that was never evaluated or formally accepted by the AO — a blind spot in the risk picture.',
  },

  // ---- Controls (round 3) ----
  {
    id: 'ctrl-10',
    domainId: 'controls',
    question: 'Scoping guidance, as part of tailoring, allows an organization to:',
    options: [
      'Add controls indiscriminately without justification',
      'Narrow which parts of a control apply based on factors like technology, operational environment, or policy',
      'Skip documenting the SSP entirely',
      'Ignore FIPS 200 minimum requirements',
    ],
    correctIndex: 1,
    explanation: 'Scoping considerations (technology-specific, operational, policy/regulatory, etc.) let an organization narrow a control\'s applicability to what genuinely applies to the system.',
  },
  {
    id: 'ctrl-11',
    domainId: 'controls',
    question: 'Organization-defined parameters (ODPs) in SP 800-53 controls exist so that:',
    options: [
      'Every organization uses identical values for every control',
      'Organizations can specify values (e.g., password length, review frequency) appropriate to their own risk tolerance',
      'Only the AO can ever set them',
      'They only apply to privacy controls',
    ],
    correctIndex: 1,
    explanation: 'ODPs let organizations fill in specific values (like "90 days" or "14 characters") for a control\'s variable elements, tailoring rigor to their own context.',
  },

  // ---- Assessment/Audit (round 3) ----
  {
    id: 'aa-9',
    domainId: 'assessment-audit',
    question: 'The "coverage" attribute of an assessment describes:',
    options: [
      'How many assessors were paid',
      'The scope/breadth of assessment objects included (e.g., a sample vs. every instance)',
      'The insurance coverage for the assessment team',
      'The number of controls in the SP 800-53 catalog',
    ],
    correctIndex: 1,
    explanation: 'Coverage describes how much of the system was actually assessed — e.g., a representative sample of servers vs. every single server in the environment.',
  },
  {
    id: 'aa-10',
    domainId: 'assessment-audit',
    question: 'Reciprocity, in the context of control assessments, refers to:',
    options: [
      'Never accepting another organization\'s assessment results',
      'Accepting an existing assessment or authorization from one organization to avoid duplicating work in another',
      'A requirement that assessors be paid twice',
      'A synonym for the SAR',
    ],
    correctIndex: 1,
    explanation: 'Reciprocity allows organizations to leverage existing, credible assessment results (e.g., a FedRAMP authorization) instead of re-assessing the same system from scratch.',
  },

  // ---- Authorization / Continuous Monitoring (round 3) ----
  {
    id: 'auth-9',
    domainId: 'authorization',
    question: 'A "denial of authorization" decision means:',
    options: [
      'The system may operate with no restrictions',
      'The AO has determined the risk is unacceptable and the system may not operate',
      'The system automatically receives an IATT instead',
      'The categorization must be redone before any other action',
    ],
    correctIndex: 1,
    explanation: 'Denial is a formal AO decision that residual risk is unacceptable — the system is not authorized to operate until risk is addressed.',
  },
  {
    id: 'auth-10',
    domainId: 'authorization',
    question: 'Automated data feeds in an ISCM program are valuable primarily because they:',
    options: [
      'Eliminate the need for any assessment ever again',
      'Reduce manual effort and provide more timely, consistent risk-relevant data to support ongoing decisions',
      'Are required to replace the SSP',
      'Only apply to privacy controls',
    ],
    correctIndex: 1,
    explanation: 'Automation (e.g., vulnerability scanners feeding a dashboard) reduces the lag and manual burden of continuous monitoring, keeping risk data fresher for decision-makers.',
  },

  // ---- Incident Management (round 3) ----
  {
    id: 'im-10',
    domainId: 'incident-management',
    question: 'Containment, as a phase of incident response, primarily aims to:',
    options: [
      'Permanently fix the root cause immediately',
      'Limit the scope and spread of damage while a fuller response is planned',
      'Notify the media',
      'Skip straight to lessons learned',
    ],
    correctIndex: 1,
    explanation: 'Containment focuses on stopping an incident from getting worse (e.g., isolating an infected host) before eradication and full recovery take place.',
  },
  {
    id: 'im-11',
    domainId: 'incident-management',
    question: 'A full-scale exercise, compared to a tabletop or functional exercise, is best described as:',
    options: [
      'Purely a paper-based discussion',
      'The most realistic and resource-intensive test, closely simulating an actual event including operational response',
      'Never used in continuity planning',
      'Always the cheapest option',
    ],
    correctIndex: 1,
    explanation: 'Full-scale exercises are the most comprehensive and costly test type, closely mimicking a real incident/disaster to validate plans under near-real conditions.',
  },

  // ---- Governance (round 4) ----
  {
    id: 'gov-16',
    domainId: 'governance',
    question: 'Which best distinguishes a "law" from a "policy" in the governance hierarchy?',
    options: [
      'They are the same thing at different organizational levels',
      'A law is externally imposed by a governing body (e.g., Congress); a policy is internally created by the organization to comply with laws and set its own direction',
      'Policies always override laws',
      'Laws only apply to private companies',
    ],
    correctIndex: 1,
    explanation: 'Laws come from external legal authorities and are mandatory regardless of the organization; policies are internal documents organizations write, partly to ensure compliance with those laws.',
  },
  {
    id: 'gov-17',
    domainId: 'governance',
    question: 'An organizational chart showing the CISO reporting directly to the CEO (rather than the CIO) is often cited as an example of:',
    options: [
      'A violation of federal law',
      'A governance structure intended to preserve security\'s independence and visibility at the top level',
      'An irrelevant detail with no governance implications',
      'A requirement under FIPS 199',
    ],
    correctIndex: 1,
    explanation: 'Reporting structure affects independence and influence — a CISO reporting to the CEO (vs. buried under the CIO) is a governance design choice that can reduce conflicts of interest.',
  },
  {
    id: 'gov-18',
    domainId: 'governance',
    question: 'Which of the following is most clearly an "ethics" issue rather than a purely technical one under the (ISC)² Code of Ethics?',
    options: [
      'Choosing which encryption algorithm to implement',
      'A practitioner using insider knowledge of a vulnerability for personal gain rather than disclosing it responsibly',
      'Selecting a cloud region for data residency',
      'Configuring a firewall rule set',
    ],
    correctIndex: 1,
    explanation: 'Ethics issues involve professional conduct and integrity — like disclosing rather than exploiting a discovered vulnerability — as opposed to purely technical implementation choices.',
  },

  // ---- Risk Management (round 4) ----
  {
    id: 'risk-16',
    domainId: 'risk-management',
    question: 'A heat map in risk management is typically used to:',
    options: [
      'Track server room temperature',
      'Visually plot risks by likelihood and impact to prioritize attention',
      'Replace the need for a risk register entirely',
      'Show network topology only',
    ],
    correctIndex: 1,
    explanation: 'Risk heat maps plot likelihood against impact so stakeholders can quickly see which risks need the most urgent attention.',
  },
  {
    id: 'risk-17',
    domainId: 'risk-management',
    question: 'Inherent risk, as opposed to residual risk, refers to:',
    options: [
      'The risk remaining after controls are applied',
      'The level of risk that exists before any controls are applied',
      'A risk that has already been transferred',
      'A risk that has been formally accepted by the AO',
    ],
    correctIndex: 1,
    explanation: 'Inherent risk is the "raw" exposure before mitigation; residual risk is what remains after controls are applied — the gap between the two shows how much a control reduced risk.',
  },
  {
    id: 'risk-18',
    domainId: 'risk-management',
    question: 'Which of these is most clearly an example of a supply chain risk (as opposed to a purely internal risk)?',
    options: [
      'An employee choosing a weak password',
      'A hardware component sourced from a vendor containing an undisclosed backdoor',
      'A misconfigured internal firewall rule',
      'A missed internal training deadline',
    ],
    correctIndex: 1,
    explanation: 'Supply chain risk originates outside the organization\'s direct control — such as a compromised component from a vendor — as opposed to risks arising purely from internal missteps.',
  },

  // ---- Third-Party / Scope (round 4) ----
  {
    id: 'tpr-12',
    domainId: 'third-party-risk',
    question: 'When a system\'s authorization boundary spans multiple cloud regions operated by the same CSP, the organization should:',
    options: [
      'Assume no additional documentation is needed since it\'s the same provider',
      'Document each region\'s role and any data residency/interconnection implications within the boundary description',
      'Automatically categorize the system as Low impact',
      'Treat each region as a completely separate, unrelated system with no relationship to the others',
    ],
    correctIndex: 1,
    explanation: 'Even within a single provider, multi-region architecture can introduce data residency, latency, and interconnection considerations that belong in the boundary documentation.',
  },
  {
    id: 'tpr-13',
    domainId: 'third-party-risk',
    question: 'A PaaS (Platform as a Service) model shifts responsibility for which of the following to the customer, unlike SaaS?',
    options: [
      'The physical data center',
      'The application code and configuration built on top of the platform',
      'The network backbone',
      'The hypervisor',
    ],
    correctIndex: 1,
    explanation: 'PaaS gives the customer a managed platform (runtime, OS, middleware) but the customer is responsible for the application they build and deploy on it — more responsibility than SaaS, less than IaaS.',
  },

  // ---- Controls (round 4) ----
  {
    id: 'ctrl-12',
    domainId: 'controls',
    question: 'Which best describes the relationship between FIPS 200 and SP 800-53?',
    options: [
      'They are unrelated documents',
      'FIPS 200 establishes minimum security requirement areas; SP 800-53 provides the specific controls organizations use to satisfy them',
      'SP 800-53 replaced FIPS 200 entirely',
      'FIPS 200 only applies to privacy, not security',
    ],
    correctIndex: 1,
    explanation: 'FIPS 200 sets out minimum security requirement categories; SP 800-53 supplies the actual catalog of controls organizations select and implement to meet those requirements.',
  },
  {
    id: 'ctrl-13',
    domainId: 'controls',
    question: 'A system-specific control (as opposed to common or hybrid) is one that is:',
    options: [
      'Inherited entirely from another system',
      'Implemented uniquely by and for that one system, with no inheritance involved',
      'Never documented in the SSP',
      'Only relevant to privacy',
    ],
    correctIndex: 1,
    explanation: 'System-specific controls are implemented directly by the system itself, unlike common controls (fully inherited) or hybrid controls (partly inherited, partly system-specific).',
  },

  // ---- Assessment/Audit (round 4) ----
  {
    id: 'aa-11',
    domainId: 'assessment-audit',
    question: 'When an assessment reveals a control is "not satisfied," the appropriate next step is generally to:',
    options: [
      'Remove the control from the SSP so it doesn\'t show as a finding',
      'Document the finding in the SAR and determine remediation via a POA&M entry',
      'Immediately shut the system down permanently',
      'Ignore it if the system has already been authorized once before',
    ],
    correctIndex: 1,
    explanation: 'A "not satisfied" finding gets documented in the SAR and tracked to resolution through the POA&M — not hidden or ignored.',
  },
  {
    id: 'aa-12',
    domainId: 'assessment-audit',
    question: 'Which is the best reason to use a "test" method rather than just an "examine" method when assessing a technical control?',
    options: [
      'Testing is always faster than examining documents',
      'Testing exercises the actual mechanism to confirm it behaves as intended, rather than just trusting the written description',
      'Examine methods are never used for technical controls',
      'Testing replaces the need for a SAR',
    ],
    correctIndex: 1,
    explanation: 'A written policy or configuration standard (examine) might not reflect what a system actually does — testing verifies real-world behavior directly.',
  },

  // ---- Authorization / Continuous Monitoring (round 4) ----
  {
    id: 'auth-11',
    domainId: 'authorization',
    question: 'A key input the AO considers before renewing an ATO is:',
    options: [
      'The system\'s marketing budget',
      'Current POA&M status, recent assessment/monitoring results, and any significant changes since the last authorization',
      'The number of employees in the organization',
      'The color scheme of the system\'s user interface',
    ],
    correctIndex: 1,
    explanation: 'Reauthorization decisions rest on current risk data — open POA&M items, recent monitoring/assessment results, and any material changes — not unrelated organizational details.',
  },
  {
    id: 'auth-12',
    domainId: 'authorization',
    question: 'The purpose of setting a defined authorization termination date is to:',
    options: [
      'Permanently end the system\'s operation on that date with no exceptions',
      'Force a periodic review point ensuring the risk decision doesn\'t go stale indefinitely',
      'Determine the system\'s FIPS 199 categorization',
      'Set the AO\'s salary review date',
    ],
    correctIndex: 1,
    explanation: 'A termination date forces a scheduled checkpoint so authorization doesn\'t continue indefinitely without a fresh risk review, complementing (not replacing) event-driven reauthorization.',
  },

  // ---- Incident Management (round 4) ----
  {
    id: 'im-12',
    domainId: 'incident-management',
    question: 'Eradication, as a phase within Containment/Eradication/Recovery, focuses on:',
    options: [
      'Simply monitoring the incident without acting',
      'Removing the root cause of the incident (e.g., malware, unauthorized access) from affected systems',
      'Notifying customers of a data breach',
      'Writing the final lessons-learned report',
    ],
    correctIndex: 1,
    explanation: 'Eradication removes the actual cause of the incident — deleting malware, closing an exploited vulnerability, revoking compromised credentials — before systems are restored to normal operation.',
  },
  {
    id: 'im-13',
    domainId: 'incident-management',
    question: 'A Continuity of Operations Plan (COOP) most directly complements which other plan by focusing specifically on essential-function continuity during an emergency?',
    options: [
      'The Business Continuity Plan (BCP)',
      'The System Security Plan (SSP)',
      'The Security Assessment Plan (SAP)',
      'The Plan of Action and Milestones (POA&M)',
    ],
    correctIndex: 0,
    explanation: 'COOP and BCP are closely related continuity concepts — COOP is the federal-agency-specific term emphasizing essential functions and leadership succession, paralleling BCP\'s broader business-continuity focus.',
  },
  {
    id: 'ctrl-14',
    domainId: 'controls',
    question: 'When a control is inherited but the common control provider\'s own assessment is out of date, the system relying on it should:',
    options: [
      'Assume everything is fine and proceed with authorization',
      'Flag this as a risk item, since the inheriting system\'s risk posture depends on that unverified control',
      'Automatically fail categorization',
      'Remove the control from its SSP entirely',
    ],
    correctIndex: 1,
    explanation: 'Inheriting a control doesn\'t remove risk accountability — if the provider\'s assessment is stale, the inheriting system\'s AO is accepting risk based on outdated assurance, which should be flagged.',
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
