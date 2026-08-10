import type { UmgcCourse } from './types'

export const umgcCourses: UmgcCourse[] = [
  {
    id: 'csia-360',
    code: 'CSIA 360',
    title: 'Cybersecurity in Government Organizations',
    overview:
      'Surveys the federal cybersecurity landscape: how agencies like DHS, NIST, and OMB structure and govern cybersecurity, and the laws/policies (especially FISMA) that drive government-specific compliance.',
    keyTopics: [
      'Federal cybersecurity governance structure (DHS, CISA, NIST, OMB roles)',
      'FISMA requirements and agency reporting obligations',
      'Federal Enterprise Architecture and IT governance',
      'Government-specific compliance frameworks (FedRAMP, Circular A-130)',
      'Case studies of federal agency breaches and policy responses',
      'The role of Inspectors General (IG) and GAO in oversight and reporting',
    ],
    resources: [
      { title: 'CISA — About the Agency', source: 'CISA', url: 'https://www.cisa.gov/about', kind: 'article' },
      { title: 'FISMA Background', source: 'NIST', url: 'https://csrc.nist.gov/topics/laws-and-regulations/laws/fisma', kind: 'article' },
      { title: 'OMB Circular A-130', source: 'OMB / whitehouse.gov', url: 'https://www.whitehouse.gov/omb/', kind: 'doc' },
      { title: 'FedRAMP Overview', source: 'FedRAMP.gov', url: 'https://www.fedramp.gov/', kind: 'article' },
    ],
  },
  {
    id: 'csia-413',
    code: 'CSIA 413',
    title: 'Cybersecurity Policy, Plans, and Programs',
    overview:
      'Focuses on the policy development lifecycle and security program management — how organizations write, approve, and manage security policy, and turn strategy into actionable plans.',
    keyTopics: [
      'Policy development lifecycle: drafting, review, approval, dissemination, enforcement',
      'Security program management and organizational structure',
      'Strategic vs. tactical vs. operational planning',
      'Plans of Action — turning findings into remediation programs',
      'Metrics and reporting for security program effectiveness',
      'Stakeholder communication: translating technical risk into business language for leadership',
    ],
    resources: [
      { title: 'NIST SP 800-100 — Information Security Handbook: A Guide for Managers', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/100/final', kind: 'pdf' },
      { title: 'Security Policy Development Basics', source: 'SANS Institute (free resources)', url: 'https://www.sans.org/information-security-policy/', kind: 'article' },
      { title: 'NIST SP 800-12 — An Introduction to Information Security', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/12/r1/final', kind: 'pdf' },
    ],
  },
  {
    id: 'csia-459',
    code: 'CSIA 459',
    title: 'Evaluating Emerging Technologies',
    overview:
      'Develops a methodology for assessing risk and value in emerging technologies (AI, IoT, quantum, blockchain, etc.) before an organization adopts them.',
    keyTopics: [
      'Technology risk assessment frameworks and evaluation criteria',
      'Emerging technology categories: AI/ML, IoT, quantum computing, blockchain',
      'NIST AI Risk Management Framework as an evaluation model',
      'Cost-benefit and maturity-model approaches to adoption decisions',
      'Ethical and societal impact considerations in technology evaluation',
      'Pilot programs and phased-adoption strategies for reducing rollout risk',
    ],
    resources: [
      { title: 'NIST AI Risk Management Framework', source: 'NIST', url: 'https://www.nist.gov/itl/ai-risk-management-framework', kind: 'article' },
      { title: 'Gartner Hype Cycle Methodology (overview)', source: 'Gartner (public overview)', url: 'https://www.gartner.com/en/research/methodologies/gartner-hype-cycle', kind: 'article' },
      { title: 'NIST Emerging Technologies Program', source: 'NIST', url: 'https://www.nist.gov/', kind: 'article' },
    ],
  },
]
