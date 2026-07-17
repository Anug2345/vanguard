import { useState } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Projects", "Studio", "Offerings", "Inquire"];

  return (
    <div id="vanguard-landing" className="relative w-screen h-screen overflow-hidden bg-black text-white font-inter select-none">
      {/* Fullscreen Background Video */}
      <video
        id="bg-video"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Ambient Gradient Overlay & Editorial Glow Spots for Text Contrast */}
      <div 
        id="video-overlay" 
        className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-black/30 md:from-black/95 md:via-black/55 md:to-transparent z-10" 
      />
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div className="glow-spot top-[-100px] right-[-100px]" style={{ animationDelay: '0s' }} />
        <div className="glow-spot bottom-[-200px] left-[-100px]" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Main Content Overlaid */}
      <div id="main-container" className="relative z-20 w-full h-full flex flex-col justify-between">
        
        {/* Navbar */}
        <nav 
          id="navbar" 
          className="w-full flex items-center justify-between px-6 sm:px-12 lg:px-16 py-6 lg:py-8"
        >
          {/* Left: Brand name */}
          <div 
            id="logo" 
            className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            VANGUARD
          </div>

          {/* Center: Desktop Nav Links (hidden below md) */}
          <div id="desktop-links" className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-inter text-sm text-white/70 uppercase tracking-[0.2em] hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: Actions */}
          <div id="navbar-actions" className="flex items-center">
            {/* GET IN TOUCH bordered button (hidden below md) */}
            <a
              id="desktop-cta"
              href="#inquire"
              className="hidden md:flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 group"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3 h-3 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button (visible below md only) */}
            <button
              id="hamburger-btn"
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col justify-center items-end w-8 h-8 focus:outline-none group cursor-pointer"
              aria-label="Open Menu"
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-white transition-transform group-hover:w-5" />
                <div className="w-6 h-0.5 bg-white" />
                <div className="w-4 h-0.5 bg-white transition-transform group-hover:w-5" />
              </div>
            </button>
          </div>
        </nav>

        {/* Hero Content (vertically centered, left-aligned) */}
        <main 
          id="hero-content" 
          className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16"
        >
          <div className="max-w-4xl select-text">
            {/* Tagline (0s delay) */}
            <div 
              id="tagline" 
              className="animate-fade-up flex items-center gap-3 mb-6"
            >
              <Crown className="w-4 h-4 text-white/70" />
              <span className="text-xs text-white/70 tracking-[0.3em] uppercase font-medium">
                World-Class Digital Collective
              </span>
            </div>

            {/* Main Heading (0.2s delay) */}
            <h1 
              id="main-heading" 
              className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.85] tracking-tight text-[clamp(3.5rem,10vw,8.5rem)] flex flex-col"
            >
              <span>Design.</span>
              <span>Disrupt.</span>
              <span>Conquer.</span>
            </h1>

            {/* Subtext (0.4s delay) */}
            <p 
              id="subtext" 
              className="animate-fade-up-delay-2 mt-10 text-white/60 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              We build fierce brand identities that don't just <br className="hidden sm:inline" />
              turn heads — <strong className="text-white font-bold">they lead.</strong>
            </p>

            {/* CTA Row (0.6s delay) */}
            <div 
              id="cta-row" 
              className="animate-fade-up-delay-3 mt-12 flex flex-wrap items-center gap-6 sm:gap-12"
            >
              {/* See Our Work White Button */}
              <button
                id="see-our-work-btn"
                className="group bg-white hover:bg-neutral-200 text-black px-8 sm:px-10 py-4 sm:py-5 text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/40 cursor-pointer"
              >
                <span>SEE OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>

              {/* Award Badge */}
              <div 
                id="award-badge" 
                className="hidden sm:flex items-center gap-4"
              >
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white/50" />
                </div>
                <div className="text-[10px] tracking-widest text-white/50 leading-tight uppercase font-semibold">
                  Top-Rated<br/>Brand Studio
                </div>
              </div>
            </div>

            {/* Stats Row (0.8s delay) */}
            <div 
              id="stats-row" 
              className="animate-fade-up-delay-4 mt-8 sm:mt-12 lg:mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-10 max-w-4xl"
            >
              <div className="flex flex-wrap gap-8 sm:gap-16 lg:gap-20">
                {[
                  { value: "250+", label: "Brands Transformed" },
                  { value: "95%", label: "Client Retention" },
                  { value: "10+", label: "Years in the Game" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-inter text-white text-3xl sm:text-5xl font-bold tracking-tighter">
                      {stat.value}
                    </span>
                    <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase mt-2 font-inter">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Availability Badge */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] tracking-widest text-white/40 uppercase font-inter">Availability: Q3 2026</span>
              </div>
            </div>

          </div>
        </main>

        {/* Fine-print / spacing container for aesthetics */}
        <footer className="w-full px-6 sm:px-10 lg:px-16 py-4 text-center sm:text-left text-[9px] tracking-widest text-white/20 uppercase font-inter">
          © 2026 VANGUARD. ESTABLISHED IN LONDON & NEW YORK.
        </footer>
      </div>

      {/* Mobile Menu Overlay (below md only) */}
      <div
        id="mobile-menu-overlay"
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Overlay Header row (matches navbar padding) */}
        <div className="w-full flex items-center justify-between px-6 sm:px-10 py-5">
          <div className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">
            VANGUARD
          </div>
          <button
            id="close-menu-btn"
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white hover:scale-110 active:scale-95 transition-all focus:outline-none cursor-pointer"
            aria-label="Close Menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Overlay Center links vertically aligned */}
        <div className="flex-1 flex flex-col justify-center items-center px-6">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center w-full">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl sm:text-5xl text-white uppercase tracking-widest hover:text-white/70 block transition-colors duration-300"
                style={{
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${i * 80 + 100}ms`,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: menuOpen ? 1 : 0
                }}
              >
                {link}
              </a>
            ))}

            {/* Mobile Menu GET IN TOUCH Bordered Button with staggered delay */}
            <a
              href="#inquire"
              onClick={() => setMenuOpen(false)}
              className="mt-8 border border-white/30 hover:border-white/60 px-8 py-4 text-xs tracking-widest uppercase hover:bg-white/10 text-white flex items-center gap-2 transition-all duration-500 ease-out"
              style={{
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: `${navLinks.length * 80 + 100}ms`,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0
              }}
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile menu bottom spacing */}
        <div className="py-6 text-center text-[10px] tracking-widest text-white/30 uppercase font-inter">
          © 2026 VANGUARD. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
}
