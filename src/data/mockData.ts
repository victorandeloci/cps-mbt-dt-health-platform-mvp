import type {
  AIInsight,
  ChartDataPoint,
  Consultation,
  Doctor,
  Exam,
  ExamMarker,
  MockAIInterpretation,
  Notification,
  PreventiveRecommendation,
  Testimonial,
  TimelineEvent,
} from '@/types'

export const BRAND = {
  name: 'SR',
  fullName: 'SR',
  tagline: 'Cuidar antes é viver melhor.',
  persona: {
    name: 'Judite Costa',
    age: 34,
    role: 'Analista de Marketing',
  },
} as const

export const healthScore = {
  value: 82,
  label: 'Bom',
  change: +4,
  lastUpdated: '28 mai 2026',
}

export const cholesterolTrend: ChartDataPoint[] = [
  { label: 'Jan', value: 198 },
  { label: 'Fev', value: 192 },
  { label: 'Mar', value: 188 },
  { label: 'Abr', value: 185 },
  { label: 'Mai', value: 178 },
]

export const glucoseTrend: ChartDataPoint[] = [
  { label: 'Jan', value: 98 },
  { label: 'Fev', value: 95 },
  { label: 'Mar', value: 94 },
  { label: 'Abr', value: 91 },
  { label: 'Mai', value: 89 },
]

export const vitaminTrend: ChartDataPoint[] = [
  { label: 'Jan', value: 22 },
  { label: 'Fev', value: 24 },
  { label: 'Mar', value: 26 },
  { label: 'Abr', value: 28 },
  { label: 'Mai', value: 31 },
]

export const bloodMarkers: ExamMarker[] = [
  {
    id: '1',
    name: 'Colesterol Total',
    value: 178,
    unit: 'mg/dL',
    referenceMin: 0,
    referenceMax: 190,
    status: 'normal',
    trend: 'down',
  },
  {
    id: '2',
    name: 'LDL',
    value: 112,
    unit: 'mg/dL',
    referenceMin: 0,
    referenceMax: 130,
    status: 'normal',
    trend: 'down',
  },
  {
    id: '3',
    name: 'HDL',
    value: 58,
    unit: 'mg/dL',
    referenceMin: 40,
    referenceMax: 200,
    status: 'normal',
    trend: 'stable',
  },
  {
    id: '4',
    name: 'Glicemia em Jejum',
    value: 89,
    unit: 'mg/dL',
    referenceMin: 70,
    referenceMax: 99,
    status: 'normal',
    trend: 'down',
  },
  {
    id: '5',
    name: 'Vitamina D',
    value: 31,
    unit: 'ng/mL',
    referenceMin: 30,
    referenceMax: 100,
    status: 'attention',
    trend: 'up',
  },
  {
    id: '6',
    name: 'Vitamina B12',
    value: 412,
    unit: 'pg/mL',
    referenceMin: 200,
    referenceMax: 900,
    status: 'normal',
    trend: 'stable',
  },
  {
    id: '7',
    name: 'Hemoglobina',
    value: 13.8,
    unit: 'g/dL',
    referenceMin: 12,
    referenceMax: 16,
    status: 'normal',
    trend: 'stable',
  },
  {
    id: '8',
    name: 'Triglicerídeos',
    value: 142,
    unit: 'mg/dL',
    referenceMin: 0,
    referenceMax: 150,
    status: 'moderate',
    trend: 'up',
  },
]

export const recentExams: Exam[] = [
  {
    id: 'e1',
    name: 'Painel Lipídico + Glicemia',
    type: 'Sangue',
    date: '22 mai 2026',
    lab: 'LabVida SP',
    status: 'completed',
    markers: bloodMarkers.slice(0, 4),
  },
  {
    id: 'e2',
    name: 'Vitaminas D e B12',
    type: 'Sangue',
    date: '15 abr 2026',
    lab: 'LabVida SP',
    status: 'completed',
    markers: bloodMarkers.slice(4, 6),
  },
  {
    id: 'e3',
    name: 'Hemograma Completo',
    type: 'Sangue',
    date: '10 mar 2026',
    lab: 'Centro Diagnóstico Alpha',
    status: 'completed',
    markers: [bloodMarkers[6]!],
  },
]

export const upcomingConsultation: Consultation = {
  id: 'c1',
  doctorName: 'Dra. Helena Ribeiro',
  specialty: 'Clínica Geral / Preventiva',
  date: '30 mai 2026',
  time: '19:30',
  type: 'video',
  status: 'upcoming',
  avatarInitials: 'HR',
}

export const consultationHistory: Consultation[] = [
  upcomingConsultation,
  {
    id: 'c2',
    doctorName: 'Dr. Paulo Mendes',
    specialty: 'Endocrinologia',
    date: '12 abr 2026',
    time: '18:00',
    type: 'video',
    status: 'completed',
    avatarInitials: 'PM',
  },
  {
    id: 'c3',
    doctorName: 'Dra. Ana Luiza Ferreira',
    specialty: 'Nutrição Clínica',
    date: '05 fev 2026',
    time: '12:15',
    type: 'chat',
    status: 'completed',
    avatarInitials: 'AF',
  },
]

export const aiInsights: AIInsight[] = [
  {
    id: 'ai1',
    title: 'Vitamina D no limite inferior',
    summary:
      'Seu nível de Vitamina D (31 ng/mL) está próximo ao limite mínimo de referência. Padrões recentes sugerem monitoramento — um profissional pode avaliar suplementação ou exposição solar.',
    confidence: 87,
    disclaimer:
      'Esta é uma interpretação de apoio gerada por IA. Não constitui diagnóstico. Consulte sempre um médico.',
    relatedExamId: 'e2',
  },
  {
    id: 'ai2',
    title: 'Perfil lipídico em melhora',
    summary:
      'Colesterol total e LDL apresentam tendência de queda nos últimos 5 meses. Continue acompanhando com seu médico de confiança.',
    confidence: 92,
    disclaimer:
      'Análise automatizada para fins informativos. Decisões clínicas devem ser tomadas por profissionais habilitados.',
    relatedExamId: 'e1',
  },
]

export const notifications: Notification[] = [
  {
    id: 'n1',
    title: 'Resultado disponível',
    message: 'Painel Lipídico + Glicemia já pode ser visualizado.',
    time: 'Há 2 horas',
    read: false,
    type: 'exam',
  },
  {
    id: 'n2',
    title: 'Consulta amanhã',
    message: 'Lembrete: teleconsulta com Dra. Helena às 19:30.',
    time: 'Há 5 horas',
    read: false,
    type: 'consultation',
  },
  {
    id: 'n3',
    title: 'Insight de apoio',
    message: 'Nova interpretação assistida disponível para Vitamina D.',
    time: 'Ontem',
    read: true,
    type: 'insight',
  },
  {
    id: 'n4',
    title: 'Dados protegidos',
    message: 'Seus exames foram criptografados com sucesso no armazenamento.',
    time: '3 dias',
    read: true,
    type: 'system',
  },
]

export const healthTimeline: TimelineEvent[] = [
  {
    id: 't1',
    title: 'Exame lipídico concluído',
    description: 'Resultados integrados ao painel com interpretação de apoio.',
    date: '22 mai 2026',
    category: 'exam',
  },
  {
    id: 't2',
    title: 'Teleconsulta agendada',
    description: 'Revisão preventiva com Dra. Helena Ribeiro.',
    date: '28 mai 2026',
    category: 'consultation',
  },
  {
    id: 't3',
    title: 'Meta de caminhada atingida',
    description: '8.200 passos médios na semana — ótimo para saúde cardiovascular.',
    date: '20 mai 2026',
    category: 'lifestyle',
  },
  {
    id: 't4',
    title: 'Insight: Vitamina D',
    description: 'IA identificou valor limítrofe — aguardando validação médica.',
    date: '15 mai 2026',
    category: 'insight',
  },
]

export const preventiveRecommendations: PreventiveRecommendation[] = [
  {
    id: 'r1',
    title: 'Check-up anual completo',
    description: 'Agende avaliação clínica geral nos próximos 30 dias.',
    priority: 'high',
    icon: 'calendar',
  },
  {
    id: 'r2',
    title: 'Reavaliar Vitamina D',
    description: 'Discuta níveis atuais com seu médico na próxima consulta.',
    priority: 'high',
    icon: 'sun',
  },
  {
    id: 'r3',
    title: 'Hidratação e sono',
    description: 'Manter 7–8h de sono melhora recuperação e metabolismo.',
    priority: 'medium',
    icon: 'moon',
  },
  {
    id: 'r4',
    title: 'Atividade moderada',
    description: '150 min/semana de exercício aeróbico leve a moderado.',
    priority: 'low',
    icon: 'activity',
  },
]

export const doctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dra. Helena Ribeiro',
    specialty: 'Clínica Geral / Preventiva',
    crm: 'CRM-SP 145782',
    rating: 4.9,
    reviews: 312,
    price: 189,
    availableSlots: ['30/05 19:30', '31/05 08:00', '02/06 18:45'],
    bio: '15 anos focada em medicina preventiva e saúde da mulher adulta.',
    avatarInitials: 'HR',
    languages: ['PT', 'EN'],
  },
  {
    id: 'd2',
    name: 'Dr. Paulo Mendes',
    specialty: 'Endocrinologia',
    crm: 'CRM-SP 98234',
    rating: 4.8,
    reviews: 198,
    price: 219,
    availableSlots: ['29/05 17:00', '01/06 09:30', '03/06 20:00'],
    bio: 'Especialista em metabolismo, diabetes e perfil lipídico.',
    avatarInitials: 'PM',
    languages: ['PT'],
  },
  {
    id: 'd3',
    name: 'Dra. Ana Luiza Ferreira',
    specialty: 'Nutrição Clínica',
    crm: 'CRN-3 45891',
    rating: 4.9,
    reviews: 267,
    price: 159,
    availableSlots: ['30/05 12:00', '01/06 14:30', '04/06 11:00'],
    bio: 'Planos alimentares personalizados com foco em exames laboratoriais.',
    avatarInitials: 'AF',
    languages: ['PT', 'ES'],
  },
  {
    id: 'd4',
    name: 'Dr. Ricardo Nogueira',
    specialty: 'Cardiologia Preventiva',
    crm: 'CRM-RJ 67102',
    rating: 4.7,
    reviews: 145,
    price: 249,
    availableSlots: ['02/06 10:00', '05/06 16:30'],
    bio: 'Prevenção cardiovascular para profissionais com rotina intensa.',
    avatarInitials: 'RN',
    languages: ['PT', 'EN'],
  },
]

export const specialties = [
  'Clínica Geral',
  'Endocrinologia',
  'Cardiologia',
  'Nutrição',
  'Dermatologia',
  'Ginecologia',
  'Psiquiatria',
]

export const testimonials: Testimonial[] = [
  {
    id: 'tm1',
    name: 'Judite Costa',
    role: 'Analista de Marketing, 34 anos',
    quote:
      'Finalmente entendo meus exames sem ficar horas no Google. A interpretação de apoio me prepara para conversar com o médico.',
    avatarInitials: 'JC',
  },
  {
    id: 'tm2',
    name: 'Felipe Andrade',
    role: 'Product Manager, 38 anos',
    quote:
      'Agendar consulta em minutos, entre reuniões, mudou minha relação com check-ups preventivos.',
    avatarInitials: 'FA',
  },
  {
    id: 'tm3',
    name: 'Camila Rocha',
    role: 'Advogada, 41 anos',
    quote:
      'A transparência sobre LGPD e criptografia me deu confiança para centralizar meus dados de saúde.',
    avatarInitials: 'CR',
  },
]

export const mockAIInterpretation: MockAIInterpretation = {
  summary:
    'Com base no painel enviado, a maioria dos marcadores está dentro das faixas de referência. Vitamina D apresenta valor limítrofe e triglicerídeos merecem atenção em acompanhamento — recomendamos discussão com um profissional de saúde.',
  supportOnlyNotice:
    'Esta interpretação é gerada por inteligência artificial apenas como SUPORTE à compreensão dos resultados. Ela NÃO substitui avaliação, diagnóstico ou prescrição por médico(a) ou profissional habilitado.',
  markers: bloodMarkers,
  riskIndicators: [
    {
      label: 'Metabolismo glicêmico',
      level: 'low',
      description: 'Glicemia em jejum dentro da faixa esperada.',
    },
    {
      label: 'Perfil lipídico',
      level: 'low',
      description: 'Colesterol total e LDL favoráveis; HDL adequado.',
    },
    {
      label: 'Micronutrientes',
      level: 'moderate',
      description: 'Vitamina D próxima ao limite inferior — monitorar.',
    },
    {
      label: 'Triglicerídeos',
      level: 'attention',
      description: 'Valor próximo ao limite superior — validar com especialista.',
    },
  ],
  highlightedValues: [
    {
      name: 'Vitamina D — 31 ng/mL',
      note: 'Limítrofe. Possível necessidade de ajuste de hábitos ou suplementação — decisão médica.',
    },
    {
      name: 'Triglicerídeos — 142 mg/dL',
      note: 'Próximo ao teto de referência. Dieta e estilo de vida podem ser discutidos na consulta.',
    },
    {
      name: 'Colesterol Total — 178 mg/dL',
      note: 'Tendência de melhora nos últimos meses — resultado positivo no acompanhamento.',
    },
  ],
}

export const landingFeatures = [
  {
    title: 'Teleconsultas',
    description: 'Agende com profissionais verificados, no horário que cabe na sua agenda.',
    icon: 'video',
  },
  {
    title: 'Interpretação assistida',
    description: 'IA explica exames em linguagem clara — sempre como apoio, nunca diagnóstico.',
    icon: 'brain',
  },
  {
    title: 'Painel de saúde',
    description: 'Visualize tendências, scores e histórico em um só lugar.',
    icon: 'layout',
  },
  {
    title: 'Privacidade LGPD',
    description: 'Criptografia, consentimento granular e controle total dos seus dados.',
    icon: 'shield',
  },
]

export const howItWorks = [
  {
    step: '01',
    title: 'Envie seus exames',
    description: 'Upload seguro de PDF ou imagem — processamento em segundos.',
  },
  {
    step: '02',
    title: 'Compreenda com apoio de IA',
    description: 'Resumo educativo dos marcadores, com avisos claros de limitação.',
  },
  {
    step: '03',
    title: 'Converse com um especialista',
    description: 'Agende teleconsulta para validar achados e definir próximos passos.',
  },
]

export const securityFeatures = [
  {
    title: 'Criptografia ponta a ponta',
    description: 'Dados em trânsito e em repouso protegidos com padrões AES-256.',
    icon: 'lock',
  },
  {
    title: 'Conformidade LGPD',
    description: 'Consentimento explícito, direito de exclusão e portabilidade de dados.',
    icon: 'file-check',
  },
  {
    title: 'Armazenamento seguro',
    description: 'Servidores em território nacional com políticas de retenção transparentes.',
    icon: 'database',
  },
  {
    title: 'Validação profissional',
    description: 'CRM verificado e fluxos clínicos supervisionados por médicos parceiros.',
    icon: 'badge-check',
  },
]
