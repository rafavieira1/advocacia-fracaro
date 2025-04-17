import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Building, Home, GraduationCap, Scale, FileText, Users } from "lucide-react";
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
    title: "Direito Empresarial",
    icon: <Building className="h-10 w-10 text-lawgold-400" />,
    slug: "direito-empresarial",
    description: "Nossa equipe especializada entende as complexidades legais que empresas enfrentam e oferece soluções personalizadas para proteger seus interesses comerciais e garantir conformidade legal.",
    detailedDescription: [
      "O Direito Empresarial, também conhecido como Direito Comercial, é o ramo do Direito que regula as relações jurídicas das empresas e dos empresários no exercício de suas atividades econômicas.",
      "Nossa equipe possui vasta experiência em questões societárias, fusões e aquisições, contratos comerciais, recuperação judicial e falências, propriedade intelectual e compliance empresarial.",
      "Trabalhamos para proteger os interesses de nossos clientes, minimizar riscos legais e maximizar oportunidades de negócio dentro dos parâmetros legais."
    ],
    cases: [
      {
        title: "Reestruturação Empresarial",
        description: "Assessoria completa em processo de reestruturação societária de grupo empresarial familiar, garantindo a sucessão sem conflitos e mantendo a integridade do patrimônio."
      },
      {
        title: "Recuperação Judicial",
        description: "Condução bem-sucedida de processo de recuperação judicial para indústria de médio porte, permitindo a continuidade das atividades e preservação de empregos."
      },
      {
        title: "Proteção de Propriedade Intelectual",
        description: "Registro e proteção de marcas e patentes para startup tecnológica, garantindo a exclusividade de uso e proteção contra concorrência desleal."
      }
    ]
  },
  {
    title: "Direito Imobiliário",
    icon: <Home className="h-10 w-10 text-lawgold-400" />,
    slug: "direito-imobiliario",
    description: "Assessoria completa em questões de propriedade, contratos de compra e venda, locação, regularização de imóveis e resolução de conflitos relacionados a propriedades.",
    detailedDescription: [
      "O Direito Imobiliário engloba todas as questões jurídicas relacionadas à propriedade, posse, uso e transferência de bens imóveis, sejam residenciais, comerciais ou rurais.",
      "Nossa equipe oferece assessoria especializada em transações imobiliárias, contratos de compra e venda, locações, usucapião, regularização fundiária, incorporações imobiliárias e resolução de disputas.",
      "Atuamos preventivamente na análise de documentação e elaboração de contratos, assim como na representação em litígios envolvendo questões imobiliárias."
    ],
    cases: [
      {
        title: "Regularização de Loteamento",
        description: "Regularização completa de loteamento urbano com mais de 200 unidades, solucionando pendências documentais e garantindo segurança jurídica aos proprietários."
      },
      {
        title: "Disputa de Limites de Propriedade",
        description: "Resolução de conflito de limites entre propriedades rurais, evitando litígio judicial e estabelecendo acordo satisfatório para todas as partes."
      },
      {
        title: "Diligência em Grande Aquisição",
        description: "Condução de diligência legal (due diligence) em aquisição de complexo comercial de alto valor, identificando e solucionando pendências que poderiam comprometer o negócio."
      }
    ]
  },
  {
    title: "Direito Educacional",
    icon: <GraduationCap className="h-10 w-10 text-lawgold-400" />,
    slug: "direito-educacional",
    description: "Representação jurídica para instituições de ensino e estudantes, garantindo conformidade legal e defesa de direitos educacionais em todos os níveis acadêmicos.",
    detailedDescription: [
      "O Direito Educacional é uma área especializada que trata das relações jurídicas no âmbito da educação, envolvendo instituições de ensino, estudantes, professores e o poder público.",
      "Nossa equipe atua no assessoramento de instituições educacionais em questões regulatórias, processos de autorização e reconhecimento de cursos, defesa em processos administrativos e gestão de conflitos acadêmicos.",
      "Também representamos estudantes na defesa de seus direitos educacionais, questões disciplinares e acesso a políticas de inclusão e acessibilidade."
    ],
    cases: [
      {
        title: "Credenciamento de Instituição de Ensino Superior",
        description: "Condução bem-sucedida de processo de credenciamento de faculdade junto ao MEC, incluindo autorização de cursos e adequação à legislação educacional."
      },
      {
        title: "Defesa em Processo Administrativo",
        description: "Representação de instituição de ensino em processo administrativo sancionador, resultando em arquivamento da denúncia e preservação da reputação institucional."
      },
      {
        title: "Inclusão de Aluno com Necessidades Especiais",
        description: "Garantia judicial de direitos de acessibilidade e apoio pedagógico para estudante com deficiência, assegurando condições adequadas de aprendizagem."
      }
    ]
  },
  {
    title: "Direito Civil",
    icon: <FileText className="h-10 w-10 text-lawgold-400" />,
    slug: "direito-civil",
    description: "Orientação jurídica em questões familiares, contratos, responsabilidade civil e proteção de direitos pessoais, com foco em soluções eficientes e personalizadas.",
    detailedDescription: [
      "O Direito Civil é o ramo do Direito que regula as relações jurídicas entre pessoas físicas e jurídicas, abrangendo aspectos como família, contratos, responsabilidade civil, direitos de personalidade e sucessões.",
      "Nossa equipe oferece assessoria jurídica em planejamento sucessório, inventários e partilhas, divórcios e dissolução de união estável, guarda de filhos e alimentos, indenizações por danos morais e materiais, entre outros.",
      "Priorizamos abordagens conciliatórias e mediação, buscando soluções que minimizem desgastes emocionais e financeiros para nossos clientes."
    ],
    cases: [
      {
        title: "Planejamento Sucessório Familiar",
        description: "Elaboração de plano sucessório completo para família com patrimônio diversificado, incluindo holdings familiares, testamentos e doações em vida."
      },
      {
        title: "Acordo em Disputa de Herança",
        description: "Mediação bem-sucedida em conflito familiar por herança, evitando litígio prolongado e preservando relações familiares."
      },
      {
        title: "Indenização por Erro Médico",
        description: "Obtenção de indenização por danos morais e materiais para vítima de erro médico, incluindo garantia de tratamento adequado e compensação financeira."
      }
    ]
  },
  {
    title: "Direito Trabalhista",
    icon: <Users className="h-10 w-10 text-lawgold-400" />,
    slug: "direito-trabalhista",
    description: "Defesa de empregados e empregadores, assessoria em relações de trabalho, negociações sindicais e representação em processos administrativos e judiciais.",
    detailedDescription: [
      "O Direito Trabalhista regula as relações jurídicas entre empregados e empregadores, estabelecendo direitos e deveres para ambas as partes e buscando o equilíbrio nas relações laborais.",
      "Nossa equipe atua tanto na defesa de trabalhadores quanto de empresas, oferecendo assessoria em contratações, demissões, compliance trabalhista, negociações coletivas e representação em litígios.",
      "Buscamos soluções preventivas que minimizem riscos e evitem passivos trabalhistas, além de estratégias eficientes para resolução de conflitos já existentes."
    ],
    cases: [
      {
        title: "Reestruturação de Departamento",
        description: "Assessoria completa em processo de reestruturação de departamento com redução de quadro funcional, minimizando riscos jurídicos e custos com indenizações."
      },
      {
        title: "Negociação Coletiva",
        description: "Condução bem-sucedida de negociação coletiva para empresa de grande porte, estabelecendo acordo favorável para empregador e trabalhadores."
      },
      {
        title: "Reconhecimento de Vínculo Empregatício",
        description: "Obtenção de reconhecimento judicial de vínculo empregatício em relação fraudulentamente caracterizada como prestação de serviço, garantindo todos os direitos ao trabalhador."
      }
    ]
  },
  {
    title: "Direito Tributário",
    icon: <Scale className="h-10 w-10 text-lawgold-400" />,
    slug: "direito-tributario",
    description: "Planejamento tributário, consultoria fiscal, defesa em processos administrativos e judiciais, visando economia legal de impostos e regularização fiscal.",
    detailedDescription: [
      "O Direito Tributário trata das relações jurídicas entre o Fisco e os contribuintes, regulando a arrecadação de tributos e os limites do poder de tributar do Estado.",
      "Nossa equipe oferece serviços de planejamento tributário, consultoria fiscal, representação em processos administrativos e judiciais tributários, recuperação de créditos tributários e regularização fiscal.",
      "Trabalhamos para minimizar a carga tributária de nossos clientes dentro dos parâmetros legais, bem como para defender seus direitos contra cobranças indevidas ou abusivas."
    ],
    cases: [
      {
        title: "Planejamento Tributário para Grupo Empresarial",
        description: "Implementação de estratégia tributária para grupo de empresas, resultando em economia fiscal significativa e regularidade perante o fisco."
      },
      {
        title: "Defesa contra Autuação Fiscal",
        description: "Anulação de auto de infração milionário por suposto planejamento tributário abusivo, comprovando a legalidade das operações empresariais."
      },
      {
        title: "Recuperação de Créditos Tributários",
        description: "Recuperação de créditos tributários significativos para indústria de grande porte, com reconhecimento judicial do direito à compensação."
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
