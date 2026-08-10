export interface ResourceLink {
  title: string
  source: string
  url: string
  kind: 'video' | 'article' | 'pdf' | 'doc'
}

export interface DomainLesson {
  title: string
  body: string
}

export interface Domain {
  id: string
  number: number
  title: string
  weight: string // official exam weighting, e.g. "17%"
  rmfStep: string // the RMF step this domain corresponds to, e.g. "Prepare"
  overview: string
  keyConcepts: string[]
  lessons: DomainLesson[] // a short mini-course walking through the domain in depth, not just bullet points
  aiNote?: string // how AI-specific tasks/subtasks show up in this domain per the current exam outline
  resources: ResourceLink[]
}

export interface NistItem {
  id: string
  title: string
  summary: string
  points: string[]
}

export interface GlossaryEntry {
  acronym: string
  expansion: string
  definition: string
  domainId?: string // the domain this term is most associated with, when it's domain-specific
}

export interface TermEntry {
  id: string
  term: string
  domainId: string
  definition: string
  example: string
  whyItMatters: string
  howToApply: string
  memoryTip: string
}

export interface QuizQuestion {
  id: string
  domainId: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface AiResource {
  title: string
  source: string
  url: string
  kind: 'video' | 'article'
  blurb: string
}

export interface UseCaseCard {
  id: string
  title: string
  category: string
  summary: string
  source: string
  url: string
  added: string // ISO date
}

export interface UmgcProject {
  title: string
  summary: string
}

export interface UmgcCourse {
  id: string
  code: string
  title: string
  credits: number
  prerequisites: string
  overview: string
  keyTopics: string[]
  projects: UmgcProject[]
  resources: ResourceLink[]
}
