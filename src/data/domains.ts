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
      'The exam\'s foundation domain: building the organizational program that everything else sits on top of. It combines governance (policy, roles, legal/regulatory obligations, ethics) with the risk management program that governance exists to support — organizational risk tolerance, enterprise risk management, and integrating risk management into the SDLC from day one. If you can\'t explain why an organization needs a governance and risk program before you talk about controls, you\'re missing the exam\'s starting point.',
    keyConcepts: [
      'Governance structures: boards, risk committees, CISO/CRO reporting lines, three lines of defense model',
      'Legal, regulatory, and contractual requirements (FISMA, Privacy Act, HIPAA, GDPR, SOX as comparators)',
      'Organizational policies, standards, procedures, and guidelines — and how they differ',
      'Security and privacy roles & responsibilities (Authorizing Official, ISSO, System Owner, Privacy Officer)',
      '(ISC)² Code of Ethics and professional conduct expectations',
      'Risk management strategy and organizational risk tolerance/appetite',
      'Enterprise risk management (ERM) vs. system-level risk management',
      'Integrating risk management into the System Development Life Cycle (SDLC)',
      'Business Impact Analysis (BIA) and its inputs to risk decisions',
      'Supply chain risk management (SCRM) at the program level',
    ],
    lessons: [
      {
        title: 'Governance Structures & Roles',
        body:
          'Governance is about who decides what, and who\'s accountable when it goes wrong. At the top, a board or risk committee sets direction; the CISO/CRO reporting line determines how much independence security has from IT. The "three lines of defense" model formalizes this: operational management (1st line) owns and runs day-to-day controls, risk/compliance functions (2nd line) set policy and monitor, and internal audit (3rd line) independently verifies the whole system works — no single group plays more than one role for the same system. Within a specific system, that translates to named roles: the Authorizing Official (AO) accepts risk, the ISSO handles daily security operations, the System Owner is accountable for the system itself, and the Privacy Officer owns privacy-specific obligations. The exam expects you to know who does what and why the separation matters.',
      },
      {
        title: 'Policy Hierarchy & the Legal/Regulatory Landscape',
        body:
          'Everything an organization requires gets written down somewhere, and where it\'s written down signals how mandatory it is. Policy is the top: a broad, mandatory statement of management intent ("we will protect PII"). Standards get specific and are still mandatory ("passwords must be 14+ characters"). Procedures are step-by-step instructions for meeting a standard. Guidelines are recommended but optional. This hierarchy exists so organizations don\'t have to reinvent "how mandatory is this?" for every document. Layered on top of internal policy are external legal and regulatory requirements the organization doesn\'t get to choose — FISMA for US federal systems, the Privacy Act, and sector-specific or international laws like HIPAA and GDPR, which the exam often uses as comparators to test whether you understand FISMA is US-federal-specific rather than universal.',
      },
      {
        title: 'Building & Running the Risk Management Program',
        body:
          'A risk management program starts with a documented risk management strategy and an explicit statement of organizational risk tolerance/appetite — without that, "acceptable risk" is just a guess made differently by every team. Enterprise Risk Management (ERM) takes a holistic, organization-wide view of risk (financial, operational, reputational, cyber) as opposed to a single system\'s risk picture, and good governance connects the two so a system-level risk decision reflects the organization\'s actual risk appetite. Risk management also has to start early: integrating it into the System Development Life Cycle (SDLC) from requirements and design, rather than retrofitting security after a system is already built, is dramatically cheaper and more effective — a recurring theme across the whole RMF.',
      },
      {
        title: 'Ethics, Supply Chain, and Business Impact',
        body:
          'The (ISC)² Code of Ethics sets the professional conduct bar for certified practitioners — protecting society, acting honorably, and not exploiting a vulnerability you discover instead of responsibly disclosing it. Two more program-level concerns round out this domain: Supply Chain Risk Management (SCRM) at the organizational level, which asks "what risk do our vendors and suppliers introduce before we even get to a specific system," and Business Impact Analysis (BIA), which identifies which business functions are actually critical and quantifies the cost of their disruption — the BIA\'s output directly feeds the Recovery Time/Point Objectives you\'ll see later in Compliance Maintenance (Domain 7).',
      },
    ],
    aiNote:
      'The current outline adds AI-specific governance tasks here: establishing policy and accountability for AI systems, defining organizational risk tolerance for algorithmic decision-making, and accounting for the global AI regulatory landscape (e.g., the EU AI Act) alongside traditional privacy/security law. See the NIST AI RMF deep-dive in the AI Learning Center for the direct counterpart to this domain.',
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
      'Before you can secure a system you must define its boundary. This domain covers system categorization under FIPS 199, defining the authorization boundary, and the growing challenge of assessing risk introduced by vendors, cloud providers, and interconnected systems — third-party risk lives here because it\'s fundamentally a question of what falls inside your scope.',
    keyConcepts: [
      'Authorization boundary definition and system interconnections',
      'FIPS 199 categorization (Confidentiality/Integrity/Availability impact levels)',
      'System types: general support system vs. major application',
      'Third-party/vendor risk assessment, SLAs, and shared responsibility models (cloud)',
      'Interconnection Security Agreements (ISAs) and Memoranda of Understanding (MOUs)',
      'Supply chain risk at the system/component level (SBOM, provenance)',
    ],
    lessons: [
      {
        title: 'Defining the Authorization Boundary',
        body:
          'The authorization boundary is the set of resources, components, and connections that fall under a single AO\'s authority and a single authorization decision. Get it wrong and you either leave things unprotected (drawn too small) or waste effort protecting things you don\'t control (drawn too large). A useful test: if the AO can\'t realistically accept the risk for a component, it probably belongs outside the boundary and should be treated as an interconnection instead. Every boundary should be documented as a diagram, with every connection crossing it explicitly listed — an undocumented interconnection is risk flowing across the boundary that was never evaluated or accepted by anyone.',
      },
      {
        title: 'FIPS 199 Categorization, Step by Step',
        body:
          'FIPS 199 requires rating a system\'s impact — Low, Moderate, or High — separately for Confidentiality, Integrity, and Availability, based on what would happen if each were compromised. The overall system categorization takes the highest ("high-water mark") across all three: a system that\'s Low for confidentiality but Moderate for integrity is categorized Moderate overall. This categorization is the single most consequential decision in the whole RMF, because it determines which control baseline you start from in Domain 3 (Select) — get the categorization wrong and everything downstream is built on the wrong foundation.',
      },
      {
        title: 'System Types: GSS vs. Major Application',
        body:
          'Not everything in scope is the same kind of thing. A General Support System (GSS) is shared infrastructure — a network, a data center, a common platform — that many individual applications rely on and often inherit common controls from. A major application is a distinct, mission-specific system that performs a clearly defined function significant enough to warrant its own dedicated security planning, rather than being folded into the shared GSS. Knowing which one you\'re scoping changes how categorization and control inheritance work: a GSS is often where common controls originate, while a major application is usually the one inheriting them.',
      },
      {
        title: 'Third-Party & Cloud Risk in Scope',
        body:
          'Scope doesn\'t stop at infrastructure you host yourself. Vendors, cloud providers, and third-party services introduce risk that the organization still bears, even without owning the underlying code. Cloud\'s "shared responsibility model" splits duties by service type — IaaS leaves the customer responsible for more of the stack than SaaS does, but the customer always keeps responsibility for data classification and access management. Interconnections with other organizations get formalized through an MOU (the business-terms handshake) paired with an ISA (the technical/security wiring specification), and component-level supply chain risk gets tracked through tools like an SBOM (Software Bill of Materials), which inventories exactly what\'s inside the software you\'re running.',
      },
    ],
    aiNote:
      'Scoping now explicitly considers whether an AI/ML component is inside the authorization boundary — including third-party foundation models accessed via API, which introduce a supply-chain-style dependency even though no code is hosted on your own infrastructure.',
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
      'The "Select" step of the RMF: choosing an appropriate control framework and baseline, tailoring it to the system, and getting stakeholder approval before anything gets implemented. This is a decision-and-documentation domain — you\'re choosing what controls apply, not yet building them.',
    keyConcepts: [
      'NIST SP 800-53 control families and control structure (control, enhancement, parameter)',
      'Control baselines (Low/Moderate/High) and tailoring (scoping, compensating controls)',
      'Privacy controls and the privacy control baseline (SP 800-53B / the PT control family)',
      'Common controls, hybrid controls, and system-specific controls — deciding allocation before implementation',
      'Organization-defined parameters (ODPs) and documenting selection rationale',
      'Stakeholder approval of the selected control set',
    ],
    lessons: [
      {
        title: 'Control Structure: Families, Enhancements, Parameters',
        body:
          'SP 800-53 organizes controls into families by topic — AC (Access Control), AU (Audit and Accountability), IR (Incident Response), and roughly twenty others. Each control has a base statement (the minimum requirement) and optional enhancements that add strength or capability on top of it — think of the base statement as the requirement and the enhancement as an upgrade. Many controls also include organization-defined parameters (ODPs): blanks the organization fills in with its own values, like "lock the account after [Assignment: organization-defined number] failed attempts." Selection means picking which controls, enhancements, and parameter values apply — before anyone builds anything.',
      },
      {
        title: 'Choosing a Baseline',
        body:
          'SP 800-53B provides pre-built Low, Moderate, and High control baselines, and you pick the one matching the system\'s FIPS 199 categorization from Domain 2 — this is why categorization has to happen first. A baseline is a starting point, not a finished answer. Privacy controls get similar treatment: the PT control family (Personally Identifiable Information Processing and Transparency) and the privacy baseline address consent, transparency, and PII-specific risk, layered in alongside the traditional confidentiality/integrity/availability-focused baseline rather than treated as a separate afterthought.',
      },
      {
        title: 'Tailoring: Scoping & Compensating Controls',
        body:
          'Blindly applying a baseline as-is either leaves gaps (system-specific risks the generic baseline doesn\'t anticipate) or wastes effort (implementing controls that make no sense for this system, like a physical-access control for a system with no physical facility). Tailoring fixes this: scoping guidance lets you narrow which parts of a control genuinely apply, and compensating controls let you substitute an equivalent protection when the originally specified control isn\'t feasible. Every tailoring decision needs documented rationale — you\'re not allowed to just skip a control because it\'s inconvenient; you have to justify why the substitute (or exclusion) still meets the intent.',
      },
      {
        title: 'Allocating Controls: Common, Hybrid, System-Specific',
        body:
          'Before implementation even starts, Selection decides how each control will be allocated. A common control is implemented once, centrally, and inherited by many systems (like enterprise badge access). A system-specific control is built entirely by and for one system, with no inheritance. A hybrid control splits the difference — part inherited, part built specifically for this system. Getting this allocation decision right in Selection saves enormous duplicated effort in Implementation (Domain 4), and it\'s also what the final selected control set gets formally approved by stakeholders before anyone starts building.',
      },
    ],
    aiNote:
      'Selection now includes deciding which controls (or AI-specific overlays) address "black box" model risk, algorithmic transparency, and explainability requirements — treated as a first-class category alongside traditional confidentiality/integrity/availability controls.',
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
      'The RMF\'s "Implement" step now stands on its own as the single largest domain on the exam. Selecting a control on paper is not the same as building it correctly — this domain covers actually deploying the technical, operational, and management controls chosen in Domain 3, documenting exactly how each one is implemented, and making sure that implementation is verifiable before an assessor ever looks at it.',
    keyConcepts: [
      'Translating a control\'s base statement into a concrete technical/operational/management implementation',
      'System Security Plan (SSP) — documenting how each selected control is actually implemented (NIST SP 800-18)',
      'Implementing common controls, hybrid controls, and system-specific controls correctly, including inheritance documentation',
      'Secure configuration management and hardening baselines as an implementation activity',
      'Integrating control implementation into the SDLC / DevSecOps pipeline rather than bolting it on afterward',
      'Verifying implementation readiness before formal assessment (self-testing, peer review)',
    ],
    lessons: [
      {
        title: 'From Selection to Reality: Writing Implementation Statements',
        body:
          'Selecting a control is a decision on paper; implementing it means the SSP has to state exactly how it works on this real system — the configured values, the mechanism, the process — in enough detail that an independent assessor could verify it without asking you what you meant. "We enforce strong passwords" is not an implementation statement; "the system enforces a minimum 14-character password via [specific mechanism], reviewed every 90 days" is. A generic, copy-pasted restatement of the control\'s base text in the SSP is one of the most common real-world findings, and it usually means a control was selected but never actually built.',
      },
      {
        title: 'Secure Configuration & Hardening',
        body:
          'Turning "harden the system" from a vague requirement into a concrete, auditable checklist is itself an implementation activity — this is where Security Technical Implementation Guides (STIGs) and similar product-specific hardening standards earn their keep, giving you exact registry keys, service settings, and audit policies rather than inventing them from scratch. Configuration management controls also depend on a Change Control Board (CCB) reviewing and approving changes going forward — implementation isn\'t a one-time event, and an uncontrolled change is a common way a carefully-built control silently stops working.',
      },
      {
        title: 'Implementing Inherited & Hybrid Controls',
        body:
          'A common control that was allocated in Selection still has to be documented in Implementation: name the providing system/organization, and confirm that provider\'s own implementation (and eventual assessment) is actually current — inheriting a control doesn\'t remove your accountability if the source turns out to be stale. Hybrid controls need both halves documented: the inherited portion and the system-specific portion you built yourself. System-specific controls are the most straightforward — your own team is fully responsible, with nothing to inherit and nowhere to point elsewhere if it doesn\'t work.',
      },
      {
        title: 'DevSecOps Integration & Readiness Verification',
        body:
          'Waiting until formal assessment to discover an implementation gap is expensive. Building control implementation into the SDLC/DevSecOps pipeline — automated hardening checks, infrastructure-as-code scanning, security gates in CI/CD — catches problems while they\'re still cheap to fix. Before formal assessment, teams often self-test or peer-review implementation as a readiness check; this doesn\'t replace independent assessment (Domain 5), but it means the formal assessment isn\'t the first time anyone looks critically at whether a control actually works.',
      },
    ],
    aiNote:
      'Implementation-stage AI tasks include deploying monitoring for model drift and data poisoning, implementing guardrails/output filtering for generative AI systems, and documenting how "black box" risk is mitigated in practice — not just selected on paper.',
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
      'Once controls are implemented, someone independent has to verify they actually work. This domain covers assessment planning, methods (examine/interview/test), the Security Assessment Plan and Report, and how findings feed the POA&M — the RMF\'s "Assess" step.',
    keyConcepts: [
      'Security Assessment Plan (SAP) and Security Assessment Report (SAR)',
      'Assessment methods: examine, interview, test — and depth/coverage attributes',
      'NIST SP 800-53A — assessment procedures aligned to 800-53 controls',
      'Independence of assessors; assessor qualifications; reciprocity of existing assessments',
      'Plan of Action and Milestones (POA&M) — creation, tracking, closure',
      'Audit vs. assessment vs. continuous monitoring — how they differ in purpose',
    ],
    lessons: [
      {
        title: 'Assessment Methods: Examine, Interview, Test',
        body:
          'SP 800-53A defines three ways to assess a control: examine (review a specification, like a policy document), interview (talk to the individuals who apply the control), and test (directly exercise a mechanism or activity). Relying on only one method gives a shallow picture — reading a policy tells you nothing about whether it\'s actually followed, and interviewing an admin about a login system doesn\'t confirm the system actually behaves as described. Credible assessments match methods to what\'s being verified, with depth and coverage attributes describing how rigorously and how broadly each method was applied (a full population vs. a sample, a basic review vs. a comprehensive one).',
      },
      {
        title: 'Building the SAP, Writing the SAR',
        body:
          'The Security Assessment Plan (SAP) is written before assessment begins: it defines scope, which methods apply to which controls, and how assessors will approach the work. The Security Assessment Report (SAR) documents what was actually found — results, risk ratings, and recommendations — after the assessment is complete. Together they turn "we think our controls work" into an evidence-based, independently verified conclusion the Authorizing Official can actually rely on in Domain 6.',
      },
      {
        title: 'Assessor Independence & Reciprocity',
        body:
          'An assessor grading their own implementation work is far more likely to miss (or downplay) real weaknesses, which is why credible assessments require independence — the assessor should have no vested interest in the outcome, ideally organizationally separate from whoever built the controls. Programs like FedRAMP formalize this through accredited Third-Party Assessment Organizations (3PAOs). Reciprocity is the flip side: rather than re-assessing a system from scratch, an organization can accept another organization\'s existing, credible assessment or authorization — avoiding duplicated work without sacrificing rigor.',
      },
      {
        title: 'From Findings to POA&M',
        body:
          'A finding that isn\'t immediately remediated doesn\'t just disappear — it becomes a Plan of Action and Milestones (POA&M) entry: what\'s wrong, who owns fixing it, what resources it needs, and by when. The POA&M is a living document reviewed on a recurring cadence, not a one-time report filed and forgotten, and its open items are something the AO explicitly reviews as part of every authorization decision in Domain 6. This is also where assessment stops being a one-time event and starts feeding the ongoing compliance picture that Domain 7 (Compliance Maintenance) is built on.',
      },
    ],
    aiNote:
      'Assessing AI systems adds testing for bias, robustness against adversarial inputs, and validating that model behavior matches documented intent — assessment methods (examine/interview/test) still apply, but the "mechanism" being tested is now a model rather than only traditional software.',
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
      'The RMF\'s "Authorize" step: the Authorizing Official reviews the authorization package (SSP, SAR, POA&M) and makes a formal, risk-based decision about whether the system is compliant enough to operate. This domain is about that decision itself — what goes into it, who makes it, and what the possible outcomes are.',
    keyConcepts: [
      'Authorization package contents (SSP, SAR, POA&M) and the Authorization to Operate (ATO) decision',
      'Authorizing Official (AO) responsibilities and risk acceptance vs. risk transfer',
      'Types of authorization: full ATO, interim authorization to test (IATT), denial of authorization',
      'Residual risk and how it\'s communicated to the AO for a compliance decision',
      'Authorization termination dates and the conditions attached to a compliance decision',
      'Reciprocity — accepting another organization\'s existing authorization instead of re-authorizing from scratch',
    ],
    lessons: [
      {
        title: 'The Authorization Package',
        body:
          'By the time a system reaches Domain 6, three documents converge into a single authorization package: the SSP (what the system is and how controls are implemented, from Domain 4), the SAR (independent findings on whether those controls actually work, from Domain 5), and the POA&M (what\'s still open and being tracked). The AO doesn\'t re-derive any of this from scratch — the whole point of the preceding domains is to hand the AO a complete, evidence-based picture to make one focused decision on.',
      },
      {
        title: 'The AO\'s Decision: ATO, IATT, or Denial',
        body:
          'The Authorizing Official reviews that package and issues one of a few outcomes. A full Authorization to Operate (ATO) means the AO accepts residual risk and the system may run in production, usually with a defined termination date forcing periodic review. An Interim Authorization to Test (IATT) is narrower — the system may operate in a test environment only, not production. Denial of authorization means residual risk is unacceptable and cannot currently be mitigated enough to proceed; the system doesn\'t get to operate until that changes. Every decision, including any conditions attached to it, gets documented in a formal authorization decision record — an undocumented decision isn\'t really a decision at all.',
      },
      {
        title: 'Residual Risk & the Nature of "Compliance"',
        body:
          'Authorization is fundamentally about accepting residual risk, not eliminating all risk — no system reaches zero risk, and pretending otherwise defeats the purpose of a risk-based framework. "System Compliance" doesn\'t mean "perfect"; it means the AO, with full visibility into what remains unresolved, has made an informed, accountable decision that the remaining risk is acceptable given the mission need. This is also where the AO distinguishes risk acceptance (living with the risk) from risk transfer (e.g., shifting some impact to an insurer or a contractual partner) as different ways of handling what\'s left.',
      },
      {
        title: 'Reciprocity & Authorization Terms',
        body:
          'Just as assessments can be reused through reciprocity (Domain 5), authorizations can be too — accepting another organization\'s existing, credible ATO rather than re-authorizing the same system from zero, common in programs like FedRAMP. Every authorization also carries terms: a termination date that forces a scheduled reauthorization checkpoint, and often specific conditions (like closing certain POA&M items within 90 days) that keep the system\'s risk picture honest between now and the next full review — which is exactly the bridge into Domain 7\'s ongoing monitoring.',
      },
    ],
    aiNote:
      'AI-specific compliance decisions weigh algorithmic transparency and regulatory posture (e.g., does this AI use case fall under a "high-risk" category in applicable law?) alongside traditional residual risk before the AO signs off.',
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
      'Authorization is a point-in-time decision — the RMF only works if compliance is actively maintained afterward. This domain covers Information Security Continuous Monitoring (ISCM), change management, ongoing/event-driven reauthorization, and the incident response and contingency planning that keep a system\'s compliance posture valid over time rather than frozen at the moment of the last ATO.',
    keyConcepts: [
      'ISCM strategy: what to monitor, how often, and against what triggers (NIST SP 800-137)',
      'Ongoing authorization and event-driven reauthorization when significant changes occur',
      'Security metrics, dashboards, and automated data feeds for monitoring',
      'Incident response lifecycle (Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-Incident Activity)',
      'Business Continuity Plan (BCP), Disaster Recovery Plan (DRP), and Continuity of Operations Plan (COOP)',
      'Recovery Time Objective (RTO) and Recovery Point Objective (RPO)',
      'Tabletop, functional, and full-scale exercises; lessons learned feeding back into risk management',
      'System decommissioning and secure disposal at end of life',
    ],
    lessons: [
      {
        title: 'Building an ISCM Strategy',
        body:
          'An authorization is a snapshot; Information Security Continuous Monitoring (ISCM), defined in SP 800-137, is what keeps that snapshot honest afterward. A good ISCM strategy defines what gets monitored, how often, and what triggers escalation — vulnerability scans, configuration drift alerts, access reviews, all feeding a dashboard rather than sitting in separate silos. Automated data feeds matter here specifically because they reduce lag: manual, periodic checks mean the AO\'s risk picture is always somewhat stale, while automated feeds keep it close to real time.',
      },
      {
        title: 'Ongoing & Event-Driven Reauthorization',
        body:
          'Instead of relying solely on a static reassessment every few years, ongoing authorization uses that continuous monitoring data to keep the AO\'s risk determination current between formal cycles — a movie instead of a photograph. Some changes can\'t wait for the next scheduled review at all: a major architecture change, a significant breach, or a new threat should trigger event-driven reauthorization — an out-of-cycle risk review prompted by the change itself, not the calendar.',
      },
      {
        title: 'Incident Response & Contingency Planning',
        body:
          'When monitoring reveals (or fails to prevent) a real incident, the response follows a defined lifecycle: Preparation, Detection & Analysis, Containment/Eradication/Recovery, and Post-Incident Activity. Contingency planning sits alongside this at different scopes — a Business Continuity Plan (BCP) keeps business functions running, a Disaster Recovery Plan (DRP) restores IT infrastructure specifically, and a Continuity of Operations Plan (COOP) is the federal-agency-specific version emphasizing essential functions and leadership succession. Recovery targets get set in advance: Recovery Time Objective (RTO) is how long you can be down, Recovery Point Objective (RPO) is how much data loss is tolerable — both should trace back to the Business Impact Analysis from Domain 1.',
      },
      {
        title: 'Closing the Loop: Exercises, Lessons Learned, Decommissioning',
        body:
          'Plans that have never been tested are just documents. Tabletop exercises (discussion-based), functional exercises (partially hands-on), and full-scale exercises (as close to the real thing as it gets) validate that contingency and incident plans actually work, in increasing order of realism and cost. After any real incident, a lessons-learned review feeds improvements back into risk management and controls — an incident without one is a mistake scheduled to repeat. Compliance maintenance also covers the end of a system\'s life: secure decommissioning, data sanitization, and updating the system inventory when a system is retired, so "maintaining compliance" genuinely covers the system\'s full lifecycle, not just the years it\'s in production.',
      },
    ],
    aiNote:
      'Maintaining compliance for AI systems means continuously monitoring for model drift, retraining-triggered reauthorization, and incident response plans that specifically cover AI failure modes (e.g., a model producing harmful or biased output at scale) — not just traditional system outages.',
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
