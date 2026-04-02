import { motion } from "framer-motion";
import { Sparkles, Stars, Palette, Gem, Menu, X, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const defaultProducts = [
  {
    id: 1,
    category: "Cartões",
    title: "Cartão de Agradecimento (10x14cm)",
    desc: "Perfeito para acompanhar pedidos e valorizar sua entrega.",
    price: 15,
    priceLabel: "A partir de R$ 15,00",
    options: ["10 un — R$ 15,00", "25 un — R$ 30,00", "50 un — R$ 55,00"],
    tone: "from-[#4c1d95] via-[#7c3aed] to-[#db2777]",
    tag: "Mais pedido",
    imageLabel: "Mockup cartão premium",
    pixKey: "67998559068",
  },
  {
    id: 2,
    category: "Etiquetas",
    title: "Tags / Etiquetas",
    desc: "Ideal para embalagens, lembranças e identidade da sua marca.",
    price: 15,
    priceLabel: "A partir de R$ 15,00",
    options: ["20 un — R$ 15,00", "50 un — R$ 30,00", "100 un — R$ 55,00"],
    tone: "from-[#581c87] via-[#9333ea] to-[#ec4899]",
    tag: "Profissional",
    imageLabel: "Mockup tags premium",
    pixKey: "67998559068",
  },
  {
    id: 3,
    category: "Festas",
    title: "Topo de Bolo",
    desc: "Destaque sua decoração com um acabamento personalizado.",
    price: 15,
    priceLabel: "A partir de R$ 15,00",
    options: ["Simples — R$ 15,00", "Premium — R$ 25,00"],
    tone: "from-[#312e81] via-[#7c3aed] to-[#f472b6]",
    tag: "Festa",
    imageLabel: "Mockup topo premium",
    pixKey: "67998559068",
  },
  {
    id: 4,
    category: "Convites",
    title: "Convites Personalizados",
    desc: "Convites criativos e personalizados para qualquer ocasião.",
    price: 4,
    priceLabel: "A partir de R$ 4,00",
    options: ["Unidade — R$ 4,00", "10 un — R$ 35,00", "20 un — R$ 65,00"],
    tone: "from-[#6b21a8] via-[#c026d3] to-[#fb7185]",
    tag: "Sob encomenda",
    imageLabel: "Mockup convite luxo",
    pixKey: "67998559068",
  },
  {
    id: 5,
    category: "Embalagem",
    title: "Adesivos para Embalagem",
    desc: "Deixe seus pedidos com aparência profissional.",
    price: 20,
    priceLabel: "A partir de R$ 20,00",
    options: ["30 un — R$ 20,00", "50 un — R$ 30,00", "100 un — R$ 55,00"],
    tone: "from-[#4a044e] via-[#a21caf] to-[#ec4899]",
    tag: "Marca própria",
    imageLabel: "Mockup embalagem premium",
    pixKey: "67998559068",
  },
  {
    id: 6,
    category: "Kit Festa",
    title: "Kit Festa Personalizado",
    desc: "Solução completa para festas com visual incrível.",
    price: 35,
    priceLabel: "A partir de R$ 35,00",
    options: ["Básico — R$ 35,00", "Médio — R$ 60,00", "Completo — R$ 100,00"],
    tone: "from-[#581c87] via-[#7c3aed] to-[#f43f5e]",
    tag: "Completo",
    imageLabel: "Mockup kit festa",
    pixKey: "67998559068",
  },
] as const;

const services = [
  {
    title: "Impressões",
    desc: "Impressões em preto e branco, coloridas, frente e verso e materiais para estudo, trabalho e divulgação.",
    icon: "01",
  },
  {
    title: "Personalizados",
    desc: "Caixinhas, lembranças, brindes e itens exclusivos para aniversários, eventos e datas especiais.",
    icon: "02",
  },
  {
    title: "Adesivos e Etiquetas",
    desc: "Etiquetas personalizadas para embalagens, identificação de produtos e fortalecimento da sua marca.",
    icon: "03",
  },
  {
    title: "Topos de Bolo",
    desc: "Modelos personalizados com acabamento elegante para valorizar a decoração da sua festa.",
    icon: "04",
  },
  {
    title: "Cartões e Tags",
    desc: "Cartões de agradecimento, tags, recados e materiais de apoio para uma entrega mais profissional.",
    icon: "05",
  },
  {
    title: "Embalagens",
    desc: "Soluções personalizadas para presentear, vender e encantar com uma apresentação diferenciada.",
    icon: "06",
  },
];

const differentials = [
  "Atendimento rápido e organizado",
  "Acabamento com visual profissional",
  "Pedidos personalizados para cada cliente",
  "Suporte e orçamento pelo WhatsApp",
];

const categories = ["Todos", "Cartões", "Etiquetas", "Festas", "Convites", "Embalagem", "Kit Festa"] as const;

const prices = [
  { label: "Impressão P&B", value: "R$ 1,00" },
  { label: "Impressão Colorida", value: "R$ 1,50" },
  { label: "Xerox", value: "R$ 0,50" },
];

const whatsappNumber = "5567999617938";

type Product = (typeof defaultProducts)[number];

function getCategoryIcon(category: string) {
  switch (category) {
    case "Cartões":
      return "💌";
    case "Etiquetas":
      return "🏷️";
    case "Festas":
      return "🎉";
    case "Convites":
      return "📩";
    case "Embalagem":
      return "📦";
    case "Kit Festa":
      return "🎁";
    default:
      return "✨";
  }
}

function PremiumMockup({ product }: { product: Product }) {
  return (
    <div className={`group relative h-56 overflow-hidden bg-gradient-to-br ${product.tone}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.32),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_28%)]" />
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:scale-125" />
      <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-pink-300/20 blur-2xl transition duration-500 group-hover:scale-125" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.12))]" />

      <div className="absolute inset-x-6 top-6 rounded-[1.75rem] border border-white/35 bg-white/95 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.22)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,#f5d0fe,#ddd6fe,#fbcfe8)] text-3xl shadow-inner ring-1 ring-black/5">
            {getCategoryIcon(product.category)}
          </div>
          <div className="min-w-0 flex-1 text-[#2a1440]">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-fuchsia-700">Cyviih Papelaria</div>
            <div className="mt-2 line-clamp-2 text-lg font-black leading-tight">{product.title}</div>
            <div className="mt-1 text-xs font-medium text-[#7b5aa1]">{product.imageLabel}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/20 bg-white/10 p-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full bg-black/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            {product.category}
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
            {product.tag}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-[11px] font-medium text-white/80">
          <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(244,114,182,0.9)]" />
          Mockup premium com acabamento visual da marca
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [products] = useState<Product[]>([...defaultProducts]);
  const [cart, setCart] = useState<Product[]>([]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Todos") return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  const cartTotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);
  const pixKey = products[0]?.pixKey || "67998559068";

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove: number) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const sendCartToWhatsApp = () => {
    if (cart.length === 0) return;

    const itemsText = cart.map((item, i) => `${i + 1}. ${item.title} — ${item.priceLabel}`).join("\n");
    const totalText = `R$ ${cartTotal.toFixed(2).replace(".", ",")}`;
    const finalMessage = `Olá! Quero finalizar meu pedido:\n\n${itemsText}\n\nTotal: ${totalText}\nPagamento via Pix: ${pixKey}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`, "_blank");
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0f0a17] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(180deg,#120b1d_0%,#161022_45%,#0f0a17_100%)]">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute left-[8%] top-[18%] h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse" />
          <div className="absolute right-[10%] top-[12%] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-[12%] left-[28%] h-40 w-40 rounded-full bg-pink-400/10 blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_40%)]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_18%)]" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-5 md:px-8 lg:px-10">
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="sticky top-4 z-40 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] px-4 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl md:px-5 lg:px-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex items-center gap-3">
                  <img src="/logo-cyviih.png" alt="Cyviih Papelaria" className="h-12 w-auto drop-shadow-[0_8px_25px_rgba(168,85,247,0.4)] md:h-14" />

                  <div className="min-w-0">
                    <div className="truncate text-lg font-black tracking-[0.12em] text-white md:text-xl">CYVIIH</div>
                    <div className="truncate text-[11px] uppercase tracking-[0.25em] text-fuchsia-200/80 md:text-xs">Papelaria personalizada</div>
                  </div>
                </div>
              </div>

              <button type="button" onClick={() => setMenuOpen((prev) => !prev)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden" aria-label="Abrir menu">
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              <div className="hidden items-center gap-3 md:flex">
                <nav className="flex flex-wrap items-center gap-2 text-sm text-white/80 lg:gap-3">
                  <a href="#servicos" className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">Serviços</a>
                  <a href="#loja" className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">Loja</a>
                  <a href="#diferenciais" className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">Diferenciais</a>
                  <a href="#contato" className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">Contato</a>
                </nav>

                <a href={`https://wa.me/${whatsappNumber}`} className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffffff,#f5eefe)] px-5 py-3 text-sm font-black text-[#20112f] shadow-[0_12px_30px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(255,255,255,0.18)]">
                  Solicitar orçamento
                </a>
              </div>
            </div>

            {menuOpen && (
              <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-3 md:hidden">
                <nav className="flex flex-col gap-2 text-sm text-white/85">
                  <a href="#servicos" onClick={() => setMenuOpen(false)} className="rounded-2xl px-3 py-3 transition hover:bg-white/10">Serviços</a>
                  <a href="#loja" onClick={() => setMenuOpen(false)} className="rounded-2xl px-3 py-3 transition hover:bg-white/10">Loja</a>
                  <a href="#diferenciais" onClick={() => setMenuOpen(false)} className="rounded-2xl px-3 py-3 transition hover:bg-white/10">Diferenciais</a>
                  <a href="#contato" onClick={() => setMenuOpen(false)} className="rounded-2xl px-3 py-3 transition hover:bg-white/10">Contato</a>
                  <a href={`https://wa.me/${whatsappNumber}`} className="mt-2 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 font-black text-[#20112f]">
                    Solicitar orçamento
                  </a>
                </nav>
              </div>
            )}
          </motion.header>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-8 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-10 lg:px-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden items-center justify-center lg:flex">
            <div className="h-px w-[70%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-[linear-gradient(135deg,rgba(217,70,239,0.16),rgba(168,85,247,0.12))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-100 shadow-[0_10px_30px_rgba(168,85,247,0.14)] backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(244,114,182,0.9)]" />
              Atendimento em Corumbá - MS
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.9] tracking-tight md:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Personalizados com
              <span className="block bg-[linear-gradient(135deg,#f9a8d4,#c084fc,#f0abfc)] bg-clip-text text-transparent">
                cara de marca premium
              </span>
              para encantar seus clientes
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              A Cyviih Papelaria transforma ideias em produtos criativos, elegantes e prontos para valorizar cada entrega, festa ou negócio.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`https://wa.me/${whatsappNumber}`} className="inline-flex items-center justify-center rounded-2xl bg-fuchsia-600 px-6 py-4 text-base font-bold text-white shadow-[0_18px_40px_rgba(112,26,117,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-500">
                Chamar no WhatsApp
              </a>
              <a href="#loja" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
                Ver catálogo
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {differentials.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm text-white/80 backdrop-blur transition duration-300 hover:bg-white/[0.08]">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur">
                <Sparkles className="h-4 w-4 text-fuchsia-300" />
                Artes com acabamento premium
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur">
                <Gem className="h-4 w-4 text-violet-300" />
                Visual elegante para marcas
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-3xl border border-white/10 bg-white/5 blur-[1px] lg:block" />
            <div className="absolute -right-6 bottom-8 hidden h-28 w-28 rounded-full bg-fuchsia-500/10 blur-2xl lg:block" />

            <div className="grid gap-5">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Clientes", value: "+100" },
                  { label: "Pedidos", value: "Rápido" },
                  { label: "Visual", value: "Premium" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-4 text-center backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                    <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-fuchsia-300">{stat.label}</div>
                    <div className="mt-2 text-xl font-black text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f9a8d4,#c084fc,#7c3aed)] text-sm font-black text-white shadow-[0_12px_24px_rgba(168,85,247,0.28)]">CV</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.26em] text-fuchsia-300">Identidade Cyviih</div>
                    <div className="mt-1 text-sm text-white/70">Visual mais refinado, fácil de navegar e com presença de marca desde o topo.</div>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.98)_0%,rgba(245,238,254,0.98)_45%,rgba(234,219,255,0.98)_100%)] p-6 text-[#241335] shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-600">Cyviih Papelaria</p>
                    <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Apresentação bonita vende mais</h2>
                  </div>
                  <div className="rounded-2xl bg-[#f7efff] px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-700">Premium</div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {prices.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[#efe4ff] bg-[#fcf9ff] p-4 text-center shadow-sm">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-600">{item.label}</div>
                      <div className="mt-3 text-3xl font-black text-[#2a1440]">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-[#20112f] px-5 py-5 text-white shadow-lg">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-200">Pagamento Pix</div>
                  <div className="mt-2 text-2xl font-black">{pixKey}</div>
                  <div className="mt-2 text-sm text-white/70">Pagamento rápido via Pix disponível para todos os pedidos.</div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">Mais pedido</div>
                  <div className="mt-3 text-2xl font-black text-white">Cartão de agradecimento</div>
                  <div className="mt-2 text-sm text-white/65">Detalhes que valorizam sua entrega e deixam sua marca mais lembrada.</div>
                </div>
                <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">Destaque</div>
                  <div className="mt-3 text-2xl font-black text-white">Tags e etiquetas</div>
                  <div className="mt-2 text-sm text-white/65">Personalização para embalagens, pedidos e identidade visual mais profissional.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="mb-8 flex items-center gap-3 text-fuchsia-300">
          <Stars className="h-5 w-5" />
          <div className="text-xs font-bold uppercase tracking-[0.28em]">Experiência premium</div>
        </div>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">Serviços</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Soluções completas para sua papelaria</h2>
          <p className="mt-4 text-lg leading-8 text-white/70">Itens personalizados, materiais para eventos e impressões com visual alinhado para quem quer vender melhor e entregar com mais valor.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/[0.06]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-fuchsia-300/20 bg-fuchsia-500/10 text-sm font-black tracking-[0.18em] text-fuchsia-200 shadow-[0_10px_24px_rgba(168,85,247,0.18)]">{service.icon}</div>
              <h3 className="mt-5 text-2xl font-black">{service.title}</h3>
              <p className="mt-3 text-white/70">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="diferenciais" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">Diferenciais</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Uma apresentação bonita aumenta o valor do seu pedido</h2>
              <p className="mt-5 text-lg leading-8 text-white/70">Cartões, tags, embalagens, adesivos e personalizados bem produzidos fazem seu cliente perceber mais qualidade, lembrar da sua marca e recomendar seu trabalho.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Visual elegante e organizado", "Materiais para festas e pequenos negócios", "Atendimento ágil para encomendas", "Produção personalizada conforme seu estilo"].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-[#171121] p-6 text-white/85 shadow-lg shadow-black/10">
                  <div className="text-base font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="loja" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="mb-6 flex items-center gap-3 text-fuchsia-300">
          <Palette className="h-5 w-5" />
          <div className="text-xs font-bold uppercase tracking-[0.28em]">Catálogo visual</div>
        </div>
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">Loja</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Catálogo completo da Cyviih Papelaria</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">Escolha seus produtos, adicione ao carrinho e finalize seu pedido de forma simples pelo WhatsApp com pagamento via Pix.</p>
          </div>
          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Quero receber o catálogo completo da Cyviih Papelaria.")}`} className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
            Pedir catálogo completo
          </a>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSelectedCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${item === selectedCategory ? "bg-fuchsia-600 text-white" : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#15101f] shadow-2xl shadow-black/15 transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-400/30 hover:shadow-[0_24px_55px_rgba(0,0,0,0.28)]">
              <PremiumMockup product={product} />

              <div className="p-6">
                <p className="text-white/70">{product.desc}</p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-300">Opções e preços</div>
                  <div className="mt-3 space-y-2">
                    {product.options.map((option) => (
                      <div key={option} className="rounded-xl bg-white/5 px-3 py-2 text-sm text-white/85">{option}</div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-300">Valor inicial</div>
                    <div className="mt-1 text-xl font-black text-white">{product.priceLabel}</div>
                  </div>
                  <button onClick={() => addToCart(product)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-fuchsia-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-500 hover:shadow-xl hover:shadow-fuchsia-950/40">
                    + Carrinho
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-6 pb-20 pt-4 md:px-10 lg:pb-24">
        <div className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,#181121_0%,#120d19_100%)] p-8 shadow-2xl shadow-black/20 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">Contato</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Solicite seu orçamento</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">Fale com a Cyviih Papelaria para pedir valores, enviar sua ideia e montar seus personalizados com uma apresentação mais profissional.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">WhatsApp</div>
                <div className="mt-3 text-2xl font-black">(67) 99961-7938</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">Atendimento</div>
                <div className="mt-3 text-2xl font-black">Corumbá - MS</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-fuchsia-300/10 bg-[linear-gradient(180deg,#29163d_0%,#1d122d_100%)] p-8">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-200">Cyviih Papelaria</div>
            <h3 className="mt-4 text-3xl font-black leading-tight">Carrinho com Pix automático</h3>
            <p className="mt-4 text-white/75">O cliente adiciona os produtos, o site soma o total e finaliza pelo WhatsApp com a chave Pix pronta para pagamento.</p>
            <button onClick={sendCartToWhatsApp} className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-fuchsia-600 px-6 py-4 text-base font-bold text-white transition hover:scale-[1.02] hover:bg-fuchsia-500">
              Finalizar pedido
            </button>
          </div>
        </div>
      </section>

      <button onClick={() => setCartOpen((prev) => !prev)} className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#c026d3,#db2777,#9333ea)] text-2xl text-white shadow-[0_18px_40px_rgba(112,26,117,0.45)] transition duration-300 hover:scale-105" aria-label="Abrir carrinho">
        🛒
        <span className="absolute -top-2 -right-2 min-w-[24px] rounded-full bg-white px-2 py-0.5 text-center text-xs font-bold text-black">{cart.length}</span>
      </button>

      {cartOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,17,47,0.98),rgba(22,14,35,0.98))] p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <div className="text-lg font-black">Carrinho</div>
          <div className="text-sm text-white/70">{cart.length} item(ns)</div>
          <div className="mt-3 text-xl font-bold">R$ {cartTotal.toFixed(2).replace(".", ",")}</div>

          <div className="mt-4 max-h-40 space-y-2 overflow-auto">
            {cart.length === 0 ? (
              <div className="text-sm text-white/60">Seu carrinho está vazio.</div>
            ) : (
              cart.map((item, i) => (
                <div key={`${item.id}-${i}`} className="flex items-start justify-between gap-3 rounded-xl bg-white/5 px-3 py-2 text-sm">
                  <div>
                    <div>{item.title}</div>
                    <div className="text-xs text-white/60">{item.priceLabel}</div>
                  </div>
                  <button onClick={() => removeFromCart(i)} className="text-xs font-bold text-fuchsia-200 underline">remover</button>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 text-sm">Pagamento via Pix: <b>{pixKey}</b></div>

          <button onClick={sendCartToWhatsApp} className="mt-4 w-full rounded-xl bg-fuchsia-600 py-3 font-bold">
            Finalizar pedido no WhatsApp
          </button>
        </div>
      )}
    </main>
  );
}
