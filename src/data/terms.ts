import type { TermEntry } from './types'

export const terms: TermEntry[] = [
  {
    id: 'authorization-boundary',
    term: 'Authorization Boundary',
    domainId: 'scope',
    definition:
      'Everything that falls under one Authorizing Official\'s authority, and gets covered by one authorization decision.',
    example:
      'A cloud-hosted HR app, its database, and its API gateway are inside the boundary. The outside identity provider it connects to is not — that\'s treated as a separate connection.',
    whyItMatters:
      'Every step after this — categorizing, selecting controls, assessing, authorizing — only applies to what\'s inside this boundary. Draw it wrong, and you either leave things unprotected or waste effort on things you don\'t control.',
    howToApply:
      'Draw the boundary as a diagram early on. List every connection crossing it, and document each one with an ISA/MOU before authorization.',
    memoryTip: 'The boundary is whatever the AO can actually take responsibility for. If they can\'t own the risk for it, it\'s outside the boundary.',
  },
  {
    id: 'poam',
    term: 'Plan of Action and Milestones (POA&M)',
    domainId: 'assessment-audit',
    definition:
      'A living tracking document for known weaknesses in a system — what\'s wrong, the plan to fix it, what it will take, and by when.',
    example:
      'An assessment finds that admin accounts don\'t require multi-factor authentication. The POA&M records this, assigns someone to fix it, sets a budget, and gives a 90-day deadline.',
    whyItMatters:
      'It\'s what turns "we found a problem" into "someone is accountable for fixing it." The AO checks open POA&M items every time they make an authorization decision.',
    howToApply:
      'Any assessment finding that isn\'t fixed right away becomes a POA&M entry. Review and update it regularly — not just right before reauthorization.',
    memoryTip: 'POA&M = a tracked promise to fix something, not a one-time report you file and forget.',
  },
  {
    id: 'common-control',
    term: 'Common Control',
    domainId: 'control-selection',
    definition:
      'A control that\'s built once, in a central place, and shared (inherited) by multiple systems instead of each system building its own version.',
    example:
      'One badge-and-guard program protects a data center that hosts ten different applications. Each application inherits that physical security control rather than building its own.',
    whyItMatters:
      'Sharing controls saves duplicated work and keeps things consistent. But it also means a system\'s security depends on something it doesn\'t directly manage — that dependency has to be tracked.',
    howToApply:
      'In the SSP, mark inherited controls as "common," name who provides them, and confirm that provider\'s own assessment is up to date.',
    memoryTip: '"Common" is like shared house rules everyone in the building follows — set once, by the landlord.',
  },
  {
    id: 'residual-risk',
    term: 'Residual Risk',
    domainId: 'governance',
    definition: 'The risk that\'s left over after you\'ve put controls in place. You almost never get risk down to zero.',
    example:
      'A database gets encryption, MFA, and monitoring — but there\'s still some risk that an employee with legitimate access could misuse it. That leftover risk is the residual risk.',
    whyItMatters:
      'Authorizing a system isn\'t about eliminating all risk. It\'s about accepting the risk that\'s left over. Understanding that difference is central to the whole RMF.',
    howToApply:
      'Write the residual risk down clearly in the authorization package, so the AO can make a real, informed decision — not just check a box.',
    memoryTip: 'Think of pouring water out of a glass: residual risk is what\'s still left in the glass. You never empty it all the way.',
  },
  {
    id: 'tailoring',
    term: 'Control Tailoring',
    domainId: 'control-selection',
    definition:
      'Adjusting a starting set of controls (a baseline) to actually fit your system, instead of applying it exactly as written.',
    example:
      'A baseline control about badge-based physical access doesn\'t make sense for a cloud-only system with no physical office — so it gets scoped out and replaced with the cloud provider\'s equivalent.',
    whyItMatters:
      'A baseline is a starting point, not a finished answer. Applying it blindly either leaves gaps or wastes effort on controls that don\'t make sense for your system.',
    howToApply:
      'For every baseline control, ask: does this apply as-is, does it need a substitute, or should it be dropped — and write down why.',
    memoryTip: 'Tailoring is like a tailor altering a suit off the rack so it actually fits you.',
  },
  {
    id: 'ongoing-authorization',
    term: 'Ongoing Authorization',
    domainId: 'system-compliance',
    definition:
      'Keeping the AO\'s risk picture current using real-time or near-real-time monitoring data, instead of relying only on a full reassessment every few years.',
    example:
      'Instead of a full 3-year reassessment cycle, a system feeds scan results, configuration alerts, and access reviews into a dashboard the AO checks every month.',
    whyItMatters:
      'Threats and systems change constantly. An authorization based on data from years ago doesn\'t reflect the risk that actually exists today.',
    howToApply:
      'Build a monitoring strategy that defines what gets watched, how often, and what triggers a fresh AO review outside the normal schedule.',
    memoryTip: 'Ongoing authorization is a video, not a photo — it keeps updating instead of freezing risk at one moment.',
  },
  {
    id: 'assessment-object',
    term: 'Assessment Object',
    domainId: 'assessment-audit',
    definition:
      'The specific thing being checked during an assessment: a document, a piece of technology, a process, or a person.',
    example:
      'Checking an access-control policy might mean reading the written policy (the document), testing the login system (the technology), and interviewing the admins who use it (the people).',
    whyItMatters:
      'Matching the right method to the right kind of object is what makes an assessment thorough instead of shallow.',
    howToApply:
      'Before picking a method, figure out what type of object you\'re checking — don\'t just default to interviews when a real test is needed.',
    memoryTip: 'Four things you can check: a document, a piece of tech, a process, or a person.',
  },
  {
    id: 'privacy-by-design',
    term: 'Privacy by Design',
    domainId: 'governance',
    definition:
      'The idea that privacy protections should be built into a system from the very start of design — not bolted on later.',
    example:
      'A new mobile app is built to collect only the location data it actually needs, with data-deletion rules built into the database from day one — not added later after a complaint.',
    whyItMatters:
      'Adding privacy protections after a system is already built is expensive and often incomplete. Regulators increasingly expect organizations to plan for privacy up front, not react to problems after the fact.',
    howToApply:
      'Bring in the Privacy Officer (or do a Privacy Impact Assessment) at the very start of a project — during requirements and design — not just before launch.',
    memoryTip: '"By design" means privacy is part of the blueprint, not paint you add after the building is finished.',
  },
  {
    id: 'three-lines-of-defense',
    term: 'Three Lines of Defense',
    domainId: 'governance',
    definition:
      'A model that splits risk responsibility into three separate groups: the people who manage risk day to day, the people who oversee them, and independent auditors who check that everything actually works.',
    example:
      'A system owner (1st line) sets up access controls. The compliance team (2nd line) checks that those controls follow policy. Internal audit (3rd line) independently verifies the whole process actually works.',
    whyItMatters:
      'Without this split, the same people building controls would be the only ones checking their own work. That makes it easy for problems to go unnoticed.',
    howToApply:
      'When setting up governance, make sure no single team is doing more than one of these three jobs for the same system.',
    memoryTip: 'Think of a sports team: players (1st line) play the game, coaches (2nd line) oversee them, and referees (3rd line) make the independent call. Each job stays separate.',
  },
  {
    id: 'risk-appetite',
    term: 'Risk Appetite / Risk Tolerance',
    domainId: 'governance',
    definition:
      'Risk appetite is how much risk an organization is willing to take on to reach its goals. Risk tolerance is how much that can vary before it becomes a problem.',
    example:
      'A bank might have very low appetite for fraud losses, but a higher appetite for risk when testing a new fintech product.',
    whyItMatters:
      'Every risk decision — accept it, reduce it, transfer it, or avoid it — gets measured against this baseline. Without a clear risk appetite, "acceptable risk" is just a guess, and everyone guesses differently.',
    howToApply:
      'Make sure risk appetite is written down at the organizational level (usually set by leadership), and refer back to it whenever the AO makes an authorization decision.',
    memoryTip: 'Appetite = how much risk you want to take on. Tolerance = how much you can handle before it hurts.',
  },
  {
    id: 'threat-vulnerability-pairing',
    term: 'Threat/Vulnerability Pairing',
    domainId: 'governance',
    definition:
      'Matching a specific threat to the specific weakness it could exploit, so you can estimate how likely an attack really is.',
    example:
      'Threat: a phishing scammer. Vulnerability: employees haven\'t had security training. Put those two together, and you get a real estimate of how likely a phishing attack is to succeed.',
    whyItMatters:
      'A weakness by itself isn\'t risk. A threat by itself isn\'t risk either. Risk shows up when the two are paired together — that\'s the piece people often miss.',
    howToApply:
      'When you\'re assessing risk, list threats next to the specific weaknesses they could exploit — don\'t track them as two separate, unconnected lists.',
    memoryTip: 'No pairing, no risk: a lock with no burglar nearby isn\'t much of a risk at all.',
  },
  {
    id: 'interconnection-agreement',
    term: 'Interconnection (ISA/MOU pairing)',
    domainId: 'scope',
    definition:
      'A formal agreement — usually an MOU (the business terms) paired with an ISA (the technical requirements) — that governs how two systems from different organizations connect and share data.',
    example:
      'Agency A\'s case-management system connects to Agency B\'s identity-verification service. The MOU sets who\'s responsible for what; the ISA spells out the encryption, ports, and login requirements for the actual connection.',
    whyItMatters:
      'Any connection crossing your authorization boundary brings in risk you don\'t fully control. These agreements are how that shared risk gets formally recognized and managed.',
    howToApply:
      'List out every connection when you\'re defining the boundary, and never authorize a system that has undocumented connections.',
    memoryTip: 'MOU is the "who and why" handshake. ISA is the "how" — the technical wiring diagram.',
  },
  {
    id: 'general-support-system',
    term: 'General Support System (GSS)',
    domainId: 'scope',
    definition:
      'Shared infrastructure — like a network or data center — that many different applications rely on, all under one management.',
    example:
      'An agency\'s enterprise network — routers, switches, shared file servers — is a GSS that many separate applications depend on.',
    whyItMatters:
      'A GSS is often where shared controls come from. Knowing whether something is a GSS or a standalone application changes how it gets categorized and authorized.',
    howToApply:
      'When you\'re listing your systems, clearly mark which parts are shared infrastructure (GSS) and which are standalone applications.',
    memoryTip: '"General Support" is the shared plumbing that everyone\'s apps run through.',
  },
  {
    id: 'baseline-tailoring-vs-baseline-selection',
    term: 'Control Baseline',
    domainId: 'control-selection',
    definition:
      'A ready-made set of controls (Low, Moderate, or High) you pick based on your system\'s FIPS 199 rating — your starting point before you adjust it to fit.',
    example:
      'A system rated Moderate-Moderate-Low across confidentiality, integrity, and availability uses the overall Moderate baseline as its starting control set.',
    whyItMatters:
      'Skipping the right starting point and just picking controls that "sound good" risks both gaps and wasted effort. Baselines exist so you\'re not reinventing this every time.',
    howToApply:
      'Always pick the baseline from your categorization result first, then adjust it (tailor it) — never adjust before you\'ve picked the right starting baseline.',
    memoryTip: 'The baseline is the recipe\'s base ingredients; tailoring is adjusting the seasoning to taste.',
  },
  {
    id: 'assessment-methods',
    term: 'Examine / Interview / Test',
    domainId: 'assessment-audit',
    definition:
      'The three ways to check a control: examine (review a document, like a policy), interview (talk to the people who use it), and test (try the mechanism yourself).',
    example:
      'To check an access-control policy: examine the written policy, interview the admin about how it\'s applied, and test by trying an unauthorized login.',
    whyItMatters:
      'Using just one method gives a shallow, unreliable picture. A solid check combines methods that actually fit what\'s being verified.',
    howToApply:
      'For each control you\'re checking, choose the method (or methods) that fit — don\'t default to interviews when a real test is what\'s needed.',
    memoryTip: 'Read it, ask about it, try it — examine, interview, test.',
  },
  {
    id: 'independent-assessor',
    term: 'Assessor Independence',
    domainId: 'assessment-audit',
    definition:
      'The rule that whoever checks a system\'s controls shouldn\'t have any personal stake in the outcome — ideally a completely separate team from whoever built the controls.',
    example:
      'A third-party assessment organization (3PAO), rather than the system\'s own development team, is the one who checks the controls before authorization.',
    whyItMatters:
      'Someone checking their own work is much more likely to miss or downplay real problems. Independence is what makes the results trustworthy to the AO.',
    howToApply:
      'When assigning assessors, confirm they had no role in building the controls being checked, and write that down.',
    memoryTip: 'You wouldn\'t trust a student to grade their own exam — same logic applies here.',
  },
  {
    id: 'authorization-decision-document',
    term: 'Authorization Decision Document',
    domainId: 'system-compliance',
    definition:
      'The formal written record of the AO\'s decision — what type of authorization was given (or denied), any conditions attached, and when it expires.',
    example:
      'An AO issues a 3-year ATO on the condition that two high-risk POA&M items get closed within 90 days. Both the decision and that condition are written into this document.',
    whyItMatters:
      'Without a written decision, there\'s no record of who accepted what risk, when, or under what terms.',
    howToApply:
      'Make sure every authorization decision — approved, limited, or denied — gets written down with clear conditions and an expiration date.',
    memoryTip: 'If it isn\'t written down, the AO didn\'t really decide it.',
  },
  {
    id: 'event-driven-reauthorization',
    term: 'Event-Driven Reauthorization',
    domainId: 'system-compliance',
    definition:
      'A fresh authorization review triggered by a major event or change — not by waiting for the next scheduled review date.',
    example:
      'A system moves from an in-house data center to a new cloud provider mid-cycle. That change alone triggers a new risk review, instead of waiting three years for the next scheduled one.',
    whyItMatters:
      'Risk doesn\'t wait for a calendar date. An authorization based on a system that no longer exists in that form doesn\'t mean much.',
    howToApply:
      'Define clear triggers ahead of time — like specific types of major changes — that automatically kick off a fresh AO review.',
    memoryTip: 'Event-driven means the change is the trigger, not the calendar.',
  },
  {
    id: 'incident-categorization',
    term: 'Incident Categorization',
    domainId: 'compliance-maintenance',
    definition:
      'Sorting a security incident by type and severity, so the response and any required reporting actually match how serious it is.',
    example:
      'A phishing email caught before anyone clicked it might be low severity. A ransomware outage hitting critical systems is high severity and legally reportable.',
    whyItMatters:
      'Categorization decides how urgently to respond, who gets pulled in, and whether outside reporting is legally required.',
    howToApply:
      'Build a severity scale into your incident response plan ahead of time, so responders aren\'t guessing how serious something is in the moment.',
    memoryTip: 'Triage like an ER: sort by severity first, then act.',
  },
  {
    id: 'lessons-learned',
    term: 'Lessons Learned / Post-Incident Review',
    domainId: 'compliance-maintenance',
    definition:
      'A structured review after an incident is over — what happened, what worked, what didn\'t, and what needs to change.',
    example:
      'After a ransomware incident, the team finds their backups were outdated and updates their backup policy and recovery targets as a direct result.',
    whyItMatters:
      'Skip this step, and the same mistakes tend to repeat. This review is what makes incident response actually get better over time.',
    howToApply:
      'Make a lessons-learned review a required final step of every incident response — not an optional extra.',
    memoryTip: 'Skipping the review means signing up to repeat the same mistake.',
  },
  {
    id: 'implementation-statement',
    term: 'Implementation Statement',
    domainId: 'control-implementation',
    definition:
      'The part of the SSP that says exactly how a control actually works on your real system — the settings, the tool, the process — not just the control\'s generic name.',
    example:
      '"We enforce strong passwords" is not an implementation statement. "The system requires a 14-character minimum password, enforced by [specific tool], reviewed every 90 days" is.',
    whyItMatters:
      'An assessor can only verify what\'s written down clearly. A vague or copy-pasted statement is one of the most common problems found in real assessments — and usually means the control was never actually built.',
    howToApply:
      'Before writing an implementation statement, ask: could someone else check this exact sentence against my real system? If not, add more detail.',
    memoryTip: 'Selection says "we will." Implementation says "we did, and here\'s exactly how."',
  },
  {
    id: 'stig',
    term: 'Security Technical Implementation Guide (STIG)',
    domainId: 'control-implementation',
    definition:
      'A detailed, product-specific hardening checklist (published by DISA) that tells you exactly how to securely configure something.',
    example:
      'A team setting up a Windows Server applies the Windows STIG to configure specific security settings, instead of guessing at good defaults.',
    whyItMatters:
      'STIGs turn a vague "harden the system" instruction into a real, checkable list — exactly what implementation is supposed to do.',
    howToApply:
      'Before writing custom hardening rules, check whether a STIG already exists for the exact product you\'re using.',
    memoryTip: 'A STIG is the recipe card for securely configuring one specific product.',
  },
  {
    id: 'change-control-board',
    term: 'Change Control Board (CCB)',
    domainId: 'control-implementation',
    definition:
      'A group that reviews and approves proposed changes to a system, so changes don\'t accidentally undo controls that were already built.',
    example:
      'An engineer wants to open a new firewall port for a vendor. The CCB reviews the request first, to confirm it doesn\'t weaken any existing security controls.',
    whyItMatters:
      'A carefully built control can be broken just as easily by an uncontrolled change. The CCB is what protects that work over time.',
    howToApply:
      'Route any change that touches a documented control through change management first, and update the SSP if the change affects it.',
    memoryTip: 'Implementation builds the control. The CCB is the guard that stops someone from accidentally tearing it back down.',
  },

  // ---- Filling out every domain to real course depth ----
  {
    id: 'enterprise-risk-management',
    term: 'Enterprise Risk Management (ERM)',
    domainId: 'governance',
    definition:
      'A big-picture approach to managing risk across the whole organization — financial, operational, reputational, and cyber — instead of just looking at one system by itself.',
    example:
      'A hospital\'s ERM program tracks cyber risk to patient records, supply-chain risk for medical equipment, and reputational risk from a billing scandal, all in one place.',
    whyItMatters:
      'A decision that looks fine for one system can still be wrong for the organization as a whole. ERM is what connects the two levels together.',
    howToApply:
      'When you\'re deciding whether a system\'s risk is acceptable, check it against the organization\'s overall risk appetite (set at the ERM level) instead of inventing your own standard.',
    memoryTip: '"Enterprise" means the whole company\'s risk picture — not just one system\'s little slice of it.',
  },
  {
    id: 'business-impact-analysis',
    term: 'Business Impact Analysis (BIA)',
    domainId: 'governance',
    definition:
      'A study that identifies an organization\'s most critical business functions and estimates the cost if each one goes down. Used to set recovery priorities.',
    example:
      'A BIA finds that order processing must come back within 4 hours, because every hour of downtime costs $50,000 in lost sales — while internal reporting can wait three days.',
    whyItMatters:
      'Without a BIA, recovery targets are just guesses. The BIA is what grounds recovery planning in real business consequences instead of made-up numbers.',
    howToApply:
      'Do (or check) a current BIA before setting any recovery time targets, and update it whenever a business function becomes more or less critical.',
    memoryTip: 'BIA answers one question: "what actually breaks, and how badly, if this goes down?" Everything else builds on that answer.',
  },
  {
    id: 'documentation-hierarchy',
    term: 'Documentation Hierarchy (Policy → Standard → Procedure → Guideline)',
    domainId: 'governance',
    definition:
      'The four levels of organizational documentation, from most to least mandatory: policy (broad intent), standard (specific rule), procedure (step-by-step instructions), and guideline (recommendation only).',
    example:
      'Policy: "all systems must use strong authentication." Standard: "MFA is required for privileged accounts." Procedure: the exact steps to set up MFA. Guideline: a suggestion (not a requirement) to also use a password manager.',
    whyItMatters:
      'Knowing which level a rule sits at tells you how mandatory it is. Mixing up a guideline with a policy misrepresents what\'s actually required.',
    howToApply:
      'When you write or reference a rule, be clear about which level it belongs to — that determines whether skipping it needs a formal exception.',
    memoryTip: 'Policy says why. Standard says exactly what. Procedure says how. Guideline says "here\'s a good idea."',
  },
  {
    id: 'fips-199-categorization',
    term: 'FIPS 199 Categorization',
    domainId: 'scope',
    definition:
      'The required process of rating a system\'s impact — Low, Moderate, or High — separately for confidentiality, integrity, and availability, then using the highest of the three as the overall rating.',
    example:
      'A system rated Low for confidentiality, Moderate for integrity, and Low for availability is categorized Moderate overall, because the highest rating wins.',
    whyItMatters:
      'This one decision determines which set of controls the system starts with in Domain 3. Get it wrong, and everything built after it is built on the wrong foundation.',
    howToApply:
      'Rate each of the three security goals separately first, then apply the "highest wins" rule — don\'t try to average or eyeball an overall score.',
    memoryTip: 'Highest wins: like a tide mark, the highest point decides the overall level, even if the other two are much lower.',
  },
  {
    id: 'major-application',
    term: 'Major Application',
    domainId: 'scope',
    definition:
      'A system with a clear, specific purpose that\'s significant enough to need its own dedicated security planning — as opposed to shared infrastructure like a GSS.',
    example:
      'An agency\'s benefits-processing system is a major application. The enterprise network it runs on is the GSS supporting it and many other applications.',
    whyItMatters:
      'Whether something is a major application or part of a shared GSS changes how it gets categorized, authorized, and which controls it builds itself vs. borrows.',
    howToApply:
      'When listing out your systems, clearly mark each one as a major application or part of a GSS, rather than leaving it unclear.',
    memoryTip: '"Major" means significant enough to stand on its own — not just a piece of shared plumbing.',
  },
  {
    id: 'shared-responsibility-model',
    term: 'Shared Responsibility Model',
    domainId: 'scope',
    definition:
      'The cloud computing rule that security duties are split between the cloud provider and the customer — where the split happens depends on the service type (IaaS, PaaS, or SaaS).',
    example:
      'With SaaS, the provider secures almost the entire system. The customer is still responsible for deciding who has access to their own data inside the app.',
    whyItMatters:
      'Misunderstanding where the provider\'s job ends and the customer\'s begins is one of the most common causes of real-world cloud security problems.',
    howToApply:
      'Write down the exact responsibility split for every cloud service you use — don\'t just assume the provider "handles security."',
    memoryTip: 'The customer always keeps the keys to their own data, no matter how much the provider manages underneath.',
  },
  {
    id: 'sbom-term',
    term: 'Software Bill of Materials (SBOM)',
    domainId: 'scope',
    definition:
      'A complete, itemized list of everything — including third-party and open-source pieces — that makes up a piece of software.',
    example:
      'When a serious flaw is found in a popular open-source library, an SBOM lets an organization instantly check which of its systems use that library, instead of manually checking every codebase.',
    whyItMatters:
      'You can\'t manage a risk you don\'t know exists. An SBOM makes hidden dependencies visible instead of buried.',
    howToApply:
      'Require an SBOM for any system with significant third-party or open-source components, and keep it up to date as things change.',
    memoryTip: 'An SBOM is the ingredients label for software — you can\'t manage a recall if you don\'t know what\'s inside.',
  },
  {
    id: 'control-enhancement',
    term: 'Control Enhancement',
    domainId: 'control-selection',
    definition:
      'An add-on to a base control that increases its strength, layered on top of the base requirement rather than replacing it.',
    example:
      'The base access-control rule might just require unique user IDs. An enhancement adds automatic account lockout after repeated failed login attempts.',
    whyItMatters:
      'Higher-risk systems need more enhancements. Knowing the difference between a base control and its enhancements is essential to reading the control catalog correctly.',
    howToApply:
      'When selecting controls, check whether your baseline requires specific enhancements — not just the base control — before finalizing your selection.',
    memoryTip: 'The base control is the minimum. The enhancement is the upgrade added for higher-risk systems.',
  },
  {
    id: 'organization-defined-parameter',
    term: 'Organization-Defined Parameter (ODP)',
    domainId: 'control-selection',
    definition:
      'A blank in a control\'s requirement that your organization fills in with its own specific value.',
    example:
      'A control might say "enforce a minimum password length of [X]" — your organization decides and writes down that X is 14 characters.',
    whyItMatters:
      'A control isn\'t really finished being selected until its blanks are filled in with real values. An unfilled parameter is an unfinished decision.',
    howToApply:
      'Write down every parameter value clearly during selection, and carry that exact value into the SSP\'s implementation statement later.',
    memoryTip: 'An ODP is the fill-in-the-blank the organization owns — the control isn\'t done until the blank is filled.',
  },
  {
    id: 'hybrid-control',
    term: 'Hybrid Control',
    domainId: 'control-selection',
    definition:
      'A control that\'s split between two sources: part shared from a central provider, and part built specifically by the system itself.',
    example:
      'A company-wide incident response policy is shared (common). But the system\'s specific detection tools and contact list are built locally — together, that makes it a hybrid control.',
    whyItMatters:
      'Both halves of a hybrid control need to be documented and later checked separately. Treating it as fully shared (or fully local) misses real risk.',
    howToApply:
      'When assigning a control, clearly split out which part is shared and which part is built by the system, before implementation starts.',
    memoryTip: 'Hybrid means split down the middle — part borrowed, part built by you.',
  },
  {
    id: 'privacy-control-baseline',
    term: 'Privacy Control Baseline (PT family)',
    domainId: 'control-selection',
    definition:
      'The set of controls (mostly the PT family) that cover privacy-specific needs like consent and how personal data is handled — chosen alongside the regular security baseline.',
    example:
      'A system that collects personal data selects PT controls for managing consent and setting data retention limits, on top of its regular Moderate security baseline.',
    whyItMatters:
      'Privacy risk isn\'t automatically handled by security controls. A system can be fully secure and still mishandle personal data in a way that breaks the law or people\'s trust.',
    howToApply:
      'For any system handling personal data, treat privacy controls as a required part of the baseline decision — not an optional extra considered later.',
    memoryTip: 'Security asks "can someone steal it?" Privacy asks "should we even be collecting it this way?" Both need selected controls.',
  },
  {
    id: 'secure-configuration-management',
    term: 'Secure Configuration Management',
    domainId: 'control-implementation',
    definition:
      'Applying and maintaining hardened, standardized settings across systems, so "hardened" is a real, checkable state instead of just a goal.',
    example:
      'A team applies the same hardening baseline to every new server before it goes live, instead of configuring each one differently by hand.',
    whyItMatters:
      'Inconsistent settings are one of the most common real-world weaknesses. This is what makes "we hardened it" something you can actually prove.',
    howToApply:
      'Use a repeatable, documented hardening baseline (like a STIG) for each type of product, and track when systems drift away from it.',
    memoryTip: 'Configuration management turns "we said we\'d harden it" into "here\'s proof it\'s hardened, every time."',
  },
  {
    id: 'devsecops-integration',
    term: 'DevSecOps Integration',
    domainId: 'control-implementation',
    definition:
      'Building security checks directly into the development pipeline, instead of treating security as a separate step done after development finishes.',
    example:
      'A deployment pipeline automatically scans for misconfigurations and blocks the release if a required security setting is missing.',
    whyItMatters:
      'Catching a problem during development is far cheaper than catching it during the formal assessment. DevSecOps moves problem-finding as early as possible.',
    howToApply:
      'Add automated security checks as required steps in the deployment pipeline, for anything that can be checked automatically.',
    memoryTip: 'DevSecOps means security gets checked at every step, not just once at the very end.',
  },
  {
    id: 'implementation-verification',
    term: 'Implementation Verification / Self-Testing',
    domainId: 'control-implementation',
    definition:
      'A team checking its own work before the formal, independent assessment — to catch obvious problems early.',
    example:
      'Before the official assessment, a team runs its own test against a newly built security control and fixes whatever it finds.',
    whyItMatters:
      'Self-testing doesn\'t replace the independent assessment — but skipping it means wasting the formal review on problems that could have been caught earlier.',
    howToApply:
      'Build a self-check step into your process before requesting the formal, independent assessment.',
    memoryTip: 'Self-testing is proofreading your own work before handing it to an editor — it doesn\'t replace the editor.',
  },
  {
    id: 'security-assessment-report',
    term: 'Security Assessment Report (SAR)',
    domainId: 'assessment-audit',
    definition:
      'The document reporting what an assessment actually found — results, how serious each problem is, and what to do about it.',
    example:
      'A SAR shows that 47 of 50 checked controls are working properly, with 3 findings rated moderate risk and specific fixes recommended for each.',
    whyItMatters:
      'The SAR is the main evidence the AO relies on to make their decision. Without a solid SAR, an authorization decision would just be a guess.',
    howToApply:
      'Make sure every finding in the SAR is specific enough to turn directly into a POA&M entry, not a vague general concern.',
    memoryTip: 'The SAP is the plan; the SAR is the graded results that come back afterward.',
  },
  {
    id: 'security-assessment-plan',
    term: 'Security Assessment Plan (SAP)',
    domainId: 'assessment-audit',
    definition:
      'The plan, written before an assessment begins, that lays out what will be checked, how, and by whom.',
    example:
      'A SAP might say access controls will be checked by testing and interview, while planning documents will just be reviewed on paper.',
    whyItMatters:
      'Checking things without a plan leads to inconsistent, incomplete coverage. The SAP is what makes an assessment systematic instead of random.',
    howToApply:
      'For each control, decide the right method ahead of time and write it into the SAP before the assessment starts.',
    memoryTip: 'No plan, no structure — you can\'t grade a test that was never designed.',
  },
  {
    id: 'reciprocity',
    term: 'Reciprocity',
    domainId: 'assessment-audit',
    definition:
      'Accepting an existing, trustworthy assessment or authorization from someone else instead of redoing that work from scratch.',
    example:
      'A federal agency accepts a cloud service\'s existing FedRAMP authorization instead of doing its own full independent check of the same service.',
    whyItMatters:
      'Reciprocity avoids wasted, duplicated work across organizations checking the exact same system — as long as the existing check is genuinely trustworthy and current.',
    howToApply:
      'Before ordering a new assessment, check whether a trustworthy, current one already exists that you can reuse instead.',
    memoryTip: 'Reciprocity means not regrading a paper someone trustworthy already graded.',
  },
  {
    id: 'coverage-and-depth',
    term: 'Coverage & Depth (Assessment Attributes)',
    domainId: 'assessment-audit',
    definition:
      'Coverage is how much of the system got checked (a sample vs. everything). Depth is how carefully each method was applied (a quick look vs. a thorough one).',
    example:
      'One assessment might briefly check every single server (high coverage, low depth). Another might thoroughly test just a sample (low coverage, high depth).',
    whyItMatters:
      'Two assessments of the same system can reach very different conclusions depending on their coverage and depth — knowing this helps you judge how much to trust a report.',
    howToApply:
      'Spell out the target coverage and depth for each control in the plan, instead of leaving it vague or inconsistent.',
    memoryTip: 'Coverage is how much ground you covered. Depth is how hard you dug where you looked.',
  },
  {
    id: 'authorizing-official-role',
    term: 'Authorizing Official (AO)',
    domainId: 'system-compliance',
    definition:
      'The senior official with the formal authority to accept a system\'s risk and make the final decision on whether it can operate.',
    example:
      'A Chief Information Officer acting as AO reviews the authorization package for a new payroll system and formally accepts the documented risk before it goes live.',
    whyItMatters:
      'Every earlier domain — governance, scoping, selection, implementation, assessment — exists to give the AO enough information to make this one accountable decision.',
    howToApply:
      'Make sure the AO — not the system owner or ISSO — is the one formally documented as making and signing the final decision.',
    memoryTip: 'Everyone else builds the case. The AO is the one who signs the verdict.',
  },
  {
    id: 'iatt-term',
    term: 'Interim Authorization to Test (IATT)',
    domainId: 'system-compliance',
    definition:
      'A time-limited authorization that lets a system run in a test environment only — not production.',
    example:
      'A new system gets an IATT to run tests in a staging environment, while its full authorization is still pending.',
    whyItMatters:
      'An IATT is not a shortcut to production. Treating it like a full authorization is a serious and common mistake.',
    howToApply:
      'Track when every IATT expires, and never let a system running under an IATT touch real production data.',
    memoryTip: 'IATT means "test only, not for real" — a rehearsal pass, not opening night.',
  },
  {
    id: 'denial-of-authorization',
    term: 'Denial of Authorization',
    domainId: 'system-compliance',
    definition:
      'A formal decision by the AO that a system\'s risk is too high, and it may not operate until that risk is fixed.',
    example:
      'An AO denies authorization for a system with several serious, unfixed problems and no real plan to fix them — rather than approving it with conditions.',
    whyItMatters:
      'Denial is a normal, expected outcome of a real risk-based process. A system that\'s always approved no matter the risk isn\'t really being evaluated at all.',
    howToApply:
      'Write down the specific reasons for a denial and what would need to change, just as thoroughly as you would document an approval.',
    memoryTip: 'Denial isn\'t a failure of the process — it\'s the process working the way it\'s supposed to when risk is too high.',
  },
  {
    id: 'authorization-package',
    term: 'Authorization Package',
    domainId: 'system-compliance',
    definition:
      'The full set of documents — SSP, SAR, and POA&M — put together and handed to the AO to support their decision.',
    example:
      'Before asking for authorization, a system owner gathers the current SSP, the latest SAR, and an up-to-date POA&M into one package for the AO to review.',
    whyItMatters:
      'An incomplete package — like a stale SAR or missing POA&M items — makes it impossible for the AO to make a fully informed decision, no matter how good the actual controls are.',
    howToApply:
      'Double-check that all three documents are current and consistent with each other before submitting the package.',
    memoryTip: 'Three documents, one package, one decision: SSP (what it is), SAR (does it work), POA&M (what\'s still open).',
  },
  {
    id: 'risk-acceptance-vs-transfer',
    term: 'Risk Acceptance vs. Risk Transfer',
    domainId: 'system-compliance',
    definition:
      'Risk acceptance means choosing to live with a risk as-is. Risk transfer means shifting some of the impact to someone else, like through insurance.',
    example:
      'An AO directly accepts the leftover risk of a low-impact system. Meanwhile, the organization transfers some financial risk of a breach by buying cyber insurance.',
    whyItMatters:
      'These are two different strategies with different effects — transfer softens the financial hit, but it doesn\'t actually make the risk less likely to happen.',
    howToApply:
      'When documenting a decision, be clear about which strategy — accept, transfer, reduce, or avoid — was chosen for each significant risk.',
    memoryTip: 'Acceptance means you keep the risk. Transfer means someone else absorbs part of the cost — either way, the risk itself doesn\'t disappear.',
  },
  {
    id: 'iscm-strategy',
    term: 'ISCM Strategy',
    domainId: 'compliance-maintenance',
    definition:
      'A written plan for continuous monitoring — what gets watched, how often, and what triggers escalation.',
    example:
      'An ISCM strategy might call for daily vulnerability scans, monthly access reviews, and an automatic alert if a serious flaw goes unpatched for more than 15 days.',
    whyItMatters:
      'Without a real strategy, "continuous monitoring" ends up being whatever gets checked informally. A strategy is what makes it a real, trackable program.',
    howToApply:
      'Spell out how often each type of control gets monitored, and what should trigger an alert — not just for the system overall, but by category.',
    memoryTip: 'An ISCM strategy answers: what are we watching, how often, and who gets called when it matters?',
  },
  {
    id: 'configuration-drift',
    term: 'Configuration Drift',
    domainId: 'compliance-maintenance',
    definition:
      'The slow, often unnoticed way a system\'s real settings stop matching what\'s documented as approved.',
    example:
      'A server\'s approved firewall rules get changed bit by bit over six months, opening several unauthorized ports — but no one updates the documentation.',
    whyItMatters:
      'Drift means the SSP no longer describes reality. A control that was correctly built and checked can quietly stop being true.',
    howToApply:
      'Watch for configuration drift as part of your monitoring strategy, and fix (or formally update) anything that\'s drifted from the approved baseline.',
    memoryTip: 'Drift is what happens when documented reality and actual reality slowly stop matching, if no one\'s watching.',
  },
  {
    id: 'incident-response-lifecycle',
    term: 'Incident Response Lifecycle',
    domainId: 'compliance-maintenance',
    definition:
      'The four stages of handling a security incident: prepare, detect and analyze, contain and fix, then review afterward.',
    example:
      'A phishing-triggered compromise moves through detection (an alert fires), containment (the account is disabled), fixing (malware is removed), and a final review.',
    whyItMatters:
      'Skipping a stage — especially jumping straight to fixing without first containing the problem — can let it spread further, or destroy evidence you\'ll need later.',
    howToApply:
      'Map your response plan clearly to these four stages, so responders always know where they are and what\'s next.',
    memoryTip: 'Prepare, detect, contain-and-fix, learn — in that order, every time.',
  },
  {
    id: 'bcp-vs-drp',
    term: 'BCP vs. DRP',
    domainId: 'compliance-maintenance',
    definition:
      'A Business Continuity Plan (BCP) keeps the business running during a disruption. A Disaster Recovery Plan (DRP) restores the IT systems specifically.',
    example:
      'During a data center outage, the DRP handles moving servers to a backup site, while the BCP handles how the business keeps serving customers in the meantime.',
    whyItMatters:
      'Mixing these two up leaves gaps — the DRP alone doesn\'t cover how the business functions while IT is down, and the BCP alone doesn\'t give the technical recovery steps.',
    howToApply:
      'Keep both plans, cross-referenced, and test them together instead of treating them as unrelated.',
    memoryTip: 'The DRP fixes the systems. The BCP keeps the business alive while the systems get fixed.',
  },
  {
    id: 'rto-rpo-term',
    term: 'RTO & RPO',
    domainId: 'compliance-maintenance',
    definition:
      'Recovery Time Objective (RTO) is the longest acceptable downtime. Recovery Point Objective (RPO) is the most data loss you can tolerate, measured in time.',
    example:
      'An RTO of 4 hours means the system must be back up within 4 hours. An RPO of 1 hour means at most the last hour of data can be lost.',
    whyItMatters:
      'These targets, grounded in the BIA, directly shape real decisions — like how often to back up data (RPO) and how fast the failover system needs to be (RTO).',
    howToApply:
      'Set RTO and RPO based on the BIA\'s real findings, then check that your backup and recovery systems can actually hit those targets.',
    memoryTip: 'RTO is how long you can be down. RPO is how much you can lose — two different clocks.',
  },
  {
    id: 'system-decommissioning',
    term: 'System Decommissioning',
    domainId: 'compliance-maintenance',
    definition:
      'Securely retiring a system at the end of its life — wiping its data, shutting off access, and updating your records.',
    example:
      'When an old application is retired, its data is securely wiped, its accounts are turned off, and it\'s removed from the active system inventory.',
    whyItMatters:
      'A system retired the wrong way can leak data or leave a "ghost" system no one is watching or tracking anymore.',
    howToApply:
      'Treat decommissioning as a formal checklist — including wiping data and updating records — not just turning something off.',
    memoryTip: 'Staying compliant doesn\'t end when a system goes live — it ends when the system is properly retired, not just abandoned.',
  },
]

export function getTermsByDomain(domainId: string): TermEntry[] {
  return terms.filter((t) => t.domainId === domainId)
}
