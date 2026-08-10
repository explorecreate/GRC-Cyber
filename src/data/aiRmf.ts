import type { NistItem } from './types'

// The NIST AI Risk Management Framework (AI RMF 1.0) is the AI-focused version of the
// security RMF you already know — same idea (frame the risk, evaluate it, manage it,
// keep watching it) just applied to AI systems instead of regular information systems.
export const aiRmfFunctions: NistItem[] = [
  {
    id: 'govern',
    title: 'Govern',
    summary:
      'Sets up the policies, roles, and accountability for managing AI risk across the organization — the piece that touches everything else.',
    points: [
      'Set up AI risk policy, roles, and accountability — an AI version of the AO/ISSO structure',
      'Decide how much AI risk the organization is willing to accept',
      'Build processes for AI-related legal requirements and third-party AI risk (vendors, outside models)',
      'Create a culture where people feel safe raising AI risk concerns',
    ],
  },
  {
    id: 'map',
    title: 'Map',
    summary:
      'Figures out the context around an AI risk — what the system is, how it\'s used, and who it affects. This is the AI version of Categorize/Prepare.',
    points: [
      'Write down what the AI system is for, who uses it, and how',
      'Think about impacts to individuals and society, not just the organization',
      'Map out risks from the system\'s capabilities, limits, and any outside components',
      'Bring in different perspectives early — legal, ethics, and subject-matter experts',
    ],
  },
  {
    id: 'measure',
    title: 'Measure',
    summary:
      'Tests and tracks AI risks using real data and defined metrics. This is the AI version of Assess.',
    points: [
      'Check the AI system\'s performance, reliability, fairness, and safety against clear metrics',
      'Test for bias, security weaknesses, and unexpected failures',
      'Keep tracking these metrics continuously, not just once before launch',
      'Be transparent about how you measured things, and what the limits of that measurement are',
    ],
  },
  {
    id: 'manage',
    title: 'Manage',
    summary:
      'Puts resources toward the risks you found, and plans for how to respond if something goes wrong. This is the AI version of Authorize/Monitor.',
    points: [
      'Decide what to fix first, based on what the Measure step found',
      'Plan incident response specifically for AI failures, like harmful output or model drift',
      'Keep monitoring after launch — this isn\'t a one-time sign-off',
      'Write down risk decisions and what risk is left over, just like an AO documents an authorization',
    ],
  },
]

export const aiRmfCrossReference: { securityRmfStep: string; aiRmfFunction: string; note: string }[] = [
  { securityRmfStep: 'Prepare', aiRmfFunction: 'Govern', note: 'Both set up roles, policy, and risk tolerance before any system-specific work starts.' },
  { securityRmfStep: 'Categorize', aiRmfFunction: 'Map', note: 'Both figure out context and scope — what the system is, who it affects, and what could go wrong.' },
  { securityRmfStep: 'Select / Implement', aiRmfFunction: '(no direct match)', note: 'The AI RMF focuses on managing risk broadly, not a specific catalog of controls like SP 800-53.' },
  { securityRmfStep: 'Assess', aiRmfFunction: 'Measure', note: 'Both check whether the system actually behaves as intended, using defined methods and metrics.' },
  { securityRmfStep: 'Authorize / Monitor', aiRmfFunction: 'Manage', note: 'Both close the loop — respond to what was found, keep monitoring, and document the decisions made.' },
]
