import { useEffect, useState, MouseEvent } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, Scale, Home, Users, Shield, FileText, ShoppingCart, 
  DollarSign, Coins, Building2, ClipboardCheck, HeartPulse, Briefcase,
  Baby, Heart, Calendar, Scroll, UserPlus, TreePine, Divide, Gift,
  Umbrella, HandHeart, Clock, RefreshCcw, Calculator,
  Gavel, ArrowUpFromDot, AlertCircle, ScrollText, ArrowUpRight, ShieldCheck, GraduationCap,
  CircleDollarSign, ClipboardList, Ban, Wrench, AlertOctagon, MessageSquareWarning, XCircle, HeartCrack,
  Phone, UserRoundSearch
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { UserCheck, Key, RefreshCw } from "lucide-react";
import { PracticeArea } from '@/types';
import { handleWhatsAppClick } from "@/utils/helpers";

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
    description: "Atuação voltada à defesa dos direitos do condenado durante o cumprimento da pena, com estratégias jurídicas especializadas para garantir benefícios legais e condições dignas de cumprimento.",
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
    description: "Defesa dos direitos do consumidor diante de abusos, falhas na prestação de serviços e descumprimentos contratuais, buscando soluções justas e eficazes.",
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

  const executionServices = [
    {
      icon: Gavel,
      title: "Indulto e Comutação de Pena",
      description: "Elaboração de pedidos formais para concessão de indulto (perdão total da pena) ou comutação (redução parcial da pena), conforme critérios legais e decretos presidenciais."
    },
    {
      icon: ArrowUpFromDot,
      title: "Progressão de Regime e Liberdade Condicional",
      description: "Solicitação da mudança do regime fechado para o semiaberto ou aberto, ou do livramento condicional, quando o condenado cumpre os requisitos legais e tem bom comportamento."
    },
    {
      icon: AlertCircle,
      title: "Defesa em Caso de Falta Grave",
      description: "Atuação após a acusação de falta disciplinar grave, com defesa técnica em audiência de justificação para evitar prejuízos como a regressão de regime ou perda de benefícios."
    },
    {
      icon: ScrollText,
      title: "Defesa em Incidentes de Execução",
      description: "Apresentação de argumentos jurídicos para contestar decisões que afetem o cumprimento da pena, como negativas de progressão, remição ou liberdade."
    },
    {
      icon: ArrowUpRight,
      title: "Recursos em Execução Penal",
      description: "Interposição de recursos às decisões judiciais injustas durante a execução da pena, buscando sua revisão em instâncias superiores."
    },
    {
      icon: ShieldCheck,
      title: "Defesa dos Direitos Fundamentais do Preso",
      description: "Atuação firme para garantir o respeito aos direitos do preso, como acesso à saúde, educação, assistência jurídica e religiosa."
    },
    {
      icon: GraduationCap,
      title: "Acompanhamento na Fase de Ressocialização",
      description: "Apoio jurídico na inserção do apenado em programas de trabalho, estudo e reintegração social, promovendo sua dignidade e reabilitação."
    }
  ];

  const pensionServices = [
    {
      icon: Umbrella,
      title: "Auxílios (Reclusão, Doença, Maternidade, Acidente)",
      description: "Pedido e acompanhamento de auxílios garantidos por lei a segurados e seus dependentes."
    },
    {
      icon: HandHeart,
      title: "BPC / LOAS (Benefício de Prestação Continuada)",
      description: "Solicitação do benefício para pessoas com deficiência ou idosos que não possuem meios de subsistência."
    },
    {
      icon: Clock,
      title: "Aposentadorias",
      description: "Orientação e requerimento de aposentadorias por idade, tempo de contribuição, rural, híbrida, especial ou da pessoa com deficiência."
    },
    {
      icon: RefreshCcw,
      title: "Revisões",
      description: "Pedidos de revisão de aposentadorias e benefícios para corrigir erros e garantir valores justos."
    },
    {
      icon: Calculator,
      title: "Planejamento Previdenciário",
      description: "Análise estratégica do tempo e valores de contribuição para garantir a melhor forma e momento de se aposentar."
    }
  ];

  const familyServices = [
    {
      icon: Baby,
      title: "Guarda",
      description: "Atuação para definir ou alterar a guarda dos filhos, sempre priorizando o melhor interesse da criança."
    },
    {
      icon: DollarSign,
      title: "Alimentos",
      description: "Ações para fixar, revisar ou cobrar pensão alimentícia de forma justa e conforme a necessidade de quem recebe e a possibilidade de quem paga."
    },
    {
      icon: Heart,
      title: "Visitas (Convivência Familiar)",
      description: "Regulamentação do direito de convivência de pais e familiares com os filhos, promovendo o vínculo familiar."
    },
    {
      icon: Scroll,
      title: "Divórcio Judicial e Extrajudicial",
      description: "Encerramento do casamento de forma rápida e segura, tanto em cartório quanto pela via judicial, conforme o caso."
    },
    {
      icon: UserPlus,
      title: "Reconhecimento e Dissolução de União Estável",
      description: "Reconhecimento ou término legal de união estável, com definição de partilha de bens, guarda e pensão, se necessário."
    },
    {
      icon: TreePine,
      title: "Planejamento Sucessório",
      description: "Organização antecipada da herança, com segurança jurídica e economia para os herdeiros."
    },
    {
      icon: Divide,
      title: "Inventário e Partilha Judicial e Extrajudicial",
      description: "Regularização da herança e partilha de bens após o falecimento, com agilidade e orientação adequada."
    },
    {
      icon: Gift,
      title: "Doação em Vida com e sem Reserva de Usufruto",
      description: "Formalização da doação de bens ainda em vida, com ou sem a manutenção do uso pelo doador."
    }
  ];

  const consumerServices = [
    {
      icon: CircleDollarSign,
      title: "Ação de Indenização por Danos Materiais e Morais",
      description: "Visa compensar prejuízos financeiros e emocionais causados por produtos com defeito, serviços mal prestados ou práticas abusivas."
    },
    {
      icon: ClipboardList,
      title: "Ação de Cumprimento de Contrato",
      description: "Obrigação judicial do fornecedor cumprir o que foi prometido, como entrega de produto ou realização de serviço contratado."
    },
    {
      icon: Ban,
      title: "Ação de Cobrança Indevida",
      description: "Busca a devolução de valores cobrados de forma irregular, como tarifas não contratadas, duplicidade ou erros em faturas."
    },
    {
      icon: Wrench,
      title: "Defeitos em Produtos ou Serviços",
      description: "Atuação para responsabilizar empresas por produtos com defeito, serviços insatisfatórios ou problemas na garantia."
    },
    {
      icon: AlertOctagon,
      title: "Preços Abusivos e Cobranças Irregulares",
      description: "Defesa contra preços excessivos, juros abusivos ou cobranças por serviços não contratados."
    },
    {
      icon: MessageSquareWarning,
      title: "Publicidade Enganosa ou Abusiva",
      description: "Ações contra promessas falsas ou informações que induzam o consumidor ao erro."
    },
    {
      icon: XCircle,
      title: "Descumprimento de Contrato",
      description: "Reparação em casos de atraso na entrega, não realização de serviços ou quebra de condições contratuais."
    },
    {
      icon: HeartCrack,
      title: "Danos Morais ao Consumidor",
      description: "Indenização por abalos psicológicos causados por práticas ilegais ou desrespeitosas do fornecedor."
    }
  ];

  const criminalServices = [
    {
      icon: Phone,
      title: "Atendimento 24 horas em caso de flagrantes e urgências",
      description: "Atuação imediata e especializada em prisões em flagrante ou outras situações urgentes, disponível todos os dias, inclusive à noite, fins de semana e feriados."
    },
    {
      icon: UserRoundSearch,
      title: "Audiência de Custódia",
      description: "Garantia legal que permite ao preso em flagrante ser apresentado a um juiz em até 24 horas, para avaliar a legalidade da prisão e decidir pela liberdade, prisão preventiva ou medidas alternativas."
    },
    {
      icon: Scale,
      title: "Defesa em Processos Criminais em Geral",
      description: "Atuação completa na defesa de acusados em qualquer fase do processo criminal, garantindo todos os direitos e buscando a melhor solução possível."
    },
    {
      icon: Shield,
      title: "Acompanhamento em Delegacia e Inquérito Policial",
      description: "Presença e orientação desde o início da investigação, assegurando que o cliente seja ouvido com respaldo legal e seus direitos respeitados."
    },
    {
      icon: FileText,
      title: "Ação de Queixa-Crime",
      description: "Propositura de ação criminal em defesa da honra da vítima, nos casos de ofensas pessoais (injúria, calúnia e difamação), com acompanhamento jurídico estratégico."
    },
    {
      icon: Key,
      title: "Requerimentos de Liberdade e Revogação de Prisões",
      description: "Atuação com pedidos de relaxamento de prisão em flagrante, liberdade provisória e revogação de prisões temporárias ou preventivas, quando indevidas."
    },
    {
      icon: UserCheck,
      title: "Acompanhamento como Assistente de Acusação",
      description: "Atuação ao lado da vítima em processos criminais, reforçando a acusação para garantir justiça e responsabilização do autor do crime."
    },
    {
      icon: Gavel,
      title: "Impetração de Habeas Corpus",
      description: "Medida rápida e eficaz para proteger a liberdade de quem está preso ou ameaçado de prisão ilegal ou abusiva."
    },
    {
      icon: RefreshCw,
      title: "Recursos e Revisões Criminais",
      description: "Apresentação de recursos e pedidos de revisão de sentença para corrigir decisões injustas ou ilegais, mesmo após o fim do processo."
    }
  ];

  const civilServices = [
    {
      icon: DollarSign,
      title: "Ações de Cobrança (Executória)",
      description: "Cobrança de dívidas por via judicial, com medidas eficazes para garantir o recebimento."
    },
    {
      icon: FileText,
      title: "Contratos em Geral",
      description: "Elaboração e análise de contratos de compra, venda, locação, comodato, prestação de serviços e outros, com segurança jurídica."
    },
    {
      icon: Coins,
      title: "Indenizações (Moral, Material)",
      description: "Ações para reparação de danos morais ou materiais sofridos por pessoas físicas ou jurídicas."
    },
    {
      icon: Key,
      title: "Usucapião",
      description: "Regularização da posse de imóvel adquirido pelo uso prolongado e ininterrupto, nos termos da lei."
    },
    {
      icon: Building2,
      title: "Regularização de Imóveis",
      description: "Ações e procedimentos para formalizar a titularidade de imóveis urbanos ou rurais."
    },
    {
      icon: ClipboardCheck,
      title: "Tutela e Curatela",
      description: "Medidas legais para proteção de menores, idosos ou pessoas com incapacidade civil, garantindo seus direitos."
    },
    {
      icon: HeartPulse,
      title: "Direito Médico e Saúde",
      description: "Atuação em demandas por fornecimento de medicamentos, tratamentos médicos e indenizações por erro médico ou negativa de atendimento."
    },
    {
      icon: Briefcase,
      title: "Defesas e Orientações Jurídicas a Empresas",
      description: "Consultoria preventiva, elaboração de documentos, contratos e defesas judiciais para empresas de diversos setores."
    }
  ];

  useEffect(() => {
    const area = practiceAreasData.find(area => area.slug === slug);
    setAreaInfo(area || null);
    
    if (area) {
      document.title = `Débora B. Fracaro - ${area.title}`;
    }

    window.scrollTo(0, 0);
  }, [slug]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (areaInfo) {
      handleWhatsAppClick(`Olá! Gostaria de agendar uma consultoria em ${areaInfo.title}.`);
    }
  };

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
      </div>
    );
  }

  const services = 
    slug === 'direito-civil' 
      ? civilServices 
      : slug === 'direito-familia-sucessoes'
        ? familyServices
        : slug === 'direito-previdenciario'
          ? pensionServices
          : slug === 'execucao-penal'
            ? executionServices
            : slug === 'direito-consumidor'
              ? consumerServices
              : criminalServices;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="bg-lawblack-950 pt-40 pb-20">
        <div className="container-custom">
          <Link to="/#practice-areas" className="text-[#BFA15C] hover:text-[#DFC686] inline-flex items-center gap-2 mb-8 transition-colors">
            <ArrowLeft size={20} /> Voltar para áreas de atuação
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-[#BFA15C]">
              {areaInfo.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-white">{areaInfo.title}</h1>
          </div>
          <p className="text-white/80 text-xl max-w-3xl">{areaInfo.description}</p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div className="group h-full">
                  <div className="h-full p-8 rounded-2xl border border-[#BFA15C]/10 bg-white shadow-sm hover:shadow-xl hover:border-[#BFA15C] transition-all duration-300">
                    <div className="mb-6">
                      <service.icon className="w-8 h-8 text-[#BFA15C]" />
                    </div>
                    
                    <h3 className="text-xl font-medium text-lawblack-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lawblack-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA section with black and gold design */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-lawblack-950"
          style={{
            backgroundImage: 'url("/images/texture-bg.png")',
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
            opacity: 0.97
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#BFA15C] to-transparent opacity-30" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#BFA15C] to-transparent opacity-30" />
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Precisa de assessoria em {areaInfo.title}?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe especializada está pronta para analisar seu caso e oferecer a melhor solução jurídica para sua situação.
            </p>
            <button
              onClick={handleClick}
              className="btn-primary px-8 py-4 rounded-full text-white font-medium text-lg shadow-md hover:shadow-lg transition-all"
            >
              Agendar Consultoria
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreaDetail;
