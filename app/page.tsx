import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  TrendingUp,
  MapPin,
  DollarSign,
  Search,
  Target,
  BarChart3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

export default function MarketAnalysisPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative border-b overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.08),transparent_50%)]" />

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-1.5">
              Análise de Mercado 2025
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance bg-gradient-to-br from-primary via-foreground to-secondary bg-clip-text text-transparent leading-tight">
              Clínicas Populares de Exames em Salvador
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
              Análise completa do mercado de laboratórios e clínicas populares em Salvador, incluindo perfil do cliente
              ideal, concorrência, faturamento e estratégias de posicionamento.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Faturamento Médio</CardTitle>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  R$ 70k/mês
                </div>
                <p className="text-xs text-muted-foreground mt-1">Laboratórios baianos médios</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Faixa Etária</CardTitle>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                  <Users className="h-5 w-5 text-secondary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
                  25-60 anos
                </div>
                <p className="text-xs text-muted-foreground mt-1">Público-alvo principal</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  R$ 30-120
                </div>
                <p className="text-xs text-muted-foreground mt-1">Por cliente/atendimento</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Classes Sociais</CardTitle>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                  <Target className="h-5 w-5 text-secondary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
                  C/D
                </div>
                <p className="text-xs text-muted-foreground mt-1">Foco principal do ICP</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="icp" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto bg-muted/50 p-1.5 gap-1">
            <TabsTrigger
              value="icp"
              className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium"
            >
              ICP
            </TabsTrigger>
            <TabsTrigger
              value="concorrentes"
              className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium"
            >
              Concorrentes
            </TabsTrigger>
            <TabsTrigger
              value="faturamento"
              className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium"
            >
              Faturamento
            </TabsTrigger>
            <TabsTrigger
              value="seo"
              className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium"
            >
              SEO
            </TabsTrigger>
            <TabsTrigger
              value="posicionamento"
              className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium"
            >
              Posicionamento
            </TabsTrigger>
            <TabsTrigger
              value="acoes"
              className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium"
            >
              Ações
            </TabsTrigger>
          </TabsList>

          {/* ICP Tab */}
          <TabsContent value="icp" className="space-y-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Perfil do Cliente Ideal (ICP)
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Pessoa de baixa a média renda que prioriza preço, conveniência, rapidez no resultado e confiança.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary-foreground" />
                    </div>
                    Perfil Demográfico
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Faixa Etária</h4>
                    <p className="text-sm text-muted-foreground">
                      25–60 anos (núcleo de quem faz check-ups, monitoramento de glicemia/colesterol e exames
                      pré-natal/rotina)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Renda Mensal</h4>
                    <p className="text-sm text-muted-foreground">
                      Predominantemente classes C/D (renda familiar típica nas áreas de maior densidade populacional de
                      Salvador)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Decisores</h4>
                    <p className="text-sm text-muted-foreground">
                      Em famílias, geralmente a mulher (mãe) que gerencia saúde dos filhos e idosos
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    Localização Geográfica
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Bairros com Maior Concentração</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Valéria</Badge>
                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Pernambués</Badge>
                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Cajazeiras</Badge>
                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      Nordeste de Amaralina
                    </Badge>
                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Periperi</Badge>
                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Cidade Baixa</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    Zona norte e bairros populosos da cidade baixa e periferias — onde há maior concentração de
                    população de renda mais baixa e necessidade de serviços acessíveis.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-t-4 border-t-primary shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Principais Dores e Motivações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">Preço</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Busca por "barato", promoção, combo
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">Agilidade</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Horário ampliado, resultado rápido por WhatsApp/e-mail
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">Confiança</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Credenciamento, laudo claro, reconhecimento da marca
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-lg">Conveniência</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Unidade próxima, coleta rápida, fácil acesso
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-muted/50 to-accent/30 border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Hábitos e Canais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  • Procuram referências em <strong>Facebook local, Instagram, Google Maps</strong>
                </p>
                <p className="text-sm">
                  • Agenda por <strong>WhatsApp</strong>
                </p>
                <p className="text-sm">
                  • Respondem bem a <strong>promoções/combos e "pacotes"</strong>
                </p>
                <p className="text-sm">
                  • Muitos buscam opção <strong>sem convênio</strong> ou preço com desconto por{" "}
                  <strong>assinatura/clube</strong>
                </p>
                <p className="text-sm">
                  • Plataformas agregadoras (apps ou redes de desconto) também atraem esse público
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Concorrentes Tab */}
          <TabsContent value="concorrentes" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Análise de Concorrentes</h2>
              <p className="text-lg text-muted-foreground mb-8">
                5 concorrentes diretos que atuam no nicho "exame de sangue / clínica popular" em Salvador.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Labchecap (Laboratório & Imagem)</CardTitle>
                  <CardDescription>Várias unidades em Salvador (Pituba, Salvador Shopping etc.)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Preço</h4>
                      <p className="text-sm text-muted-foreground">Sem tabela pública única; prazos de entrega 1 dia</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Avaliação</h4>
                      <p className="text-sm text-muted-foreground">Avaliações mistas (varia por unidade)</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Público</h4>
                      <p className="text-sm text-muted-foreground">Amplo (convênios e particular)</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Diferenciais</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Grande rede regional</Badge>
                      <Badge variant="outline">Integração imagem + laboratório</Badge>
                      <Badge variant="outline">Sem agendamento</Badge>
                      <Badge variant="outline">Credenciamento convênios</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clínica SiM</CardTitle>
                  <CardDescription>Unidade em Barris / shopping e outras cidades (rede Norte-NE)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Preço</h4>
                      <p className="text-sm text-muted-foreground">Pacotes/assinatura SiM+ com descontos</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Avaliação</h4>
                      <p className="text-sm text-muted-foreground">Reputação positiva em plataformas</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Público</h4>
                      <p className="text-sm text-muted-foreground">Classes C/D que buscam preço</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Diferenciais</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Assinaturas/pacotes</Badge>
                      <Badge variant="outline">Agendamento online/app</Badge>
                      <Badge variant="outline">Preço acessível</Badge>
                      <Badge variant="outline">Promoções frequentes</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>PopularMed / Clínica Popular</CardTitle>
                  <CardDescription>
                    Unidades em Valéria, Sete Portas, etc. (presença em bairros populares)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Preço</h4>
                      <p className="text-sm text-muted-foreground">Preços promocionais (varia por unidade)</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Avaliação</h4>
                      <p className="text-sm text-muted-foreground">Atuação local no Instagram</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Público</h4>
                      <p className="text-sm text-muted-foreground">População local, comunidade de bairro</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Diferenciais</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Atendimento por bairro</Badge>
                      <Badge variant="outline">Divulgação redes sociais</Badge>
                      <Badge variant="outline">Foco preço</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Labi Saúde / LabIexames</CardTitle>
                  <CardDescription>Presença online; coleta local</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Preço</h4>
                      <p className="text-sm text-muted-foreground">Hemograma a partir de R$14 (promoções)</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Avaliação</h4>
                      <p className="text-sm text-muted-foreground">Avaliações variam; muitas promoções</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Público</h4>
                      <p className="text-sm text-muted-foreground">Sensível a preço/compara promoções</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Diferenciais</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Preço muito baixo</Badge>
                      <Badge variant="outline">Parcelamento</Badge>
                      <Badge variant="outline">Vendas via canais digitais</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Plataformas Agregadoras</CardTitle>
                  <CardDescription>
                    CHAPP, Kivid, ClivaleMais - atuam com rede de laboratórios parceiros
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Preço</h4>
                      <p className="text-sm text-muted-foreground">Pacote básico a partir de R$39,51</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Avaliação</h4>
                      <p className="text-sm text-muted-foreground">Boa usabilidade; depende da rede credenciada</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Público</h4>
                      <p className="text-sm text-muted-foreground">Busca conveniência e preço via app</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Diferenciais</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Venda por app</Badge>
                      <Badge variant="outline">Descontos</Badge>
                      <Badge variant="outline">Agendamento digital</Badge>
                      <Badge variant="outline">Entrega digital de resultados</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Oportunidades / Lacunas Percebidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  • <strong>Experiência digital consistente</strong> (agendamento + resultado + pagamento no mesmo
                  fluxo)
                </p>
                <p className="text-sm">
                  • <strong>Clareza sobre tempo de entrega</strong> de laudos
                </p>
                <p className="text-sm">
                  • <strong>Opções reais de parcelamento/assinatura local</strong>
                </p>
                <p className="text-sm">
                  • <strong>Programas de fidelidade</strong>
                </p>
                <p className="text-sm">
                  • <strong>Coleta rápida sem fila</strong> com fila virtual
                </p>
                <p className="text-sm">
                  • <strong>Integração com postos de saúde locais</strong> (parcerias comunitárias)
                </p>
                <p className="text-sm font-semibold mt-4">
                  Nem todas as redes combinam preço baixo + entrega digital rápida + atendimento humanizado de forma
                  clara.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Faturamento Tab */}
          <TabsContent value="faturamento" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Faturamento Médio do Setor</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Estimativas baseadas em estudos do Sebrae-BA e análise de mercado local.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Referência Sebrae-BA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">R$ 70.000/mês</div>
                    <p className="text-sm text-muted-foreground">
                      Faturamento médio mensal de referência para laboratórios baianos de porte pequeno-médio (Estudo de
                      Mercado — Laboratórios de Análises Clínicas, Sebrae-BA)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Ticket Médio por Cliente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">R$ 30 - R$ 120</div>
                    <p className="text-sm text-muted-foreground">
                      Dependendo se cliente faz apenas 1 exame isolado ou combo. Plataformas e redes anunciam combos
                      básicos por R$39–R$60; ofertas pontuais de hemograma por R$14 aparecem em promoções.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Estimativa para Clínica Popular (Modelo Pequeno/Médio)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Volume Mensal</h4>
                    <div className="text-2xl font-bold mb-1">1.000 - 5.000</div>
                    <p className="text-sm text-muted-foreground">coletas/mês</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Dependendo da localização e escala (unidade de bairro vs. rede)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Pequena Unidade</h4>
                    <div className="text-2xl font-bold mb-1">R$ 30k - 100k</div>
                    <p className="text-sm text-muted-foreground">por mês</p>
                    <p className="text-xs text-muted-foreground mt-2">Unidade de bairro com operação otimizada</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Rede/Multilocalidade</h4>
                    <div className="text-2xl font-bold mb-1">R$ 100k+</div>
                    <p className="text-sm text-muted-foreground">por mês</p>
                    <p className="text-xs text-muted-foreground mt-2">Com imagem ou múltiplas unidades</p>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Conclusão Financeira
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Existe espaço saudável para rentabilidade em modelo de clínica popular se controlar custos de
                    insumos/terceirização, otimizar throughput de coletas e agregar serviços digitais/assinaturas que
                    aumentem LTV (Lifetime Value).
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Tab */}
          <TabsContent value="seo" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Análise de Busca e Demanda (SEO)</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Palavras-chave prioritárias locais com alto intento de compra.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Keywords Prioritárias (Alto Intento de Compra)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge className="w-full justify-start text-sm py-2">exame de sangue barato Salvador</Badge>
                    <Badge className="w-full justify-start text-sm py-2">hemograma Salvador preço</Badge>
                    <Badge className="w-full justify-start text-sm py-2">laboratório Salvador preço</Badge>
                    <Badge className="w-full justify-start text-sm py-2">clínica popular Salvador exames</Badge>
                  </div>
                  <div className="space-y-2">
                    <Badge className="w-full justify-start text-sm py-2">exame de glicose Salvador preço</Badge>
                    <Badge className="w-full justify-start text-sm py-2">resultados de exame online Salvador</Badge>
                    <Badge className="w-full justify-start text-sm py-2">hemograma rápido Salvador</Badge>
                    <Badge className="w-full justify-start text-sm py-2">hemograma Pituba preço</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Como Priorizar (Recomendações)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Keywords Locais</h4>
                    <p className="text-sm text-muted-foreground">
                      Comece por "exame de sangue barato Salvador" e variações de bairro (ex.: "hemograma Pituba preço")
                      — alta intenção local.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Landing Pages</h4>
                    <p className="text-sm text-muted-foreground">
                      Foque em páginas de destino por bairro/unidade + esquema de "preços / pacotes / resultado em X
                      horas" para converter.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Google Ads</h4>
                    <p className="text-sm text-muted-foreground">
                      Investimento em Google Ads com keywords de alta intenção; testar com RLSA/Geotargeting nas áreas
                      de maior densidade.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sazonalidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Use o Google Trends para captar sazonalidade (PSA/Novembro, campanhas de diabetes/saúde do
                      homem/mulher) — isso ajuda planejar promoções.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Redes Sociais</h4>
                    <p className="text-sm text-muted-foreground">
                      Testar campanhas locais em Facebook/Instagram com segmentação por bairro e anúncios de pacotes a
                      R$XX.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Posicionamento Tab */}
          <TabsContent value="posicionamento" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Posicionamento de Mercado</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Mapa estratégico preço × conveniência e recomendação de posicionamento.
              </p>
            </div>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Posicionamento Recomendado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-4">
                  "Clínica popular de exames em Salvador com foco em melhor custo-benefício"
                </p>
                <p className="text-muted-foreground">
                  Preço claro e transparente, resultado rápido (entrega digital em até X horas), agendamento/fila
                  virtual via WhatsApp/app e opções de pagamento flexíveis (parcelamento e assinatura) — com forte
                  presença em bairros de alta densidade D/C.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Onde os Concorrentes se Posicionam</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Clínica SiM</h4>
                    <p className="text-sm text-muted-foreground">
                      Preço baixo + conveniência razoável via app/pacotes (baixo preço, média-alta conveniência)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Labchecap</h4>
                    <p className="text-sm text-muted-foreground">
                      Foco em credibilidade / estrutura (média/alta conveniência, preço médio)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Apps/Agregadores</h4>
                    <p className="text-sm text-muted-foreground">
                      Alto conveniência, preço competitivo (dependem de rede)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Clínicas de Bairro</h4>
                    <p className="text-sm text-muted-foreground">
                      Preço baixo, conveniência variável (localização boa, mas digital fraca)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Espaço Livre / Oportunidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">
                        Experiência digital consistente (agendamento + resultado + pagamento no mesmo fluxo)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Clareza sobre tempo de entrega de laudos</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Opções reais de parcelamento/assinatura local</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Programas de fidelidade</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">Coleta rápida sem fila com fila virtual</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Táticas para Defender o Posicionamento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Pacotes Transparentes</h4>
                      <p className="text-sm text-muted-foreground">
                        Ex.: pacote check básico R$39/R$49 com entrega em 24h. Cite claramente o que está incluído.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Entrega Digital</h4>
                      <p className="text-sm text-muted-foreground">Resultado + SMS/WhatsApp (diferencial percebido)</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Fila Virtual</h4>
                      <p className="text-sm text-muted-foreground">
                        Agendamento por WhatsApp para reduzir tempo no ponto de coleta
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Programa de Fidelidade</h4>
                      <p className="text-sm text-muted-foreground">
                        Mensalidade baixa para descontos — modelo provado pelas redes populares
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Parcerias Locais</h4>
                      <p className="text-sm text-muted-foreground">
                        Com farmácias e agentes comunitários para captação em bairros
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      6
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Comunicação Local</h4>
                      <p className="text-sm text-muted-foreground">
                        Anúncios geolocalizados no Facebook e Google Ads com CTA "resultado em X horas"
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      7
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Garantia de Qualidade</h4>
                      <p className="text-sm text-muted-foreground">
                        Explicitar laboratório central, acreditações, quem assina o laudo
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ações Tab */}
          <TabsContent value="acoes" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ações Práticas</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Script corrido para coleta dos dados que faltam e próximos passos.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Script de Coleta de Dados (Passo a Passo)</CardTitle>
                <CardDescription>Execute ou delegue estas ações para completar a pesquisa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mapear Unidades</h4>
                    <p className="text-sm text-muted-foreground">
                      Pesquise "laboratório Salvador", "clínica popular Salvador" no Google Maps. Salve 10-15 unidades
                      em 3 listas: rede grande, rede média, unidades de bairro.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Coletar Preços</h4>
                    <p className="text-sm text-muted-foreground">
                      Em cada site/unidade ou por telefone, anote preços de 3 exames básicos: hemograma, glicose (jejum)
                      e colesterol. Salve em planilha.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Avaliações e Reputação</h4>
                    <p className="text-sm text-muted-foreground">
                      Abra Google Maps/Doctoralia/ReclameAQUI para cada unidade e registre nota média e principais
                      reclamações.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dados Oficiais</h4>
                    <p className="text-sm text-muted-foreground">
                      Baixar os PDFs do Sebrae-BA sobre laboratórios e clínicas para usar como benchmark financeiro.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Google Trends & Keyword Planner</h4>
                    <p className="text-sm text-muted-foreground">
                      Rode comparativo de termos para ver sazonalidade; use Keyword Planner para pegar volumes e CPC
                      local.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    6
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Grupos Locais</h4>
                    <p className="text-sm text-muted-foreground">
                      Pesquisar grupos "Saúde Salvador", "Ofertas Salvador" no Facebook para extrair feedbacks e
                      demandas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    7
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Análise de Gaps</h4>
                    <p className="text-sm text-muted-foreground">
                      Com a planilha pronta, gere tabela comparativa e marque 3 oportunidades de diferenciação local.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Próximo Passo Mais Impactante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-3">Testar 1 unidade piloto com modelo otimizado</p>
                <div className="space-y-2">
                  <p className="text-sm">
                    • <strong>Pacote fixo:</strong> hemograma + glicose + colesterol por R$39–49
                  </p>
                  <p className="text-sm">
                    • <strong>Entrega digital:</strong> resultado em 24h via WhatsApp
                  </p>
                  <p className="text-sm">
                    • <strong>Agendamento:</strong> fila virtual por WhatsApp
                  </p>
                  <p className="text-sm">
                    • <strong>Marketing:</strong> anúncio geolocalizado no Facebook/Instagram
                  </p>
                  <p className="text-sm">
                    • <strong>Métricas:</strong> medir CAC e taxa de retorno/no-show
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Conclusão */}
      <section className="border-t bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Conclusão e Recomendações
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary-foreground" />
                    </div>
                    ICP
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Foque em adultos 25–60 anos das classes C/D, moradores de bairros populosos e periféricos;
                    comunicação direta e local funciona melhor.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                      <Target className="h-4 w-4 text-secondary-foreground" />
                    </div>
                    Concorrência
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    O mercado é competitivo por preço; há espaço para diferenciação com custo-benefício + rapidez +
                    experiência digital (assinatura, fila virtual, resultado por WhatsApp).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                      <DollarSign className="h-4 w-4 text-primary-foreground" />
                    </div>
                    Faturamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Referência prática ~R$70k/mês para laboratórios baianos de porte médio (Sebrae). Modelos pequenos
                    viáveis a partir de R$30k/mês se bem localizados/otimizados.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-secondary-foreground" />
                    </div>
                    Próximo Passo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Testar 1 unidade piloto com 1 pacote fixo, entrega digital em 24h, agendamento por WhatsApp e
                    anúncio geolocalizado — medir CAC e taxa de retorno.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            Análise de Mercado — Clínicas Populares de Exames em Salvador • 2025
          </p>
        </div>
      </footer>
    </div>
  )
}
