import { motion } from "framer-motion";
import { MessageSquare, CalendarCheck, Bell, Clock, UserX, DollarSign, CheckCircle2, Handshake } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import lsConectaLogo from "@/assets/lucascacau/ls-conecta-logo.png";
import interventLogo from "@/assets/lucascacau/intervent-logo.png";
import whatsappChat1 from "@/assets/lucascacau/whatsapp-chat-1.jpeg";
import whatsappChat2 from "@/assets/lucascacau/whatsapp-chat-2.jpeg";
import chatwootDemo from "@/assets/lucascacau/chatwoot-demo.png";
import crmDemo from "@/assets/lucascacau/crm-demo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── Hero ─── */
const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--page-bg-deep))] py-10 md:py-20 min-h-[80vh] flex items-center">
      {/* Glows */}
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at 20% 30%, var(--page-glow-cyan), transparent 50%)` }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at 80% 70%, var(--page-glow-coral), transparent 50%)` }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(circle at 50% 100%, var(--page-glow-cyan), transparent 40%)` }} />

      <div className="container relative z-10 mx-auto grid max-w-6xl gap-8 px-4 md:gap-16 md:grid-cols-2 md:items-center">
        {/* Left – Copy */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="order-2 md:order-1">
          {/* Logos */}
          <motion.div variants={fadeInUp} className="mb-6 flex items-center justify-center gap-3 md:justify-start md:gap-5">
            <img
              src={lsConectaLogo}
              alt="LS Conecta — Automação inteligente para clínicas"
              className="h-16 w-auto sm:h-24 md:h-32 drop-shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
            />
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border sm:h-9 sm:w-9" style={{ borderColor: 'var(--page-border-subtle)', background: 'var(--page-icon-bg)' }}>
              <Handshake className="h-4 w-4 text-primary/70" />
            </div>
            <img
              src={interventLogo}
              alt="Intervent"
              className="h-16 w-auto sm:h-24 md:h-32 drop-shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-center text-2xl font-extrabold leading-[1.1] tracking-tight sm:text-3xl md:text-left md:text-5xl lg:text-[3.4rem]"
          >
            <span className={theme === 'dark' ? 'text-gradient-hero-dark' : 'text-gradient-hero-light'}>A Secretária IA Humanizada do </span>
            <span className="text-primary">Dr. Lucas Cacau</span>
            <span className={theme === 'dark' ? 'text-gradient-hero-dark' : 'text-gradient-hero-light'}> agora disponível para sua clínica.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-4 text-center text-base leading-relaxed text-[hsl(var(--page-text-body))] sm:text-lg md:text-left md:mt-6">
            Recupere até <span className="font-bold text-accent">30% dos pacientes</span> que você perde por demora no WhatsApp — com atendimento humanizado e automático.
          </motion.p>

          {/* Trust badges */}
          <motion.div variants={fadeInUp} className="mt-5 flex flex-wrap items-center justify-center gap-4 md:justify-start md:mt-6">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-[hsl(var(--page-text-muted))] sm:text-sm">Resposta em segundos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-[hsl(var(--page-text-muted))] sm:text-sm">24h por dia, 7 dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-[hsl(var(--page-text-muted))] sm:text-sm">100% humanizada</span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6 flex justify-center md:justify-start md:mt-8">
            <a
              href="https://api.whatsapp.com/send/?phone=5531990638328&text=Ol%C3%A1%21+Quero+conhecer+a+secret%C3%A1ria+do+Dr+Lucas+Cacau&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="animate-glow-pulse rounded-full bg-accent px-6 py-5 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90 sm:px-8 sm:py-6 sm:text-base"
              >
                QUERO A SECRETÁRIA NA MINHA CLÍNICA
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right – Visual placeholder for desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto hidden w-full max-w-[500px] md:block md:order-2"
        >
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full" style={{ background: `radial-gradient(ellipse, var(--page-glow-cyan), transparent 70%)` }} />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex gap-4 justify-center"
          >
            <div className="relative rounded-[2rem] border-[5px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_20px_60px_hsl(var(--primary)/0.3)] overflow-hidden w-[45%]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[80px] h-[20px] bg-[#1a1a1a] rounded-b-xl" />
              <img src={whatsappChat1} alt="Atendimento humanizado via WhatsApp" className="w-full rounded-[1.5rem]" />
            </div>
            <div className="relative rounded-[2rem] border-[5px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_20px_60px_hsl(var(--primary)/0.3)] overflow-hidden w-[45%] mt-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[80px] h-[20px] bg-[#1a1a1a] rounded-b-xl" />
              <img src={whatsappChat2} alt="Triagem inteligente de pacientes" className="w-full rounded-[1.5rem]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Authority Bar ─── */
const AuthorityBar = () => (
  <section className="border-b border-border bg-[hsl(var(--page-bg-alt))] py-6 md:py-8">
    <div className="container mx-auto flex max-w-6xl items-center justify-center px-4 text-center">
      <div className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 shadow-sm sm:px-6 sm:py-4">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent sm:h-6 sm:w-6" />
        <p className="text-base font-bold text-[hsl(var(--page-text-heading))] sm:text-lg">
          Tecnologia validada e estruturada em parceria com <span className="text-accent">Dr. Lucas Cacau</span> para elevar o padrão de atendimento das clínicas.
        </p>
      </div>
    </div>
  </section>
);

/* ─── Emotional Block ─── */
const pains = [
  { icon: Clock, text: "Enquanto você atende, novos contatos desistem por falta de resposta rápida." },
  { icon: UserX, text: "Leads que chegam à noite ou no fim de semana viram consulta na concorrência." },
  { icon: DollarSign, text: "Cada lead ignorado é faturamento que sai da sua clínica — silenciosamente." },
];

const EmotionalSection = () => (
  <section className="relative overflow-hidden bg-[hsl(var(--page-bg-deep))] py-14 md:py-20">
    <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 0%, var(--page-glow-coral), transparent 60%)` }} />
    <div className="container relative z-10 mx-auto max-w-4xl px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.h2 variants={fadeInUp} className="text-center text-2xl font-extrabold leading-snug text-[hsl(var(--page-text-heading))] sm:text-3xl md:text-4xl">
          Você cuida dos pacientes. Mas quem cuida do seu crescimento?
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[hsl(var(--page-text-body))] sm:text-lg">
          Cada contato sem resposta é uma consulta que não acontece — e um faturamento que não entra.
        </motion.p>

        <div className="mt-8 space-y-4 md:mt-12 md:space-y-6">
          {pains.map(({ icon: Icon, text }, i) => (
            <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 rounded-xl border p-4 md:gap-4 md:p-5" style={{ borderColor: 'var(--page-border-subtle)', background: 'var(--page-highlight-bg)' }}>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg md:h-10 md:w-10" style={{ background: 'var(--page-icon-bg)' }}>
                <Icon className="h-4 w-4 text-primary md:h-5 md:w-5" />
              </div>
              <p className="text-sm font-bold leading-relaxed text-[hsl(var(--page-text-heading))] md:text-base">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-8 flex flex-col items-center gap-3 rounded-xl border p-4 text-center sm:flex-row md:mt-10 md:p-5 md:text-left" style={{ borderColor: 'var(--page-border-subtle)', background: 'var(--page-highlight-bg)' }}>
          <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
          <p className="text-base font-bold text-[hsl(var(--page-text-heading))] md:text-lg">
            Agenda previsível, atendimento contínuo — sem depender de horário comercial.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ─── Features Block ─── */
const features = [
  {
    icon: MessageSquare,
    title: "Atendimento com a Sua Identidade",
    desc: "Fala com o tom da sua clínica. Seus pacientes sentem que estão falando com a sua equipe.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda Sempre Cheia",
    desc: "Agenda, reagenda e preenche horários vagos automaticamente — sem você tocar no celular.",
  },
  {
    icon: Bell,
    title: "Menos Faltas, Mais Faturamento",
    desc: "Lembretes automáticos reduzem faltas e follow-ups recuperam leads que pararam de responder.",
  },
];

const FeaturesSection = () => (
  <section className="relative overflow-hidden bg-[hsl(var(--page-bg-alt))] py-14 md:py-20">
    <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at 70% 50%, var(--page-glow-cyan), transparent 60%)` }} />
    <div className="container relative z-10 mx-auto max-w-6xl px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.p variants={fadeInUp} className="text-center text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
          Funcionalidades
        </motion.p>
        <motion.h2 variants={fadeInUp} className="mt-2 text-center text-2xl font-extrabold text-[hsl(var(--page-text-heading))] sm:text-3xl md:text-4xl">
          Não é um bot. É um sistema completo de crescimento.
        </motion.h2>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="group h-full border bg-[hsl(var(--page-bg-surface))] transition-all duration-300 hover:-translate-y-1" style={{ borderColor: 'var(--page-border-subtle)', boxShadow: 'var(--page-shadow-card)' }}>
                <CardContent className="p-5 md:p-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-colors md:mb-5 md:h-12 md:w-12" style={{ background: 'var(--page-icon-bg)' }}>
                    <Icon className="h-5 w-5 text-primary md:h-6 md:w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--page-text-heading))] md:text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--page-text-body))]">{desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Real Conversations - mobile showcase */}
        <motion.div variants={fadeInUp} className="mt-12 md:mt-16">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm md:mb-4">
            Atendimento Real no WhatsApp
          </p>
          <div className="flex gap-3 justify-center sm:gap-4 max-w-md mx-auto">
            <div className="relative rounded-[2rem] border-[5px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_20px_60px_hsl(var(--primary)/0.3)] overflow-hidden w-[45%]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[80px] h-[20px] bg-[#1a1a1a] rounded-b-xl" />
              <img src={whatsappChat1} alt="Atendimento humanizado via WhatsApp" className="w-full rounded-[1.5rem]" />
            </div>
            <div className="relative rounded-[2rem] border-[5px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_20px_60px_hsl(var(--primary)/0.3)] overflow-hidden w-[45%] mt-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[80px] h-[20px] bg-[#1a1a1a] rounded-b-xl" />
              <img src={whatsappChat2} alt="Triagem inteligente de pacientes" className="w-full rounded-[1.5rem]" />
            </div>
          </div>
        </motion.div>

        {/* Chatwoot + CRM Screenshots */}
        <motion.div variants={fadeInUp} className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
          <div>
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm md:mb-4">
              Painel de Atendimento
            </p>
            <div className="overflow-hidden rounded-xl border md:rounded-2xl" style={{ borderColor: 'var(--page-border-subtle)', boxShadow: 'var(--page-shadow-image)' }}>
              <img
                src={chatwootDemo}
                alt="Painel de atendimento — agendamento automático via WhatsApp"
                className="w-full"
              />
            </div>
          </div>
          <div>
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm md:mb-4">
              CRM — Controle Total do Funil
            </p>
            <div className="overflow-hidden rounded-xl border md:rounded-2xl" style={{ borderColor: 'var(--page-border-subtle)', boxShadow: 'var(--page-shadow-image)' }}>
              <img
                src={crmDemo}
                alt="CRM com funil de vendas integrado — gestão de leads"
                className="w-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ─── Social Proof ─── */
const testimonials = [
  { name: "Dr. Lucas Cacau", role: "CEO da Intervent Prime", quote: "Inclusive a gente estava comentando aqui há pouco, se não fosse a Júlia (secretária IA da Intervent), a gente ia estar meio perdido. Ela está sendo assim sensacional para o nosso serviço. Ela é fenomenal." },
  { name: "Dra. Janaina Lacerda", role: "Clínica Studio Sênior", quote: "Depois da automação da LS Conecta, nossas consultas praticamente dobraram. A secretária de IA é tão natural que os pacientes nem percebem que é automatizado." },
  { name: "Dra. Gabriela Brandão", role: "Fisioterapeuta", quote: "O suporte da equipe é impecável. Hoje não preciso me preocupar com agendamentos e posso dedicar mais tempo aos tratamentos." },
];

const SocialProofSection = () => (
  <section className="relative overflow-hidden bg-[hsl(var(--page-bg-deep))] py-14 md:py-20">
    <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at 30% 80%, var(--page-glow-coral), transparent 60%)` }} />
    <div className="container relative z-10 mx-auto max-w-6xl px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.h2 variants={fadeInUp} className="text-center text-2xl font-extrabold text-[hsl(var(--page-text-heading))] sm:text-3xl md:text-4xl">
          Clínicas que já transformaram seu atendimento
        </motion.h2>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
          {testimonials.map(({ name, role, quote }, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="h-full border bg-[hsl(var(--page-bg-surface))]" style={{ borderColor: 'var(--page-border-subtle)' }}>
                <CardContent className="p-5 md:p-7">
                  <p className="text-sm italic leading-relaxed text-[hsl(var(--page-text-body))] md:text-base">"{quote}"</p>
                  <p className="mt-3 text-sm font-bold text-primary md:mt-4">{name}</p>
                  <p className="text-xs text-muted-foreground">{role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── FAQ ─── */
const faqs = [
  { q: "É difícil de instalar?", a: "Não. Nossa equipe configura tudo para você — sem nenhum trabalho técnico do seu lado." },
  { q: "O paciente percebe que é IA?", a: "Não. O atendimento é treinado com o tom de voz da sua clínica. Soa natural e personalizado." },
  { q: "Funciona para clínicas pequenas?", a: "Especialmente. É o braço direito ideal para quem quer crescer sem aumentar custos fixos." },
  { q: "Consigo personalizar a linguagem?", a: "100%. A configuração é feita sob medida para a identidade e o tom de voz da sua clínica." },
];

const FAQSection = () => (
  <section className="relative overflow-hidden bg-[hsl(var(--page-bg-alt))] py-14 md:py-20">
    <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at 60% 30%, var(--page-glow-cyan), transparent 60%)` }} />
    <div className="container relative z-10 mx-auto max-w-3xl px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.h2 variants={fadeInUp} className="text-center text-2xl font-extrabold text-[hsl(var(--page-text-heading))] sm:text-3xl md:text-4xl">
          Perguntas Frequentes
        </motion.h2>

        <motion.div variants={fadeInUp} className="mt-8 md:mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border bg-[hsl(var(--page-bg-surface))] px-4 md:px-5 data-[state=open]:border-l-4 data-[state=open]:border-l-primary"
                style={{ borderColor: 'var(--page-border-subtle)' }}
              >
                <AccordionTrigger className="py-4 text-left text-sm font-semibold text-[hsl(var(--page-text-heading))] hover:no-underline md:py-5 md:text-base">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-[hsl(var(--page-text-body))] md:pb-5">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ─── CTA Final ─── */
const ClosingSection = () => {
  const { theme } = useTheme();
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--page-bg-deep))] py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at 70% 80%, var(--page-glow-cyan), transparent 60%)` }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at 20% 20%, var(--page-glow-coral), transparent 60%)` }} />
      <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
          <motion.h2 variants={fadeInUp} className={`text-2xl font-extrabold sm:text-3xl md:text-4xl ${theme === 'dark' ? 'text-gradient-hero-dark' : 'text-gradient-hero-light'}`}>
            Por que a LS Conecta é diferente?
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-lg text-base text-[hsl(var(--page-text-body))] sm:text-lg">
            Unimos tecnologia e estratégia para que sua agenda deixe de depender de acaso e passe a ter previsibilidade.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-6 md:mt-8">
            <a
              href="https://api.whatsapp.com/send/?phone=5531990638328&text=Ol%C3%A1%21+Quero+conhecer+a+secret%C3%A1ria+do+Dr+Lucas+Cacau&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="animate-glow-pulse rounded-full bg-accent px-6 py-5 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90 sm:px-8 sm:py-6 sm:text-base"
              >
                AGENDAR MINHA DEMONSTRAÇÃO AGORA
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Footer ─── */
const Footer = () => (
  <footer className="border-t border-border bg-[hsl(var(--page-footer-bg))] py-8 md:py-10">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="flex flex-col items-center gap-4 md:gap-5">
        <div className="flex items-center gap-3 md:gap-5">
          <img src={lsConectaLogo} alt="LS Conecta" className="h-10 w-auto sm:h-12 md:h-16" />
          <span className="text-sm font-bold text-[hsl(var(--page-text-muted))]">×</span>
          <img src={interventLogo} alt="Intervent" className="h-10 w-auto sm:h-12 md:h-16" />
        </div>
        <p className="text-center text-xs text-[hsl(var(--page-text-muted))] sm:text-sm">
          © {new Date().getFullYear()} LS Conecta — Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

/* ─── Page ─── */
const LucasCacau = () => (
  <main className="lucascacau-theme" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
    <ThemeToggle />
    <HeroSection />
    <AuthorityBar />
    <EmotionalSection />
    <FeaturesSection />
    <SocialProofSection />
    <FAQSection />
    <ClosingSection />
    <Footer />
  </main>
);

export default LucasCacau;
