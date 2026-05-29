import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { LandingPage } from '@/pages/LandingPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { ExamAnalysisPage } from '@/pages/ExamAnalysisPage'
import { ConsultationPage } from '@/pages/ConsultationPage'
import { SecurityPage } from '@/pages/SecurityPage'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/exames" element={<ExamAnalysisPage />} />
          <Route path="/consultas" element={<ConsultationPage />} />
          <Route path="/privacidade" element={<SecurityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
