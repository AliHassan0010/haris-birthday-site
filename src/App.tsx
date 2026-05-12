import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Plane, Gift, Star, MessageCircle } from 'lucide-react';

interface Memory {
  id: number;
  title: string;
  description: string;
  emoji: string;
  year: string;
}

const memories: Memory[] = [
  {
    id: 1,
    title: "Cricket in the Streets",
    description: "Remember those endless summer evenings playing cricket till the sun went down? You always hit the biggest sixes. Those were the golden days.",
    emoji: "🏏",
    year: "2015"
  },
  {
    id: 2,
    title: "Midnight Talks",
    description: "Staying up till 3AM talking about life, dreams, and our crazy plans for the future. You were always the wise one between us two.",
    emoji: "🌙",
    year: "2018"
  },
  {
    id: 3,
    title: "Family Weddings",
    description: "Dancing like no one was watching at every cousin's wedding. Your moves were legendary. I still laugh thinking about it.",
    emoji: "💃",
    year: "2019"
  },
  {
    id: 4,
    title: "The Farewell",
    description: "That day at the airport 2 years ago. I tried to be strong but my heart broke watching you leave. Proud of you for chasing your dreams in the UK.",
    emoji: "✈️",
    year: "2023"
  },
];

const reasons = [
  { id: 1, title: "Your Strength", desc: "Moving to a new country alone takes courage I admire every single day.", icon: "💪", color: "from-emerald-500 to-teal-500" },
  { id: 2, title: "Your Kindness", desc: "You always put others first, even when you're thousands of miles away.", icon: "🤝", color: "from-amber-500 to-orange-500" },
  { id: 3, title: "Our Bond", desc: "No distance can break what we have. You're not just my brother — you're my best friend.", icon: "❤️", color: "from-rose-500 to-pink-500" },
  { id: 4, title: "Your Humor", desc: "Your silly jokes still make me laugh out loud even through video calls.", icon: "😂", color: "from-violet-500 to-purple-500" },
  { id: 5, title: "Your Ambition", desc: "Watching you build your life in the UK inspires me to be better every day.", icon: "🚀", color: "from-blue-500 to-cyan-500" },
  { id: 6, title: "My Only Brother", desc: "God gave me the best brother in the world. I wouldn't trade you for anything.", icon: "👦", color: "from-lime-500 to-green-600" },
];

export default function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [distance, setDistance] = useState(0);
  const [showConnection, setShowConnection] = useState(false);
  
  // Fake distance animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDistance(prev => {
        if (prev < 6520) return prev + Math.floor(Math.random() * 80) + 20;
        return 6520;
      });
    }, 80);
    
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = (intensity: number = 1) => {
    const count = Math.floor(80 * intensity);
    confetti({
      particleCount: count,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    // Extra burst
    setTimeout(() => {
      confetti({
        particleCount: Math.floor(50 * intensity),
        angle: 60,
        spread: 55,
        origin: { x: 0.3, y: 0.7 }
      });
    }, 200);
    
    setTimeout(() => {
      confetti({
        particleCount: Math.floor(50 * intensity),
        angle: 120,
        spread: 55,
        origin: { x: 0.7, y: 0.7 }
      });
    }, 350);
  };

  const handleSendHug = () => {
    triggerConfetti(1.8);
    
    const heartsContainer = document.createElement('div');
    heartsContainer.style.position = 'fixed';
    heartsContainer.style.top = '0';
    heartsContainer.style.left = '0';
    heartsContainer.style.width = '100%';
    heartsContainer.style.height = '100%';
    heartsContainer.style.pointerEvents = 'none';
    heartsContainer.style.zIndex = '100';
    document.body.appendChild(heartsContainer);
    
    for (let i = 0; i < 18; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.textContent = ['❤️', '💚', '💛', '💙'][Math.floor(Math.random() * 4)];
        heart.style.position = 'absolute';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${80 + Math.random() * 20}vh`;
        heart.style.fontSize = `${2 + Math.random() * 3}rem`;
        heart.style.opacity = '0.9';
        heart.style.transition = `all ${2.5 + Math.random() * 2}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
        heart.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
          heart.style.transform = `translateY(-${120 + Math.random() * 80}vh) rotate(${Math.random() * 80 - 40}deg)`;
          heart.style.opacity = '0';
        }, 50);
        
        setTimeout(() => {
          heart.remove();
        }, 4500);
      }, i * 28);
    }
    
    setTimeout(() => {
      heartsContainer.remove();
      alert("❤️ Hug delivered across the seas! Haris just received the warmest hug from Pakistan! 🇵🇰");
    }, 2200);
  };


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a120f] text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="text-3xl">🇵🇰</span>
              <Plane className="w-6 h-6 rotate-45" />
              <span className="text-3xl">🇬🇧</span>
            </div>
            <div>
              <div className="font-bold text-2xl tracking-tighter">HARIS</div>
              <div className="text-[10px] text-emerald-400 -mt-1">MY ONLY BROTHER</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('hero')} className="hover:text-emerald-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('memories')} className="hover:text-emerald-400 transition-colors">Memories</button>
            <button onClick={() => scrollToSection('letter')} className="hover:text-emerald-400 transition-colors">My Letter</button>
            <button onClick={() => scrollToSection('distance')} className="hover:text-emerald-400 transition-colors">The Distance</button>
            <button onClick={() => scrollToSection('special')} className="hover:text-emerald-400 transition-colors">You're Special</button>
          </div>
          
          <button 
            onClick={() => {
              triggerConfetti(0.6);
            }}
            className="px-6 py-2.5 bg-white text-black rounded-2xl flex items-center gap-2 text-sm font-semibold hover:bg-amber-300 active:scale-95 transition-all"
          >
            <Star className="w-4 h-4" />
            CELEBRATE
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen pt-20 relative flex items-center justify-center bg-[radial-gradient(at_center,#0f2922_0%,#0a120f_70%)]">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
             style={{
               backgroundImage: `repeating-linear-gradient(45deg, #10b981, #10b981 2px, transparent 2px, transparent 30px)`
             }}></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 mb-6 rounded-3xl bg-white/5 border border-white/20 text-emerald-300 text-sm tracking-[3px]">
            2 YEARS IN THE UK • FOREVER IN MY HEART
          </div>
          
          <h1 className="text-[92px] md:text-[120px] leading-none font-bold tracking-tighter mb-2 text-white">
            DEAR<br />HARIS
          </h1>
          
          <div className="text-4xl md:text-5xl font-light text-emerald-200 mb-8 tracking-tight">
            My only brother
          </div>
          
          <p className="max-w-md mx-auto text-xl text-white/70 mb-12">
            From the land of the pure to the land of your dreams.<br />
            This website is my love letter across 6,520 kilometers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('letter')}
              className="group px-10 py-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl text-xl font-semibold flex items-center justify-center gap-3 hover:from-emerald-600 hover:to-teal-700 transition-all active:scale-[0.97] shadow-2xl shadow-emerald-900/50"
            >
              READ MY LETTER TO YOU
              <MessageCircle className="group-active:rotate-12 transition-transform" />
            </button>
            
            <button 
              onClick={handleSendHug}
              className="group px-10 py-6 border border-white/30 hover:border-white/60 rounded-3xl text-xl font-medium flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
            >
              SEND A HUG
              <Heart className="group-hover:scale-125 transition-transform" />
            </button>
          </div>
          
          <div className="mt-20 flex justify-center gap-8 text-xs opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              LIVE FROM PAKISTAN
            </div>
            <div>FOR HARIS • 2025</div>
          </div>
        </div>

        {/* Floating hearts decoration */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="relative w-40 h-40">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i}
                className="absolute text-5xl animate-float"
                style={{
                  left: `${20 + i * 12}px`,
                  top: `${20 + (i % 3) * 18}px`,
                  animationDelay: `-${i * 0.7}s`
                }}
              >
                ❤️
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs tracking-widest opacity-40">
          SCROLL TO BEGIN THE JOURNEY
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>

      {/* MEMORIES SECTION */}
      <section id="memories" className="py-24 bg-[#111b17] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="uppercase text-emerald-400 text-sm tracking-[4px] mb-3">CHAPTERS OF US</div>
              <h2 className="text-6xl font-bold tracking-tighter">Our Memories</h2>
            </div>
            <button 
              onClick={() => triggerConfetti(0.7)}
              className="text-sm flex items-center gap-2 px-5 py-3 border border-white/20 rounded-2xl hover:bg-white/5"
            >
              <Gift className="w-4 h-4" /> SPARK JOY
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {memories.map((memory) => (
              <div 
                key={memory.id}
                onClick={() => setSelectedMemory(memory)}
                className="group bg-[#1a2722] border border-white/10 hover:border-emerald-400/60 p-8 rounded-3xl cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-950/50"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-7xl transition-transform group-hover:scale-110 duration-300">{memory.emoji}</div>
                  <div className="text-right">
                    <div className="font-mono text-xs text-emerald-400/70">{memory.year}</div>
                    <div className="text-2xl font-semibold text-white mt-1 tracking-tight">{memory.title}</div>
                  </div>
                </div>
                
                <p className="text-white/70 text-[15px] leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                  {memory.description}
                </p>
                
                <div className="text-[10px] mt-8 text-emerald-300/60 flex items-center gap-2 font-medium">
                  CLICK TO REMEMBER MORE <span className="text-base leading-none">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LETTER SECTION */}
      <section id="letter" className="py-24 bg-[#0a120f] relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mx-auto w-16 h-16 bg-amber-900/30 rounded-2xl flex items-center justify-center mb-6 border border-amber-400/30">
              ✉️
            </div>
            <h2 className="text-6xl font-bold tracking-tighter mb-4">A Letter From Home</h2>
            <p className="text-emerald-300 max-w-xs mx-auto">To the one person who knows me better than anyone else in the world.</p>
          </div>

          <div 
            onClick={() => setIsLetterOpen(!isLetterOpen)}
            className={`relative mx-auto max-w-2xl transition-all duration-700 cursor-pointer ${isLetterOpen ? 'scale-[1.02]' : ''}`}
          >
            {/* Envelope */}
            {!isLetterOpen ? (
              <div className="relative h-[420px] bg-gradient-to-br from-amber-950 to-amber-900 rounded-3xl shadow-2xl border border-amber-700/80 overflow-hidden">
                {/* Envelope flap */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 
                  border-l-[170px] border-l-transparent 
                  border-r-[170px] border-r-transparent 
                  border-b-[150px] border-b-amber-800 z-20"
                ></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
                  <div className="text-6xl mb-6 opacity-80">🇵🇰</div>
                  <div className="uppercase text-xs tracking-[6px] text-amber-200/80 font-medium">To: Haris</div>
                  <div className="text-amber-100/90 text-4xl font-light mt-3 tracking-wider">LONDON, UK</div>
                  
                  <div className="absolute bottom-12 text-[10px] text-amber-300/40">FROM YOUR BROTHER • PAKISTAN</div>
                </div>
                
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black/40 px-8 py-2 rounded-full flex items-center gap-2 text-amber-200/70">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                  CLICK TO OPEN
                </div>
              </div>
            ) : (
              /* Opened Letter */
              <div className="bg-[#f8f1e3] text-[#2c2218] p-12 md:p-16 rounded-3xl shadow-inner border-8 border-[#d4b78f] relative min-h-[520px] leading-relaxed text-lg">
                <div className="absolute top-8 right-8 text-7xl opacity-10">❤️</div>
                
                <div className="max-w-prose mx-auto">
                  <div className="font-serif text-4xl mb-10 text-center tracking-tight">My Dearest Haris,</div>
                  
                  <p className="mb-6">It's been two whole years since you left for the United Kingdom. Every single day I think about you. I miss the way we used to sit together on the rooftop and talk about everything. I miss your laugh. I miss arguing with you over the last piece of chicken.</p>
                  
                  <p className="mb-6">You are my only brother and that makes you the most important person in my life. Seeing you work hard, make new friends, and build something for yourself in a foreign country fills me with immense pride. You make our family name proud every day.</p>
                  
                  <p className="mb-6">I created this website because I wanted you to feel my love even though we are so far apart. Every memory card, every word, every heart that flies across the screen is from me — your little (but now older) brother back home in Pakistan.</p>
                  
                  <p className="mb-10">No matter how many years pass, no matter how many miles are between us, our brotherhood is unbreakable. Come home soon or I'll come visit you. We have so many more memories to make together.</p>
                  
                  <div className="flex justify-between items-end pt-8 border-t border-[#2c2218]/10">
                    <div>
                      <div className="font-medium">With endless love and respect,</div>
                      <div className="text-2xl tracking-widest mt-1">YOUR BROTHER</div>
                      <div className="text-xs text-[#2c2218]/40 mt-1">PAKISTAN • 2025</div>
                    </div>
                    
                    <button 
                      onClick={(e) => { e.stopPropagation(); triggerConfetti(1.4); }}
                      className="text-xs px-5 py-3 bg-[#2c2218] text-[#f8f1e3] rounded-2xl flex items-center gap-2 hover:bg-black transition-colors"
                    >
                      SEAL WITH LOVE <Heart className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="text-center mt-8 text-xs text-white/40 max-w-xs mx-auto">
            {isLetterOpen ? "Click the letter again to close it" : "The envelope contains 2 years worth of love"}
          </div>
        </div>
      </section>

      {/* DISTANCE SECTION */}
      <section id="distance" className="py-24 bg-[#111b17]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-x-16 items-center">
            <div className="md:col-span-5">
              <div className="sticky top-28">
                <div className="uppercase tracking-widest text-xs text-teal-400 mb-4">6,520 KILOMETERS • 4,050 MILES</div>
                <h2 className="text-6xl font-bold tracking-[-2px] leading-none mb-8">The Distance Between Us</h2>
                
                <div className="text-white/70 text-xl leading-tight">
                  But our hearts have always been next to each other.
                </div>
                
                <div className="mt-16 flex items-center gap-4">
                  <div onClick={() => setShowConnection(!showConnection)} 
                       className="cursor-pointer flex-1 bg-white/5 hover:bg-white/10 transition-colors border border-white/20 rounded-3xl p-6 text-center">
                    <div className="text-4xl mb-4">🇵🇰</div>
                    <div className="font-medium text-emerald-300">LAHORE, PAKISTAN</div>
                    <div className="text-xs text-white/40 mt-1">HOME</div>
                  </div>
                  
                  <div className="text-center">
                    <Plane className="w-9 h-9 mx-auto text-amber-400" />
                    <div className="text-[11px] font-mono text-amber-400/70 mt-1">✈️ NONSTOP ✈️</div>
                  </div>
                  
                  <div className="flex-1 bg-white/5 hover:bg-white/10 transition-colors border border-white/20 rounded-3xl p-6 text-center cursor-pointer" onClick={() => setShowConnection(!showConnection)}>
                    <div className="text-4xl mb-4">🇬🇧</div>
                    <div className="font-medium text-sky-300">LONDON, UK</div>
                    <div className="text-xs text-white/40 mt-1">WHERE YOU SHINE</div>
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    setShowConnection(true);
                    triggerConfetti(0.9);
                  }}
                  className="mt-8 w-full py-4 text-sm tracking-widest border border-dashed border-white/40 hover:border-white rounded-2xl transition-all active:scale-[0.985]"
                >
                  CONNECT OUR HEARTS
                </button>
              </div>
            </div>
            
            <div className="md:col-span-7 mt-16 md:mt-0">
              <div className="relative bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-16 h-full flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="font-mono text-[120px] md:text-[160px] font-bold text-white/10 tracking-[-10px] leading-none select-none">
                    {distance}
                  </div>
                  <div className="-mt-7 text-emerald-400 text-xl font-medium tracking-[6px]">KILOMETERS</div>
                  
                  {showConnection && (
                    <div className="mt-8 flex justify-center">
                      <div className="inline-flex items-center gap-3 bg-emerald-900/60 text-emerald-300 text-sm px-7 py-3 rounded-3xl border border-emerald-400/30">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                        HEARTS CONNECTED IN REAL TIME
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Decorative map lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 600 400">
                  <path d="M120 120 Q 280 80 460 210" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="8 12"/>
                  <path d="M150 270 Q 310 310 490 150" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 9"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOU ARE SPECIAL */}
      <section id="special" className="py-24 bg-[#0a120f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline text-6xl mb-6 block">🌟</div>
            <h2 className="text-6xl font-semibold tracking-tighter">6 Reasons Why You Are Irreplaceable</h2>
            <p className="text-white/60 mt-4 max-w-md mx-auto">Click any card to celebrate that part of you</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div 
                key={reason.id}
                onClick={() => {
                  triggerConfetti(0.6);
                }}
                className="group bg-gradient-to-br from-zinc-900 to-black border border-white/10 hover:border-white/40 p-8 rounded-3xl transition-all hover:-translate-y-2 cursor-pointer"
              >
                <div className={`inline-block text-6xl mb-8 transition-all group-active:scale-125`}>{reason.icon}</div>
                
                <div className="text-3xl font-semibold tracking-tight mb-4 text-white group-hover:text-emerald-200 transition-colors">
                  {reason.title}
                </div>
                
                <p className="text-white/70 text-[15.2px] leading-snug">
                  {reason.desc}
                </p>
                
                <div className="h-1.5 bg-white/10 rounded mt-10 overflow-hidden">
                  <div 
                    className={`h-1.5 bg-gradient-to-r ${reason.color} rounded transition-all duration-700 group-hover:w-full w-0`}
                  ></div>
                </div>
                <div className="uppercase text-[10px] text-white/30 mt-3 tracking-widest">click to celebrate</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <div className="bg-gradient-to-b from-transparent via-emerald-950 to-black py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mx-auto mb-8 flex justify-center gap-5 text-5xl">
            🇵🇰 ❤️ 🇬🇧
          </div>
          
          <h2 className="text-5xl font-bold mb-6 tracking-tight leading-none">I am so proud to call you my brother, Haris.</h2>
          
          <p className="text-xl text-white/70 mb-12">
            Thank you for being the best role model a younger brother could ask for. 
            This website is just one of the million ways I want to tell you that I love you.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => {
                triggerConfetti(2);
                setTimeout(() => alert("❤️❤️❤️\n\nFrom your loving brother in Pakistan.\n\nYou are never alone, Haris."), 600);
              }}
              className="px-16 py-7 text-xl font-semibold rounded-3xl bg-white text-black flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              I LOVE YOU BROTHER 
              <Heart className="text-rose-500" />
            </button>
            
            <div className="text-xs text-white/30 mt-4">Made with infinite love, simple HTML, CSS &amp; JavaScript<br/> (but wrapped in React for Netlify)</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black py-12 text-center text-xs text-white/30 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          For Haris • The greatest brother on planet Earth<br />
          Created from Lahore, Pakistan with nothing but love and Tailwind
        </div>
      </footer>

      {/* MEMORY MODAL */}
      {selectedMemory && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-6" onClick={() => setSelectedMemory(null)}>
          <div 
            className="bg-[#111b17] max-w-lg w-full rounded-3xl p-10 relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-6 right-6 text-white/40 hover:text-white"
              onClick={() => setSelectedMemory(null)}
            >
              ✕
            </button>
            
            <div className="text-8xl mb-8">{selectedMemory.emoji}</div>
            
            <div className="text-emerald-400 font-mono text-sm mb-2">{selectedMemory.year}</div>
            <h3 className="text-4xl font-semibold mb-6 tracking-tight">{selectedMemory.title}</h3>
            
            <p className="text-lg leading-relaxed text-white/80">
              {selectedMemory.description}
            </p>
            
            <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-xs">
              <div className="text-emerald-300">— ONE OF OUR MANY STORIES —</div>
              <button onClick={() => triggerConfetti(1)} className="underline decoration-dotted">Relive the joy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
