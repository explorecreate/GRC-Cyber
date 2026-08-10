# GRC-Cyber

A free, open-access study hub — no login required. Built with React, TypeScript, Tailwind CSS, and React Router.

## Sections

- **Dashboard** — progress snapshot and "continue where you left off," powered entirely by `localStorage`.
- **CGRC Study Center** — domain-by-domain breakdown of the CGRC (ISC2) exam outline, a NIST RMF deep-dive, a searchable acronym glossary, "Terms to Know" reference cards, domain-tagged practice quizzes, and a timed full practice exam.
- **AI Learning Center** — AI fundamentals (LLMs, prompting, agents, RAG, AI governance) plus an ongoing feed of non-app AI use cases.
- **UMGC Coursework Prep** — free intro material and resources for CSIA 360, CSIA 413, and CSIA 459.

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run lint      # oxlint
```

## Content model

All study content lives as typed data in `src/data/*.ts` (domains, glossary, terms, quiz questions, AI resources, UMGC courses) — edit or expand those files to add content without touching UI code.

Progress and quiz scores are stored only in the browser's `localStorage` (see `src/lib/storage.ts`) — nothing is sent to a server.
