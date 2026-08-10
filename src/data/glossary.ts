import type { GlossaryEntry } from './types'

export const glossary: GlossaryEntry[] = [
  { acronym: 'RMF', expansion: 'Risk Management Framework', definition: 'NIST\'s 7-step process (Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor) for managing security and privacy risk.' },
  { acronym: 'ATO', expansion: 'Authorization to Operate', definition: 'A formal decision by an Authorizing Official that a system\'s risk is acceptable and it may operate.' },
  { acronym: 'IATT', expansion: 'Interim Authorization to Test', definition: 'A time-limited authorization allowing a system to operate in a test environment, not production.' },
  { acronym: 'POA&M', expansion: 'Plan of Action and Milestones', definition: 'A document tracking identified weaknesses, remediation tasks, resources, and target completion dates.' },
  { acronym: 'SSP', expansion: 'System Security Plan', definition: 'The document describing a system\'s security requirements and the controls in place or planned to meet them.' },
  { acronym: 'SAP', expansion: 'Security Assessment Plan', definition: 'The plan describing scope, methods, and procedures for assessing a system\'s controls.' },
  { acronym: 'SAR', expansion: 'Security Assessment Report', definition: 'The document reporting assessment results, including findings and recommendations.' },
  { acronym: 'ISCM', expansion: 'Information Security Continuous Monitoring', definition: 'Ongoing awareness of security, vulnerabilities, and threats to support risk management decisions (NIST SP 800-137).' },
  { acronym: 'PII', expansion: 'Personally Identifiable Information', definition: 'Information that can be used to distinguish or trace an individual\'s identity, alone or combined with other data.' },
  { acronym: 'FISMA', expansion: 'Federal Information Security Modernization Act', definition: 'US law requiring federal agencies to develop, document, and implement an information security program.' },
  { acronym: 'AO', expansion: 'Authorizing Official', definition: 'The senior official with authority to formally assume responsibility for operating a system at an acceptable level of risk.' },
  { acronym: 'ISSO', expansion: 'Information System Security Officer', definition: 'The individual responsible for the day-to-day security posture of an information system.' },
  { acronym: 'SCRM', expansion: 'Supply Chain Risk Management', definition: 'The process of identifying, assessing, and mitigating risks introduced by suppliers, vendors, and third-party components.' },
  { acronym: 'FIPS', expansion: 'Federal Information Processing Standards', definition: 'Mandatory US government standards for computer systems, e.g., FIPS 199 (categorization) and FIPS 200 (minimum requirements).' },
  { acronym: 'BIA', expansion: 'Business Impact Analysis', definition: 'An analysis identifying critical business functions and the impact of their disruption, used to inform RTO/RPO targets.' },
  { acronym: 'RTO', expansion: 'Recovery Time Objective', definition: 'The maximum acceptable length of time a system or process can be down after a disruption.' },
  { acronym: 'RPO', expansion: 'Recovery Point Objective', definition: 'The maximum acceptable amount of data loss measured in time (e.g., "last 4 hours of transactions").' },
  { acronym: 'BCP', expansion: 'Business Continuity Plan', definition: 'A plan for maintaining or resuming business functions during and after a disruption.' },
  { acronym: 'DRP', expansion: 'Disaster Recovery Plan', definition: 'A plan focused on restoring IT systems and infrastructure after a disaster.' },
  { acronym: 'COOP', expansion: 'Continuity of Operations Plan', definition: 'A federal-agency-focused plan ensuring essential functions continue during emergencies.' },
  { acronym: 'CIA (Triad)', expansion: 'Confidentiality, Integrity, Availability', definition: 'The three core security objectives that categorization and controls are designed to protect.' },
  { acronym: 'NIST', expansion: 'National Institute of Standards and Technology', definition: 'US federal agency that develops the RMF, SP 800-series guidance, and FIPS standards.' },
  { acronym: 'ISA', expansion: 'Interconnection Security Agreement', definition: 'A document specifying technical/security requirements for connecting two systems.' },
  { acronym: 'MOU', expansion: 'Memorandum of Understanding', definition: 'A non-binding agreement outlining terms of cooperation between organizations, often paired with an ISA.' },
  { acronym: 'SBOM', expansion: 'Software Bill of Materials', definition: 'A formal inventory of components in a piece of software, used for supply chain risk management.' },
  { acronym: 'ERM', expansion: 'Enterprise Risk Management', definition: 'A holistic, organization-wide approach to identifying and managing risk across all business functions, not just IT.' },
  { acronym: 'SDLC', expansion: 'System/Software Development Life Cycle', definition: 'The structured process for developing systems, into which RMF activities should be integrated from the start.' },
  { acronym: 'CISA', expansion: 'Cybersecurity and Infrastructure Security Agency', definition: 'US federal agency responsible for national cyber and infrastructure security, including incident reporting.' },
  { acronym: 'OMB', expansion: 'Office of Management and Budget', definition: 'Executive Office agency that issues federal policy (e.g., Circular A-130) governing information resource management.' },
  { acronym: 'DHS', expansion: 'Department of Homeland Security', definition: 'US federal department overseeing national cybersecurity policy execution, including via CISA.' },
  { acronym: 'AC', expansion: 'Access Control (family)', definition: 'The SP 800-53 control family governing who/what can access a system and its resources, and under what conditions.' },
  { acronym: 'AU', expansion: 'Audit and Accountability (family)', definition: 'The SP 800-53 control family covering audit logging, log review, and accountability for actions taken on a system.' },
  { acronym: 'CA', expansion: 'Assessment, Authorization, and Monitoring (family)', definition: 'The SP 800-53 control family governing control assessments, authorization, and continuous monitoring activities.' },
  { acronym: 'CM', expansion: 'Configuration Management (family)', definition: 'The SP 800-53 control family covering baseline configurations, change control, and configuration monitoring.' },
  { acronym: 'IA', expansion: 'Identification and Authentication (family)', definition: 'The SP 800-53 control family covering how users and devices are uniquely identified and authenticated.' },
  { acronym: 'IR', expansion: 'Incident Response (family)', definition: 'The SP 800-53 control family covering incident handling, reporting, and response capability.' },
  { acronym: 'RA', expansion: 'Risk Assessment (family)', definition: 'The SP 800-53 control family covering risk assessment activities, vulnerability scanning, and risk response.' },
  { acronym: 'SC', expansion: 'System and Communications Protection (family)', definition: 'The SP 800-53 control family covering boundary protection, encryption, and secure communications.' },
  { acronym: 'SI', expansion: 'System and Information Integrity (family)', definition: 'The SP 800-53 control family covering flaw remediation, malicious code protection, and system monitoring.' },
  { acronym: 'PT', expansion: 'Personally Identifiable Information Processing and Transparency (family)', definition: 'The SP 800-53 Rev.5 control family addressing privacy-specific requirements such as consent and transparency.' },
  { acronym: 'PM', expansion: 'Program Management (family)', definition: 'The SP 800-53 control family addressing organization-wide security and privacy program controls, not tied to a single system.' },
  { acronym: 'PL', expansion: 'Planning (family)', definition: 'The SP 800-53 control family covering security and privacy planning, including the System Security Plan.' },
  { acronym: 'ISCP', expansion: 'Information System Contingency Plan', definition: 'A system-level plan for recovering and restoring a specific information system after a disruption (NIST SP 800-34).' },
  { acronym: 'PTA', expansion: 'Privacy Threshold Analysis', definition: 'A screening assessment used to determine whether a system handles PII and requires a full Privacy Impact Assessment.' },
  { acronym: 'PIA', expansion: 'Privacy Impact Assessment', definition: 'An analysis of how PII is collected, used, shared, and maintained by a system, and the privacy risks involved.' },
  { acronym: 'SORN', expansion: 'System of Records Notice', definition: 'A Privacy Act–required public notice describing a federal system that maintains a system of records containing PII.' },
  { acronym: 'CVSS', expansion: 'Common Vulnerability Scoring System', definition: 'An industry-standard framework for rating the severity of software vulnerabilities on a 0–10 scale.' },
  { acronym: 'CVE', expansion: 'Common Vulnerabilities and Exposures', definition: 'A public dictionary of standardized identifiers for publicly known cybersecurity vulnerabilities.' },
  { acronym: 'CPE', expansion: 'Continuing Professional Education', definition: 'Ongoing training credits required to maintain an (ISC)² certification such as CGRC, tracked annually.' },
  { acronym: 'FedRAMP', expansion: 'Federal Risk and Authorization Management Program', definition: 'A US government program standardizing security assessment and authorization for cloud products/services used by federal agencies.' },
  { acronym: 'A-130', expansion: 'OMB Circular A-130', definition: 'Federal policy establishing general information resource management, including security and privacy responsibilities for agencies.' },
  { acronym: 'NARA', expansion: 'National Archives and Records Administration', definition: 'US federal agency responsible for records management policy, relevant to retention/disposition controls.' },
  { acronym: 'SLA', expansion: 'Service Level Agreement', definition: 'A contractual agreement defining the expected performance and availability commitments of a service provider.' },
  { acronym: 'MFA', expansion: 'Multi-Factor Authentication', definition: 'An authentication method requiring two or more independent credentials (something you know/have/are) to verify identity.' },
  { acronym: 'ZTA', expansion: 'Zero Trust Architecture', definition: 'A security model that assumes no implicit trust and continuously verifies every access request, regardless of network location.' },
  { acronym: 'SOC', expansion: 'Security Operations Center', definition: 'A centralized team/function responsible for monitoring, detecting, and responding to security events.' },
  { acronym: 'CSP', expansion: 'Cloud Service Provider', definition: 'An organization offering cloud computing services (IaaS, PaaS, or SaaS) to customers.' },
]

export function searchGlossary(query: string): GlossaryEntry[] {
  const q = query.trim().toLowerCase()
  if (!q) return glossary
  return glossary.filter(
    (g) =>
      g.acronym.toLowerCase().includes(q) ||
      g.expansion.toLowerCase().includes(q) ||
      g.definition.toLowerCase().includes(q),
  )
}
