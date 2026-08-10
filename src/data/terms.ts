import type { TermEntry } from './types'

export const terms: TermEntry[] = [
  {
    id: 'authorization-boundary',
    term: 'Authorization Boundary',
    domainId: 'third-party-risk',
    definition:
      'The set of information resources, components, and connections that fall under the authority of a single AO and are included within a single system authorization.',
    example:
      'A cloud-hosted HR application, its database, and its API gateway are inside the boundary; the SaaS identity provider it federates to is outside it and treated as an interconnection.',
    whyItMatters:
      'Everything you categorize, select controls for, assess, and authorize is scoped to this boundary — get it wrong and you either under-protect the system or waste effort protecting things outside your control.',
    howToApply:
      'Draw the boundary diagram early, list every interconnection crossing it, and document each with an ISA/MOU before authorization.',
    memoryTip: '"Boundary = what the AO owns the risk for." If the AO can\'t accept the risk for it, it\'s outside the boundary.',
  },
  {
    id: 'poam',
    term: 'Plan of Action and Milestones (POA&M)',
    domainId: 'assessment-audit',
    definition:
      'A living document that tracks known weaknesses or deficiencies in a system, the planned remediation actions, resources required, and target completion dates.',
    example:
      'An assessment finds that multi-factor authentication is not enforced for admin accounts. The POA&M entry records the weakness, assigns an owner, allocates budget, and sets a 90-day remediation deadline.',
    whyItMatters:
      'It is the mechanism that turns "we found a problem" into "we are accountable for fixing it" — the AO reviews open POA&M items as part of every authorization decision.',
    howToApply:
      'Every SAR finding that isn\'t immediately remediated becomes a POA&M entry; review and update it on a recurring cadence, not just before reauthorization.',
    memoryTip: 'POA&M = "Promise Of Action, & Milestones" — it\'s a tracked promise, not a one-time report.',
  },
  {
    id: 'common-control',
    term: 'Common Control',
    domainId: 'controls',
    definition:
      'A security or privacy control whose implementation is inherited by multiple information systems from a single, centrally-managed source rather than implemented separately by each system.',
    example:
      'A single enterprise physical-access-control program (badge readers, guards) protects the data center that hosts ten different applications; each application inherits that control rather than re-implementing it.',
    whyItMatters:
      'Inheriting common controls avoids duplicated work and ensures consistency, but it also means a system\'s risk posture depends on a control it doesn\'t directly manage — inheritance has to be documented and tracked.',
    howToApply:
      'In the SSP, mark inherited controls as "common," name the providing system/organization, and confirm the common control provider\'s own assessment results are current.',
    memoryTip: '"Common" = shared house rules everyone in the building follows, set once by the landlord.',
  },
  {
    id: 'residual-risk',
    term: 'Residual Risk',
    domainId: 'risk-management',
    definition: 'The risk that remains after controls have been applied — risk is rarely reduced to zero.',
    example:
      'After implementing encryption, MFA, and monitoring for a database, some risk of insider misuse still remains; that leftover exposure is the residual risk the AO must weigh.',
    whyItMatters:
      'Authorization decisions are fundamentally about accepting residual risk, not eliminating all risk — understanding this distinction is core to the whole RMF philosophy.',
    howToApply:
      'Document residual risk explicitly in the SAR/authorization package so the AO makes an informed, risk-based (not compliance-checkbox) decision.',
    memoryTip: '"Residual" = what\'s left in the glass after you pour some out. You never empty it completely.',
  },
  {
    id: 'tailoring',
    term: 'Control Tailoring',
    domainId: 'controls',
    definition:
      'The process of adjusting an initial control baseline to fit the specific system, environment, and mission — through scoping, compensating controls, and setting organization-defined parameters.',
    example:
      'A Moderate baseline control requiring badge-based physical access doesn\'t apply to a purely cloud-hosted SaaS system with no physical facility — it\'s scoped out and a cloud provider\'s equivalent control is referenced instead.',
    whyItMatters:
      'Baselines are a starting point, not a final answer; applying them blindly either leaves gaps (system-specific risks the baseline doesn\'t cover) or wastes resources on irrelevant controls.',
    howToApply:
      'For every baseline control, ask: does this apply as-is, does it need a compensating control, or should it be scoped out — and document the rationale.',
    memoryTip: '"Tailoring" = a tailor altering an off-the-rack suit (the baseline) to actually fit you (the system).',
  },
  {
    id: 'ongoing-authorization',
    term: 'Ongoing Authorization',
    domainId: 'authorization',
    definition:
      'An approach where the AO\'s risk determination is continuously informed by real-time or near-real-time monitoring data, rather than relying solely on a static, point-in-time reauthorization every few years.',
    example:
      'Instead of a full 3-year reassessment cycle, a system feeds vulnerability scan results, configuration drift alerts, and access reviews into a dashboard the AO checks monthly.',
    whyItMatters:
      'Threats and system configurations change constantly; a stale authorization based on data from years ago doesn\'t reflect actual current risk.',
    howToApply:
      'Build an ISCM strategy that defines what\'s monitored, how often, and what triggers an AO risk review outside the normal cycle.',
    memoryTip: '"Ongoing" authorization is a movie, not a photograph — it keeps updating instead of freezing risk at one moment.',
  },
  {
    id: 'assessment-object',
    term: 'Assessment Object',
    domainId: 'assessment-audit',
    definition:
      'The specific item being assessed by a control assessment method — one of: specifications (documents/policies), mechanisms (technical/hardware/software), activities (processes performed), or individuals (people applying a control).',
    example:
      'Assessing an access-control policy might examine the specification (the written policy doc), test the mechanism (the actual login system), and interview individuals (the admins who apply it).',
    whyItMatters:
      'Matching the right assessment method (examine/interview/test) to the right object type is what makes an assessment credible instead of superficial.',
    howToApply:
      'When building a SAP, identify the assessment objects for each control before picking methods — don\'t just interview when testing is needed.',
    memoryTip: '"SMAI" — Specifications, Mechanisms, Activities, Individuals — the four things you can actually assess.',
  },
  {
    id: 'privacy-by-design',
    term: 'Privacy by Design',
    domainId: 'governance',
    definition:
      'A principle requiring privacy protections to be built into systems and processes from the earliest design stages, rather than added on afterward.',
    example:
      'A new mobile app is designed to collect only the minimum location data needed for its feature, with retention limits built into the database schema from day one — not bolted on after a privacy complaint.',
    whyItMatters:
      'Retrofitting privacy protections is expensive and often incomplete; regulators (and NIST Privacy Framework/AI RMF) increasingly expect privacy to be proactive, not reactive.',
    howToApply:
      'Include Privacy Officer/Privacy Impact Assessment checkpoints at the requirements and design phases of the SDLC, not just before launch.',
    memoryTip: '"By design" = privacy is in the blueprint, not the paint job applied after the building\'s built.',
  },
]

export function getTermsByDomain(domainId: string): TermEntry[] {
  return terms.filter((t) => t.domainId === domainId)
}
