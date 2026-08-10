import type { UmgcCourse } from './types'

export const umgcCourses: UmgcCourse[] = [
  {
    id: 'csia-360',
    code: 'CSIA 360',
    title: 'Cybersecurity in Government Organizations',
    credits: 3,
    prerequisites: 'CSIA 350',
    overview:
      'How government agencies at the federal, state, and city level manage cybersecurity. Covers how laws, policies, and regulations get written and put into practice to protect government systems and the public from cyberattacks, both foreign and domestic.',
    keyTopics: [
      'Federal cybersecurity governance structure (DHS, CISA, NIST, OMB roles)',
      'FISMA requirements and agency reporting obligations',
      'Federal Enterprise Architecture and IT governance',
      'Government-specific compliance frameworks (FedRAMP, OMB Circular A-130)',
      'The Open Government Data Act / OPEN Data and the security-vs-transparency trade-off',
      'Case studies of federal agency breaches and policy responses',
    ],
    projects: [
      {
        title: 'Cybersecurity Risk Research Report: Open Government Data',
        summary:
          'A common project in this course: you act as a cybersecurity consultant hired by a federal agency, researching the cybersecurity risks of publishing Open Data on sites like data.gov. You look at issues like confidentiality, data integrity, and accuracy, weigh those risks against the benefits of open data, and reference relevant OMB and NIST guidance. It usually wraps up with practical recommendations for balancing openness with security and privacy.',
      },
    ],
    resources: [
      { title: 'CISA — About the Agency', source: 'CISA', url: 'https://www.cisa.gov/about', kind: 'article' },
      { title: 'FISMA Background', source: 'NIST', url: 'https://csrc.nist.gov/topics/laws-and-regulations/laws/fisma', kind: 'article' },
      { title: 'OMB Circular A-130', source: 'OMB / whitehouse.gov', url: 'https://www.whitehouse.gov/omb/', kind: 'doc' },
      { title: 'FedRAMP Overview', source: 'FedRAMP.gov', url: 'https://www.fedramp.gov/', kind: 'article' },
      { title: 'Data.gov — Open Government Data', source: 'US General Services Administration', url: 'https://www.data.gov/', kind: 'article' },
    ],
  },
  {
    id: 'csia-413',
    code: 'CSIA 413',
    title: 'Cybersecurity Policy, Plans, and Programs',
    credits: 3,
    prerequisites: 'CSIA 360',
    overview:
      'How to apply cybersecurity principles and best practices to real organizational strategy, policy, and programs. Includes content that helps prepare for the IAPP CIPP/US privacy certification, and covers how to protect privacy and stay compliant with laws and regulations.',
    keyTopics: [
      'Policy development lifecycle: drafting, review, approval, dissemination, enforcement',
      'Security program management and organizational structure',
      'Strategic vs. tactical vs. operational planning',
      'Developing metrics and measures for information security program effectiveness',
      'Planning audits of compliance practices and processes',
      'Privacy law and regulation fundamentals (CIPP/US-aligned)',
    ],
    projects: [
      {
        title: 'Enterprise Security Policy Writing',
        summary:
          'Write one or more real security policies for a made-up organization — practicing the structure and tone of an actual enterprise policy document, not just summarizing best practices.',
      },
      {
        title: 'Security Program Metrics & Measures',
        summary:
          'Come up with a set of metrics an organization could use to track how well its security program is working over time, and explain why each one is worth reporting to leadership.',
      },
      {
        title: 'Compliance Audit Plan',
        summary:
          'Plan an audit checking an organization\'s compliance against a specific framework or regulation — deciding scope, methods, and what a finding would actually look like.',
      },
      {
        title: 'Organization-Level Security Policy for Enterprise IT Governance',
        summary:
          'Write a broader enterprise IT governance policy that pulls together the strategic and operational planning ideas covered earlier in the course.',
      },
    ],
    resources: [
      { title: 'NIST SP 800-100 — Information Security Handbook: A Guide for Managers', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/100/final', kind: 'pdf' },
      { title: 'Security Policy Development Basics', source: 'SANS Institute (free resources)', url: 'https://www.sans.org/information-security-policy/', kind: 'article' },
      { title: 'NIST SP 800-12 — An Introduction to Information Security', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/12/r1/final', kind: 'pdf' },
      { title: 'IAPP CIPP/US Certification Overview', source: 'IAPP', url: 'https://iapp.org/certify/cippus/', kind: 'article' },
    ],
  },
  {
    id: 'csia-459',
    code: 'CSIA 459',
    title: 'Evaluating Emerging Technologies',
    credits: 3,
    prerequisites: 'CMIT 320 and CSIA 350',
    overview:
      'A look at emerging and cutting-edge technologies in cybersecurity. The goal is to research a technology, evaluate whether it\'s a good fit for a business, and figure out how to roll it out securely. You\'ll build these skills through an annotated bibliography, a white paper, a presentation, and an implementation plan.',
    keyTopics: [
      'Technology risk assessment frameworks and evaluation criteria',
      'Building-block / foundational technologies underlying emerging tech',
      'Resilient utility infrastructure and industrial control system risk',
      'Cybersecurity challenges in smart cities',
      'Cybersecurity risks in robotic systems (including physical security robots)',
      'Wearable technology risks in healthcare settings',
      'AI & machine learning in cybersecurity defense',
      'NIST AI Risk Management Framework as an evaluation model',
    ],
    projects: [
      {
        title: 'Annotated Bibliography',
        summary:
          'Research a set of credible sources on an emerging technology you\'re interested in, with notes on each one — building the evidence base you\'ll use for the rest of the term\'s work.',
      },
      {
        title: 'White Paper',
        summary:
          'Write a paper that researches, evaluates, and recommends an emerging technology for a specific business use — covering what it can do, its risks, and what adopting it would involve.',
      },
      {
        title: 'Executive Presentation',
        summary:
          'Turn the white paper\'s findings into a presentation aimed at executives — practice explaining technical risk in plain business terms.',
      },
      {
        title: 'Implementation Plan',
        summary:
          'Write a plan for actually rolling out the recommended technology securely, including what the organization needs to consider along the way.',
      },
    ],
    resources: [
      { title: 'NIST AI Risk Management Framework', source: 'NIST', url: 'https://www.nist.gov/itl/ai-risk-management-framework', kind: 'article' },
      { title: 'Gartner Hype Cycle Methodology (overview)', source: 'Gartner (public overview)', url: 'https://www.gartner.com/en/research/methodologies/gartner-hype-cycle', kind: 'article' },
      { title: 'NIST Emerging Technologies Program', source: 'NIST', url: 'https://www.nist.gov/', kind: 'article' },
      { title: 'CISA — Industrial Control Systems', source: 'CISA', url: 'https://www.cisa.gov/topics/industrial-control-systems', kind: 'article' },
    ],
  },
]
