import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Scale, Home, Users, Shield, FileText, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

type Case = {
  title: string;
  description: string;
};

type PracticeAreaInfo = {
  title: string;
  icon: JSX.Element;
  slug: string;
  description: string;
  detailedDescription: string[];
  cases: Case[];
};

const practiceAreasData: PracticeAreaInfo[] = [
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
  {
    title: "Direito Civil",
    icon: <Home className="h-10 w-10 text-lawgold-400" />,
    slug: "direito-civil",
    description: "Consultoria e representação em temas que envolvem obrigações, responsabilidade civil, contratos, posse e propriedade.",
    detailedDescription: [
      "O Direito Civil é o ramo do Direito que regula as relações jurídicas entre pessoas físicas e jurídicas, abrangendo aspectos como contratos, responsabilidade civil, direitos reais e obrigações.",
      "Nossa equipe oferece assessoria jurídica em questões contratuais, indenizações por danos morais e materiais, questões possessórias, usucapião, entre outros temas do Direito Civil.",
      "Priorizamos soluções extrajudiciais quando possível, mas estamos preparados para atuar judicialmente quando necessário, sempre buscando a melhor estratégia para cada caso."
    ],
    cases: [
      {
        title: "Ação de Indenização por Danos Materiais",
        description: "Obtenção de indenização por danos materiais em acidente de trânsito, incluindo perdas e danos, lucros cessantes e despesas médicas."
      },
      {
        title: "Regularização de Imóvel",
        description: "Regularização de imóvel por usucapião, garantindo a segurança jurídica do proprietário após anos de posse mansa e pacífica."
      },
      {
        title: "Revisão de Contrato",
        description: "Revisão judicial de contrato de prestação de serviços, obtendo a redução de cláusulas abusivas e garantindo o equilíbrio contratual."
      }
    ]
  },
  {
    title: "Direito de Família e Sucessões",
    icon: <Users className="h-10 w-10 text-lawgold-400" />,
    slug: "direito-familia-sucessoes",
    description: "Atendimento humanizado em questões como divórcio, guarda, pensão alimentícia, reconhecimento de união estável, inventários e partilhas.",
    detailedDescription: [
      "O Direito de Família e Sucessões trata das relações familiares e da transmissão de patrimônio após o falecimento. É uma área que exige sensibilidade e conhecimento técnico.",
      "Atuamos em divórcios consensuais e litigiosos, guarda de filhos, regulamentação de visitas, pensão alimentícia, reconhecimento de união estável, inventários e partilhas.",
      "Buscamos sempre soluções que preservem os laços familiares e minimizem conflitos, priorizando o diálogo e a mediação quando possível."
    ],
    cases: [
      {
        title: "Divórcio Consensual",
        description: "Condução de divórcio consensual com partilha amigável de bens, garantindo a satisfação de ambas as partes e a preservação da relação familiar."
      },
      {
        title: "Regulamentação de Guarda",
        description: "Estabeilização de regime de guarda compartilhada com regulamentação de visitas, priorizando o melhor interesse da criança."
      },
      {
        title: "Inventário e Partilha",
        description: "Condução de inventário extrajudicial com partilha amigável de bens, evitando litígios entre os herdeiros."
      }
    ]
  },
  {
    title: "Execução Penal",
    icon: <Shield className="h-10 w-10 text-lawgold-400" />,
    slug: "execucao-penal",
    description: "Acompanhamento jurídico especializado na fase de cumprimento da pena, incluindo pedidos de progressão de regime, livramento condicional e indulto.",
    detailedDescription: [
      "A Execução Penal é a fase do processo criminal em que a pena é efetivamente cumprida. É fundamental ter assessoria jurídica especializada para garantir os direitos do condenado.",
      "Atuamos em pedidos de progressão de regime, livramento condicional, indulto, remição de pena, saídas temporárias e outros benefícios previstos na Lei de Execução Penal.",
      "Nossa equipe está preparada para acompanhar todo o processo de execução da pena, garantindo que os direitos do condenado sejam respeitados e que ele tenha acesso a todos os benefícios legais."
    ],
    cases: [
      {
        title: "Progressão de Regime",
        description: "Obtenção de progressão de regime prisional para cliente que cumpria pena em regime fechado, demonstrando bom comportamento e cumprimento dos requisitos legais."
      },
      {
        title: "Livramento Condicional",
        description: "Concessão de livramento condicional após cumprimento de parte da pena, garantindo a reintegração social do cliente."
      },
      {
        title: "Remição de Pena",
        description: "Reconhecimento de direito à remição de pena por estudo e trabalho, reduzindo o tempo de cumprimento da pena."
      }
    ]
  },
  {
    title: "Direito Previdenciário",
    icon: <FileText className="h-10 w-10 text-lawgold-400" />,
    slug: "direito-previdenciario",
    description: "Atuação voltada à obtenção e revisão de benefícios previdenciários, como aposentadorias, auxílios e pensões.",
    detailedDescription: [
      "O Direito Previdenciário trata dos direitos relacionados à Previdência Social, incluindo aposentadorias, pensões, auxílios e outros benefícios previdenciários.",
      "Atuamos na concessão de benefícios junto ao INSS, revisão de benefícios já concedidos, contagem de tempo de contribuição, entre outros temas previdenciários.",
      "Nossa equipe está preparada para analisar cada caso específico e indicar a melhor estratégia para obtenção ou revisão do benefício previdenciário."
    ],
    cases: [
      {
        title: "Concessão de Aposentadoria",
        description: "Obtenção de aposentadoria por tempo de contribuição após análise detalhada da documentação e comprovação do tempo de contribuição."
      },
      {
        title: "Revisão de Benefício",
        description: "Revisão de valor de aposentadoria, obtendo aumento significativo no valor do benefício após comprovação de erro no cálculo inicial."
      },
      {
        title: "Auxílio-Doença",
        description: "Concessão de auxílio-doença após perícia médica, garantindo o direito ao benefício para cliente com limitações temporárias para o trabalho."
      }
    ]
  },
  {
    title: "Direito do Consumidor",
    icon: <ShoppingCart className="h-10 w-10 text-lawgold-400" />,
    slug: "direito-consumidor",
    description: "Defesa dos direitos do consumidor em situações de cobrança indevida, vícios em produtos ou serviços, cláusulas abusivas e relações contratuais desequilibradas.",
    detailedDescription: [
      "O Direito do Consumidor protege as relações de consumo, garantindo direitos básicos como proteção contra práticas abusivas, vícios em produtos e serviços, e cobranças indevidas.",
      "Atuamos em ações de indenização por danos materiais e morais, revisão de contratos, cancelamento de dívidas, entre outros temas do Direito do Consumidor.",
      "Nossa equipe está preparada para defender os direitos do consumidor, seja em ações individuais ou coletivas, sempre buscando a melhor solução para cada caso."
    ],
    cases: [
      {
        title: "Indenização por Vício em Produto",
        description: "Obtenção de indenização por danos materiais e morais em caso de defeito em produto, garantindo a reparação integral dos prejuízos sofridos."
      },
      {
        title: "Cancelamento de Dívida",
        description: "Cancelamento de dívida indevida junto a instituição financeira, após comprovação de cobrança abusiva e irregularidades contratuais."
      },
      {
        title: "Revisão de Contrato",
        description: "Revisão judicial de contrato de plano de saúde, obtendo a redução de mensalidade e a eliminação de cláusulas abusivas."
      }
    ]
  }
];

const PracticeAreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [areaInfo, setAreaInfo] = useState<PracticeAreaInfo | null>(null);

  useEffect(() => {
    const area = practiceAreasData.find(area => area.slug === slug);
    setAreaInfo(area || null);
    
    if (area) {
      document.title = `Débora B. Fracaro - ${area.title}`;
    }

    // Rola a página para o topo
    window.scrollTo(0, 0);
  }, [slug]);

  if (!areaInfo) {
    return (
      <div className="min-h-screen bg-lawblack-950">
        <Navbar />
        <div className="container-custom pt-40 pb-20 text-center">
          <h1 className="text-3xl text-white mb-8">Área de atuação não encontrada</h1>
          <Link to="/" className="text-lawgold-400 hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={20} /> Voltar para página inicial
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="bg-lawblack-950 pt-40 pb-20">
        <div className="container-custom">
          <Link to="/#practice-areas" className="text-lawgold-400 hover:underline inline-flex items-center gap-2 mb-8">
            <ArrowLeft size={20} /> Voltar para áreas de atuação
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-lawgold-500/20 p-4 rounded-full">
              {areaInfo.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-white">{areaInfo.title}</h1>
          </div>
          <p className="text-white/80 text-xl max-w-3xl">{areaInfo.description}</p>
        </div>
      </section>
      
      {/* Detailed description section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-10 text-lawblack-900">Sobre {areaInfo.title}</h2>
          <div className="space-y-6 text-lawblack-800">
            {areaInfo.detailedDescription.map((paragraph, index) => (
              <p key={index} className="text-lg">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case studies section */}
      <section className="py-20 bg-lawblack-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-10 text-lawblack-900">Exemplos de Casos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areaInfo.cases.map((case_study, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-lawblack-900">{case_study.title}</h3>
                  <p className="text-lawblack-700">{case_study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-lawgold-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif mb-6 text-white">Precisa de assessoria em {areaInfo.title}?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para analisar seu caso e oferecer a melhor solução jurídica para sua situação.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block px-8 py-3 bg-lawblack-950 text-white rounded-full hover:bg-lawblack-900 transition-colors"
          >
            Solicitar Consulta Gratuita
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PracticeAreaDetail;
