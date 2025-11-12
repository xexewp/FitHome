"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  Dumbbell, 
  Target, 
  Calendar, 
  TrendingUp, 
  Play, 
  Clock,
  Flame,
  Award,
  User,
  Settings,
  Home,
  BarChart3,
  ChevronRight,
  Star,
  Timer,
  Zap,
  Heart,
  Activity,
  Scale,
  Calculator,
  Plus,
  Minus,
  Check,
  ArrowLeft,
  Video,
  Users,
  Trophy,
  BookOpen,
  Utensils,
  Crown,
  Lock,
  Unlock,
  CreditCard,
  Shield,
  Infinity,
  Download,
  Smartphone,
  X
} from 'lucide-react'

export default function FitnessApp() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedWorkout, setSelectedWorkout] = useState(null)
  const [workoutInProgress, setWorkoutInProgress] = useState(false)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [exerciseTimer, setExerciseTimer] = useState(30)
  const [showSubscription, setShowSubscription] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [userPlan, setUserPlan] = useState('free') // 'free' ou 'premium'
  const [calorieCalculator, setCalorieCalculator] = useState({
    age: '',
    weight: '',
    height: '',
    gender: 'male',
    activity: 'moderate',
    goal: 'maintain'
  })

  // Dados simulados
  const todayWorkout = {
    name: "Treino de Força - Iniciante",
    duration: "30 min",
    exercises: 8,
    completed: false
  }

  const calorieData = {
    consumed: 1450,
    burned: 320,
    goal: 1800,
    remaining: 670
  }

  const weekProgress = {
    workoutsCompleted: 4,
    workoutsPlanned: 6,
    streak: 3
  }

  const workoutCategories = [
    {
      id: 'beginner',
      name: 'Iniciante',
      description: 'Perfeito para começar',
      color: 'from-slate-400 to-slate-500',
      icon: Star,
      workouts: [
        {
          id: 1,
          name: 'Treino Básico de Força',
          duration: '20 min',
          exercises: 6,
          difficulty: 'Fácil',
          calories: 150,
          premium: false,
          exercises_list: [
            { name: 'Agachamento', duration: 30, rest: 15, reps: '10-15' },
            { name: 'Flexão (joelhos)', duration: 30, rest: 15, reps: '8-12' },
            { name: 'Prancha', duration: 20, rest: 15, reps: '20s' },
            { name: 'Polichinelo', duration: 30, rest: 15, reps: '15-20' },
            { name: 'Abdominais', duration: 30, rest: 15, reps: '10-15' },
            { name: 'Alongamento', duration: 60, rest: 0, reps: '60s' }
          ]
        },
        {
          id: 2,
          name: 'Cardio Leve',
          duration: '15 min',
          exercises: 4,
          difficulty: 'Fácil',
          calories: 120,
          premium: false,
          exercises_list: [
            { name: 'Marcha no lugar', duration: 60, rest: 20, reps: '60s' },
            { name: 'Elevação de joelhos', duration: 30, rest: 15, reps: '15-20' },
            { name: 'Braços em círculo', duration: 30, rest: 15, reps: '10 cada' },
            { name: 'Respiração profunda', duration: 60, rest: 0, reps: '5 ciclos' }
          ]
        }
      ]
    },
    {
      id: 'intermediate',
      name: 'Intermediário',
      description: 'Aumente a intensidade',
      color: 'from-gray-400 to-gray-500',
      icon: Zap,
      workouts: [
        {
          id: 3,
          name: 'HIIT Completo',
          duration: '25 min',
          exercises: 8,
          difficulty: 'Médio',
          calories: 250,
          premium: true,
          exercises_list: [
            { name: 'Burpees', duration: 30, rest: 15, reps: '5-8' },
            { name: 'Agachamento com salto', duration: 30, rest: 15, reps: '10-15' },
            { name: 'Flexão completa', duration: 30, rest: 15, reps: '8-12' },
            { name: 'Mountain climbers', duration: 30, rest: 15, reps: '20-30' },
            { name: 'Prancha lateral', duration: 20, rest: 15, reps: '20s cada' },
            { name: 'Jumping jacks', duration: 30, rest: 15, reps: '20-30' },
            { name: 'Abdominais bicicleta', duration: 30, rest: 15, reps: '15-20' },
            { name: 'Alongamento', duration: 90, rest: 0, reps: '90s' }
          ]
        },
        {
          id: 5,
          name: 'Força e Resistência',
          duration: '30 min',
          exercises: 10,
          difficulty: 'Médio',
          calories: 280,
          premium: true,
          exercises_list: [
            { name: 'Agachamento búlgaro', duration: 45, rest: 20, reps: '8-12 cada' },
            { name: 'Flexão inclinada', duration: 30, rest: 15, reps: '10-15' },
            { name: 'Afundo alternado', duration: 45, rest: 20, reps: '10-15 cada' },
            { name: 'Prancha com toque', duration: 30, rest: 15, reps: '20-30' },
            { name: 'Elevação pélvica', duration: 30, rest: 15, reps: '15-20' },
            { name: 'Polichinelo com agachamento', duration: 30, rest: 15, reps: '10-15' },
            { name: 'Abdominais cruzados', duration: 30, rest: 15, reps: '15-20' },
            { name: 'Wall sit', duration: 30, rest: 15, reps: '30s' },
            { name: 'High knees', duration: 30, rest: 15, reps: '20-30' },
            { name: 'Alongamento completo', duration: 90, rest: 0, reps: '90s' }
          ]
        }
      ]
    },
    {
      id: 'advanced',
      name: 'Avançado',
      description: 'Desafie seus limites',
      color: 'from-stone-400 to-stone-500',
      icon: Trophy,
      workouts: [
        {
          id: 4,
          name: 'Força Extrema',
          duration: '35 min',
          exercises: 10,
          difficulty: 'Difícil',
          calories: 350,
          premium: true,
          exercises_list: [
            { name: 'Burpees com flexão', duration: 45, rest: 15, reps: '8-12' },
            { name: 'Agachamento pistol', duration: 30, rest: 20, reps: '5-8 cada' },
            { name: 'Flexão diamante', duration: 30, rest: 15, reps: '8-15' },
            { name: 'Prancha com elevação', duration: 45, rest: 15, reps: '45s' },
            { name: 'Saltos em caixa', duration: 30, rest: 20, reps: '10-15' },
            { name: 'Pike push-ups', duration: 30, rest: 15, reps: '8-12' },
            { name: 'Russian twists', duration: 45, rest: 15, reps: '30-40' },
            { name: 'Bear crawl', duration: 30, rest: 15, reps: '20-30s' },
            { name: 'Jump squats', duration: 30, rest: 15, reps: '15-20' },
            { name: 'Alongamento completo', duration: 120, rest: 0, reps: '2min' }
          ]
        },
        {
          id: 6,
          name: 'Atleta Completo',
          duration: '40 min',
          exercises: 12,
          difficulty: 'Muito Difícil',
          calories: 400,
          premium: true,
          exercises_list: [
            { name: 'Burpees com salto', duration: 45, rest: 20, reps: '10-15' },
            { name: 'Handstand push-ups', duration: 30, rest: 20, reps: '5-10' },
            { name: 'Pistol squats', duration: 45, rest: 20, reps: '5-8 cada' },
            { name: 'Muscle-ups simulado', duration: 30, rest: 15, reps: '8-12' },
            { name: 'Prancha archer', duration: 30, rest: 15, reps: '15s cada' },
            { name: 'Box jumps altos', duration: 30, rest: 20, reps: '10-15' },
            { name: 'L-sit hold', duration: 20, rest: 15, reps: '20s' },
            { name: 'Tuck jumps', duration: 30, rest: 15, reps: '15-20' },
            { name: 'Dragon flag', duration: 30, rest: 20, reps: '5-10' },
            { name: 'Plyometric push-ups', duration: 30, rest: 15, reps: '8-12' },
            { name: 'Single leg deadlift', duration: 45, rest: 15, reps: '8-12 cada' },
            { name: 'Alongamento atlético', duration: 150, rest: 0, reps: '2.5min' }
          ]
        }
      ]
    }
  ]

  const progressData = {
    weight: [
      { week: 'Sem 1', value: 75 },
      { week: 'Sem 2', value: 74.5 },
      { week: 'Sem 3', value: 74.2 },
      { week: 'Sem 4', value: 73.8 }
    ],
    workouts: [
      { month: 'Jan', completed: 12 },
      { month: 'Fev', completed: 16 },
      { month: 'Mar', completed: 20 },
      { month: 'Abr', completed: 18 }
    ],
    achievements: [
      { name: 'Primeira Semana', description: 'Complete 3 treinos', earned: true },
      { name: 'Consistência', description: '7 dias seguidos', earned: true },
      { name: 'Queimador', description: '1000 calorias queimadas', earned: true },
      { name: 'Força Total', description: 'Complete treino avançado', earned: false },
      { name: 'Maratonista', description: '30 dias ativos', earned: false }
    ]
  }

  const subscriptionPlans = {
    free: {
      name: 'Plano Gratuito',
      price: 'R$ 0,00',
      period: '/mês',
      features: [
        'Acesso a treinos básicos',
        'Calculadora de calorias',
        'Acompanhamento básico de progresso',
        'Até 3 treinos por semana',
        'Suporte por email'
      ],
      limitations: [
        'Treinos intermediários e avançados bloqueados',
        'Sem vídeos demonstrativos',
        'Sem planos personalizados',
        'Sem modo offline',
        'Anúncios no app'
      ]
    },
    premium: {
      name: 'Plano Premium',
      price: 'R$ 59,90',
      period: '/mês',
      features: [
        'Acesso TOTAL a todos os treinos',
        'Vídeos demonstrativos HD',
        'Planos de treino personalizados',
        'Treinos ilimitados',
        'Modo offline - baixe seus treinos',
        'Estatísticas avançadas',
        'Suporte prioritário 24/7',
        'Sem anúncios',
        'Novos treinos toda semana',
        'Acompanhamento nutricional'
      ],
      limitations: []
    }
  }

  const Navigation = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {[
          { id: 'home', icon: Home, label: 'Início' },
          { id: 'workouts', icon: Dumbbell, label: 'Treinos' },
          { id: 'progress', icon: BarChart3, label: 'Progresso' },
          { id: 'profile', icon: User, label: 'Perfil' }
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
              activeTab === id 
                ? 'text-gray-800 bg-gray-100' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  )

  const SubscriptionModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Crown className="text-yellow-400" size={24} />
              <h2 className="text-xl font-bold">Escolha seu Plano</h2>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowSubscription(false)}
              className="text-white hover:bg-white/20"
            >
              <X size={20} />
            </Button>
          </div>
          <p className="text-gray-300">Desbloqueie todo o potencial do seu treino</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Plano Gratuito */}
          <Card className={`border-2 ${userPlan === 'free' ? 'border-gray-400' : 'border-gray-200'}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Plano Gratuito</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-700">R$ 0,00</span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                </div>
                {userPlan === 'free' && (
                  <Badge className="bg-gray-600 text-white">Atual</Badge>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                  <Check className="text-green-500" size={16} />
                  Incluído:
                </h4>
                {subscriptionPlans.free.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="text-green-500" size={14} />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                  <X className="text-red-500" size={16} />
                  Limitações:
                </h4>
                {subscriptionPlans.free.limitations.map((limitation, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-500">
                    <X className="text-red-500" size={14} />
                    {limitation}
                  </div>
                ))}
              </div>

              {userPlan !== 'free' && (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setUserPlan('free')
                    setShowSubscription(false)
                  }}
                >
                  Usar Plano Gratuito
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Plano Premium */}
          <Card className={`border-2 ${userPlan === 'premium' ? 'border-yellow-400' : 'border-gray-200'} relative overflow-hidden`}>
            {/* Badge Popular */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
              MAIS POPULAR
            </div>
            
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Crown className="text-yellow-500" size={20} />
                    <h3 className="text-lg font-bold text-gray-800">Plano Premium</h3>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-yellow-600">R$ 59,90</span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                </div>
                {userPlan === 'premium' && (
                  <Badge className="bg-yellow-500 text-black">Atual</Badge>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                  <Crown className="text-yellow-500" size={16} />
                  Tudo do Premium:
                </h4>
                {subscriptionPlans.premium.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="text-green-500" size={14} />
                    {feature}
                  </div>
                ))}
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold"
                onClick={() => {
                  setShowSubscription(false)
                  setShowCheckout(true)
                }}
              >
                <Crown size={16} className="mr-2" />
                Assinar Premium
              </Button>

              <p className="text-xs text-gray-500 text-center mt-2">
                Cancele a qualquer momento
              </p>
            </CardContent>
          </Card>

          {/* Comparação Rápida */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">Por que Premium?</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600 mb-1">3</div>
                <div className="text-gray-600">Treinos/semana</div>
                <div className="text-xs text-gray-500">Plano Gratuito</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-1 flex items-center justify-center gap-1">
                  <Infinity size={20} />
                </div>
                <div className="text-gray-600">Treinos Ilimitados</div>
                <div className="text-xs text-yellow-600">Plano Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const CheckoutModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-6 rounded-t-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <CreditCard size={24} />
              <h2 className="text-xl font-bold">Finalizar Assinatura</h2>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowCheckout(false)}
              className="text-black hover:bg-black/10"
            >
              <X size={20} />
            </Button>
          </div>
          <p className="text-black/80">Plano Premium - R$ 59,90/mês</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Resumo do Plano */}
          <Card className="border border-yellow-200 bg-yellow-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Crown className="text-yellow-600" size={20} />
                  <span className="font-bold text-yellow-800">Plano Premium</span>
                </div>
                <span className="text-xl font-bold text-yellow-600">R$ 59,90</span>
              </div>
              <div className="text-sm text-yellow-700 space-y-1">
                <div className="flex items-center gap-2">
                  <Check size={14} />
                  <span>Treinos ilimitados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} />
                  <span>Vídeos HD + Modo offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} />
                  <span>Sem anúncios</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulário de Pagamento */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800">Informações de Pagamento</h3>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Nome no Cartão</label>
              <input
                type="text"
                placeholder="João Silva"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Número do Cartão</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Validade</label>
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="joao@email.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Resumo de Cobrança */}
          <Card className="border border-gray-200">
            <CardContent className="p-4">
              <h4 className="font-bold text-gray-800 mb-3">Resumo da Cobrança</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Plano Premium (mensal)</span>
                  <span className="text-gray-800">R$ 59,90</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Desconto primeiro mês</span>
                  <span className="text-green-600">-R$ 10,00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold">
                  <span className="text-gray-800">Total hoje</span>
                  <span className="text-gray-800">R$ 49,90</span>
                </div>
                <div className="text-xs text-gray-500">
                  Próxima cobrança: R$ 59,90 em 30 dias
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Segurança */}
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <Shield className="text-green-600" size={20} />
            <div className="text-sm">
              <div className="font-medium text-green-800">Pagamento 100% Seguro</div>
              <div className="text-green-600">Seus dados são protegidos com criptografia SSL</div>
            </div>
          </div>

          {/* Botão de Pagamento */}
          <Button 
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3"
            onClick={() => {
              setUserPlan('premium')
              setShowCheckout(false)
              // Aqui você integraria com o gateway de pagamento
              alert('Parabéns! Assinatura Premium ativada com sucesso! 🎉')
            }}
          >
            <CreditCard size={16} className="mr-2" />
            Confirmar Pagamento - R$ 49,90
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Ao confirmar, você concorda com nossos Termos de Uso e Política de Privacidade. 
            Cancele a qualquer momento.
          </p>
        </div>
      </div>
    </div>
  )

  const HomeScreen = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">Olá, Atleta! 💪</h1>
            <p className="text-gray-300">Pronto para treinar hoje?</p>
          </div>
          <div className="flex gap-2">
            {userPlan === 'premium' && (
              <Badge className="bg-yellow-500 text-black">
                <Crown size={12} className="mr-1" />
                Premium
              </Badge>
            )}
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Settings size={20} />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Flame className="text-orange-400" size={16} />
            <span className="text-sm">Sequência: {weekProgress.streak} dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="text-yellow-400" size={16} />
            <span className="text-sm">Nível: {userPlan === 'premium' ? 'Premium' : 'Iniciante'}</span>
          </div>
        </div>
      </div>

      {/* Upgrade Banner (apenas para usuários free) */}
      {userPlan === 'free' && (
        <Card className="border-0 shadow-lg bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-l-yellow-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Crown className="text-yellow-600" size={24} />
                <div>
                  <h3 className="font-bold text-yellow-800">Desbloqueie o Premium!</h3>
                  <p className="text-sm text-yellow-700">Acesso total por apenas R$ 59,90/mês</p>
                </div>
              </div>
              <Button 
                size="sm"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                onClick={() => setShowSubscription(true)}
              >
                Upgrade
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Meu Treino de Hoje */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Dumbbell className="text-gray-700" size={20} />
            Meu Treino de Hoje
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-800">{todayWorkout.name}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {todayWorkout.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Target size={14} />
                    {todayWorkout.exercises} exercícios
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                Hoje
              </Badge>
            </div>
            
            <Button 
              className="w-full bg-gray-800 hover:bg-gray-900 text-white"
              onClick={() => {
                setActiveTab('workouts')
                setSelectedWorkout(workoutCategories[0].workouts[0])
              }}
            >
              <Play size={16} className="mr-2" />
              Começar Treino
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Minhas Calorias */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Flame className="text-orange-500" size={20} />
            Minhas Calorias
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Resumo Principal */}
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-800">
                {calorieData.remaining > 0 ? calorieData.remaining : 0}
              </div>
              <div className="text-sm text-gray-600">
                {calorieData.remaining > 0 ? 'calorias restantes' : 'meta atingida!'}
              </div>
            </div>

            {/* Detalhes */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-lg font-semibold text-blue-600">
                  {calorieData.consumed}
                </div>
                <div className="text-xs text-gray-600">Consumidas</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-lg font-semibold text-green-600">
                  {calorieData.burned}
                </div>
                <div className="text-xs text-gray-600">Queimadas</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="text-lg font-semibold text-purple-600">
                  {calorieData.goal}
                </div>
                <div className="text-xs text-gray-600">Meta</div>
              </div>
            </div>

            {/* Barra de Progresso */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Progresso Diário</span>
                <span>{Math.round((calorieData.consumed / calorieData.goal) * 100)}%</span>
              </div>
              <Progress 
                value={(calorieData.consumed / calorieData.goal) * 100} 
                className="h-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progresso */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="text-green-500" size={20} />
            Progresso
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Progresso Semanal */}
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <div>
                <h3 className="font-semibold text-gray-800">Esta Semana</h3>
                <p className="text-sm text-gray-600">
                  {weekProgress.workoutsCompleted} de {weekProgress.workoutsPlanned} treinos
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-700">
                  {Math.round((weekProgress.workoutsCompleted / weekProgress.workoutsPlanned) * 100)}%
                </div>
                <Progress 
                  value={(weekProgress.workoutsCompleted / weekProgress.workoutsPlanned) * 100}
                  className="w-20 h-2 mt-1"
                />
              </div>
            </div>

            {/* Estatísticas Rápidas */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <Calendar className="text-blue-500 mx-auto mb-1" size={20} />
                <div className="text-lg font-semibold text-blue-600">12</div>
                <div className="text-xs text-gray-600">Dias Ativos</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg text-center">
                <Flame className="text-orange-500 mx-auto mb-1" size={20} />
                <div className="text-lg font-semibold text-orange-600">2.4k</div>
                <div className="text-xs text-gray-600">Calorias Queimadas</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ações Rápidas */}
      <div className="grid grid-cols-2 gap-4">
        <Button 
          variant="outline" 
          className="h-16 flex-col gap-1 border-gray-300 hover:bg-gray-50"
          onClick={() => setActiveTab('workouts')}
        >
          <Target className="text-gray-600" size={20} />
          <span className="text-sm">Ver Treinos</span>
        </Button>
        <Button 
          variant="outline" 
          className="h-16 flex-col gap-1 border-gray-300 hover:bg-gray-50"
          onClick={() => setShowSubscription(true)}
        >
          <Crown className="text-yellow-500" size={20} />
          <span className="text-sm">Planos</span>
        </Button>
      </div>
    </div>
  )

  const WorkoutsScreen = () => {
    if (workoutInProgress && selectedWorkout) {
      return <WorkoutInProgress />
    }

    if (selectedWorkout) {
      return <WorkoutDetail />
    }

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-2xl">
          <h1 className="text-2xl font-bold mb-2">Biblioteca de Treinos</h1>
          <p className="text-gray-300">Escolha seu treino ideal</p>
        </div>

        {/* Categorias */}
        <div className="space-y-4">
          {workoutCategories.map((category) => (
            <Card key={category.id} className="border-0 shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${category.color} p-4`}>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <category.icon size={24} />
                    <div>
                      <h3 className="font-bold text-lg">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {category.workouts.length} treinos
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-3">
                  {category.workouts.map((workout) => {
                    const isPremium = workout.premium
                    const isLocked = isPremium && userPlan === 'free'
                    
                    return (
                      <div 
                        key={workout.id}
                        className={`flex items-center justify-between p-3 rounded-lg transition-colors relative ${
                          isLocked 
                            ? 'bg-gray-100 cursor-not-allowed opacity-75' 
                            : 'bg-gray-50 hover:bg-gray-100 cursor-pointer'
                        }`}
                        onClick={() => {
                          if (isLocked) {
                            setShowSubscription(true)
                          } else {
                            setSelectedWorkout(workout)
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            isLocked 
                              ? 'bg-gray-300' 
                              : 'bg-gradient-to-r from-gray-600 to-gray-700'
                          }`}>
                            {isLocked ? (
                              <Lock className="text-gray-500" size={16} />
                            ) : (
                              <Play className="text-white" size={16} />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className={`font-semibold ${isLocked ? 'text-gray-500' : 'text-gray-800'}`}>
                                {workout.name}
                              </h4>
                              {isPremium && (
                                <Crown className="text-yellow-500" size={14} />
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock size={12} />
                                {workout.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Target size={12} />
                                {workout.exercises} exercícios
                              </span>
                              <span className="flex items-center gap-1">
                                <Flame size={12} />
                                {workout.calories} cal
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {isLocked ? (
                          <div className="flex items-center gap-2">
                            <Badge className="bg-yellow-500 text-black text-xs">
                              Premium
                            </Badge>
                            <Lock className="text-gray-400" size={16} />
                          </div>
                        ) : (
                          <ChevronRight className="text-gray-400" size={20} />
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Treino Personalizado */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Criar Treino Personalizado</h3>
              <p className="text-gray-600 mb-4">Monte sua própria rotina de exercícios</p>
              {userPlan === 'premium' ? (
                <Button className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800">
                  <Plus size={16} className="mr-2" />
                  Criar Treino
                </Button>
              ) : (
                <Button 
                  variant="outline"
                  onClick={() => setShowSubscription(true)}
                  className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                >
                  <Crown size={16} className="mr-2" />
                  Upgrade para Premium
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const WorkoutDetail = () => {
    const isPremium = selectedWorkout.premium
    const isLocked = isPremium && userPlan === 'free'

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSelectedWorkout(null)}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="text-white flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">{selectedWorkout.name}</h1>
              {isPremium && <Crown className="text-yellow-400" size={18} />}
            </div>
            <p className="text-sm opacity-90">{selectedWorkout.difficulty} • {selectedWorkout.duration}</p>
          </div>
        </div>

        {/* Informações do Treino */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Clock className="text-blue-500 mx-auto mb-1" size={20} />
                <div className="text-lg font-semibold text-blue-600">{selectedWorkout.duration}</div>
                <div className="text-xs text-gray-600">Duração</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Target className="text-green-500 mx-auto mb-1" size={20} />
                <div className="text-lg font-semibold text-green-600">{selectedWorkout.exercises}</div>
                <div className="text-xs text-gray-600">Exercícios</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Flame className="text-orange-500 mx-auto mb-1" size={20} />
                <div className="text-lg font-semibold text-orange-600">{selectedWorkout.calories}</div>
                <div className="text-xs text-gray-600">Calorias</div>
              </div>
            </div>

            {isLocked ? (
              <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <Lock className="text-yellow-600 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-yellow-800 mb-2">Treino Premium</h3>
                <p className="text-yellow-700 mb-4">
                  Este treino está disponível apenas para assinantes Premium
                </p>
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                  onClick={() => setShowSubscription(true)}
                >
                  <Crown size={16} className="mr-2" />
                  Assinar Premium
                </Button>
              </div>
            ) : (
              <Button 
                className="w-full bg-gray-800 hover:bg-gray-900 text-white mb-4"
                onClick={() => setWorkoutInProgress(true)}
              >
                <Play size={16} className="mr-2" />
                Iniciar Treino
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Lista de Exercícios */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="text-gray-700" size={20} />
              Exercícios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {selectedWorkout.exercises_list.map((exercise, index) => (
                <div key={index} className={`flex items-center gap-4 p-3 rounded-lg ${
                  isLocked ? 'bg-gray-100 opacity-60' : 'bg-gray-50'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    isLocked ? 'bg-gray-400 text-gray-600' : 'bg-gray-600 text-white'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${isLocked ? 'text-gray-500' : 'text-gray-800'}`}>
                      {exercise.name}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Timer size={12} />
                        {exercise.duration}s
                      </span>
                      <span className="flex items-center gap-1">
                        <Target size={12} />
                        {exercise.reps}
                      </span>
                      {exercise.rest > 0 && (
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {exercise.rest}s descanso
                        </span>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" disabled={isLocked}>
                    {isLocked ? (
                      <Lock className="text-gray-400" size={16} />
                    ) : userPlan === 'premium' ? (
                      <Video className="text-gray-600" size={16} />
                    ) : (
                      <Smartphone className="text-gray-400" size={16} />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features Premium */}
        {userPlan === 'free' && (
          <Card className="border-0 shadow-lg bg-gradient-to-r from-yellow-50 to-yellow-100">
            <CardContent className="p-6">
              <div className="text-center">
                <Crown className="text-yellow-600 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-yellow-800 mb-2">Desbloqueie o Premium</h3>
                <div className="space-y-2 text-sm text-yellow-700 mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <Video size={14} />
                    <span>Vídeos demonstrativos HD</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Download size={14} />
                    <span>Modo offline</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Unlock size={14} />
                    <span>Todos os treinos desbloqueados</span>
                  </div>
                </div>
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                  onClick={() => setShowSubscription(true)}
                >
                  <Crown size={16} className="mr-2" />
                  Assinar por R$ 59,90/mês
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    )
  }

  const WorkoutInProgress = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold">{selectedWorkout.name}</h1>
            <p className="text-gray-300">Exercício {currentExercise + 1} de {selectedWorkout.exercises_list.length}</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setWorkoutInProgress(false)}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft size={20} />
          </Button>
        </div>
        
        <Progress 
          value={((currentExercise + 1) / selectedWorkout.exercises_list.length) * 100}
          className="h-2 bg-gray-600"
        />
      </div>

      {/* Exercício Atual */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Dumbbell className="text-white" size={32} />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {selectedWorkout.exercises_list[currentExercise].name}
          </h2>
          
          <div className="text-6xl font-bold text-gray-700 mb-4">
            {exerciseTimer}
          </div>
          
          <p className="text-gray-600 mb-6">
            {selectedWorkout.exercises_list[currentExercise].reps}
          </p>

          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline"
              onClick={() => setExerciseTimer(prev => Math.max(0, prev - 5))}
            >
              <Minus size={16} />
            </Button>
            
            <Button className="bg-gray-800 hover:bg-gray-900 px-8">
              {exerciseTimer > 0 ? 'Pausar' : 'Próximo'}
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => setExerciseTimer(prev => prev + 5)}
            >
              <Plus size={16} />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Próximos Exercícios */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Próximos Exercícios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {selectedWorkout.exercises_list.slice(currentExercise + 1, currentExercise + 4).map((exercise, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-xs">
                  {currentExercise + index + 2}
                </div>
                <span className="text-sm text-gray-700">{exercise.name}</span>
                <span className="text-xs text-gray-500 ml-auto">{exercise.duration}s</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const ProgressScreen = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 rounded-2xl">
        <h1 className="text-2xl font-bold mb-2">Seu Progresso</h1>
        <p className="text-gray-300">Acompanhe sua evolução</p>
      </div>

      {/* Estatísticas Principais */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-4 text-center">
            <Scale className="text-blue-500 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-blue-600">73.8kg</div>
            <div className="text-sm text-gray-600">Peso Atual</div>
            <div className="text-xs text-green-600 mt-1">-1.2kg este mês</div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg">
          <CardContent className="p-4 text-center">
            <Trophy className="text-orange-500 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-orange-600">18</div>
            <div className="text-sm text-gray-600">Treinos Este Mês</div>
            <div className="text-xs text-green-600 mt-1">+2 vs mês passado</div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Peso */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="text-green-500" size={20} />
            Evolução do Peso
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {progressData.weight.map((data, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">{data.week}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-gray-500 to-gray-600 h-2 rounded-full"
                      style={{ width: `${((76 - data.value) / 3) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{data.value}kg</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Treinos por Mês */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="text-blue-500" size={20} />
            Treinos Mensais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {progressData.workouts.map((data, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">{data.month}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-gray-500 to-gray-600 h-2 rounded-full"
                      style={{ width: `${(data.completed / 25) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{data.completed}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Conquistas */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="text-yellow-500" size={20} />
            Conquistas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {progressData.achievements.map((achievement, index) => (
              <div key={index} className={`flex items-center gap-4 p-3 rounded-lg ${
                achievement.earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  achievement.earned ? 'bg-yellow-500' : 'bg-gray-300'
                }`}>
                  {achievement.earned ? (
                    <Trophy className="text-white" size={16} />
                  ) : (
                    <Trophy className="text-gray-500" size={16} />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold ${
                    achievement.earned ? 'text-yellow-800' : 'text-gray-600'
                  }`}>
                    {achievement.name}
                  </h4>
                  <p className={`text-sm ${
                    achievement.earned ? 'text-yellow-600' : 'text-gray-500'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
                {achievement.earned && (
                  <Check className="text-yellow-600" size={20} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const ProfileScreen = () => {
    const calculateTDEE = () => {
      const { age, weight, height, gender, activity } = calorieCalculator
      
      if (!age || !weight || !height) return 0
      
      // Fórmula Mifflin-St Jeor
      let bmr
      if (gender === 'male') {
        bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) + 5
      } else {
        bmr = 10 * parseFloat(weight) + 6.25 * parseFloat(height) - 5 * parseFloat(age) - 161
      }
      
      // Multiplicadores de atividade
      const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        very_active: 1.9
      }
      
      return Math.round(bmr * activityMultipliers[activity])
    }

    const getCalorieGoal = (tdee) => {
      const { goal } = calorieCalculator
      
      switch (goal) {
        case 'lose_fast': return tdee - 750
        case 'lose': return tdee - 500
        case 'lose_slow': return tdee - 250
        case 'maintain': return tdee
        case 'gain_slow': return tdee + 250
        case 'gain': return tdee + 500
        default: return tdee
      }
    }

    const tdee = calculateTDEE()
    const calorieGoal = getCalorieGoal(tdee)

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Meu Perfil</h1>
              <div className="flex items-center gap-2">
                <p className="text-gray-300">Configurações e calculadora</p>
                {userPlan === 'premium' && (
                  <Badge className="bg-yellow-500 text-black">
                    <Crown size={12} className="mr-1" />
                    Premium
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Plano Atual */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="text-yellow-500" size={20} />
              Meu Plano
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <h3 className="font-bold text-gray-800">
                  {userPlan === 'premium' ? 'Plano Premium' : 'Plano Gratuito'}
                </h3>
                <p className="text-sm text-gray-600">
                  {userPlan === 'premium' ? 'R$ 59,90/mês • Acesso total' : 'R$ 0,00/mês • Funcionalidades básicas'}
                </p>
              </div>
              <Button 
                variant="outline"
                onClick={() => setShowSubscription(true)}
                className={userPlan === 'premium' ? 'border-yellow-500 text-yellow-600' : ''}
              >
                {userPlan === 'premium' ? 'Gerenciar' : 'Upgrade'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Calculadora de Calorias */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="text-gray-600" size={20} />
              Calculadora de Calorias
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Informações Básicas */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Idade</label>
                <input
                  type="number"
                  placeholder="25"
                  value={calorieCalculator.age}
                  onChange={(e) => setCalorieCalculator(prev => ({ ...prev, age: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Peso (kg)</label>
                <input
                  type="number"
                  placeholder="70"
                  value={calorieCalculator.weight}
                  onChange={(e) => setCalorieCalculator(prev => ({ ...prev, weight: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Altura (cm)</label>
              <input
                type="number"
                placeholder="175"
                value={calorieCalculator.height}
                onChange={(e) => setCalorieCalculator(prev => ({ ...prev, height: e.target.value }))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Gênero</label>
              <select
                value={calorieCalculator.gender}
                onChange={(e) => setCalorieCalculator(prev => ({ ...prev, gender: e.target.value }))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Nível de Atividade</label>
              <select
                value={calorieCalculator.activity}
                onChange={(e) => setCalorieCalculator(prev => ({ ...prev, activity: e.target.value }))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="sedentary">Sedentário (pouco ou nenhum exercício)</option>
                <option value="light">Levemente ativo (exercício leve 1-3 dias/semana)</option>
                <option value="moderate">Moderadamente ativo (exercício moderado 3-5 dias/semana)</option>
                <option value="active">Ativo (exercício intenso 6-7 dias/semana)</option>
                <option value="very_active">Muito ativo (exercício muito intenso, trabalho físico)</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Objetivo</label>
              <select
                value={calorieCalculator.goal}
                onChange={(e) => setCalorieCalculator(prev => ({ ...prev, goal: e.target.value }))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                <option value="lose_fast">Perder peso rapidamente (-0.75kg/semana)</option>
                <option value="lose">Perder peso (-0.5kg/semana)</option>
                <option value="lose_slow">Perder peso devagar (-0.25kg/semana)</option>
                <option value="maintain">Manter peso</option>
                <option value="gain_slow">Ganhar peso devagar (+0.25kg/semana)</option>
                <option value="gain">Ganhar peso (+0.5kg/semana)</option>
              </select>
            </div>

            {/* Resultados */}
            {tdee > 0 && (
              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Seus Resultados:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-700">{tdee}</div>
                    <div className="text-sm text-gray-600">Gasto Diário (TDEE)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-700">{calorieGoal}</div>
                    <div className="text-sm text-gray-600">Meta de Calorias</div>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Recomendação:</strong> Para atingir seu objetivo, consuma aproximadamente {calorieGoal} calorias por dia.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Configurações */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="text-gray-500" size={20} />
              Configurações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Heart className="text-red-500" size={20} />
                <span className="font-medium text-gray-700">Notificações de Treino</span>
              </div>
              <div className="w-12 h-6 bg-gray-600 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Utensils className="text-green-500" size={20} />
                <span className="font-medium text-gray-700">Lembrete de Alimentação</span>
              </div>
              <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Activity className="text-blue-500" size={20} />
                <span className="font-medium text-gray-700">Sincronizar com Saúde</span>
              </div>
              <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas do Perfil */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-gray-600" size={20} />
              Suas Estatísticas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-700">28</div>
                <div className="text-sm text-gray-600">Dias no App</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {userPlan === 'premium' ? '45' : '15'}
                </div>
                <div className="text-sm text-gray-600">Treinos Completos</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {userPlan === 'premium' ? '8.7k' : '3.2k'}
                </div>
                <div className="text-sm text-gray-600">Calorias Queimadas</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {userPlan === 'premium' ? '14' : '7'}
                </div>
                <div className="text-sm text-gray-600">Maior Sequência</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="max-w-md mx-auto p-4">
        {activeTab === 'home' && <HomeScreen />}
        {activeTab === 'workouts' && <WorkoutsScreen />}
        {activeTab === 'progress' && <ProgressScreen />}
        {activeTab === 'profile' && <ProfileScreen />}
      </div>
      
      <Navigation />
      
      {/* Modais */}
      {showSubscription && <SubscriptionModal />}
      {showCheckout && <CheckoutModal />}
    </div>
  )
}