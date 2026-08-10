import type { NistItem } from './types'

// The NIST AI Risk Management Framework (AI RMF 1.0) is the direct AI-governance
// counterpart to the security RMF (SP 800-37) — same idea (framing, evaluating, and
// managing risk continuously) applied to AI systems instead of information systems.
export const aiRmfFunctions: NistItem[] = [
  {
    id: 'govern',
    title: 'Govern',
    summary:
      'Cultivates a risk-aware culture and establishes the policies, processes, and accountability structures for managing AI risk across the organization — the cross-cutting function that touches all the others.',
    points: [
      'Establish AI risk management policies, roles, and accountability (an AI equivalent of the AO/ISSO structure)',
      'Define organizational risk tolerance for AI systems specifically',
      'Build processes for legal/regulatory compliance and third-party AI risk (vendors, foundation models)',
      'Foster a culture where teams feel safe raising AI risk concerns',
    ],
  },
  {
    id: 'map',
    title: 'Map',
    summary:
      'Establishes the context to frame AI risks — understanding the system, its intended use, and who is affected — the AI-governance analog to Categorize/Prepare in the security RMF.',
    points: [
      'Document intended purpose, users, and context of use for the AI system',
      'Identify potential impacts to individuals, groups, and society, not just the organization',
      'Map risks arising from the AI system\'s capabilities, limitations, and third-party components',
      'Involve diverse, cross-functional perspectives (legal, ethics, domain experts) early',
    ],
  },
  {
    id: 'measure',
    title: 'Measure',
    summary:
      'Uses quantitative, qualitative, or mixed methods to analyze and track AI risks and their impacts — the analog to Assess in the security RMF.',
    points: [
      'Evaluate AI system performance, robustness, fairness, and safety against defined metrics',
      'Test for bias, security vulnerabilities, and unexpected failure modes',
      'Track metrics continuously, not just at a single pre-deployment checkpoint',
      'Document measurement methodology and limitations transparently',
    ],
  },
  {
    id: 'manage',
    title: 'Manage',
    summary:
      'Allocates resources to identified risks on a regular basis, and plans responses to incidents, misuse, or unexpected impacts — the analog to Authorize/Monitor in the security RMF.',
    points: [
      'Prioritize and treat risks based on the Measure function\'s findings',
      'Plan for incident response specific to AI failures (e.g., harmful outputs, model drift)',
      'Maintain mechanisms for ongoing monitoring after deployment, not one-time sign-off',
      'Document risk decisions and residual risk the same way an AO documents an authorization decision',
    ],
  },
]

export const aiRmfCrossReference: { securityRmfStep: string; aiRmfFunction: string; note: string }[] = [
  { securityRmfStep: 'Prepare', aiRmfFunction: 'Govern', note: 'Both set up roles, policy, and risk tolerance before any system-specific work begins.' },
  { securityRmfStep: 'Categorize', aiRmfFunction: 'Map', note: 'Both establish context and scope — what the system is, who it affects, what could go wrong.' },
  { securityRmfStep: 'Select / Implement', aiRmfFunction: '(no direct analog)', note: 'AI RMF is risk-management-focused rather than a control-catalog process like SP 800-53.' },
  { securityRmfStep: 'Assess', aiRmfFunction: 'Measure', note: 'Both evaluate whether the system behaves as intended, using defined methods and metrics.' },
  { securityRmfStep: 'Authorize / Monitor', aiRmfFunction: 'Manage', note: 'Both close the loop — respond to findings, monitor continuously, and document risk decisions.' },
]
