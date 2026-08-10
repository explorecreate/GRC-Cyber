export interface ResourceLink {
  title: string
  source: string
  url: string
  kind: 'video' | 'article' | 'pdf' | 'doc'
}

export interface Domain {
  id: string
  number: number
  title: string
  weight: string // exam weighting, e.g. "17%"
  overview: string
  keyConcepts: string[]
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
