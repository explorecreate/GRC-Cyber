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
  {
    id: 'three-lines-of-defense',
    term: 'Three Lines of Defense',
    domainId: 'governance',
    definition:
      'A governance model separating risk responsibility into three groups: operational management (owns and manages risk), risk/compliance functions (oversee and monitor), and internal audit (independent assurance).',
    example:
      'A system owner (1st line) implements access controls; the compliance team (2nd line) reviews whether they meet policy; internal audit (3rd line) independently verifies the whole process actually works.',
    whyItMatters:
      'Without this separation, the people implementing controls would also be the only ones checking their own work — undermining objectivity and letting risk go unnoticed.',
    howToApply:
      'When designing governance structures, make sure no single function is playing more than one "line" role for the same system.',
    memoryTip: 'Think of it like a sports team: players (1st line), coaches (2nd line), and referees (3rd line) — each has a distinct, non-overlapping job.',
  },
  {
    id: 'risk-appetite',
    term: 'Risk Appetite / Risk Tolerance',
    domainId: 'risk-management',
    definition:
      'Risk appetite is the amount and type of risk an organization is willing to pursue in service of its objectives; risk tolerance is the acceptable variation around that target.',
    example:
      'A bank may have low risk appetite for fraud losses but a higher appetite for innovation risk when piloting new fintech products.',
    whyItMatters:
      'Every risk decision — accept, mitigate, transfer, avoid — is ultimately measured against this baseline; without a defined appetite, "acceptable risk" is just a guess.',
    howToApply:
      'Document risk appetite at the organizational level (often set by the board/executives) and reference it explicitly when the AO makes authorization decisions.',
    memoryTip: '"Appetite" = how much risk you want to eat; "tolerance" = how much you can stomach without getting sick.',
  },
  {
    id: 'threat-vulnerability-pairing',
    term: 'Threat/Vulnerability Pairing',
    domainId: 'risk-management',
    definition:
      'The risk-assessment practice of matching a specific threat source or event to the specific vulnerability it could exploit, in order to estimate likelihood.',
    example:
      'Threat: a phishing actor. Vulnerability: employees haven\'t completed security awareness training. Pairing these two estimates the likelihood of a successful phishing compromise.',
    whyItMatters:
      'Risk isn\'t just "we have a vulnerability" or "there\'s a threat out there" in isolation — it\'s the intersection of the two that actually produces risk.',
    howToApply:
      'When building a risk assessment, explicitly list threat sources next to the vulnerabilities they could exploit rather than tracking them as separate, unconnected lists.',
    memoryTip: 'No pairing, no risk: a lock (vulnerability) with no burglar (threat) nearby isn\'t much of a risk.',
  },
  {
    id: 'interconnection-agreement',
    term: 'Interconnection (ISA/MOU pairing)',
    domainId: 'third-party-risk',
    definition:
      'A formal arrangement — typically an MOU (business terms) paired with an ISA (technical/security requirements) — governing how two systems owned by different parties connect and exchange data.',
    example:
      'Agency A\'s case-management system connects to Agency B\'s identity-verification service; the MOU sets responsibilities and costs, the ISA specifies encryption, ports, and authentication requirements for the actual connection.',
    whyItMatters:
      'Every interconnection crossing an authorization boundary introduces risk from a system you don\'t fully control — these agreements are how that shared risk gets formally acknowledged and managed.',
    howToApply:
      'Inventory every interconnection at boundary-definition time, and don\'t authorize a system with undocumented connections.',
    memoryTip: 'MOU = the "why/who" handshake; ISA = the "how" wiring diagram.',
  },
  {
    id: 'general-support-system',
    term: 'General Support System (GSS)',
    domainId: 'third-party-risk',
    definition:
      'An interconnected set of information resources under the same direct management control that shares common functionality, e.g., a local area network or data center infrastructure.',
    example:
      'An agency\'s enterprise network — routers, switches, shared file servers — is a GSS that many individual applications rely on.',
    whyItMatters:
      'GSSs are often the source of common/inherited controls; understanding whether something is a GSS or a major application changes how it\'s categorized and authorized.',
    howToApply:
      'Identify which parts of your environment are shared infrastructure (GSS) versus a distinct, mission-specific application, and document the difference in your system inventory.',
    memoryTip: '"General Support" = the shared plumbing everyone\'s apps run through.',
  },
  {
    id: 'baseline-tailoring-vs-baseline-selection',
    term: 'Control Baseline',
    domainId: 'controls',
    definition:
      'A pre-defined set of controls (Low, Moderate, or High) from SP 800-53B, selected based on a system\'s FIPS 199 categorization, that serves as the starting point before tailoring.',
    example:
      'A system categorized Moderate-Moderate-Low for C-I-A uses the overall Moderate baseline as its starting control set, per NIST guidance for handling mixed impact levels.',
    whyItMatters:
      'Skipping straight to "what controls do we want" without starting from the correct baseline risks both gaps and wasted effort — baselines exist so organizations aren\'t reinventing control selection from scratch.',
    howToApply:
      'Always select the baseline from the categorization result first, then tailor — never tailor before you\'ve established the correct starting baseline.',
    memoryTip: 'Baseline = the recipe\'s base ingredients; tailoring = adjusting the seasoning to taste.',
  },
  {
    id: 'assessment-methods',
    term: 'Examine / Interview / Test',
    domainId: 'assessment-audit',
    definition:
      'The three assessment methods defined in SP 800-53A: examine (review specifications like policy documents), interview (talk to individuals who apply a control), and test (exercise a mechanism or activity directly).',
    example:
      'To assess an access-control policy: examine the written policy, interview the system administrator about how they apply it, and test by attempting an unauthorized login.',
    whyItMatters:
      'Relying on only one method (e.g., just reading the policy) gives a shallow, unreliable picture — credible assessments combine methods appropriate to what\'s being verified.',
    howToApply:
      'For each control in the SAP, explicitly choose which method(s) fit the assessment object being evaluated, rather than defaulting to interviews for everything.',
    memoryTip: '"Read it, ask about it, try it" — examine, interview, test.',
  },
  {
    id: 'independent-assessor',
    term: 'Assessor Independence',
    domainId: 'assessment-audit',
    definition:
      'The principle that the individual or team assessing a system\'s controls should have no vested interest in the outcome — ideally organizationally separate from those who implemented the controls.',
    example:
      'A third-party assessment organization (3PAO), rather than the system\'s own development team, performs the control assessment before authorization.',
    whyItMatters:
      'An assessor grading their own work is far more likely to miss or downplay real weaknesses — independence is what makes the SAR credible to the AO.',
    howToApply:
      'When assigning assessors, verify they had no role in implementing the controls being assessed, and document that independence in the SAP.',
    memoryTip: 'You wouldn\'t trust a student to grade their own exam — same logic applies to control assessments.',
  },
  {
    id: 'authorization-decision-document',
    term: 'Authorization Decision Document',
    domainId: 'authorization',
    definition:
      'The formal record of the AO\'s risk-based decision — including the type of authorization granted (or denied), any terms/conditions, and the authorization termination date.',
    example:
      'An AO issues an ATO valid for three years, conditioned on closing two high-risk POA&M items within 90 days; both the decision and conditions are captured in this document.',
    whyItMatters:
      'Without a documented decision, there\'s no formal accountability trail showing who accepted what risk, when, and under what conditions.',
    howToApply:
      'Ensure every authorization decision — full ATO, IATT, or denial — is captured in writing with explicit conditions and an expiration/reauthorization trigger.',
    memoryTip: 'If it isn\'t written down, the AO didn\'t really decide it — no paper, no accountability.',
  },
  {
    id: 'event-driven-reauthorization',
    term: 'Event-Driven Reauthorization',
    domainId: 'authorization',
    definition:
      'Reauthorization triggered by a significant event or change (e.g., a major breach, architecture change, or new threat) rather than waiting for the scheduled reauthorization date.',
    example:
      'A system migrates from on-premises to a new cloud provider mid-cycle; that architecture change triggers an out-of-cycle risk review and possible reauthorization instead of waiting three years.',
    whyItMatters:
      'Risk doesn\'t wait for a calendar date — an authorization based on a system that no longer exists in that form is meaningless.',
    howToApply:
      'Define clear triggers (e.g., major change categories) in the ISCM strategy that automatically prompt an AO risk review outside the normal cycle.',
    memoryTip: '"Event-driven" = the calendar isn\'t the trigger, the change is.',
  },
  {
    id: 'incident-categorization',
    term: 'Incident Categorization',
    domainId: 'incident-management',
    definition:
      'Classifying a security incident by type and severity (e.g., using a scale like CISA\'s functional impact categories) to drive appropriate response and reporting.',
    example:
      'A phishing email caught before any compromise might be categorized low-severity; a ransomware outage affecting mission-critical systems is categorized as a high-severity, reportable incident.',
    whyItMatters:
      'Categorization determines response urgency, escalation path, and whether external reporting (e.g., to CISA) is legally required.',
    howToApply:
      'Build a categorization scheme into the incident response plan before an incident happens, so responders aren\'t guessing severity in the moment.',
    memoryTip: 'Triage like an ER: not every "incident" needs the same response — sort first, act second.',
  },
  {
    id: 'lessons-learned',
    term: 'Lessons Learned / Post-Incident Review',
    domainId: 'incident-management',
    definition:
      'A structured review conducted after an incident is resolved, capturing what happened, what worked, what didn\'t, and what should change going forward.',
    example:
      'After a ransomware incident, the team documents that backups were outdated and updates the backup policy and RPO targets as a direct result.',
    whyItMatters:
      'Without this step, organizations repeat the same mistakes — the whole point of incident response maturing over time depends on this feedback loop.',
    howToApply:
      'Schedule a lessons-learned review as a mandatory, non-skippable final phase of every incident response — not an optional nice-to-have.',
    memoryTip: 'An incident without a lessons-learned review is a mistake you\'re scheduled to repeat.',
  },
]

export function getTermsByDomain(domainId: string): TermEntry[] {
  return terms.filter((t) => t.domainId === domainId)
}
