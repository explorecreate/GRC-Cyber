import { domains } from './domains'

export type RoadmapCompletion =
  | { kind: 'topic'; topicId: string }
  | { kind: 'quiz'; domainId: string }
  | { kind: 'exam' }

export interface RoadmapStep {
  id: string
  title: string
  description: string
  path: string
  completion: RoadmapCompletion
}

export interface RoadmapPhase {
  id: string
  title: string
  description: string
  steps: RoadmapStep[]
}

// A suggested order to work through the CGRC Study Center — not required, just a default
// path for anyone asking "where do I start?" Each step's completion is derived from
// localStorage (studied topics + quiz attempts), so the roadmap always reflects real progress.
export const roadmapPhases: RoadmapPhase[] = [
  {
    id: 'foundations',
    title: '1. Learn the Domains',
    description: 'Read through all 7 CGRC domains in order — each builds on ideas from the last.',
    steps: domains.map((d) => ({
      id: `read-${d.id}`,
      title: `Domain ${d.number}: ${d.title}`,
      description: `${d.weight} of the exam — overview, key concepts, and free resources.`,
      path: `/cgrc/${d.id}`,
      completion: { kind: 'topic', topicId: d.id },
    })),
  },
  {
    id: 'vocabulary',
    title: '2. Master the Vocabulary',
    description: 'The exam leans hard on precise terminology — lock in the NIST RMF process and key terms before testing yourself.',
    steps: [
      {
        id: 'read-nist',
        title: 'NIST & RMF Deep-Dive',
        description: 'The 7-step RMF process and the SP 800-series publications behind it.',
        path: '/cgrc/nist',
        completion: { kind: 'topic', topicId: 'nist-rmf' },
      },
      {
        id: 'read-glossary',
        title: 'Acronym Glossary',
        description: 'Skim the full list — RMF, ATO, POA&M, SSP, and 50+ more.',
        path: '/cgrc/glossary',
        completion: { kind: 'topic', topicId: 'glossary' },
      },
      {
        id: 'read-terms',
        title: 'Terms to Know',
        description: 'Definitions, real-world examples, and memory tips for the concepts the exam tests hardest.',
        path: '/cgrc/terms',
        completion: { kind: 'topic', topicId: 'terms' },
      },
    ],
  },
  {
    id: 'practice',
    title: '3. Practice by Domain',
    description: 'Quiz yourself domain-by-domain while the material is still fresh from Phase 1.',
    steps: domains.map((d) => ({
      id: `quiz-${d.id}`,
      title: `${d.title} Quiz`,
      description: 'Domain-tagged multiple choice with instant feedback and full explanations.',
      path: `/cgrc/quizzes/${d.id}`,
      completion: { kind: 'quiz', domainId: d.id },
    })),
  },
  {
    id: 'exam-ready',
    title: '4. Exam Readiness',
    description: 'Simulate the real thing — timed, all domains mixed together.',
    steps: [
      {
        id: 'take-exam',
        title: 'Full Practice Exam',
        description: '100 questions across all 7 domains, timed to simulate exam conditions.',
        path: '/cgrc/exam',
        completion: { kind: 'exam' },
      },
    ],
  },
]

export function totalStepCount(): number {
  return roadmapPhases.reduce((sum, phase) => sum + phase.steps.length, 0)
}
