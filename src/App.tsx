import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import CgrcHome from './pages/cgrc/CgrcHome'
import DomainDetail from './pages/cgrc/DomainDetail'
import Nist from './pages/cgrc/Nist'
import Glossary from './pages/cgrc/Glossary'
import Terms from './pages/cgrc/Terms'
import QuizzesHub from './pages/cgrc/QuizzesHub'
import QuizPage from './pages/cgrc/QuizPage'
import ExamPage from './pages/cgrc/ExamPage'
import AiHome from './pages/ai/AiHome'
import LearningAi from './pages/ai/LearningAi'
import AiRmf from './pages/ai/AiRmf'
import BeyondApps from './pages/ai/BeyondApps'
import UmgcHome from './pages/umgc/UmgcHome'
import CourseDetail from './pages/umgc/CourseDetail'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />

          <Route path="cgrc" element={<CgrcHome />} />
          <Route path="cgrc/nist" element={<Nist />} />
          <Route path="cgrc/glossary" element={<Glossary />} />
          <Route path="cgrc/terms" element={<Terms />} />
          <Route path="cgrc/quizzes" element={<QuizzesHub />} />
          <Route path="cgrc/quizzes/:domainId" element={<QuizPage />} />
          <Route path="cgrc/exam" element={<ExamPage />} />
          <Route path="cgrc/:domainId" element={<DomainDetail />} />

          <Route path="ai" element={<AiHome />} />
          <Route path="ai/learning" element={<LearningAi />} />
          <Route path="ai/rmf" element={<AiRmf />} />
          <Route path="ai/beyond" element={<BeyondApps />} />

          <Route path="umgc" element={<UmgcHome />} />
          <Route path="umgc/:courseId" element={<CourseDetail />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
