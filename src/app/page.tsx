"use client";

import { useState, useRef, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  const handleScroll = () => {
    const mainContent = document.querySelector('.container');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setFormMessage('');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xrbqkedb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();
      console.log('Formspree response:', data);

      if (response.ok && data.ok) {
        setFormStatus('success');
        setFormMessage('Mesajınız başarıyla gönderildi!');
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error(data.error || 'Form gönderimi başarısız oldu');
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error);
      setFormStatus('error');
      if (error instanceof Error) {
        setFormMessage(`Bir hata oluştu: ${error.message}. Lütfen daha sonra tekrar deneyin veya e-posta ile iletişime geçin: ibrahimcan.erdogann@gmail.com`);
      } else {
        setFormMessage('Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya e-posta ile iletişime geçin: ibrahimcan.erdogann@gmail.com');
      }
    }
  };

  return (
    <main className={`min-h-screen relative ${isDarkTheme ? 'bg-gray-950' : 'bg-white'} transition-colors duration-500`}>
      {/* Theme Switch Button */}
      <button
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full backdrop-blur-lg ${isDarkTheme ? 'bg-gray-800/80 text-yellow-300' : 'bg-white/80 text-gray-800'} hover:opacity-80 transition-all duration-300 transform hover:scale-110 shadow-lg`}
      >
        {isDarkTheme ? '☀️' : '🌙'}
      </button>

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: isDarkTheme ? "#ffffff" : "#000000",
            },
            links: {
              color: isDarkTheme ? "#ffffff" : "#000000",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            {/* Title */}
            <div className="text-center relative z-20">
              <h1 className={`text-6xl md:text-7xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} leading-tight`}>
                İbrahim Can Erdoğan
              </h1>
              <p className={`text-2xl md:text-3xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} font-light`}>
                Senior Android Engineer
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className={`p-6 rounded-2xl ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDarkTheme ? 'border-gray-700/30' : 'border-gray-200/30'} transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <div className={`text-4xl font-bold mb-2 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'}`}>4+</div>
                <div className={`text-sm font-medium ${isDarkTheme ? 'text-blue-200' : 'text-blue-700'}`}>Yıl Deneyim</div>
              </div>
              <div className={`p-6 rounded-2xl ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDarkTheme ? 'border-gray-700/30' : 'border-gray-200/30'} transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <div className={`text-4xl font-bold mb-2 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`}>10+</div>
                <div className={`text-sm font-medium ${isDarkTheme ? 'text-purple-200' : 'text-purple-700'}`}>Proje</div>
              </div>
              <div className={`p-6 rounded-2xl ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDarkTheme ? 'border-gray-700/30' : 'border-gray-200/30'} transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <div className={`text-4xl font-bold mb-2 ${isDarkTheme ? 'text-pink-400' : 'text-pink-600'}`}>3+</div>
                <div className={`text-sm font-medium ${isDarkTheme ? 'text-pink-200' : 'text-pink-700'}`}>Sertifika</div>
              </div>
              <div className={`p-6 rounded-2xl ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDarkTheme ? 'border-gray-700/30' : 'border-gray-200/30'} transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <div className={`text-4xl font-bold mb-2 ${isDarkTheme ? 'text-green-400' : 'text-green-600'}`}>2+</div>
                <div className={`text-sm font-medium ${isDarkTheme ? 'text-green-200' : 'text-green-700'}`}>Kurs</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="https://drive.google.com/file/d/1mPbYymPZ74-0K16h6PU0iUi0FSh3wg8N/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative px-8 py-4 rounded-xl font-medium overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  isDarkTheme 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white border border-blue-500/20' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Özgeçmişime Göz At
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="/source/CV - Ibrahim Can Erdogan.pdf"
                download
                className={`group relative px-8 py-4 rounded-xl font-medium overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  isDarkTheme 
                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border border-gray-700/50' 
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 border border-gray-200/50'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Özgeçmişimi İndir
                </span>
                <div className={`absolute inset-0 ${
                  isDarkTheme 
                    ? 'bg-gradient-to-r from-gray-700/20 to-gray-800/20' 
                    : 'bg-gradient-to-r from-gray-200/20 to-gray-300/20'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-4 relative z-20">
              <a href="https://github.com/ibrahimcanerdogan" target="_blank" rel="noopener noreferrer" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors transform hover:scale-110`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/ibrahimcanerdogan/" target="_blank" rel="noopener noreferrer" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors transform hover:scale-110`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/icanerdogan" target="_blank" rel="noopener noreferrer" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors transform hover:scale-110`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.youtube.com/@ibrahimcanerdogan" target="_blank" rel="noopener noreferrer" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors transform hover:scale-110`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="https://medium.com/@ibrahimcanerdogan" target="_blank" rel="noopener noreferrer" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors transform hover:scale-110`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
              </a>
              <a href="https://www.udemy.com/user/ibrahim-can-erdogan/" target="_blank" rel="noopener noreferrer" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors transform hover:scale-110`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.002 3.055-2.974 3.055-1.971 0-2.974-1.02-2.974-3.055v-7.85H5.81z"/></svg>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce z-0">
              <button 
                onClick={handleScroll}
                className={`flex flex-col items-center ${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              >
                <span className="text-sm mb-2">Aşağı Kaydır</span>
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - About & Certificates */}
          <div className="space-y-8">
            {/* About Section */}
            <div className={`${isDarkTheme ? 'bg-gray-800/95' : 'bg-white/95'} rounded-2xl p-8 shadow-xl border ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'} backdrop-blur-sm`}>
              <h2 className={`text-2xl font-semibold mb-6 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'}`}>Hakkımda 📝</h2>
              <div className={`space-y-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Balıkesir Üniversitesi Endüstri Mühendisliği mezunu, kendini Android Yazılım Geliştirme alanında uzmanlaşmış bir profesyonel olarak tanıtan biriyim. Kotlin ve Java dillerinde yetkin olup, gelişmiş Android uygulamaları geliştirme ve proje mimarilerini iyileştirme konusunda kanıtlanmış bir geçmişe sahibim.
                </p>
                <p>
                  Stajlarım ve profesyonel rollerim, Türkiye'nin önde gelen teknoloji firmalarında gerçekleşti. Şu anda, Ebebek'te Android geliştirme sürecine katkıda bulunmaktayım ve sürekli olarak becerilerimi ve bilgimi geliştirmeye çalışıyorum. Teknolojiye olan tutkumla, aynı zamanda iOS teknolojisini de keşfetmekte ve her projede en iyi sonuçları sunmaya kararlıyım.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className={`${isDarkTheme ? 'text-blue-400' : 'text-blue-600'} font-semibold`}>İletişim:</span>
                  <a 
                    href="mailto:ibrahimcan.erdogann@gmail.com" 
                    className={`ml-2 ${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} transition-colors`}
                  >
                    ibrahimcan.erdogann@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Certificates Section */}
            <div className={`${isDarkTheme ? 'bg-gray-800/95' : 'bg-white/95'} rounded-2xl p-8 shadow-xl border ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
              <h2 className={`text-2xl font-semibold mb-6 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'} flex items-center justify-center`}>
                <span className="mr-2">🏆</span>
                <span>Sertifikalar</span>
              </h2>
              <div className="space-y-8">
                {/* Neo Skola Certificate */}
                <div className="relative pl-8 border-l-2 border-purple-500 transform hover:scale-105 transition-transform">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="mb-2">
                    <div className="mb-2">
                      <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                        <span className="mr-2">🎯</span>
                        Agility: İş Hayatında Çeviklik
                      </h3>
                    </div>
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">🏢</span>
                      Neo Skola
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Yayınlama: Mart 2025
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">🔑</span>
                      Yeterlilik Kimliği: 67ce94df183680903a4d2d761741631567829
                    </p>
                  </div>
                </div>

                {/* Udemy Certificate */}
                <div className="relative pl-8 border-l-2 border-purple-500 transform hover:scale-105 transition-transform">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="mb-2">
                    <div className="mb-2">
                      <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                        <span className="mr-2">📱</span>
                        Jetpack Compose ile Android Uygulama Geliştirme Kursu | 2024
                      </h3>
                    </div>
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">🏢</span>
                      Udemy
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Yayınlama: Mart 2024
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">🔑</span>
                      Yeterlilik Kimliği: UC-cfb6d7d6-efd1-4a65-80d8-de0add5f6308
                    </p>
                  </div>
                </div>

                {/* Meta Certificate */}
                <div className="relative pl-8 border-l-2 border-purple-500 transform hover:scale-105 transition-transform">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="mb-2">
                    <div className="mb-2">
                      <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                        <span className="mr-2">🤖</span>
                        Meta Android Developer
                      </h3>
                    </div>
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">🏢</span>
                      Meta
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Yayınlama: Şubat 2024
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">🔑</span>
                      Yeterlilik Kimliği: CFX39BKNZSTW
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Udemy Courses Section */}
            <div className={`${isDarkTheme ? 'bg-gray-800/95' : 'bg-white/95'} rounded-2xl p-8 shadow-xl border ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
              <h2 className={`text-2xl font-semibold mb-6 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'} flex items-center justify-center`}>
                <span className="mr-2">📚</span>
                <span>Udemy Kurslarım</span>
              </h2>
              <div className="space-y-8">
                {/* Course 1 */}
                <div className="relative pl-8 border-l-2 border-purple-500 transform hover:scale-105 transition-transform">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="mb-2">
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                      <span className="mr-2">🎨</span>
                      <a 
                        href="https://www.udemy.com/course/jetpack-compose-uygulama-gelistirme-rehberi/?referralCode=FDD0C1F4F2BB4C54B325"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:text-blue-400 transition-colors ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                      >
                        Jetpack Compose: İleri Seviye Uygulama Geliştirme Rehberi
                      </a>
                    </h3>
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Mart 2024 - Devam Ediyor
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 rounded-lg">
                    <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-4 text-sm`}>
                      Jetpack Compose ile geliştirilmiş örnek uygulamalar koleksiyonu. Modern Android geliştirme tekniklerini ve best practice'leri içeren projeler.
                    </p>
                    <div className="space-y-2">
                      <h4 className={`text-lg font-semibold ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                        <span className="mr-2">📋</span>
                        Kursun İçeriği:
                      </h4>
                      <ul className={`list-none ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
                        <li className="text-sm flex items-start">
                          <span className="mr-2">✨</span>
                          Jetpack Compose Temelleri: Gelişmiş UI tasarımı ve layout yönetimi
                        </li>
                        <li className="text-sm flex items-start">
                          <span className="mr-2">🎨</span>
                          Gelişmiş UI Tasarımı: Animasyonlar, dokunmatik etkileşimler ve modern kullanıcı deneyimi
                        </li>
                        <li className="text-sm flex items-start">
                          <span className="mr-2">💾</span>
                          Veri Yönetimi ve State Yönetimi: Veri akışları, ViewModel'ler ve state yönetimi teknikleri
                        </li>
                        <li className="text-sm flex items-start">
                          <span className="mr-2">⚡</span>
                          Uygulama Geliştirme Stratejileri: Performans optimizasyonu, kod kalitesi ve best practices
                        </li>
                        <li className="text-sm flex items-start">
                          <span className="mr-2">🚀</span>
                          Gerçek Dünya Projeleri: Pratik uygulamalar ve senaryolar üzerinde çalışmalar
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className={`text-lg font-semibold ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                        <span className="mr-2">🎯</span>
                        Yetenekler:
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className={`px-3 py-1 ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'} rounded-full text-sm flex items-center`}>
                          <span className="mr-1">🎨</span>
                          Jetpack Compose
                        </span>
                        <span className={`px-3 py-1 ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'} rounded-full text-sm flex items-center`}>
                          <span className="mr-1">📱</span>
                          Android Development
                        </span>
                        <span className={`px-3 py-1 ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'} rounded-full text-sm flex items-center`}>
                          <span className="mr-1">⚡</span>
                          Kotlin
                        </span>
                        <span className={`px-3 py-1 ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'} rounded-full text-sm flex items-center`}>
                          <span className="mr-1">🚀</span>
                          Advanced Android
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course 2 */}
                <div className="relative pl-8 border-l-2 border-purple-500 transform hover:scale-105 transition-transform">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="mb-2">
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                      <span className="mr-2">🤖</span>
                      <a 
                        href="https://www.udemy.com/course/mlkit-android-programlama/?referralCode=B671AEDDFD9DE7B8656A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:text-blue-400 transition-colors ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                      >
                        Android App Development with Google Machine Learning
                      </a>
                    </h3>
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Eylül 2021 - Devam Ediyor
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg">
                    <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-4 text-sm`}>
                      With the rapid development of mobile applications today, artificial intelligence and machine learning technologies have gained great importance. These technologies play an important role in providing users with a richer and smarter experience. This is where the Google ML Kit library comes into play.
                    </p>
                    <div className="mt-4">
                      <h4 className={`text-lg font-semibold ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                        <span className="mr-2">🎯</span>
                        Yetenekler:
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className={`px-3 py-1 ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'} rounded-full text-sm flex items-center`}>
                          <span className="mr-1">📱</span>
                          Android Development
                        </span>
                        <span className={`px-3 py-1 ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'} rounded-full text-sm flex items-center`}>
                          <span className="mr-1">🧠</span>
                          Machine Learning
                        </span>
                        <span className={`px-3 py-1 ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'} rounded-full text-sm flex items-center`}>
                          <span className="mr-1">🏗️</span>
                          Android Clean Architecture
                        </span>
                        <span className={`px-3 py-1 ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'} rounded-full text-sm flex items-center`}>
                          <span className="mr-1">🎨</span>
                          Jetpack Compose
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className={`${isDarkTheme ? 'bg-gray-800/95' : 'bg-white/95'} rounded-2xl p-8 shadow-xl border ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
            <h2 className={`text-2xl font-semibold mb-6 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'} flex items-center justify-center`}>
              <span className="mr-2">💼</span>
              <span>Deneyim</span>
            </h2>
            <div className="space-y-8">
              {/* Current Experience */}
              <div className="relative pl-8 border-l-2 border-blue-500 transform hover:scale-105 transition-transform">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                      <span className="mr-2">🎯</span>
                      Android Software Specialist
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkTheme ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                      Devam Ediyor
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">🏢</span>
                      ebebek
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Nisan 2023 - Devam Ediyor
                    </p>
                  </div>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                    <span className="mr-2">📍</span>
                    İstanbul, Türkiye · Uzaktan
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg">
                  <h4 className={`text-sm font-medium mb-2 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'} flex items-center`}>
                    <span className="mr-2">🎯</span>
                    Sorumluluklar ve Başarılar
                  </h4>
                  <ul className={`space-y-1.5 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">✨</span>
                      <span className="text-xs">ebebek mobil uygulamasında Android Software Specialist olarak görev yapıyorum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">🔒</span>
                      <span className="text-xs">SOCRadar güvenlik tarama raporları sonucunda bulunan güvenlik açıklarının giderilmesi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">💳</span>
                      <span className="text-xs">Craftgate ve One-Stop Shop ödeme teknolojisi entegrasyonu</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">👛</span>
                      <span className="text-xs">ebebek cüzdan özelliğinin uygulamaya entegrasyonu</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Previous Experience */}
              <div className="relative pl-8 border-l-2 border-blue-500 transform hover:scale-105 transition-transform">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                      <span className="mr-2">💻</span>
                      Android Developer
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                      4 ay
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">🏢</span>
                      Logo Yazılım
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Ocak 2023 - Nisan 2023
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 rounded-lg">
                  <h4 className={`text-sm font-medium mb-2 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                    <span className="mr-2">🎯</span>
                    Sorumluluklar ve Başarılar
                  </h4>
                  <ul className={`space-y-1.5 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">🔄</span>
                      <span className="text-xs">Java projesini Kotlin'e dönüştürme</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">⚡</span>
                      <span className="text-xs">Coroutines ve MVVM mimarisi implementasyonu</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Jr. Android Developer */}
              <div className="relative pl-8 border-l-2 border-blue-500 transform hover:scale-105 transition-transform">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                      <span className="mr-2">👨‍💻</span>
                      Jr. Android Developer
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkTheme ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'}`}>
                      10 ay
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">🏢</span>
                      Logo Yazılım
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Nisan 2022 - Ocak 2023
                    </p>
                  </div>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                    <span className="mr-2">📍</span>
                    İzmir, Türkiye · Uzaktan
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-4 rounded-lg">
                  <h4 className={`text-sm font-medium mb-2 ${isDarkTheme ? 'text-green-400' : 'text-green-600'} flex items-center`}>
                    <span className="mr-2">🎯</span>
                    Sorumluluklar ve Başarılar
                  </h4>
                  <ul className={`space-y-1.5 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">📱</span>
                      <span className="text-xs">Depo Yönetim Sistemi ve LOGO Mobile Sales projelerinde görev aldım</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">🧪</span>
                      <span className="text-xs">MockK ile birim testleri geliştirme</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">🏗️</span>
                      <span className="text-xs">Clean Code Prensipleri ve MVVM Mimarisi ile kodlama</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">🔄</span>
                      <span className="text-xs">Bitbucket, Jira ve Sonar ile mobil uygulama takibi</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Android Developer Intern */}
              <div className="relative pl-8 border-l-2 border-blue-500 transform hover:scale-105 transition-transform">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                      <span className="mr-2">🎓</span>
                      Android Developer Intern
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkTheme ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700'}`}>
                      3 ay
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">🏢</span>
                      Logo Yazılım
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Şubat 2022 - Nisan 2022
                    </p>
                  </div>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                    <span className="mr-2">📍</span>
                    İzmir, Türkiye
                  </p>
                </div>
                <div className="bg-gradient-to-r from-yellow-500/10 to-blue-500/10 p-4 rounded-lg">
                  <h4 className={`text-sm font-medium mb-2 ${isDarkTheme ? 'text-yellow-400' : 'text-yellow-600'} flex items-center`}>
                    <span className="mr-2">🎯</span>
                    Sorumluluklar ve Başarılar
                  </h4>
                  <ul className={`space-y-1.5 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">📱</span>
                      <span className="text-xs">LOGO Warehouse Management System (WMS) projesinde MVVM Mimarisi ile Kotlin geliştirme</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">🛠️</span>
                      <span className="text-xs">Data & View Binding, Navigation, Room, Coroutines, Dagger-Hilt kullanımı</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">🧪</span>
                      <span className="text-xs">MockK, Mockito, Junit, Truth ve Espresso ile birim testleri</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* IT Intern */}
              <div className="relative pl-8 border-l-2 border-blue-500 transform hover:scale-105 transition-transform">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                      <span className="mr-2">💻</span>
                      IT Intern
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkTheme ? 'bg-pink-500/20 text-pink-300' : 'bg-pink-100 text-pink-700'}`}>
                      4 ay
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">🏢</span>
                      ebebek
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Kasım 2021 - Şubat 2022
                    </p>
                  </div>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                    <span className="mr-2">📍</span>
                    İstanbul, Türkiye
                  </p>
                </div>
                <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 p-4 rounded-lg">
                  <h4 className={`text-sm font-medium mb-2 ${isDarkTheme ? 'text-pink-400' : 'text-pink-600'} flex items-center`}>
                    <span className="mr-2">🎯</span>
                    Sorumluluklar ve Başarılar
                  </h4>
                  <ul className={`space-y-1.5 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">💼</span>
                      <span className="text-xs">ebebek merkez ofisinde IT yöneticisi ile çalışarak staj yaptım</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">🎓</span>
                      <span className="text-xs">e-kamp sürecini başarıyla tamamladım</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Yapı Kredi Intern */}
              <div className="relative pl-8 border-l-2 border-blue-500 transform hover:scale-105 transition-transform">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                      <span className="mr-2">🏦</span>
                      Intern
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkTheme ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-700'}`}>
                      2 ay
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">🏢</span>
                      Yapı Kredi
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Ağustos 2021 - Eylül 2021
                    </p>
                  </div>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                    <span className="mr-2">📍</span>
                    Akhisar, Manisa, Türkiye
                  </p>
                </div>
                <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 p-4 rounded-lg">
                  <h4 className={`text-sm font-medium mb-2 ${isDarkTheme ? 'text-red-400' : 'text-red-600'} flex items-center`}>
                    <span className="mr-2">🎯</span>
                    Sorumluluklar ve Başarılar
                  </h4>
                  <ul className={`space-y-1.5 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">📚</span>
                      <span className="text-xs">Kişisel ve profesyonel gelişim için online eğitim programına katıldım</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">💡</span>
                      <span className="text-xs">Online simülasyon ile bankacılık ürün ve hizmetlerini tanıma fırsatı</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">🏆</span>
                      <span className="text-xs">Ekibimle hazırladığımız "Yapı Kredi HAL" uygulama sunumu ile birinci olduk</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* QNB Finansbank Intern */}
              <div className="relative pl-8 border-l-2 border-blue-500 transform hover:scale-105 transition-transform">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                      <span className="mr-2">🏦</span>
                      Intern
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${isDarkTheme ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700'}`}>
                      1 ay
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <p className={`${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                      <span className="mr-2">🏢</span>
                      QNB Finansbank
                    </p>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                      <span className="mr-2">⏳</span>
                      Aralık 2021
                    </p>
                  </div>
                  <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                    <span className="mr-2">📍</span>
                    Balıkesir, Türkiye
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 p-4 rounded-lg">
                  <h4 className={`text-sm font-medium mb-2 ${isDarkTheme ? 'text-indigo-400' : 'text-indigo-600'} flex items-center`}>
                    <span className="mr-2">🎯</span>
                    Sorumluluklar ve Başarılar
                  </h4>
                  <ul className={`space-y-1.5 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">📚</span>
                      <span className="text-xs">Online Finance 101 staj programı ile bankacılık sektörünün iş birimlerini yakından tanıma fırsatı</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">💡</span>
                      <span className="text-xs">Temel bankacılık eğitimi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">🎯</span>
                      <span className="text-xs">Kariyer tasarım atölyesi ile kariyer yolculuğunu planlama</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1.5 mt-0.5 text-xs">🏆</span>
                      <span className="text-xs">Başarı sertifikası ile programı tamamlama</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-8">
        <div className={`${isDarkTheme ? 'bg-gray-800/95' : 'bg-white/95'} rounded-2xl p-8 shadow-xl border ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'} backdrop-blur-sm`}>
          <h2 className={`text-2xl font-semibold mb-6 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'} flex items-center justify-center`}>
            <span className="mr-2">🚀</span>
            <span>Projelerim</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - Awesome Jetpack Compose App Samples */}
            <div className="relative pl-8 border-l-2 border-indigo-500 transform hover:scale-105 transition-transform">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
              <div className="mb-4">
                <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                  <span className="mr-2">🎨</span>
                  <a 
                    href="https://github.com/ibrahimcanerdogan/Awesome-Jetpack-Compose-App-Samples"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-indigo-400 transition-colors ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                  >
                    Awesome Jetpack Compose App Samples
                  </a>
                </h3>
                <p className={`${isDarkTheme ? 'text-indigo-400' : 'text-indigo-600'} mt-2 flex items-center`}>
                  <span className="mr-2">⏳</span>
                  2024 - Devam Ediyor
                </p>
              </div>
              <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 p-4 rounded-lg">
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-4 text-sm`}>
                  Jetpack Compose ile geliştirilmiş örnek uygulamalar koleksiyonu. Modern UI tasarımları ve best practice'ler içerir.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700'}`}>
                    Kotlin
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                    Jetpack Compose
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                    Material3
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'}`}>
                    MVVM
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 - Google ML Kit Android Apps */}
            <div className="relative pl-8 border-l-2 border-indigo-500 transform hover:scale-105 transition-transform">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
              <div className="mb-4">
                <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                  <span className="mr-2">🤖</span>
                  <a 
                    href="https://github.com/ibrahimcanerdogan/Google-MLKit-Android-Apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-indigo-400 transition-colors ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                  >
                    Google ML Kit Android Apps
                  </a>
                </h3>
                <p className={`${isDarkTheme ? 'text-indigo-400' : 'text-indigo-600'} mt-2 flex items-center`}>
                  <span className="mr-2">⏳</span>
                  2024 - Devam Ediyor
                </p>
              </div>
              <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 p-4 rounded-lg">
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-4 text-sm`}>
                  Google ML Kit kullanarak geliştirilmiş yapay zeka destekli Android uygulamaları. Görüntü işleme, metin tanıma ve nesne algılama özellikleri içerir.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700'}`}>
                    Kotlin
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                    ML Kit
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                    CameraX
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'}`}>
                    Jetpack Compose
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 - JetBorutoKtorServerApp */}
            <div className="relative pl-8 border-l-2 border-indigo-500 transform hover:scale-105 transition-transform">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
              <div className="mb-4">
                <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                  <span className="mr-2">🏗️</span>
                  <a 
                    href="https://github.com/ibrahimcanerdogan/JetBorutoKtorServerApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-indigo-400 transition-colors ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                  >
                    JetBorutoKtorServerApp
                  </a>
                </h3>
                <p className={`${isDarkTheme ? 'text-indigo-400' : 'text-indigo-600'} mt-2 flex items-center`}>
                  <span className="mr-2">⏳</span>
                  2024 - Devam Ediyor
                </p>
              </div>
              <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 p-4 rounded-lg">
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-4 text-sm`}>
                  Jetpack Compose ile geliştirilmiş Boruto karakterleri uygulaması ve Ktor ile yazılmış backend servisi. Full-stack Android geliştirme örneği.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700'}`}>
                    Kotlin
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                    Jetpack Compose
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                    Ktor
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'}`}>
                    Clean Architecture
                  </span>
                </div>
              </div>
            </div>

            {/* Project 4 - JetNews */}
            <div className="relative pl-8 border-l-2 border-indigo-500 transform hover:scale-105 transition-transform">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
              <div className="mb-4">
                <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                  <span className="mr-2">📰</span>
                  <a 
                    href="https://github.com/ibrahimcanerdogan/JetNews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-indigo-400 transition-colors ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                  >
                    JetNews
                  </a>
                </h3>
                <p className={`${isDarkTheme ? 'text-indigo-400' : 'text-indigo-600'} mt-2 flex items-center`}>
                  <span className="mr-2">⏳</span>
                  2024 - Devam Ediyor
                </p>
              </div>
              <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 p-4 rounded-lg">
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-4 text-sm`}>
                  Jetpack Compose ile geliştirilmiş modern haber uygulaması. Clean Architecture ve MVVM pattern kullanılarak geliştirilmiş. Material Design 3 ve modern UI/UX pratikleri içerir.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700'}`}>
                    Kotlin
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                    Jetpack Compose
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                    Material3
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700'}`}>
                    MVVM
                  </span>
                </div>
              </div>
            </div>

            {/* Project 5 - EcoTrack */}
            <div className="relative pl-8 border-l-2 border-indigo-500 transform hover:scale-105 transition-transform">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
              <div className="mb-4">
                <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} flex items-center`}>
                  <span className="mr-2">🌱</span>
                  <a 
                    href="https://ibrahimcanerdogan.github.io/ecotrack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-indigo-400 transition-colors ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                  >
                    EcoTrack
                  </a>
                </h3>
                <p className={`${isDarkTheme ? 'text-indigo-400' : 'text-indigo-600'} mt-2 flex items-center`}>
                  <span className="mr-2">⏳</span>
                  2024 - Devam Ediyor
                </p>
              </div>
              <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 p-4 rounded-lg">
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-4 text-sm`}>
                  Sürdürülebilir yaşam ve çevre dostu alışkanlıkları takip etmek için geliştirilmiş web uygulaması.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700'}`}>
                    Next.js
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                    TypeScript
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkTheme ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-8">
        <div className={`${isDarkTheme ? 'bg-gray-800/95' : 'bg-white/95'} rounded-2xl p-8 shadow-xl border ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'} backdrop-blur-sm`}>
          <h2 className={`text-2xl font-semibold mb-6 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'} flex items-center justify-center`}>
            <span className="mr-2">🛠️</span>
            <span>Yeteneklerim</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <div className={`${isDarkTheme ? 'bg-gray-900/80' : 'bg-white/80'} rounded-lg p-6 shadow-lg`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                <span className="mr-2">💻</span>
                Programlama Dilleri
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Kotlin</span>
                  <span className="text-blue-400">★★★★★</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Java</span>
                  <span className="text-blue-400">★★★★☆</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>TypeScript</span>
                  <span className="text-blue-400">★★★☆☆</span>
                </div>
              </div>
            </div>

            {/* Android Development */}
            <div className={`${isDarkTheme ? 'bg-gray-900/80' : 'bg-white/80'} rounded-lg p-6 shadow-lg`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                <span className="mr-2">📱</span>
                Android Geliştirme
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Jetpack Compose</span>
                  <span className="text-blue-400">★★★★★</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>MVVM Architecture</span>
                  <span className="text-blue-400">★★★★★</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Clean Architecture</span>
                  <span className="text-blue-400">★★★★☆</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Coroutines</span>
                  <span className="text-blue-400">★★★★★</span>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className={`${isDarkTheme ? 'bg-gray-900/80' : 'bg-white/80'} rounded-lg p-6 shadow-lg`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'} flex items-center`}>
                <span className="mr-2">🛠️</span>
                Araçlar & Teknolojiler
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Git</span>
                  <span className="text-blue-400">★★★★★</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Dagger Hilt</span>
                  <span className="text-blue-400">★★★★☆</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Retrofit</span>
                  <span className="text-blue-400">★★★★★</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Room Database</span>
                  <span className="text-blue-400">★★★★☆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Videos Section */}
      <div className="container mx-auto px-4 py-8">
        <div className={`${isDarkTheme ? 'bg-gray-800/95' : 'bg-white/95'} rounded-2xl p-8 shadow-xl border ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'} backdrop-blur-sm`}>
          <h2 className={`text-2xl font-semibold mb-6 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'}`}>YouTube Videolarım 🎥</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className={`${isDarkTheme ? 'bg-gray-900/50' : 'bg-white/50'} rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105`}>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/sVB5CDGcuBc"
                  title="Jetpack Compose ile Android Uygulama Geliştirme"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Jetpack Compose ile Android Uygulama Geliştirme</h3>
                <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Modern Android uygulamaları geliştirmek için Jetpack Compose'un temel ve ileri seviye özelliklerini kapsamlı bir şekilde öğrenin.</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className={`${isDarkTheme ? 'bg-gray-900/50' : 'bg-white/50'} rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105`}>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/TeAg03D_gCk"
                  title="Tek Videoda Detaylı Kotlin Temelleri [2024]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Tek Videoda Detaylı Kotlin Temelleri [2024]</h3>
                <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Android geliştirme yolculuğunuza başlamadan önce Kotlin'in temel kavramlarını tek videoda öğrenin.</p>
              </div>
            </div>

            {/* Video 3 */}
            <div className={`${isDarkTheme ? 'bg-gray-900/50' : 'bg-white/50'} rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105`}>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/zYGIMyqopWY"
                  title="Tek Videoda Banka Retrofit API Geliştirme | Jetpack Compose"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>Tek Videoda Banka Retrofit API Geliştirme | Jetpack Compose</h3>
                <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>Jetpack Compose ve Retrofit kullanarak gerçek bir banka API'si entegrasyonunu adım adım uygulayın.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div 
        className={`${isDarkTheme ? 'bg-gray-900/50' : 'bg-gray-100/50'} border-t ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'} relative z-30`}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onMouseUp={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              İletişime Geç 📬
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div 
                  className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'} rounded-lg p-6 border ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'} relative z-40`}
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                >
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'}`}>İletişim Bilgileri 📞</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <svg className={`w-6 h-6 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a 
                        href="mailto:ibrahimcan.erdogann@gmail.com" 
                        className={`${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors cursor-pointer`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        ibrahimcan.erdogann@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className={`w-6 h-6 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} cursor-default`}>İstanbul, Türkiye</span>
                    </div>
                  </div>
                </div>

                <div 
                  className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'} rounded-lg p-6 border ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'}`}
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                >
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'}`}>Sosyal Medya 🌐</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/ibrahimcanerdogan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}
                      aria-label="GitHub"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ibrahimcanerdogan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://medium.com/@ibrahimcanerdogan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                      aria-label="Medium"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/@ibrahimcanerdogan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                      aria-label="YouTube"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.udemy.com/user/ibrahim-can-erdogan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                      aria-label="Udemy"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.002 3.055-2.974 3.055-1.971 0-2.974-1.02-2.974-3.055v-7.85H5.81z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'} rounded-lg p-6 border ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Mesaj Gönder ✉️</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      İsim
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-2 ${isDarkTheme ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-100/50 border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                      required
                      disabled={formStatus === 'sending'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-2 ${isDarkTheme ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-100/50 border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                      required
                      disabled={formStatus === 'sending'}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`w-full px-4 py-2 ${isDarkTheme ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-100/50 border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                      required
                      disabled={formStatus === 'sending'}
                    ></textarea>
                  </div>
                  {formMessage && (
                    <div className={`p-3 rounded-lg ${
                      formStatus === 'success' ? 'bg-green-500/20 text-green-300' : 
                      formStatus === 'error' ? 'bg-red-500/20 text-red-300' : ''
                    }`}>
                      {formMessage}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ${
                      formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus === 'sending' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Gönderiliyor...
                      </span>
                    ) : 'Gönder'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer 
        className={`${isDarkTheme ? 'bg-gray-900/50' : 'bg-gray-100/50'} border-t ${isDarkTheme ? 'border-gray-800' : 'border-gray-200'} relative z-30`}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onMouseUp={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} İbrahim Can Erdoğan. Tüm hakları saklıdır.
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/ibrahimcanerdogan"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ibrahimcanerdogan/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://medium.com/@ibrahimcanerdogan"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                aria-label="Medium"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ibrahimcanerdogan"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.udemy.com/user/ibrahim-can-erdogan/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                aria-label="Udemy"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.002 3.055-2.974 3.055-1.971 0-2.974-1.02-2.974-3.055v-7.85H5.81z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </main>
  );
}
