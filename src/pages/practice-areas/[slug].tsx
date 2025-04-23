import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Scale, Home, Users, Shield, FileText, ShoppingCart, 
  DollarSign, Coins, Building2, ClipboardCheck, HeartPulse, Briefcase,
  Baby, Heart, Calendar, Scroll, UserPlus, TreePine, Divide, Gift,
  Umbrella, HandHeart, Clock, RefreshCcw, Calculator,
  Gavel, ArrowUpFromDot, AlertCircle, ScrollText, ArrowUpRight, ShieldCheck, GraduationCap,
  CircleDollarSign, ClipboardList, Ban, Wrench, AlertOctagon, MessageSquareWarning, XCircle, HeartCrack,
  Phone, UserRoundSearch
} from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { handleWhatsAppClick } from '@/utils/helpers';
import { PracticeArea } from '@/types';

const practiceAreasData: PracticeArea[] = [
  {
    title: "Direito Criminal",
    icon: <Scale className="h-10 w-10 text-lawgold-400" />,
    slug: "direito-criminal",
    description: "Atuação na defesa de direitos e garantias individuais em investigações, processos criminais e júris, com acompanhamento desde o inquérito policial até a sentença.",
    detailedDescription: [
      "O Direito Penal é o ramo do Direito que define as condutas consideradas crimes e estabelece as penas aplicáveis. Nossa atuação abrange desde a fase de investigação até a execução da pena.",
      "Atuamos na defesa de acusados em todas as fases do processo penal, incluindo inquérito policial, ação penal, recursos e execução penal. Nossa equipe está preparada para garantir seus direitos fundamentais.",
      "Oferecemos assessoria especializada em crimes contra a vida, patrimônio, honra, liberdade individual, entre outros, sempre buscando a melhor estratégia de defesa para cada caso."
    ],
    cases: [
      {
        title: "Defesa em Crime Contra a Vida",
        description: "Atuação bem-sucedida em caso de homicídio culposo, demonstrando ausência de dolo e obtendo absolvição do cliente."
      },
      {
        title: "Defesa em Crime Contra o Patrimônio",
        description: "Representação em caso de furto qualificado, conseguindo a redução da pena e a progressão de regime prisional."
      },
      {
        title: "Defesa em Crime Contra a Honra",
        description: "Atuação em processo por calúnia e difamação, obtendo a absolvição do cliente e a condenação do autor da denúncia."
      }
    ]
  },
  // ... outros dados de áreas de prática
];

const PracticeAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [areaInfo, setAreaInfo] = useState<PracticeArea | null>(null);

  useEffect(() => {
    const area = practiceAreasData.find(area => area.slug === slug);
    setAreaInfo(area || null);
  }, [slug]);

  if (!areaInfo) {
    return <div>Área de prática não encontrada</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Voltar para a página inicial
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-8">
          {areaInfo.icon}
          <h1 className="text-3xl font-bold ml-4">{areaInfo.title}</h1>
        </div>

        <p className="text-gray-700 mb-8">{areaInfo.description}</p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sobre a Área</h2>
          {areaInfo.detailedDescription.map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Casos de Sucesso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaInfo.cases.map((caseItem, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{caseItem.title}</h3>
                <p className="text-gray-600">{caseItem.description}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleWhatsAppClick(`Olá! Gostaria de agendar uma consultoria em ${areaInfo.title}.`)}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Agendar Consultoria
        </button>
      </div>
    </div>
  );
};

export default PracticeAreaDetail; 