import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroBread from "@/assets/hero-bread.jpg";
import croissant from "@/assets/bread-croissant.jpg";
import cinnamon from "@/assets/bread-cinnamon.jpg";
import brioche from "@/assets/bread-brioche.jpg";
import baguette from "@/assets/bread-baguette.jpg";
import milkbun from "@/assets/bread-milkbun.jpg";
import aboutBakery from "@/assets/about-bakery.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/6281234567890?text=Halo%20Rotia%2C%20saya%20ingin%20pesan%20roti";

const bestSellers = [
  { name: "Sourdough Klasik", desc: "Fermentasi 24 jam, kerak renyah, tekstur lembut.", price: "Rp 65.000", img: heroBread },
  { name: "Butter Croissant", desc: "Lapisan tipis sempurna dengan butter premium Perancis.", price: "Rp 28.000", img: croissant },
  { name: "Cinnamon Roll", desc: "Manis hangat dengan glasir vanilla yang meleleh.", price: "Rp 32.000", img: cinnamon },
  { name: "Choco Brioche", desc: "Brioche lembut dengan dark chocolate Belgia.", price: "Rp 35.000", img: brioche },
];

const gallery = [heroBread, croissant, cinnamon, brioche, baguette, milkbun];

const testimonials = [
  { name: "Sasha P.", role: "Pelanggan Setia", text: "Croissant-nya terbaik di kota. Tiap pagi saya selalu mampir sebelum kerja." },
  { name: "Bagas A.", role: "Food Blogger", text: "Sourdough Rotia punya karakter yang konsisten — kerak crispy, crumb lembap. Wajib coba." },
  { name: "Mira K.", role: "Pemilik Café", text: "Kami pakai roti Rotia untuk café kami. Kualitasnya selalu premium tiap hari." },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Tentang", "#tentang"],
    ["Best Seller", "#bestseller"],
    ["Galeri", "#galeri"],
    ["Testimoni", "#testimoni"],
    ["Kontak", "#kontak"],
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl font-bold text-primary tracking-tight">
          Rotia<span className="text-secondary">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="text-foreground/80 hover:text-primary transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition"
        >
          Pesan Sekarang
        </a>
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <ul className="flex flex-col p-6 gap-4">
            {links.map(([l, h]) => (
              <li key={h}>
                <a href={h} onClick={() => setOpen(false)} className="block text-foreground/80">
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium"
              >
                Pesan Sekarang
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/30 via-background to-background" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/30 text-primary text-xs font-medium tracking-wide uppercase mb-6">
            Fresh bread everyday
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.05]">
            Roti Artisan,
            <br />
            <span className="italic text-secondary">dipanggang dengan cinta.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Rotia menghadirkan roti premium yang dipanggang setiap pagi dari bahan terbaik. Hangat,
            harum, dan selalu segar untuk hari Anda.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:bg-primary/90 transition shadow-lg shadow-primary/20"
            >
              Order Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#bestseller"
              className="inline-flex items-center gap-2 border border-primary/30 text-primary px-7 py-3.5 rounded-full font-medium hover:bg-primary/5 transition"
            >
              Lihat Menu
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-3xl text-primary font-bold">12+</div>
              <div>Tahun pengalaman</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-display text-3xl text-primary font-bold">50+</div>
              <div>Varian roti</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-display text-3xl text-primary font-bold">5K+</div>
              <div>Pelanggan bahagia</div>
            </div>
          </div>
        </div>
        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-6 bg-gradient-to-tr from-secondary/40 to-accent/20 rounded-[3rem] blur-2xl" />
          <img
            src={heroBread}
            alt="Roti sourdough artisan segar Rotia"
            width={1536}
            height={1024}
            className="relative rounded-[2rem] shadow-2xl shadow-primary/20 animate-float"
          />
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center text-2xl">🥐</div>
            <div>
              <div className="text-xs text-muted-foreground">Baru dari oven</div>
              <div className="font-semibold text-primary text-sm">06:00 Pagi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={aboutBakery}
            alt="Interior bakery Rotia"
            width={1280}
            height={1024}
            loading="lazy"
            className="rounded-3xl shadow-xl"
          />
          <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-2xl max-w-[220px]">
            <div className="font-display text-2xl font-bold">Sejak 2012</div>
            <div className="text-sm opacity-80 mt-1">Memanggang dengan resep keluarga</div>
          </div>
        </div>
        <div>
          <span className="text-secondary uppercase tracking-widest text-xs font-semibold">Tentang Kami</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 leading-tight">
            Sebuah cerita tentang <em className="text-secondary">roti</em> dan kesabaran.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Rotia lahir dari kecintaan kami pada seni memanggang. Setiap pagi pukul tiga, dapur kami
            mulai menyala — tepung premium, ragi hidup, dan tangan-tangan terampil bertemu untuk
            menciptakan roti yang tidak hanya enak, tapi juga punya jiwa.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Kami percaya roti terbaik adalah roti yang dibuat tanpa pengawet, dengan fermentasi alami,
            dan disajikan dalam keadaan paling segar.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["Bahan Premium", "Tepung & butter pilihan"],
              ["Tanpa Pengawet", "100% alami"],
              ["Fermentasi Lama", "Hingga 24 jam"],
              ["Setiap Pagi", "Dipanggang fresh"],
            ].map(([t, d]) => (
              <div key={t} className="p-4 rounded-xl bg-muted/40 border border-border">
                <div className="font-semibold text-primary">{t}</div>
                <div className="text-xs text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BestSeller() {
  return (
    <section id="bestseller" className="py-20 lg:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary uppercase tracking-widest text-xs font-semibold">Best Seller</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3">
            Roti favorit pelanggan kami
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pilihan terbaik yang paling sering dipesan — dijamin selalu fresh dari oven.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((b, i) => (
            <article
              key={b.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={b.img}
                  alt={b.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-primary">{b.name}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{b.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-primary">{b.price}</span>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary/30 text-primary hover:bg-secondary/50 transition"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeri" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-secondary uppercase tracking-widest text-xs font-semibold">Galeri Produk</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3">
              Sentuhan tangan, rasa istimewa
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Setiap roti dibuat dengan perhatian pada detail. Lihat koleksi kreasi kami.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gallery.map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl ${i === 0 || i === 4 ? "md:row-span-2 md:aspect-auto" : "aspect-square"}`}
            >
              <img
                src={src}
                alt={`Galeri roti Rotia ${i + 1}`}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimoni" className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary uppercase tracking-widest text-xs font-semibold">Testimoni</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Kata mereka tentang Rotia</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-7 rounded-2xl">
              <div className="text-secondary text-3xl font-display leading-none">"</div>
              <blockquote className="mt-2 leading-relaxed">{t.text}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-primary-foreground/10">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm opacity-70">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontak" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-secondary uppercase tracking-widest text-xs font-semibold">Kontak & Lokasi</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 leading-tight">
            Mampir dan rasakan aromanya
          </h2>
          <p className="mt-5 text-muted-foreground">
            Pintu kami terbuka setiap hari. Pesan via WhatsApp untuk delivery atau datang langsung.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="w-10 h-10 shrink-0 rounded-full bg-secondary/30 flex items-center justify-center text-primary">📍</span>
              <div>
                <div className="font-semibold text-primary">Alamat</div>
                <div className="text-muted-foreground text-sm">Jl. Melati No. 12, Jakarta Selatan</div>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-10 h-10 shrink-0 rounded-full bg-secondary/30 flex items-center justify-center text-primary">🕐</span>
              <div>
                <div className="font-semibold text-primary">Jam Buka</div>
                <div className="text-muted-foreground text-sm">Senin – Minggu, 06.00 – 21.00 WIB</div>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-10 h-10 shrink-0 rounded-full bg-secondary/30 flex items-center justify-center text-primary">📞</span>
              <div>
                <div className="font-semibold text-primary">Telepon / WhatsApp</div>
                <div className="text-muted-foreground text-sm">+62 812-3456-7890</div>
              </div>
            </li>
          </ul>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:bg-primary/90 transition shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5 0-1.1.2-3.6-.9-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3 0-1.5.8-2.2 1-2.5.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.6.3.7 1 2.3 1.1 2.5.1.2.1.4 0 .6-.1.2-.2.4-.4.5-.2.2-.4.4-.5.5-.2.2-.4.4-.2.7.2.4.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 2 .9 2.3 1.1.3.2.6.2.7.4.1.2.1.9-.1 1.5z"/></svg>
            Pesan via WhatsApp
          </a>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl border border-border min-h-[400px]">
          <iframe
            title="Lokasi Rotia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.323!2d106.823!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNDknMjIuOCJF!5e0!3m2!1sen!2sid!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 400 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  return (
    <section className="py-20 lg:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-secondary uppercase tracking-widest text-xs font-semibold">Instagram</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3">
            Ikuti @rotia.bakery
          </h2>
          <p className="mt-4 text-muted-foreground">Roti terbaru, di-update setiap hari.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {gallery.concat(gallery).slice(0, 6).map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <img
                src={src}
                alt={`Instagram Rotia ${i + 1}`}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary/30 text-primary px-7 py-3 rounded-full font-medium hover:bg-primary/5 transition"
          >
            Lihat semua di Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-2xl font-bold">
          Rotia<span className="text-secondary">.</span>
        </div>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Rotia Bakery. Fresh bread everyday.</p>
        <div className="flex gap-4 text-sm opacity-80">
          <a href="#tentang" className="hover:opacity-100">Tentang</a>
          <a href="#bestseller" className="hover:opacity-100">Menu</a>
          <a href="#kontak" className="hover:opacity-100">Kontak</a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pesan via WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5 0-1.1.2-3.6-.9-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3 0-1.5.8-2.2 1-2.5.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.6.3.7 1 2.3 1.1 2.5.1.2.1.4 0 .6-.1.2-.2.4-.4.5-.2.2-.4.4-.5.5-.2.2-.4.4-.2.7.2.4.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 2 .9 2.3 1.1.3.2.6.2.7.4.1.2.1.9-.1 1.5z" />
      </svg>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <BestSeller />
        <Gallery />
        <Testimonials />
        <Instagram />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
