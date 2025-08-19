import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRight, TrendingUp, Zap, Shield, Heart } from "lucide-react";

const Index = () => {
  const products = [
    {
      title: "Natflix Fitness - Vida em Movimento",
      description: "Transforme seu corpo e sua saúde com o programa de fitness mais completo do Brasil. Descubra o segredo para uma vida ativa e saudável.",
      benefits: [
        "Treinos personalizados para todos os níveis",
        "Nutrição otimizada para seus objetivos",
        "Acompanhamento profissional especializado",
        "Resultados comprovados em 30 dias"
      ],
      ctaText: "🔥 Quero Começar Hoje!",
      ctaUrl: "https://go.hotmart.com/X70943392V",
      variant: "hero" as const,
      featured: true
    },
    {
      title: "Lovable IA - Criação de SaaS",
      description: "Crie aplicações SaaS completas em segundos com inteligência artificial. A revolução na programação chegou.",
      benefits: [
        "Desenvolvimento 10x mais rápido",
        "Código limpo e profissional",
        "Interface moderna e responsiva",
        "Suporte completo para iniciantes"
      ],
      ctaText: "🚀 Criar Meu SaaS",
      ctaUrl: "https://lovable.dev/?via=marcelo-barbosa",
      variant: "cta" as const
    },
    {
      title: "Hostinger - Hospedagem Premium",
      description: "Hospedagem de sites ultra-rápida com domínios gratuitos. A base sólida para seu negócio online decolar.",
      benefits: [
        "99.9% de uptime garantido",
        "Velocidade de carregamento superior",
        "Domínio gratuito incluído",
        "Suporte 24/7 em português"
      ],
      ctaText: "💻 Hospedar Meu Site",
      ctaUrl: "https://hostinger.com.br?REFERRALCODE=1W8MARCELJCB",
      variant: "accent" as const
    },
    {
      title: "Fórmula Negócio Online - Alex Vargas",
      description: "O método comprovado que transformou milhares de pessoas em empreendedores digitais de sucesso. Do zero ao primeiro milhão.",
      benefits: [
        "Estratégias testadas e aprovadas",
        "Comunidade exclusiva de empreendedores",
        "Mentorias ao vivo semanais",
        "Garantia de 30 dias"
      ],
      ctaText: "💰 Começar Meu Negócio",
      ctaUrl: "https://go.hotmart.com/E11195793E?ap=305a",
      variant: "hero" as const
    },
    {
      title: "OzenVitta - Emagrecimento Natural",
      description: "Perca peso, ganhe confiança e tenha a qualidade de vida que você tanto quer! Fórmula avançada com Inulina e L-Carnitina.",
      benefits: [
        "Acelera o metabolismo naturalmente",
        "Aumenta a sensação de saciedade",
        "Fórmula 100% natural e segura",
        "Resultados visíveis em 15 dias"
      ],
      ctaText: "✨ Começar a Emagrecer",
      ctaUrl: "https://app.monetizze.com.br/r/AKA25502741",
      variant: "cta" as const
    },
    {
      title: "Mounjax - Queima de Gordura",
      description: "Gotinhas que auxiliam na queima de gordura. Chega de evitar fotos ou se esconder em roupas largas!",
      benefits: [
        "Queima gordura localizada",
        "Fácil de usar - apenas gotinhas",
        "Ingredientes naturais potentes",
        "Recupere sua autoestima"
      ],
      ctaText: "🔥 Queimar Gordura Agora",
      ctaUrl: "https://app.monetizze.com.br/r/AYR25502743",
      variant: "accent" as const
    },
    {
      title: "Kit S.O.S Crescimento Capilar",
      description: "Descubra o kit Nº 1 mais potente em crescimento e combate à queda capilar! Cabelos fortes e saudáveis em semanas.",
      benefits: [
        "Estimula crescimento capilar",
        "Reduz queda em 90%",
        "Fortalece fios desde a raiz",
        "Resultados em 21 dias"
      ],
      ctaText: "💇‍♀️ Recuperar Meu Cabelo",
      ctaUrl: "https://app.monetizze.com.br/r/ACS21486499",
      variant: "cta" as const
    },
    {
      title: "Diuriefit Black - Pó Emagrecedor",
      description: "Pó emagrecedor 10x mais eficaz com sabor de laranja. O que levaria 30 dias, agora você terá resultados nos primeiros 6 dias!",
      benefits: [
        "Resultados em apenas 6 dias",
        "Sabor delicioso de laranja",
        "10x mais potente que similares",
        "Fórmula exclusiva patenteada"
      ],
      ctaText: "⚡ Emagrecer Rápido",
      ctaUrl: "https://app.monetizze.com.br/r/APB25502772",
      variant: "hero" as const
    }
  ];

  const testimonials = [
    {
      text: "Mudou completamente minha vida! Em 3 meses consegui resultados que tentei por anos.",
      author: "Maria Silva",
      rating: 5
    },
    {
      text: "Produtos de qualidade excepcional. Recomendo para todos que querem transformação real.",
      author: "João Santos", 
      rating: 5
    },
    {
      text: "Investimento que vale cada centavo. Minha vida nunca mais foi a mesma!",
      author: "Ana Costa",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <header className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              🚀 Transforme sua Vida com 
              <span className="block gradient-accent bg-clip-text text-transparent">
                Produtos Revolucionários
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Descubra soluções comprovadas que já mudaram milhares de vidas. 
              Fitness, tecnologia, emagrecimento e muito mais!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="accent" size="xl" className="min-w-64">
                Ver Produtos <ArrowRight className="ml-2" />
              </Button>
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Garantia de Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-text-hero">50.000+</div>
              <div className="text-text-secondary">Vidas Transformadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-text-hero">98%</div>
              <div className="text-text-secondary">Taxa de Satisfação</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-text-hero">30 dias</div>
              <div className="text-text-secondary">Garantia Total</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-text-hero">
              Produtos que <span className="gradient-hero bg-clip-text text-transparent">Transformam</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Cada produto foi cuidadosamente selecionado por sua eficácia comprovada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                benefits={product.benefits}
                ctaText={product.ctaText}
                ctaUrl={product.ctaUrl}
                variant={product.variant}
                featured={product.featured}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-text-hero">
              O que dizem nossos <span className="gradient-cta bg-clip-text text-transparent">clientes</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Depoimentos reais de pessoas que transformaram suas vidas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Não Deixe Sua <span className="gradient-accent bg-clip-text text-transparent">Transformação</span> 
              <br />Para Amanhã!
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Milhares já começaram sua jornada de transformação. 
              <strong> Sua vez chegou!</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button variant="accent" size="xl" className="min-w-72">
                <TrendingUp className="mr-2" />
                Começar Minha Transformação
              </Button>
              <div className="flex items-center gap-2 text-white/80">
                <Heart className="w-5 h-5" />
                <span>Garantia de 30 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-text-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Produtos Digitais Premium</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Transformando vidas através de produtos digitais de alta qualidade. 
              Sua jornada de sucesso começa aqui.
            </p>
            <div className="flex justify-center items-center gap-2 text-white/60">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Feito com dedicação para sua transformação</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;