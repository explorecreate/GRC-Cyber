import type { TermEntry } from './types'

export const terms: TermEntry[] = [
  {
    id: 'authorization-boundary',
    term: 'Authorization Boundary',
    domainId: 'scope',
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
    domainId: 'control-selection',
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
    domainId: 'governance',
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
    domainId: 'control-selection',
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
    domainId: 'system-compliance',
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
    domainId: 'governance',
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
    domainId: 'governance',
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
    domainId: 'scope',
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
    domainId: 'scope',
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
    domainId: 'control-selection',
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
    domainId: 'system-compliance',
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
    domainId: 'system-compliance',
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
    domainId: 'compliance-maintenance',
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
    domainId: 'compliance-maintenance',
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
  {
    id: 'implementation-statement',
    term: 'Implementation Statement',
    domainId: 'control-implementation',
    definition:
      'The system-specific portion of the SSP describing exactly how a selected control is actually implemented — the configured values, mechanisms, and processes in place, not just the control\'s generic name.',
    example:
      'For AC-7 (unsuccessful login attempts), a strong implementation statement says "the system locks an account for 30 minutes after 5 failed attempts, enforced by [specific mechanism]" rather than just restating the control text.',
    whyItMatters:
      'Assessors can only verify what\'s concretely documented — a vague or copy-pasted implementation statement is one of the most common findings in real-world assessments, and it usually means the control was selected but never actually built out.',
    howToApply:
      'When writing an SSP, always ask "could an assessor verify this exact sentence against my actual system?" If not, the statement needs more specificity.',
    memoryTip: 'Selection says "we will." Implementation says "we did, and here\'s exactly how" — the implementation statement is the "how."',
  },
  {
    id: 'stig',
    term: 'Security Technical Implementation Guide (STIG)',
    domainId: 'control-implementation',
    definition:
      'A detailed, product-specific configuration/hardening standard (published by DISA) used to implement secure configuration controls consistently across systems.',
    example:
      'A team hardening a Windows Server deployment applies the relevant Windows STIG to set specific registry keys, service configurations, and audit policies rather than inventing hardening settings from scratch.',
    whyItMatters:
      'STIGs turn a vague "harden the system" requirement into a concrete, auditable checklist — directly supporting the Implementation domain\'s emphasis on building controls correctly, not just selecting them.',
    howToApply:
      'When implementing configuration management controls, check whether a STIG exists for your specific product before writing custom hardening guidance.',
    memoryTip: '"STIG" = the recipe card for exactly how to configure one specific product securely.',
  },
  {
    id: 'change-control-board',
    term: 'Change Control Board (CCB)',
    domainId: 'control-implementation',
    definition:
      'A formal body that reviews and approves proposed changes to a system\'s configuration, ensuring changes don\'t silently undo implemented controls.',
    example:
      'An engineer wants to open a new firewall port for a vendor integration; the CCB reviews the request and confirms it doesn\'t weaken the system\'s implemented boundary protection controls before approving it.',
    whyItMatters:
      'A control that was carefully implemented can be broken just as easily by an uncontrolled change — the CCB is what protects implementation integrity over time, feeding directly into ongoing compliance maintenance.',
    howToApply:
      'Route any change touching a documented control through change management before deployment, and update the SSP\'s implementation statement if the change affects it.',
    memoryTip: 'Implementation builds the control; the CCB is the guard that keeps someone from accidentally tearing it back down.',
  },

  // ---- Filling out every domain to real course depth ----
  {
    id: 'enterprise-risk-management',
    term: 'Enterprise Risk Management (ERM)',
    domainId: 'governance',
    definition:
      'A holistic, organization-wide approach to identifying and managing risk across all business functions — financial, operational, reputational, and cyber — rather than looking at a single system in isolation.',
    example:
      'A hospital\'s ERM program tracks cyber risk to patient records alongside supply-chain risk for medical equipment and reputational risk from a billing scandal, all on the same risk register.',
    whyItMatters:
      'A system-level risk decision made without reference to the organization\'s broader risk picture can be locally reasonable but globally wrong — ERM is what connects the two.',
    howToApply:
      'When framing a system\'s risk, reference the organization\'s documented risk appetite (set at the ERM level) rather than inventing a system-specific standard of "acceptable."',
    memoryTip: '"Enterprise" = the whole company\'s risk picture, not just one system\'s slice of it.',
  },
  {
    id: 'business-impact-analysis',
    term: 'Business Impact Analysis (BIA)',
    domainId: 'governance',
    definition:
      'An analysis identifying an organization\'s critical business functions and quantifying the impact of their disruption, used to set recovery priorities and targets.',
    example:
      'A BIA determines that order processing must be restored within 4 hours (its RTO) because every hour of downtime costs the business $50,000 in lost sales, while internal reporting can wait 3 days.',
    whyItMatters:
      'Without a BIA, RTO/RPO targets in Domain 7 are just guesses — the BIA is what grounds contingency planning in actual business consequences instead of arbitrary numbers.',
    howToApply:
      'Conduct or reference a current BIA before setting any RTO/RPO target, and revisit it whenever a business function\'s criticality changes.',
    memoryTip: 'BIA answers "what actually breaks, and how badly, if this goes down?" — everything downstream depends on that answer.',
  },
  {
    id: 'documentation-hierarchy',
    term: 'Documentation Hierarchy (Policy → Standard → Procedure → Guideline)',
    domainId: 'governance',
    definition:
      'The layered structure of organizational documentation: policy (mandatory intent), standard (mandatory specifics), procedure (step-by-step instructions), and guideline (recommended, non-mandatory).',
    example:
      'Policy: "all systems must enforce strong authentication." Standard: "MFA is required for all privileged accounts." Procedure: the exact steps to enroll a user in MFA. Guideline: recommended (not required) use of a password manager.',
    whyItMatters:
      'Knowing where a requirement sits in this hierarchy tells you how mandatory and how specific it is — treating a guideline as a policy (or vice versa) misrepresents what\'s actually required.',
    howToApply:
      'When writing or citing organizational documentation, be explicit about which layer you\'re operating at, since that determines whether deviation requires a formal exception.',
    memoryTip: 'Policy says why, standard says what exactly, procedure says how, guideline says "here\'s a good idea."',
  },
  {
    id: 'fips-199-categorization',
    term: 'FIPS 199 Categorization',
    domainId: 'scope',
    definition:
      'The mandatory process of rating a system\'s impact level (Low/Moderate/High) separately for confidentiality, integrity, and availability, then taking the highest ("high-water mark") as the overall categorization.',
    example:
      'A system rated Low-Confidentiality, Moderate-Integrity, Low-Availability is categorized Moderate overall, because the highest of the three impact ratings governs.',
    whyItMatters:
      'This single decision determines which control baseline the system starts from in Domain 3 — an error here propagates through the entire rest of the RMF.',
    howToApply:
      'Rate each of the three security objectives independently first, then apply the high-water mark rule rather than trying to average or eyeball an overall rating.',
    memoryTip: 'High-water mark = the tide\'s highest point decides the overall level, even if the other two are much lower.',
  },
  {
    id: 'major-application',
    term: 'Major Application',
    domainId: 'scope',
    definition:
      'A system performing a clearly defined function significant enough to warrant its own dedicated security planning, as distinct from a General Support System providing shared infrastructure.',
    example:
      'An agency\'s benefits-processing system is a major application; the enterprise network it runs on is the GSS supporting it and many other applications.',
    whyItMatters:
      'Whether something is a major application or part of a GSS affects how it\'s categorized, authorized, and which controls it inherits versus implements itself.',
    howToApply:
      'When inventorying systems, explicitly classify each as a major application or GSS component rather than leaving the distinction implicit.',
    memoryTip: '"Major" = significant enough to stand on its own for authorization purposes, not just a piece of shared plumbing.',
  },
  {
    id: 'shared-responsibility-model',
    term: 'Shared Responsibility Model',
    domainId: 'scope',
    definition:
      'The cloud computing principle that security responsibility is split between the cloud provider and the customer, with the split point depending on the service model (IaaS, PaaS, or SaaS).',
    example:
      'In SaaS, the provider secures nearly the entire stack; the customer is still responsible for data classification and who has access to their own data within the app.',
    whyItMatters:
      'Misunderstanding where the provider\'s responsibility ends and the customer\'s begins is one of the most common sources of real-world cloud security gaps.',
    howToApply:
      'Explicitly document the responsibility split for every cloud service in scope, rather than assuming the provider "handles security."',
    memoryTip: 'The customer always keeps the keys to their own data, no matter how much the provider manages underneath.',
  },
  {
    id: 'sbom-term',
    term: 'Software Bill of Materials (SBOM)',
    domainId: 'scope',
    definition:
      'A formal, itemized inventory of the components — including third-party and open-source — that make up a piece of software, used to manage supply chain risk.',
    example:
      'When a critical vulnerability is disclosed in a popular open-source library, an SBOM lets an organization instantly check which of its systems include that library, instead of manually auditing every codebase.',
    whyItMatters:
      'You can\'t assess or respond to supply chain risk in components you don\'t know you\'re using — an SBOM makes that risk visible instead of hidden inside a dependency tree.',
    howToApply:
      'Require an SBOM as part of scoping any system with significant third-party or open-source components, and keep it current as dependencies change.',
    memoryTip: 'SBOM = the ingredients label for software — you can\'t manage a recall if you don\'t know what\'s inside.',
  },
  {
    id: 'control-enhancement',
    term: 'Control Enhancement',
    domainId: 'control-selection',
    definition:
      'An addition to a base control in SP 800-53 that increases its strength or adds functionality, layered on top of (not replacing) the base requirement.',
    example:
      'The base access control statement might require unique user IDs; an enhancement adds automated enforcement of account lockout after repeated failed attempts.',
    whyItMatters:
      'Higher-impact systems (Moderate/High baselines) require more enhancements — recognizing the difference between a base control and its enhancements is essential to correctly reading the 800-53 catalog.',
    howToApply:
      'When selecting controls, check whether the relevant baseline requires specific enhancements, not just the base control, before finalizing the selection.',
    memoryTip: 'Base control = the minimum; enhancement = the upgrade bolted on top for higher-risk systems.',
  },
  {
    id: 'organization-defined-parameter',
    term: 'Organization-Defined Parameter (ODP)',
    domainId: 'control-selection',
    definition:
      'A blank within a control\'s statement that the organization fills in with its own specific value, tailoring the control\'s rigor to its own risk tolerance.',
    example:
      'A control might read "enforce a minimum password length of [Assignment: organization-defined value]" — the organization decides and documents that the value is 14 characters.',
    whyItMatters:
      'A control isn\'t truly "selected" until its ODPs are filled in with real values — an unfilled parameter is an incomplete selection decision, not a finished one.',
    howToApply:
      'Document every ODP value explicitly during selection, and carry that exact value forward into the SSP\'s implementation statement in Domain 4.',
    memoryTip: 'ODP = the fill-in-the-blank the organization owns; the control isn\'t finished until the blank is filled.',
  },
  {
    id: 'hybrid-control',
    term: 'Hybrid Control',
    domainId: 'control-selection',
    definition:
      'A control allocated so that part of its implementation is inherited from a common control provider and part is implemented specifically by the system itself.',
    example:
      'An organization-wide incident response policy is inherited (common), while the system\'s specific detection tooling and escalation contacts are implemented locally (system-specific) — together forming a hybrid control.',
    whyItMatters:
      'Hybrid controls require documenting and later assessing both halves separately — treating them as fully inherited (or fully system-specific) misses real risk.',
    howToApply:
      'When allocating a control, explicitly separate which portion is inherited versus system-specific before implementation begins.',
    memoryTip: 'Hybrid = split down the middle — part borrowed, part built by you.',
  },
  {
    id: 'privacy-control-baseline',
    term: 'Privacy Control Baseline (PT family)',
    domainId: 'control-selection',
    definition:
      'The set of SP 800-53 controls (primarily the PT — PII Processing and Transparency — family) addressing privacy-specific requirements like consent, transparency, and data minimization, selected alongside the traditional security baseline.',
    example:
      'A system collecting PII selects PT controls governing consent management and data retention limits in addition to its Moderate security baseline.',
    whyItMatters:
      'Privacy risk isn\'t automatically covered by security controls — a system can be fully secure (confidential, available, tamper-proof) while still processing PII in a way that violates privacy expectations or law.',
    howToApply:
      'For any system processing PII, select privacy controls as a first-class part of the baseline decision, not an optional add-on considered later.',
    memoryTip: 'Security asks "can someone steal it?" Privacy asks "should we even be collecting it this way?" — different questions, both need selected controls.',
  },
  {
    id: 'secure-configuration-management',
    term: 'Secure Configuration Management',
    domainId: 'control-implementation',
    definition:
      'The implementation practice of applying and maintaining hardened, standardized configuration settings across systems, turning a general security requirement into a concrete, auditable baseline.',
    example:
      'A team applies a standardized hardening baseline to every new server image before deployment, rather than configuring each server ad hoc.',
    whyItMatters:
      'Inconsistent configuration is one of the most common real-world sources of exploitable weakness — secure configuration management is what makes "hardened" a verifiable state rather than a vague aspiration.',
    howToApply:
      'Use a documented, repeatable hardening baseline (like a STIG) for each product type, and track configuration drift from that baseline over time.',
    memoryTip: 'Configuration management is how "we said we\'d harden it" becomes "here\'s proof it\'s actually hardened, every time."',
  },
  {
    id: 'devsecops-integration',
    term: 'DevSecOps Integration',
    domainId: 'control-implementation',
    definition:
      'Building control implementation and verification directly into the development/deployment pipeline (CI/CD), rather than treating security as a separate step performed after development is complete.',
    example:
      'A CI/CD pipeline automatically scans infrastructure-as-code templates for misconfigurations and blocks deployment if a required control setting is missing.',
    whyItMatters:
      'Catching implementation gaps during development is far cheaper than catching them at formal assessment — DevSecOps shifts the discovery of problems as early as possible.',
    howToApply:
      'Add automated security/configuration checks as gates in the deployment pipeline for any control that can be verified programmatically.',
    memoryTip: 'DevSecOps = security checked at every commit, not just once at the end.',
  },
  {
    id: 'implementation-verification',
    term: 'Implementation Verification / Self-Testing',
    domainId: 'control-implementation',
    definition:
      'A readiness check — self-testing or peer review — performed by the implementation team before formal, independent assessment, to catch obvious gaps early.',
    example:
      'Before the formal SAR-producing assessment, a team runs its own penetration test against a newly implemented boundary control and fixes what it finds.',
    whyItMatters:
      'Self-testing isn\'t a substitute for independent assessment (Domain 5) — but skipping it means the formal assessment wastes time and credibility on easily preventable findings.',
    howToApply:
      'Build a self-testing or peer-review checkpoint into the implementation process before requesting formal assessment.',
    memoryTip: 'Self-testing is proofreading your own work before you hand it to an editor — it doesn\'t replace the editor, it just avoids embarrassing typos.',
  },
  {
    id: 'security-assessment-report',
    term: 'Security Assessment Report (SAR)',
    domainId: 'assessment-audit',
    definition:
      'The document reporting the results of a control assessment — findings, risk ratings, and recommendations — produced after the assessment defined in the SAP is carried out.',
    example:
      'A SAR documents that 47 of 50 assessed controls are satisfied, with 3 findings rated Moderate risk and specific remediation recommendations for each.',
    whyItMatters:
      'The SAR is the primary evidence the AO relies on in Domain 6 — without a credible SAR, an authorization decision would just be a guess.',
    howToApply:
      'Ensure every finding in the SAR is specific and actionable enough to become a concrete POA&M entry, not a vague general concern.',
    memoryTip: 'SAP is the plan for the exam; SAR is the graded results that come back afterward.',
  },
  {
    id: 'security-assessment-plan',
    term: 'Security Assessment Plan (SAP)',
    domainId: 'assessment-audit',
    definition:
      'The plan, written before assessment begins, describing scope, methods (examine/interview/test), and procedures for assessing a system\'s controls.',
    example:
      'A SAP specifies that access control (AC family) will be assessed via testing and interview, while planning documents (PL family) will be assessed via examination only.',
    whyItMatters:
      'Assessing without a plan risks inconsistent, incomplete coverage — the SAP is what makes an assessment systematic and repeatable rather than ad hoc.',
    howToApply:
      'Match assessment methods to each control\'s assessment object (specification, mechanism, activity, or individual) explicitly in the SAP before assessment starts.',
    memoryTip: 'No SAP, no structure — you can\'t grade a test that was never designed.',
  },
  {
    id: 'reciprocity',
    term: 'Reciprocity',
    domainId: 'assessment-audit',
    definition:
      'The practice of accepting an existing, credible assessment or authorization from one organization rather than duplicating that work from scratch.',
    example:
      'A federal agency accepts a cloud service\'s existing FedRAMP authorization instead of requiring its own full independent assessment of the same service.',
    whyItMatters:
      'Reciprocity avoids wasted duplicate effort across organizations assessing the same system or service, as long as the existing assessment is genuinely credible and current.',
    howToApply:
      'Before commissioning a new assessment, check whether a credible, current assessment or authorization already exists that can be reused instead.',
    memoryTip: 'Reciprocity = "don\'t regrade a paper someone trustworthy already graded."',
  },
  {
    id: 'coverage-and-depth',
    term: 'Coverage & Depth (Assessment Attributes)',
    domainId: 'assessment-audit',
    definition:
      'Two attributes describing assessment rigor: coverage is how much of the system was assessed (a sample vs. every instance), and depth is how thoroughly each method was applied (a basic review vs. a comprehensive one).',
    example:
      'An assessment with high coverage but low depth might briefly check every server; one with low coverage but high depth might exhaustively test just a representative sample.',
    whyItMatters:
      'Two assessments of the same system can reach very different conclusions depending on their coverage and depth — knowing these attributes lets you judge how much confidence a SAR\'s conclusions deserve.',
    howToApply:
      'Specify target coverage and depth explicitly in the SAP for each control, rather than leaving assessment rigor implicit or inconsistent.',
    memoryTip: 'Coverage = how much ground you covered; depth = how hard you dug where you did look.',
  },
  {
    id: 'authorizing-official-role',
    term: 'Authorizing Official (AO)',
    domainId: 'system-compliance',
    definition:
      'The senior official with the formal authority to accept responsibility for operating a system at an acceptable level of risk, and who makes the final compliance decision.',
    example:
      'A Chief Information Officer serving as AO reviews the authorization package for a new payroll system and formally accepts the documented residual risk before it goes live.',
    whyItMatters:
      'Every prior domain — governance, scoping, selection, implementation, assessment — ultimately exists to give the AO enough information to make one accountable, risk-based decision.',
    howToApply:
      'Ensure the AO (not the system owner or ISSO) is the one formally documented as making and signing the authorization decision.',
    memoryTip: 'Everyone else builds the case; the AO is the one who signs the verdict.',
  },
  {
    id: 'iatt-term',
    term: 'Interim Authorization to Test (IATT)',
    domainId: 'system-compliance',
    definition:
      'A time-limited authorization allowing a system to operate in a test environment only, not production, typically issued when a system needs real-world testing before full authorization.',
    example:
      'A new system is granted an IATT to run integration tests against live-like data in a staging environment, while its full ATO is still pending final assessment.',
    whyItMatters:
      'An IATT is not a shortcut to production — mistaking it for a full ATO is a common and serious compliance error.',
    howToApply:
      'Track IATT expiration dates carefully, and never allow a system operating under an IATT to process production data or workloads.',
    memoryTip: 'IATT = "test only, not for real" — a rehearsal permit, not opening night.',
  },
  {
    id: 'denial-of-authorization',
    term: 'Denial of Authorization',
    domainId: 'system-compliance',
    definition:
      'A formal AO decision that a system\'s residual risk is unacceptable and it may not operate until that risk is sufficiently addressed.',
    example:
      'An AO denies authorization for a system with several unmitigated high-risk findings and no credible remediation plan, rather than issuing a conditional ATO.',
    whyItMatters:
      'Denial is a legitimate, expected outcome of a genuine risk-based process — a framework where every system always gets authorized regardless of risk isn\'t really risk-based at all.',
    howToApply:
      'Document the specific reasons for denial and the conditions that would need to change before reconsideration, just as thoroughly as you would document an approval.',
    memoryTip: 'Denial isn\'t a failure of the process — it\'s the process working exactly as intended when risk is too high.',
  },
  {
    id: 'authorization-package',
    term: 'Authorization Package',
    domainId: 'system-compliance',
    definition:
      'The complete set of documents — SSP, SAR, and POA&M — assembled and submitted to the AO to support a compliance decision.',
    example:
      'Before requesting authorization, a system owner assembles the current SSP, the latest SAR, and an up-to-date POA&M into a single package for AO review.',
    whyItMatters:
      'An incomplete package (e.g., a stale SAR or missing POA&M items) undermines the AO\'s ability to make an informed decision, regardless of how good the underlying controls actually are.',
    howToApply:
      'Verify all three components are current and consistent with each other before submitting a package for authorization.',
    memoryTip: 'Three documents, one package, one decision: SSP (what it is), SAR (does it work), POA&M (what\'s still open).',
  },
  {
    id: 'risk-acceptance-vs-transfer',
    term: 'Risk Acceptance vs. Risk Transfer',
    domainId: 'system-compliance',
    definition:
      'Risk acceptance means the organization chooses to live with a risk as-is; risk transfer means shifting some of the impact to another party, such as through insurance or contract terms.',
    example:
      'An AO accepts the residual risk of a low-impact system directly, while an organization transfers some financial impact of a potential breach by purchasing cyber insurance.',
    whyItMatters:
      'These are two different treatment strategies with different implications — transfer reduces financial impact but doesn\'t reduce the likelihood or technical risk itself.',
    howToApply:
      'When documenting a compliance decision, be explicit about which treatment strategy (acceptance, transfer, mitigation, or avoidance) was chosen for each significant risk.',
    memoryTip: 'Acceptance = you keep the risk; transfer = someone else absorbs part of the fallout — the risk itself doesn\'t vanish either way.',
  },
  {
    id: 'iscm-strategy',
    term: 'ISCM Strategy',
    domainId: 'compliance-maintenance',
    definition:
      'A documented strategy (per NIST SP 800-137) defining what will be monitored, how often, and what triggers escalation — the operational plan behind continuous monitoring.',
    example:
      'An ISCM strategy specifies daily vulnerability scans, monthly access reviews, and an automatic AO alert if any critical vulnerability remains unpatched for more than 15 days.',
    whyItMatters:
      'Without a defined strategy, "continuous monitoring" becomes whatever gets checked informally and inconsistently — the strategy is what makes it a real, auditable program.',
    howToApply:
      'Define monitoring frequency and escalation triggers explicitly for each control category, not just for the system as a whole.',
    memoryTip: 'ISCM strategy = the answer to "what exactly are we watching, how often, and who gets called when it matters?"',
  },
  {
    id: 'configuration-drift',
    term: 'Configuration Drift',
    domainId: 'compliance-maintenance',
    definition:
      'The gradual, often unnoticed divergence of a system\'s actual configuration from its documented, approved baseline over time.',
    example:
      'A server\'s hardening baseline required a specific firewall rule set, but over six months of ad hoc changes, several unauthorized ports were opened without anyone updating the documentation.',
    whyItMatters:
      'Drift means the SSP\'s implementation statements no longer reflect reality — a control that was correctly implemented and assessed can silently stop being true.',
    howToApply:
      'Monitor for configuration drift as part of the ISCM strategy, and route any detected drift through change management to either fix it or formally update the baseline.',
    memoryTip: 'Drift is entropy for compliance — left unchecked, documented reality and actual reality slowly stop matching.',
  },
  {
    id: 'incident-response-lifecycle',
    term: 'Incident Response Lifecycle',
    domainId: 'compliance-maintenance',
    definition:
      'The four-phase NIST SP 800-61 model for handling security incidents: Preparation, Detection & Analysis, Containment/Eradication/Recovery, and Post-Incident Activity.',
    example:
      'A phishing-triggered compromise moves through detection (an alert fires), containment (the account is disabled), eradication (malware is removed), recovery (the account is restored), and finally a post-incident review.',
    whyItMatters:
      'Skipping a phase — especially jumping straight to eradication without proper containment — can let an incident spread further or destroy evidence needed for analysis.',
    howToApply:
      'Map your organization\'s incident response plan explicitly to these four phases, so responders always know which phase they\'re in and what comes next.',
    memoryTip: 'Prepare, detect, contain-and-fix, learn — in that order, every time.',
  },
  {
    id: 'bcp-vs-drp',
    term: 'BCP vs. DRP',
    domainId: 'compliance-maintenance',
    definition:
      'A Business Continuity Plan (BCP) keeps business functions running during and after a disruption; a Disaster Recovery Plan (DRP) specifically restores IT systems and infrastructure.',
    example:
      'During a data center outage, the DRP governs failing over servers to a backup site, while the BCP governs how the business keeps serving customers (e.g., via manual processes) while that failover happens.',
    whyItMatters:
      'Conflating the two leaves gaps — a DRP alone doesn\'t address how the business functions while IT is being restored, and a BCP alone doesn\'t specify the technical recovery steps.',
    howToApply:
      'Maintain both plans, cross-referenced, and test them together rather than treating IT recovery and business continuity as unrelated concerns.',
    memoryTip: 'DRP fixes the systems; BCP keeps the business alive while the systems get fixed.',
  },
  {
    id: 'rto-rpo-term',
    term: 'RTO & RPO',
    domainId: 'compliance-maintenance',
    definition:
      'Recovery Time Objective (RTO) is the maximum acceptable downtime after a disruption; Recovery Point Objective (RPO) is the maximum acceptable data loss, measured backward in time from the incident.',
    example:
      'An RTO of 4 hours means the system must be back up within 4 hours; an RPO of 1 hour means at most 1 hour of data (e.g., the last hour of transactions) can be lost.',
    whyItMatters:
      'These targets, grounded in the BIA from Domain 1, directly drive technical decisions like backup frequency (for RPO) and failover architecture (for RTO) — they\'re not just paperwork.',
    howToApply:
      'Set RTO/RPO targets based on the BIA\'s actual business-impact findings, then verify backup and recovery infrastructure can actually meet them — don\'t just pick numbers that sound reasonable.',
    memoryTip: 'RTO = how long can we be down; RPO = how much can we lose — time down vs. data lost, two different clocks.',
  },
  {
    id: 'system-decommissioning',
    term: 'System Decommissioning',
    domainId: 'compliance-maintenance',
    definition:
      'The secure retirement of a system at end-of-life, including data sanitization, access revocation, and updating the system inventory and authorization records.',
    example:
      'When a legacy application is retired, its data is securely wiped from storage media, its accounts are deactivated, and its entry is removed from the active system inventory and authorization tracking.',
    whyItMatters:
      'An improperly decommissioned system can leak data (unsanitized storage) or leave a "ghost" authorization/attack surface that no one is actively monitoring or accounting for.',
    howToApply:
      'Treat decommissioning as a formal, checklist-driven process — including data sanitization and inventory updates — rather than simply turning a system off.',
    memoryTip: 'Compliance maintenance doesn\'t end when a system goes live — it ends when the system is properly buried, not just abandoned.',
  },
]

export function getTermsByDomain(domainId: string): TermEntry[] {
  return terms.filter((t) => t.domainId === domainId)
}
