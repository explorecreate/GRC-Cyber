import type { Domain } from './types'

// Matches the current official CGRC Certification Exam Outline published by ISC2
// (the organization that writes and proctors the exam) — domain names, order, and
// weights are sourced directly from isc2.org/certifications/cgrc, not the older
// "CAP" domain names some third-party prep material still uses. Each domain maps
// 1:1 to a step of the NIST RMF (see /cgrc/nist), which is why the order matches.
export const domains: Domain[] = [
  {
    id: 'governance',
    number: 1,
    title: 'Security and Privacy Governance, Risk Management, and Compliance Program',
    weight: '16%',
    rmfStep: 'Prepare',
    overview:
      'This is the foundation domain — everything else builds on it. It covers two things: governance (the policies, roles, and rules an organization sets) and risk management (deciding which risks matter and how to handle them). Before you get into specific security controls, you need to understand why an organization builds a governance and risk program in the first place. That\'s what this domain teaches.',
    keyConcepts: [
      'Governance structures: boards, risk committees, reporting lines like CISO/CRO, and the "three lines of defense" model',
      'Laws and regulations that apply, such as FISMA, the Privacy Act, HIPAA, and GDPR',
      'The difference between a policy, a standard, a procedure, and a guideline',
      'Key roles: Authorizing Official, ISSO, System Owner, and Privacy Officer',
      'The (ISC)² Code of Ethics — the conduct rules for certified professionals',
      'Setting the organization\'s risk tolerance (how much risk it\'s willing to accept)',
      'Enterprise Risk Management (ERM) — looking at risk across the whole organization, not just one system',
      'Building risk management into projects from day one, instead of adding it later',
      'Business Impact Analysis (BIA) — figuring out which business functions matter most',
      'Supply Chain Risk Management (SCRM) — managing risk from vendors and suppliers',
    ],
    lessons: [
      {
        title: 'Governance Structures & Roles',
        body:
          'Governance answers two questions: who decides, and who\'s responsible when something goes wrong? At the top, a board or risk committee sets overall direction. Where the CISO (security lead) or CRO (risk lead) reports to also matters — it affects how independent security can be from IT.\n\nThe "three lines of defense" model splits responsibility three ways. Operational management (1st line) runs the controls day to day. Risk and compliance teams (2nd line) set policy and check that it\'s followed. Internal audit (3rd line) independently verifies that everything actually works. No single group should play more than one of these roles for the same system — that keeps things honest, since the people building controls shouldn\'t be the only ones checking their own work.\n\nWithin a specific system, this breaks down into named roles. The Authorizing Official (AO) accepts the risk and gives final approval. The ISSO handles day-to-day security. The System Owner is responsible for the system overall. The Privacy Officer owns privacy-specific requirements. Know what each role does and why they\'re kept separate — it\'s a common exam topic.',
      },
      {
        title: 'Policy Hierarchy & the Legal/Regulatory Landscape',
        body:
          'Every organization writes down its rules, but not all rules carry the same weight. There are four levels, from most to least mandatory. A policy is a broad statement of intent, like "we will protect personal data" — mandatory. A standard is specific and still mandatory, like "passwords must be at least 14 characters." A procedure is the step-by-step instructions for meeting a standard. A guideline is just a recommendation, not mandatory. This hierarchy exists so everyone knows how strict a rule is, just by knowing which level it\'s written at.\n\nOn top of internal policy, organizations also have to follow outside laws they don\'t get to choose. Examples include FISMA (for US federal systems), the Privacy Act, and laws like HIPAA (health data) and GDPR (EU privacy). The exam likes to test whether you know FISMA applies only to US federal systems, while GDPR and HIPAA are broader comparisons from outside that scope.',
      },
      {
        title: 'Building & Running the Risk Management Program',
        body:
          'A risk program starts with two things: a written risk management strategy, and a clear statement of how much risk the organization is willing to accept — its risk tolerance. Without that, "acceptable risk" ends up meaning something different to every team.\n\nEnterprise Risk Management (ERM) looks at risk across the whole organization — financial, operational, reputational, and cyber — not just one system. Good governance connects ERM to system-level decisions, so a single system\'s risk choices match what the organization as a whole is willing to accept.\n\nRisk management also works best when it starts early. Building it in from the requirements and design stage of a project — instead of adding security after the system is already built — is cheaper and far more effective. You\'ll see this idea repeat throughout the whole RMF process.',
      },
      {
        title: 'Ethics, Supply Chain, and Business Impact',
        body:
          'The (ISC)² Code of Ethics sets the standard for how certified professionals should behave: protect society, act honorably, and report vulnerabilities responsibly instead of exploiting them.\n\nTwo more program-level topics round out this domain. Supply Chain Risk Management (SCRM) means managing the risk that vendors and suppliers bring to the organization, before you even look at a specific system. Business Impact Analysis (BIA) means identifying which business functions matter most, and estimating the cost if they go down. The BIA\'s findings later set the recovery targets you\'ll learn about in Domain 7 (Compliance Maintenance).',
      },
    ],
    aiNote:
      'The exam now includes AI-specific governance tasks: setting policy for AI systems, deciding how much risk the organization will accept for automated decisions, and keeping up with AI laws worldwide (like the EU AI Act). For the AI-focused version of this same idea, see the NIST AI RMF page in the AI Learning Center.',
    resources: [
      { title: 'CGRC Certification Overview', source: 'ISC2', url: 'https://www.isc2.org/certifications/cgrc', kind: 'article' },
      { title: 'ISC2 CGRC Domain 1: Information Security Risk Management Program', source: 'Infosec Institute', url: 'https://www.infosecinstitute.com/resources/isc2-cgrc/isc2-cgrc-domain-1-information-security-risk-management-program/', kind: 'article' },
      { title: 'NIST SP 800-39 — Managing Information Security Risk', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/39/final', kind: 'pdf' },
      { title: '(ISC)² Code of Ethics', source: 'ISC2', url: 'https://www.isc2.org/ethics', kind: 'article' },
    ],
  },
  {
    id: 'scope',
    number: 2,
    title: 'Scope of the System',
    weight: '10%',
    rmfStep: 'Categorize',
    overview:
      'Before you can secure a system, you have to know exactly what "the system" includes. This domain covers drawing that line — rating the system\'s impact level, defining what\'s inside vs. outside it, and thinking through the risk that vendors, cloud providers, and connected systems bring with them.',
    keyConcepts: [
      'Drawing the authorization boundary and identifying system interconnections',
      'FIPS 199 categorization (rating Confidentiality, Integrity, and Availability impact)',
      'System types: general support system vs. major application',
      'Third-party and vendor risk, service agreements, and cloud shared responsibility',
      'Interconnection Security Agreements (ISAs) and Memoranda of Understanding (MOUs)',
      'Supply chain risk at the component level, like SBOMs',
    ],
    lessons: [
      {
        title: 'Defining the Authorization Boundary',
        body:
          'The authorization boundary is everything that falls under one AO\'s authority and one authorization decision — the resources, components, and connections that count as "the system." Draw it too small, and things go unprotected. Draw it too large, and you waste effort protecting things you don\'t actually control. A simple test: if the AO can\'t realistically accept the risk for something, it probably belongs outside the boundary, treated instead as a connection to an outside system.\n\nEvery boundary should be drawn as a diagram, with every connection crossing it clearly listed. An undocumented connection is risk sneaking across the boundary that no one ever evaluated or approved.',
      },
      {
        title: 'FIPS 199 Categorization, Step by Step',
        body:
          'FIPS 199 asks you to rate a system\'s impact — Low, Moderate, or High — separately for three things: Confidentiality, Integrity, and Availability. You\'re rating what would happen if each one were compromised.\n\nThe overall rating uses the highest of the three. A system that\'s Low for confidentiality but Moderate for integrity gets categorized Moderate overall. This is one of the most important decisions in the whole process, because it decides which set of controls you start with in Domain 3. Get it wrong here, and everything built on top of it is built on the wrong foundation.',
      },
      {
        title: 'System Types: GSS vs. Major Application',
        body:
          'Not everything you\'re scoping is the same kind of thing. A General Support System (GSS) is shared infrastructure — a network, a data center, a shared platform — that many different applications rely on. A major application is its own distinct system, built for a specific purpose important enough to need its own security planning, rather than just being part of the shared GSS.\n\nKnowing which one you\'re looking at matters, because a GSS is usually where shared controls come from, and a major application is usually the one borrowing (inheriting) them.',
      },
      {
        title: 'Third-Party & Cloud Risk in Scope',
        body:
          'Scope doesn\'t stop at what you host yourself. Vendors, cloud providers, and outside services all bring risk the organization still owns, even if it doesn\'t own the code. Cloud\'s "shared responsibility model" splits the work by service type — with IaaS, the customer handles more of the stack; with SaaS, the provider handles more. But the customer always keeps responsibility for classifying its own data and managing who can access it.\n\nConnections to other organizations get formalized through two documents: an MOU (the business agreement) and an ISA (the technical security details). And at the component level, tools like an SBOM (Software Bill of Materials) list exactly what\'s inside the software you\'re running, so supply chain risk isn\'t hidden.',
      },
    ],
    aiNote:
      'Scoping now also asks whether an AI or machine learning component falls inside the boundary — including outside AI models you access over an API. Even without hosting any of that code yourself, using it still creates a dependency worth thinking about, similar to any other vendor risk.',
    resources: [
      { title: 'FIPS 199 & 200 Compliance: Comparing Security Standards', source: 'Ignyte Platform', url: 'https://www.ignyteplatform.com/blog/compliance/fips-199-200-compliance/', kind: 'article' },
      { title: 'FIPS 199 — Standards for Security Categorization', source: 'NIST', url: 'https://csrc.nist.gov/pubs/fips/199/final', kind: 'pdf' },
      { title: 'Cloud Shared Responsibility Model', source: 'CISA', url: 'https://www.cisa.gov/', kind: 'article' },
    ],
  },
  {
    id: 'control-selection',
    number: 3,
    title: 'Selection and Approval of Framework, Security, and Privacy Controls',
    weight: '14%',
    rmfStep: 'Select',
    overview:
      'This is the "Select" step: choosing which security and privacy controls apply to the system, adjusting them to fit, and getting them approved — before anyone starts building anything. Think of it as deciding what needs to happen, not yet making it happen.',
    keyConcepts: [
      'NIST SP 800-53 control families and how a control is structured',
      'Control baselines (Low/Moderate/High) and adjusting them to fit (tailoring)',
      'Privacy controls and the privacy baseline',
      'Common, hybrid, and system-specific controls — deciding who builds what',
      'Filling in organization-specific values and writing down why you chose what you chose',
      'Getting the selected controls approved by stakeholders',
    ],
    lessons: [
      {
        title: 'Control Structure: Families, Enhancements, Parameters',
        body:
          'SP 800-53 groups controls into families by topic: AC for Access Control, AU for Audit and Accountability, IR for Incident Response, and about twenty others. Each control has a base requirement, plus optional enhancements that add more strength on top of it — think of the base as the minimum, and the enhancement as the upgrade.\n\nMany controls also have blanks the organization has to fill in, called organization-defined parameters (ODPs). For example: "lock the account after [X] failed login attempts" — your organization decides what X is. Selecting controls means choosing which controls, which enhancements, and which parameter values apply, before anyone builds a single thing.',
      },
      {
        title: 'Choosing a Baseline',
        body:
          'SP 800-53B gives you ready-made Low, Moderate, and High baselines. You pick the one that matches the system\'s FIPS 199 rating from Domain 2 — which is exactly why categorization has to happen first. A baseline is a starting point, not the final answer.\n\nPrivacy controls work the same way. The PT control family and privacy baseline cover things like consent and how PII gets handled. These get added alongside the regular security baseline — not treated as a separate afterthought.',
      },
      {
        title: 'Tailoring: Adjusting Controls to Fit',
        body:
          'Applying a baseline exactly as written usually doesn\'t work perfectly. Sometimes it misses risks specific to your system. Other times it includes controls that make no sense for you — like a rule about physical door locks for a system with no physical office. Tailoring fixes this.\n\nScoping lets you narrow down which parts of a control actually apply. Compensating controls let you swap in an equally good substitute when the original control just isn\'t possible. Either way, you have to write down why — you can\'t skip a control just because it\'s inconvenient. You have to explain how the substitute still covers the same risk.',
      },
      {
        title: 'Who Builds What: Common, Hybrid, System-Specific',
        body:
          'Before implementation even starts, someone has to decide who is responsible for building each control. A common control is built once, centrally, and shared by many systems — like company-wide badge access. A system-specific control is built entirely by one system\'s own team, with nothing shared. A hybrid control is a mix of both — part shared, part built just for this system.\n\nGetting this decision right here saves a lot of duplicated work later, in Domain 4. And once every control has an owner and a plan, the whole selected set gets formally approved by stakeholders before building begins.',
      },
    ],
    aiNote:
      'Selection now also covers choosing controls that address AI-specific risks — like "black box" models you can\'t fully explain, or requirements around algorithmic transparency. These sit right alongside the traditional confidentiality/integrity/availability controls, not as a separate category.',
    resources: [
      { title: 'NIST SP 800-53 Rev.5 — Security and Privacy Controls', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', kind: 'pdf' },
      { title: 'NIST SP 800-53B — Control Baselines', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/b/final', kind: 'pdf' },
    ],
  },
  {
    id: 'control-implementation',
    number: 4,
    title: 'Implementation of Security and Privacy Controls',
    weight: '17%',
    rmfStep: 'Implement',
    overview:
      'This is the biggest domain on the exam. Picking a control on paper isn\'t the same as building it correctly. This domain covers actually building the controls chosen in Domain 3, writing down exactly how each one works, and making sure that work can be checked before an assessor ever looks at it.',
    keyConcepts: [
      'Turning a control\'s requirement into something real and working',
      'System Security Plan (SSP) — writing down exactly how each control is implemented',
      'Correctly implementing common, hybrid, and system-specific controls, including who\'s supplying what',
      'Secure configuration and hardening as part of implementation',
      'Building controls into development from the start, instead of adding them at the end',
      'Double-checking your own work before the formal assessment',
    ],
    lessons: [
      {
        title: 'From Selection to Reality: Writing Implementation Statements',
        body:
          'Selecting a control is a decision on paper. Implementing it means writing down exactly how it works on your real system — the settings, the tool, the process — in enough detail that someone else could check it without having to ask you what you meant.\n\n"We enforce strong passwords" is not good enough. "The system requires a 14-character minimum password, enforced by [specific tool], reviewed every 90 days" is. A vague, copy-pasted description is one of the most common problems assessors find — and it usually means a control was picked but never actually built.',
      },
      {
        title: 'Secure Configuration & Hardening',
        body:
          'Turning "harden the system" from a vague idea into a real, checkable checklist is implementation work. This is where Security Technical Implementation Guides (STIGs) help — they give you exact settings to apply instead of making you guess.\n\nOnce something is built, it also has to stay built. A Change Control Board (CCB) reviews future changes before they happen, because an uncontrolled change is a common way a carefully-built control quietly breaks.',
      },
      {
        title: 'Implementing Shared & Split Controls',
        body:
          'A control shared across systems (a common control) still needs to be written down in your own paperwork: who provides it, and confirmation that it\'s actually up to date. Borrowing a control doesn\'t remove your responsibility if it turns out to be broken or outdated.\n\nA hybrid control needs both halves documented — the shared part and the part your own team built. System-specific controls are the simplest case: your team built it, your team owns it, and there\'s no one else to point to if it doesn\'t work.',
      },
      {
        title: 'Building It In Early & Checking Your Own Work',
        body:
          'Waiting until the formal assessment to find a problem is expensive. Building checks into the development pipeline — automated scans, security gates before deployment — catches issues while they\'re still cheap to fix.\n\nBefore the formal, independent assessment (Domain 5), teams often test their own work first. That doesn\'t replace the real assessment, but it means the formal review isn\'t the first time anyone actually checks if a control works.',
      },
    ],
    aiNote:
      'For AI systems, implementation includes things like watching for model drift, adding safety guardrails to filter bad outputs, and writing down how you\'re actually managing "black box" risk — not just deciding to address it on paper.',
    resources: [
      { title: 'NIST SP 800-18 Rev.1 — Guide for Developing Security Plans', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/18/r1/final', kind: 'pdf' },
      { title: 'How to Make a Useful SSP: System Security Plans That Work', source: 'UberEther', url: 'https://uberether.com/how-to-make-an-ssp/', kind: 'article' },
      { title: 'NIST SP 800-53 Rev.5 — Security and Privacy Controls', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', kind: 'pdf' },
    ],
  },
  {
    id: 'assessment-audit',
    number: 5,
    title: 'Assessment/Audit of Security and Privacy Controls',
    weight: '16%',
    rmfStep: 'Assess',
    overview:
      'Once controls are built, someone independent needs to check that they actually work. This domain covers how that checking happens: planning the assessment, running it, writing up the results, and turning any problems found into a tracked action plan.',
    keyConcepts: [
      'Security Assessment Plan (SAP) and Security Assessment Report (SAR)',
      'The three assessment methods: examine, interview, and test',
      'NIST SP 800-53A — the official procedures for assessing 800-53 controls',
      'Why assessors need to be independent, and reusing existing assessments (reciprocity)',
      'Plan of Action and Milestones (POA&M) — creating, tracking, and closing it out',
      'How an audit, an assessment, and ongoing monitoring are different things',
    ],
    lessons: [
      {
        title: 'Assessment Methods: Examine, Interview, Test',
        body:
          'There are three ways to check whether a control works. Examine means reviewing a document, like a written policy. Interview means talking to the people who actually use the control day to day. Test means directly trying the thing out yourself.\n\nUsing just one method gives you a shallow, unreliable picture. Reading a policy doesn\'t tell you whether people actually follow it. Asking an admin about a login system doesn\'t confirm the system really behaves that way. A solid assessment picks the right method for what it\'s checking, and applies it thoroughly — how much of the system it checks and how carefully both matter.',
      },
      {
        title: 'Building the SAP, Writing the SAR',
        body:
          'Before the assessment starts, someone writes a Security Assessment Plan (SAP) — what will be checked, how, and by whom. After the assessment is done, the results go into a Security Assessment Report (SAR): what was found, how serious it is, and what should be done about it.\n\nTogether, these two documents turn "we think our controls work" into an actual, evidence-backed conclusion — something the Authorizing Official can rely on later in Domain 6.',
      },
      {
        title: 'Why Assessor Independence Matters',
        body:
          'An assessor checking their own work is far more likely to miss real problems, on purpose or not. That\'s why a good assessment uses someone with no stake in the outcome — ideally a completely separate team or organization. Programs like FedRAMP make this official by requiring accredited Third-Party Assessment Organizations (3PAOs).\n\nThere\'s also a shortcut called reciprocity: instead of assessing the exact same system from scratch, an organization can accept someone else\'s existing, trustworthy assessment. It saves duplicated work without cutting corners.',
      },
      {
        title: 'From Findings to POA&M',
        body:
          'When an assessment finds a problem that isn\'t fixed right away, it doesn\'t just disappear — it becomes a Plan of Action and Milestones (POA&M) entry: what\'s wrong, who\'s fixing it, what they need, and by when.\n\nThe POA&M isn\'t a one-time report you write and forget. It gets checked and updated regularly, and its open items are something the AO looks at every time they make an authorization decision in Domain 6. This is also the point where assessment stops being a one-time event and starts feeding into the ongoing tracking covered in Domain 7.',
      },
    ],
    aiNote:
      'Assessing an AI system also means testing for bias, checking how it holds up against tricky or adversarial inputs, and confirming it actually behaves the way it\'s documented to. The same examine/interview/test approach still applies — you\'re just checking a model instead of ordinary software.',
    resources: [
      { title: 'NIST SP 800-53A Rev.5 — Assessing Security and Privacy Controls', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/53/a/r5/final', kind: 'pdf' },
      { title: 'An Introduction to the Plan of Actions and Milestones (POA&M)', source: 'YouTube', url: 'https://www.youtube.com/watch?v=DmjRAJc2xXs', kind: 'video' },
    ],
  },
  {
    id: 'system-compliance',
    number: 6,
    title: 'System Compliance',
    weight: '14%',
    rmfStep: 'Authorize',
    overview:
      'This is the "Authorize" step: the Authorizing Official reviews everything gathered so far and makes a formal call — is this system safe enough to operate? This domain is about that decision itself: what goes into it, who makes it, and what the possible outcomes are.',
    keyConcepts: [
      'What goes into an authorization package (SSP, SAR, POA&M) and the Authorization to Operate (ATO) decision',
      'What the Authorizing Official (AO) is responsible for, and accepting risk vs. transferring it',
      'Types of authorization: full ATO, interim authorization to test (IATT), or denial',
      'How leftover (residual) risk gets communicated to the AO',
      'Authorization end dates and any conditions attached to the decision',
      'Reciprocity — accepting someone else\'s existing authorization instead of starting over',
    ],
    lessons: [
      {
        title: 'The Authorization Package',
        body:
          'By the time a system reaches this domain, three documents come together into one package. The SSP explains what the system is and how its controls work (from Domain 4). The SAR gives independent findings on whether those controls actually work (from Domain 5). The POA&M lists what\'s still unresolved and being tracked.\n\nThe AO doesn\'t redo any of this work — the whole point of the earlier domains is to hand the AO a complete, evidence-backed picture so they can make one focused decision.',
      },
      {
        title: 'The AO\'s Decision: ATO, IATT, or Denial',
        body:
          'The Authorizing Official reviews the package and lands on one of a few outcomes. A full Authorization to Operate (ATO) means the AO accepts the leftover risk and the system can run in production — usually with an end date that forces a future review. An Interim Authorization to Test (IATT) is more limited: the system can run in a test environment only, never production. Denial means the risk is too high right now, and the system doesn\'t operate until that changes.\n\nEvery decision — including any conditions attached to it — gets written down formally. A decision that isn\'t documented isn\'t really a decision.',
      },
      {
        title: 'What "Compliance" Actually Means',
        body:
          'Authorizing a system is really about accepting the risk that\'s left over, not eliminating every risk — no system ever gets to zero. "System Compliance" doesn\'t mean "perfect." It means the AO has a full, honest picture of what\'s still unresolved and has decided, with real accountability, that the remaining risk is acceptable given what the system needs to do.\n\nThere are also two different ways to handle leftover risk: accepting it (living with it as-is) or transferring it (like shifting some of the cost to an insurance policy or a contract).',
      },
      {
        title: 'Reciprocity & Authorization Terms',
        body:
          'Just like assessments can be reused (Domain 5), authorizations can be too. Rather than re-authorizing the same system from scratch, an organization can accept another organization\'s existing, trustworthy ATO — this is common in programs like FedRAMP.\n\nEvery authorization also comes with terms: an end date that forces a future check-in, and often specific conditions, like closing certain POA&M items within 90 days. These keep the system\'s risk picture honest until the next full review — which leads directly into the ongoing tracking covered in Domain 7.',
      },
    ],
    aiNote:
      'For AI systems, this decision also weighs things like how explainable the model is and whether the AI use case falls under a "high-risk" category under applicable law — on top of the usual leftover-risk question — before the AO signs off.',
    resources: [
      { title: 'Understanding Baselines and Impact Levels for FedRAMP Authorizations', source: 'FedRAMP.gov', url: 'https://www.fedramp.gov/rev5/baselines', kind: 'article' },
    ],
  },
  {
    id: 'compliance-maintenance',
    number: 7,
    title: 'Compliance Maintenance',
    weight: '13%',
    rmfStep: 'Monitor',
    overview:
      'Authorization is just a decision made at one point in time. This domain is about everything that keeps that decision valid afterward — watching the system continuously, handling changes safely, and being ready to respond when something goes wrong.',
    keyConcepts: [
      'A continuous monitoring strategy: what to watch, how often, and what triggers action',
      'Renewing authorization on an ongoing basis, or right away when something major changes',
      'Security metrics, dashboards, and automated data feeds',
      'The incident response lifecycle: prepare, detect, contain and fix, then review',
      'Business Continuity Plan (BCP), Disaster Recovery Plan (DRP), and Continuity of Operations Plan (COOP)',
      'Recovery Time Objective (RTO) and Recovery Point Objective (RPO)',
      'Practicing your plans, and learning from real incidents',
      'Securely retiring a system at the end of its life',
    ],
    lessons: [
      {
        title: 'Building a Continuous Monitoring Strategy',
        body:
          'An authorization is a snapshot in time. Continuous monitoring is what keeps that snapshot honest afterward. A good monitoring strategy spells out what gets watched, how often, and what should trigger a closer look — things like vulnerability scans, unexpected configuration changes, and access reviews, all feeding into one dashboard instead of sitting in separate silos.\n\nAutomating this matters because it closes the gap between reality and what the AO actually sees. Manual, occasional checks mean the risk picture is always a little out of date. Automated feeds keep it close to real time.',
      },
      {
        title: 'Renewing Authorization: On a Schedule, or Right Away',
        body:
          'Instead of relying only on a full reassessment every few years, ongoing monitoring data can keep the AO\'s risk picture current the whole time in between — more like a running video than a single photo.\n\nSome changes can\'t wait for the next scheduled review at all. A major system change, a serious breach, or a new type of threat should trigger a fresh, out-of-cycle risk review right away — driven by the event itself, not the calendar.',
      },
      {
        title: 'Incident Response & Contingency Planning',
        body:
          'When something actually goes wrong, the response follows four stages: prepare beforehand, detect and analyze what happened, contain and fix it, then review afterward.\n\nSeparate but related plans cover different scopes of disruption. A Business Continuity Plan (BCP) keeps the business running. A Disaster Recovery Plan (DRP) restores the IT systems specifically. A Continuity of Operations Plan (COOP) is the federal-agency version, focused on keeping essential functions and leadership going.\n\nRecovery targets get set ahead of time: Recovery Time Objective (RTO) is how long you can afford to be down, and Recovery Point Objective (RPO) is how much data you can afford to lose. Both should trace back to the Business Impact Analysis from Domain 1.',
      },
      {
        title: 'Practicing, Learning, and Retiring Systems',
        body:
          'A plan that\'s never been tested is just a document. Tabletop exercises (a group discussion), functional exercises (partly hands-on), and full-scale exercises (as close to the real thing as it gets) all confirm your plans actually work — each one more realistic (and more expensive) than the last.\n\nAfter any real incident, a lessons-learned review feeds what you found back into your plans and controls. Skipping this step means you\'re likely to repeat the same mistake. And when a system finally reaches the end of its life, it needs to be retired properly too — data wiped securely, access shut off, and records updated — so "staying compliant" really does cover the system\'s whole life, not just the years it was running.',
      },
    ],
    aiNote:
      'For AI systems, staying compliant means continuously watching for model drift, retraining models when needed (which can trigger a fresh authorization review), and having an incident response plan that specifically covers AI failures — like a model producing harmful or biased output — not just ordinary system outages.',
    resources: [
      { title: 'NIST SP 800-137 — Information Security Continuous Monitoring', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/137/final', kind: 'pdf' },
      { title: 'NIST SP 800-61 Rev.2 — Computer Security Incident Handling Guide', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/61/r2/final', kind: 'pdf' },
      { title: 'NIST SP 800-34 Rev.1 — Contingency Planning Guide', source: 'NIST', url: 'https://csrc.nist.gov/pubs/sp/800/34/r1/final', kind: 'pdf' },
      { title: 'Understanding the NIST SP 800-61 Incident Response Lifecycle, Simplified', source: 'YouTube', url: 'https://www.youtube.com/watch?v=BPQVaz6asdo', kind: 'video' },
    ],
  },
]

export function getDomain(id: string): Domain | undefined {
  return domains.find((d) => d.id === id)
}
