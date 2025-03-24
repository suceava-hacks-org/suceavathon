"use client"

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Calendar, MapPin, Clock, Trophy, Users, Code, Star, Loader2, Twitter, Github, Instagram, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";

const navItems = [
  { label: "Despre", href: "#about" },
  { label: "Program", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
  { label: "Premii", href: "#prizes" },
  { label: "Contact", href: "#contact" },
];

const sponsors = [
  { name: "TBD", logo: "/", tier: "platinum" },
  { name: "TBD", logo: "/", tier: "gold" },
  { name: "TBD", logo: "/", tier: "gold" },
  { name: "TBD", logo: "/", tier: "silver" },
  { name: "TBD", logo: "/", tier: "silver" },
  { name: "TBD", logo: "/", tier: "bronze" },
];


const faqItems = [
  {
    question: "Evenimentul are loc fizic?",
    answer: "Da! Hackovina este un eveniment cu prezență fizică, care se desfășoară într-o locație din Suceava."
  },
  {
    question: "Participarea este gratuită?",
    answer: "Da, participarea este complet gratuită! Asigurăm mâncare, băuturi, materiale și multe altele."
  },
  {
    question: "Pot participa dacă nu am o echipă?",
    answer: "Desigur! Poți veni singur și vei putea forma o echipă la fața locului, în cadrul sesiunii de team matching."
  },
  {
    question: "Câte persoane pot fi într-o echipă?",
    answer: "Echipele pot avea 3-4 membri – acesta e formatul recomandat și susținut de noi pentru o experiență echilibrată, colaborativă și fun! Dacă nu ai echipă, te putem ajuta prin team matching."
  },
  {
    question: "Vor exista premii?",
    answer: "Da! Cele mai bune proiecte vor fi premiate de către juriu. Avem și premii speciale și surprize pentru participanți."
  },
  {
    question: "Pot participa dacă sunt începător în programare?",
    answer: "Absolut! Evenimentul este gândit pentru toate nivelurile de experiență. Vom avea mentori și workshopuri pentru începători."
  },
  {
    question: "Unde trebuie să vin și la ce oră?",
    answer: "Veți primi toate detaliile pe email înainte de eveniment, inclusiv pe Slack, Discord, Whatsapp și alte canale de comunicare. Locația și ora exactă vor fi comunicate clar participanților."
  },
  {
    question: "Pot participa dacă nu sunt elev de liceu?",
    answer: "Da, pot participa și elevii de gimnaziu! Totuși, nu acceptăm absolvenți de liceu sau studenți. Dacă vrei totuși să iei parte la eveniment, contactează-ne pentru a te alătura ca voluntar!"
  }
];


const scheduleItems = [
  {
    time: "09:00",
    event: "Înregistrare & Welcome Coffee",
    details: "Sosire participanți, înregistrare și networking"
  },
  {
    time: "10:00",
    event: "Deschidere Oficială",
    details: "Prezentarea regulilor și formarea echipelor"
  },
  {
    time: "10:30",
    event: "Start Hackathon",
    details: "Începe cronometrul! Timp de 12 ore pentru a crea proiectul"
  },
  {
    time: "11:30",
    event: "Workshop pentru Începători",
    details: "Un atelier interactiv pentru cei care vor să învețe bazele"
  },
  {
    time: "13:00",
    event: "Prânz",
    details: "Pauză de masă și networking"
  },
  {
    time: "14:00",
    event: "CTF Challenge",
    details: "Provocare de tip Capture The Flag pentru toți pasionații de securitate"
  },
  {
    time: "18:00",
    event: "Snack Break",
    details: "Gustări și energizante pentru sprint-ul final"
  },
  {
    time: "21:30",
    event: "Deadline pentru Înscriere Proiecte",
    details: "Ultimele modificări și pregătirea prezentării"
  },
  {
    time: "22:00",
    event: "Prezentări Proiecte",
    details: "Fiecare echipă își prezintă proiectul în fața juriului"
  },
  {
    time: "23:00",
    event: "Deliberare & Premiere",
    details: "Anunțarea câștigătorilor și înmânarea premiilor"
  },
  {
    time: "23:30",
    event: "Închidere Oficială",
    details: "Networking și discuții finale"
  }
];


export default function Home(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const eventDate = new Date('April 26, 2025 09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-[#fff5f5] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <Loader2 className="h-12 w-12 text-[#ec3750] animate-spin" />
          <p className="text-xl font-bold text-[#ec3750]">Încărcare...</p>
          <p className="text-gray-600 italic"> Pregătim ceva special pentru tine! </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-[#fff5f5] min-h-screen">
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-b from-[#ec3750] to-[#9c162a] z-50 flex flex-col items-center justify-center p-6"
          onClick={toggleMenu}
        >
          <div className="absolute top-0 left-4">
            <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club Orpheus" className="h-10" />
          </div>

          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="w-full max-w-md">
            <ul className="flex flex-col gap-8 items-center">
              {navItems.map((item, index) => (
                <li key={index} className="w-full">
                  <a
                    href={item.href}
                    className="text-white text-2xl font-bold hover:text-yellow-300 transition-colors block text-center py-3"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-8 w-full">
                <Button
                  className="bg-white hover:bg-gray-100 text-[#ec3750] rounded-full px-8 py-6 text-lg font-bold w-full shadow-lg hover:shadow-xl transition-all"
                  onClick={toggleMenu}
                >
                  Register Now
                </Button>
              </li>
            </ul>
          </nav>
          <div className="absolute bottom-10 text-white/80 text-sm">
            Hackovina • 2025
          </div>
        </div>
      )}

      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-40 border-b border-[#ec375015] shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club Orpheus" className="h-10 sm:h-16" />
            <span className="font-bold text-lg hidden sm:block"></span>
          </div>

          <button
            className="md:hidden z-50 relative p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${activeSection === item.href.substring(1)
                      ? "text-[#ec3750] font-bold"
                      : "text-black hover:text-[#ec3750]"
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Button className="bg-[#ec3750] hover:bg-[#d42d44] text-white text-sm rounded-full px-6 py-2">
                  Alătură-te acum!
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <section id="hero" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className={`flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-[#ec375010] text-[#ec3750] font-bold px-6 py-2 rounded-full mb-8 text-sm md:text-base">
                HACKATON 12 ORE • 26 Aprilie, 2025
              </div>

              <div className="relative mb-12 pt-8">
                <img
                  src="svthon.svg"
                  alt="Hackovina Logo"
                  className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px]"
                />
              </div>

              <h2 className="text-xl sm:text-2xl md:text-4xl text-gray-700 font-medium mb-10 max-w-3xl">
                Un hackathon de 12 ore în care  <span className="underline decoration-[#ec3750] decoration-wavy decoration-2 underline-offset-4">ideile prind viata.</span>
              </h2>

              <div className="w-full max-w-2xl mb-12">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#ec375020]">
                  <h3 className="text-center font-bold text-lg text-gray-800 mb-4">Hackathonul începe în...</h3>
                  <div className="grid grid-cols-4 gap-3 text-center">
                    <div className="bg-[#ec375010] p-4 rounded-lg">
                      <div className="text-4xl font-bold text-[#ec3750]">{timeLeft.days}</div>
                      <div className="text-xs uppercase text-gray-600 font-medium">Zile</div>
                    </div>
                    <div className="bg-[#ec375010] p-4 rounded-lg">
                      <div className="text-4xl font-bold text-[#ec3750]">{timeLeft.hours}</div>
                      <div className="text-xs uppercase text-gray-600 font-medium">Ore</div>
                    </div>
                    <div className="bg-[#ec375010] p-4 rounded-lg">
                      <div className="text-4xl font-bold text-[#ec3750]">{timeLeft.minutes}</div>
                      <div className="text-xs uppercase text-gray-600 font-medium">Minute</div>
                    </div>
                    <div className="bg-[#ec375010] p-4 rounded-lg">
                      <div className="text-4xl font-bold text-[#ec3750]">{timeLeft.seconds}</div>
                      <div className="text-xs uppercase text-gray-600 font-medium">Secunde</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button className="bg-[#ec3750] hover:bg-[#d42d44] text-white rounded-full px-10 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                  Alătură-te acum!
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-10 py-6 text-lg font-bold shadow-md hover:shadow-lg transition-all">
                  Află mai multe
                </Button>
              </div>

              <div className="animate-bounce mt-8">
                <ChevronDown size={32} className="text-[#ec3750]" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-gradient-to-r from-white to-[#fff5f5]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block bg-[#ec3750] text-white px-4 py-1 rounded-md mb-3 text-sm font-medium">DESPRE</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce este Hackovina?</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 mb-6">
                  Hackovina este un eveniment de coding de 12 ore în care participanții se reunesc pentru a transforma ideile în realitate prin cod, creativitate și colaborare. Fie că ești începător sau ai experiență în programare, vei găsi o comunitate primitoare, gata să te susțină să reușești.
                </p>
                <div className="bg-gradient-to-r from-[#ec3750] to-black text-white font-bold px-6 py-3 rounded-lg mb-8 transform rotate-[-1deg] shadow-md inline-block">
                  <span className="text-lg">✨ Creat special pentru începători și first-time hackers! ✨</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <Clock className="h-8 w-8 text-[#ec3750] mb-3" />
                <h3 className="font-bold text-lg">12 ore</h3>
                <p className="text-gray-600">de programare</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <MapPin className="h-8 w-8 text-[#ec3750] mb-3" />
                <h3 className="font-bold text-lg">Spațiu modern</h3>
                <p className="text-gray-600">vibe-uri creative</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <Calendar className="h-8 w-8 text-[#ec3750] mb-3" />
                <h3 className="font-bold text-lg">26 Aprilie</h3>
                <p className="text-gray-600">2025</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <Trophy className="h-8 w-8 text-[#ec3750] mb-3" />
                <h3 className="font-bold text-lg">Premii</h3>
                <p className="text-gray-600"> & swag</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#ec3750] flex flex-col items-center text-center hover:shadow-lg transition-all">
                <Users className="h-12 w-12 text-[#ec3750] mb-4" />
                <h3 className="text-xl font-bold mb-4 text-black">Newbie-friendly</h3>
                <p className="text-gray-700">
                  N-ai mai scris cod niciodată? Nicio problemă! Vom avea mentori la fața locului care te vor ajuta să începi, plus workshopuri special gândite pentru începători.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-black flex flex-col items-center text-center hover:shadow-lg transition-all">
                <Code className="h-12 w-12 text-black mb-4" />
                <h3 className="text-xl font-bold mb-4 text-black">Învață făcând</h3>
                <p className="text-gray-700">
                  Construiește-ți primul proiect hands-on, într-un mediu fun & friendly. Zero stres, 100% explorare!
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#ec3750] flex flex-col items-center text-center hover:shadow-lg transition-all">
                <Star className="h-12 w-12 text-[#ec3750] mb-4" />
                <h3 className="text-xl font-bold mb-4 text-black">Fă ceva extraordinar</h3>
                <p className="text-gray-700">
                  Formează o echipă, alege un proiect și ai 12 ore la dispoziție să-l construiești. Vei fi uimit de cât de mult poți realiza într-o singură zi!
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100 flex items-center text-[#ec3750] font-medium rotate-[-1deg] text-lg">
                💻 Programați împreună
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100 flex items-center text-[#ec3750] font-medium rotate-[1deg] text-lg">
                🍕 Pizza nelimitat
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100 flex items-center text-[#ec3750] font-medium rotate-[-1deg] text-lg">
                👕 Ia-ți tricoul Hackovina
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100 flex items-center text-[#ec3750] font-medium rotate-[1deg] text-lg">
                🎁 Premii uimitoare
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#ec3750] text-white px-4 py-1 rounded-md mb-3 text-sm font-medium">PROGRAM</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Program & Locație</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Iată programul complet al evenimentului și detalii despre locație. Pregătește-te pentru o zi plină de coding, învățare și distracție!
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="text-[#ec3750]" />
                  <span>Programul Zilei</span>
                </h3>

                <div className="relative border-l-2 border-[#ec3750] pl-6 space-y-6">
                  {scheduleItems.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[34px] top-1/2 -translate-y-1/2 bg-white">
                        <div className="w-5 h-5 rounded-full bg-[#ec3750] border-4 border-white"></div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-[#ec3750]">{item.time}</span>
                          <span className="text-sm text-gray-500">26 Aprilie 2025</span>
                        </div>
                        <h4 className="font-bold text-lg mb-1">{item.event}</h4>
                        <p className="text-gray-600">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="text-[#ec3750]" />
                  <span>Locația</span>
                </h3>

                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-6">
                  <div className="h-64 bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-600">Map goes here</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-xl mb-2">Armeneasca Tower</h4>
                    <p className="text-gray-600 mb-4">
                      Etajul 6<br />
                      Str. Armeneasca nr 1, Suceava
                    </p>
                    <a
                      href="https://maps.app.goo.gl/4VV1KWRCz1afSZKz7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#ec3750] font-medium hover:underline"
                    >
                      Deschide în Google Maps
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bg-[#ec375010] p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-2">Transport</h4>
                  <p className="text-gray-700 mb-4">
                    Armeneasca Tower este situată în centrul orașului Suceava, la câteva minute de mers pe jos de principalele mijloace de transport în comun.
                    Liniile: 1, 2, 3, 4, 5, 6, 9, 15, 17, 21, 22, 23, 26, 28, 29, 30
                  </p>
                  <h4 className="font-bold text-lg mb-2">Îndrumare</h4>
                  <p className="text-gray-700">
                    Putem îndruma participanții de la gară sau alte puncte de sosire către locația evenimentului, dacă este nevoie.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 bg-gradient-to-r from-white to-[#fff5f5]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#ec3750] text-white px-4 py-1 rounded-md mb-3 text-sm font-medium">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Întrebări Frecvente</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Ai întrebări despre Hackovina? Iată răspunsurile la cele mai frecvente întrebări.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-lg">
                        {item.question}
                        <div className="w-6 h-6 rounded-full bg-[#ec375015] flex items-center justify-center group-open:rotate-180 transition-transform">
                          <ChevronDown size={16} className="text-[#ec3750]" />
                        </div>
                      </summary>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-700 mb-4">Ai alte întrebări? Nu ezita să ne contactezi!</p>
                <Button
                  className="bg-[#ec3750] hover:bg-[#d42d44] text-white rounded-full px-8 py-3"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contactează-ne
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="prizes" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#ec3750] text-white px-4 py-1 rounded-md mb-3 text-sm font-medium">PREMII</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Premii Atractive</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Câștigătorii Hackovina vor fi recompensați cu premii valoroase și oportunități incredibile!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-400 text-white font-bold px-4 py-1 rounded-bl-lg">
                  Locul 1
                </div>
                <Trophy className="h-16 w-16 text-yellow-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-center">Marele Premiu</h3>
                <p className="text-lg font-bold text-center mb-6">TBD</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="text-center italic text-sm text-gray-500">Detaliile premiului vor fi anunțate în curând</li>
                </ul>

              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gray-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gray-400 text-white font-bold px-4 py-1 rounded-bl-lg">
                  Locul 2
                </div>
                <Trophy className="h-16 w-16 text-gray-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-center">Premiul 2</h3>
                <p className="text-lg font-bold text-center mb-6">TBD</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="text-center italic text-sm text-gray-500">Detaliile premiului vor fi anunțate în curând</li>
                </ul>

              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#cd7f32] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#cd7f32] text-white font-bold px-4 py-1 rounded-bl-lg">
                  Locul 3
                </div>
                <Trophy className="h-16 w-16 text-[#cd7f32] mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-center">Premiul 3</h3>
                <p className="text-lg font-bold text-center mb-6">TBD</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="text-center italic text-sm text-gray-500">Detaliile premiului vor fi anunțate în curând</li>
                </ul>

              </div>
            </div>

            <div className="bg-[#ec375010] p-8 rounded-xl max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-center">Premii Speciale</h3>
              <p className="text-center mb-6">Pe lângă premiile principale, oferim și premii speciale (TBD) pentru:</p>

            </div>
          </div>
        </section>

        <section id="sponsors" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#ec3750] text-white px-4 py-1 rounded-md mb-3 text-sm font-medium">SPONSORI</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sponsori & Parteneri</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Hackovina nu ar fi posibil fără sprijinul partenerilor și sponsorilor noștri. Mulțumim pentru susținere!
              </p>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-center font-bold text-xl mb-8 bg-gradient-to-r from-[#e5e5e5] to-[#b3b3b3] inline-block text-transparent bg-clip-text">
                  SPONSORI PLATINUM
                </h3>
                <div className="flex justify-center gap-10">
                  {sponsors
                    .filter(sponsor => sponsor.tier === "platinum")
                    .map((sponsor, index) => (
                      <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center w-60 h-40 flex items-center justify-center border border-gray-100 hover:shadow-xl transition-all">
                        <img src={sponsor.logo} alt={sponsor.name} className="max-h-20" />
                      </div>
                    ))
                  }
                </div>
              </div>
              <div>
                <h3 className="text-center font-bold text-xl mb-8 bg-gradient-to-r from-[#f59e0b] to-[#d97706] inline-block text-transparent bg-clip-text">
                  SPONSORI GOLD
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {sponsors
                    .filter(sponsor => sponsor.tier === "gold")
                    .map((sponsor, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center w-48 h-32 flex items-center justify-center border border-gray-100 hover:shadow-lg transition-all">
                        <img src={sponsor.logo} alt={sponsor.name} className="max-h-16" />
                      </div>
                    ))
                  }
                </div>
              </div>

              <div>
                <h3 className="text-center font-bold text-xl mb-8 bg-gradient-to-r from-[#9ca3af] to-[#6b7280] inline-block text-transparent bg-clip-text">
                  SPONSORI SILVER & BRONZE
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {sponsors
                    .filter(sponsor => sponsor.tier === "silver" || sponsor.tier === "bronze")
                    .map((sponsor, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center w-36 h-24 flex items-center justify-center border border-gray-100 hover:shadow-md transition-all">
                        <img src={sponsor.logo} alt={sponsor.name} className="max-h-12" />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="font-medium text-[#ec3750] mb-2">Interesat să devii sponsor?</p>
              <a href="#contact" className="text-black underline hover:text-[#ec3750] text-lg">
                Contactează-ne pentru detalii
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gradient-to-b from-[#fff5f5] to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#ec3750] text-white px-4 py-1 rounded-md mb-3 text-sm font-medium">CONTACT</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contactează-ne</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Ai întrebări sau vrei să afli mai multe despre Hackovina? Trimite-ne un mesaj și te vom contacta cât mai curând posibil.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-3xl font-bold text-gray-800 mb-4"> Informații de contact</h3>
                <div className="space-y-4 mb-6">
                  <p className="flex items-center gap-3 text-gray-600">
                    <MapPin className="text-red-500" />
                    <span>Suceava, Romania</span>
                  </p>
                  <p className="flex items-center gap-3 text-gray-600">
                    <Mail className="text-red-500" />
                    <span>hello@suceavahacks.org</span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>


              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4"> Trimite-ne un mesaj</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1"> Nume</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec3750] focus:border-transparent outline-none"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1"> Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec3750] focus:border-transparent outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1"> Mesaj</label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ec3750] focus:border-transparent outline-none h-32"
                      placeholder="Cum te putem ajuta?"
                    ></textarea>
                  </div>
                  <Button className="bg-[#ec3750] hover:bg-[#d42d44] text-white w-full py-2 rounded-lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-[#ec3750] to-[#9c162a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="https://assets.hackclub.com/flag-orpheus-top.svg"
                  alt="Hack Club Orpheus"
                  className="h-10 mr-3 brightness-0 invert"
                />
                <h3 className="text-2xl font-bold">Hackovina</h3>
              </div>
              <p className="text-white/80 mb-6 text-lg">
                Hackovina este un eveniment de coding de 12 ore în care participanții se reunesc pentru a transforma ideile în realitate prin cod, creativitate și colabor
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6"> Link-uri rapide</h4>
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-white/90 hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#" className="text-white/90 hover:text-white transition-colors">
                    Inregistrare
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6"> Newsletter</h4>
              <p className="text-white/80 mb-4">
                Abonează-te la newsletter-ul nostru pentru a fi la curent cu cele mai noi informații despre Suceava Hacks
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Adresa ta de email"
                  className="px-4 py-2 rounded-l-lg w-full outline-none text-gray-800 border-t border-b border-l border-gray-300 bg-white"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/70">
            <p>© {new Date().getFullYear()} Hackovina. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}