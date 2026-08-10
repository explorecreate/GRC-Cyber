import type { UmgcCourse } from './types'

export const umgcCourses: UmgcCourse[] = [
  {
    id: 'csia-360',
    code: 'CSIA 360',
    title: 'Cybersecurity in Government Organizations',
    credits: 3,
    prerequisites: 'CSIA 350',
    overview:
      'A study of cybersecurity management and governance in the context of the missions, functions, and operations of federal, state, and municipal government agencies, departments, and programs. Covers the policy life cycle and the mechanisms governments use to formulate and implement laws, policies, regulations, and treaties to protect and defend government operations and society against cyberattacks and crimes, both foreign and domestic.',
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
          'A common CSIA 360 project casts you as a cybersecurity consultant hired by a federal agency to research and write a short report on the cybersecurity risks of Open Data initiatives under the OPEN Government Data Act. You research and summarize confidentiality, integrity, availability, authenticity, and non-repudiation issues that arise when agencies publish datasets on sites like data.gov, weigh those risks against the benefits of open data for businesses and the public, and pull in relevant OMB guidance (e.g., memoranda on managing information as an asset) and NIST publications (FIPS 199 categorization is a common reference point). The report typically closes with practical recommendations for balancing transparency with security and privacy.',
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
      'A study of applying cybersecurity principles, frameworks, standards, and best practices to organization-level strategies, policies, programs, plans, procedures, and processes. Includes content designed to help prepare for the IAPP Certified Information Privacy Professional/US (CIPP/US) certification. Covers principles and best practices for protecting privacy and ensuring compliance with laws and regulations.',
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
          'Draft one or more formal security policies for an organization-level scenario — practicing the structure, tone, and enforceability language expected of a real enterprise policy document, not just a summary of best practices.',
      },
      {
        title: 'Security Program Metrics & Measures',
        summary:
          'Develop a set of metrics and measures an organization could use to track the effectiveness of its information security program over time, and justify why each metric is meaningful to report to leadership.',
      },
      {
        title: 'Compliance Audit Plan',
        summary:
          'Plan an audit of an organization\'s compliance practices and processes against a named framework or regulation, defining scope, methods, and what a finding would look like.',
      },
      {
        title: 'Organization-Level Security Policy for Enterprise IT Governance',
        summary:
          'Develop a broader enterprise IT governance security policy that ties together the strategic and operational planning concepts covered earlier in the course.',
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
      'A survey of emerging and leading technologies in the cybersecurity field. The aim is to research, evaluate, and recommend emerging technologies and determine secure implementation strategies for best-fit business solutions. Topics include evolutionary technology development and adoption in organizations. You\'ll build these skills across the term through an annotated bibliography, a white paper, an executive presentation, and an implementation plan.',
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
          'Research and annotate a set of credible sources on an emerging technology of interest, building the evidence base you\'ll draw on for the rest of the term\'s deliverables.',
      },
      {
        title: 'White Paper',
        summary:
          'Write a white paper researching, evaluating, and recommending an emerging technology for a business use case, working through its capabilities, risks, and adoption considerations.',
      },
      {
        title: 'Executive Presentation',
        summary:
          'Distill the white paper\'s findings and recommendation into a presentation aimed at organizational stakeholders/executives — practicing communicating technical risk in business terms.',
      },
      {
        title: 'Implementation Plan',
        summary:
          'Produce an implementation plan defining secure adoption steps and organizational considerations for actually rolling out the recommended technology.',
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
