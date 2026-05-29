export type RiskLevel = 'low' | 'moderate' | 'attention' | 'normal'

export interface ExamMarker {
  id: string
  name: string
  value: number
  unit: string
  referenceMin: number
  referenceMax: number
  status: RiskLevel
  trend?: 'up' | 'down' | 'stable'
}

export interface Exam {
  id: string
  name: string
  type: string
  date: string
  lab: string
  status: 'completed' | 'processing' | 'scheduled'
  markers?: ExamMarker[]
}

export interface Consultation {
  id: string
  doctorName: string
  specialty: string
  date: string
  time: string
  type: 'video' | 'chat'
  status: 'upcoming' | 'completed' | 'cancelled'
  avatarInitials: string
}

export interface Doctor {
  id: string
  name: string
  specialty: string
  crm: string
  rating: number
  reviews: number
  price: number
  availableSlots: string[]
  bio: string
  avatarInitials: string
  languages: string[]
}

export interface Notification {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: 'exam' | 'consultation' | 'insight' | 'system'
}

export interface TimelineEvent {
  id: string
  title: string
  description: string
  date: string
  category: 'exam' | 'consultation' | 'lifestyle' | 'insight'
}

export interface AIInsight {
  id: string
  title: string
  summary: string
  confidence: number
  disclaimer: string
  relatedExamId?: string
}

export interface ChartDataPoint {
  label: string
  value: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatarInitials: string
}

export interface PreventiveRecommendation {
  id: string
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  icon: string
}

export interface MockAIInterpretation {
  summary: string
  supportOnlyNotice: string
  markers: ExamMarker[]
  riskIndicators: { label: string; level: RiskLevel; description: string }[]
  highlightedValues: { name: string; note: string }[]
}
