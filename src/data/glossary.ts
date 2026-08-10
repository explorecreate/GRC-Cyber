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
