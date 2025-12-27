'use client';


import Image from 'next/image';
import { Linkedin, Instagram, ArrowDown, ChevronRight, ArrowRight, Code, Palette, Cpu, Users, Zap, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [titleScale, setTitleScale] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll effect for animations
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight - windowHeight;
      
      setScrollProgress(currentScrollY / totalHeight);
      setScrolled(currentScrollY > 100);
      
      // Title scale effect
      if (aboutRef.current) {
        const aboutOffset = aboutRef.current.offsetTop;
        const distanceToAbout = aboutOffset - currentScrollY;
        const maxDistance = windowHeight * 0.7;
        
        if (distanceToAbout < maxDistance && distanceToAbout > -maxDistance) {
          const progress = 1 - Math.abs(distanceToAbout) / maxDistance;
          const scale = 1 + (progress * 0.15);
          setTitleScale(scale);
        } else {
          setTitleScale(1);
        }
        
        // Check if about section is in view
        const rect = aboutRef.current.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > 0;
        setIsAboutVisible(isVisible);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Services data
  const services = [
    {
      id: 1,
      icon: Code,
      title: "About Myself",
      subtitle: " Know More About Me",
      items: ["Branding Strategy", "R&D/Lab Innovation", "Business Development", "Investment Strategy"],
      color: "from-gray-800 to-gray-900"
    },
    {
      id: 2,
      icon: Palette,
      title: "Fun Facts",
      subtitle: "Daily Life",
      items: ["Consulting & Advisory", "System Development", "Business Intelligence", "System Integration", "UX/UI Design", "Cross-border Solutions"],
      color: "from-gray-700 to-gray-800"
    },
    {
      id: 3,
      icon: Users,
      title: "Hobbies",
      subtitle: "Creative Productions",
      items: ["Education Advisory", "In-house Development", "Talent Retention", "Training & Workshops"],
      color: "from-gray-600 to-gray-700"
    }
  ];

  // Skills data
  const skills = [
    { name: "Frontend Development", percentage: 87, icon: Code },
    { name: "Backend Systems", percentage: 70, icon: Cpu },
    { name: "UI/UX Design", percentage: 95, icon: Palette },
    { name: "Cloud & DevOps", percentage: 65, icon: Zap }
  ];

  return (
    <>
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200"
          style={{
            transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`
          }}
        />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`
          }}
        />
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-gray-300/20 to-gray-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-gray-400/10 to-gray-500/10 blur-3xl animate-float" />
      </div>

      <main className="min-h-screen relative">
        {/* Progress bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div 
            className="h-full bg-gradient-to-r from-gray-800 to-gray-900 transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Scroll indicator */}
        <div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500"
          style={{
            opacity: isAboutVisible ? 0 : 1,
            transform: `translate(-50%, ${isAboutVisible ? '100px' : '0'})`
          }}
        >
          <button 
          
            onClick={() => scrollToSection(aboutRef)}
            className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-300 hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <ArrowDown className="w-5 h-5 text-gray-800 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 animate-pulse-slow">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
        </div>
        <div className="absolute top-40 right-10 animate-pulse-slow delay-1000">
          <div className="w-3 h-3 bg-gray-500 rounded-full" />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 pt-24 relative">
          {/* Top Section - Left and Right Text */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left Side */}
              <div 
                className="text-gray-700 text-sm md:text-base leading-relaxed font-light transition-all duration-1000"
                style={{
                  opacity: isAboutVisible ? 0.2 : 1,
                  transform: `translateY(${isAboutVisible ? '-40px' : '0'}) translateX(${mousePosition.x * -10}px)`
                }}
              >
                <p className="mb-2">I am an Undergraduate student from University of Indonesia</p>
                <p className="mb-2">Computer science student based in</p>
                <p>Bogor, Indonesia.</p>
              </div>

              {/* Right Side */}
              <div 
                className="text-gray-700 text-sm md:text-base leading-relaxed text-left md:text-right font-light transition-all duration-1000 delay-200"
                style={{
                  opacity: isAboutVisible ? 0.2 : 1,
                  transform: `translateY(${isAboutVisible ? '-40px' : '0'}) translateX(${mousePosition.x * 10}px)`
                }}
              >
                <p className="mb-2">Open to all forms of design</p>
                <p className="mb-2">collaboration, regardless of</p>
                <p>location and language.</p>
              </div>
            </div>
          </div>

          {/* Main Heading with Enhanced Animations */}
          <div className="max-w-7xl mx-auto mb-12 relative">
            <div 
              className="absolute inset-0 blur-3xl opacity-10 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"
              style={{
                transform: `scale(${titleScale * 0.8})`,
                filter: `blur(${titleScale * 20}px)`
              }}
            />
            
            <h1 
              className="flex flex-col items-center text-center text-6xl md:text-7xl lg:text-10xl xl:text-9xl font-black leading-[0.9] tracking-tighter uppercase relative"
              style={{
                transform: `scale(${titleScale})`,
                transformOrigin: 'center center',
                textShadow: `0 10px 30px rgba(0,0,0,0.1)`
              }}
            >
              {/* Animated background for each word */}
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent animate-shimmer opacity-0" />
                <span 
                  className="block text-gray-900 transition-all duration-1000"
                  style={{
                    opacity: isAboutVisible ? 0.3 : 1,
                    transform: `translateY(${isAboutVisible ? '-50px' : '0'})`
                  }}
                >
                  SCALABLE
                </span>
              </span>
              
              <span className="w-full flex justify-end pl-2 md:pl-20 lg:pl-12 mt-8 relative">
                <span className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-200/30 to-transparent animate-shimmer delay-500 opacity-0" />
                <span 
                  className="text-gray-900 transition-all duration-1000 delay-100"
                  style={{
                    opacity: isAboutVisible ? 0.3 : 1,
                    transform: `translateY(${isAboutVisible ? '-50px' : '0'})`
                  }}
                >
                  CODE.
                </span>
              </span>

              <span className="w-full flex justify-left text-12xl md:text-15xl lg:text-9xl mt-8 relative">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent animate-shimmer delay-1000 opacity-0" />
                <span 
                  className="text-gray-900 transition-all duration-1000 delay-200"
                  style={{
                    opacity: isAboutVisible ? 0.3 : 1,
                    transform: `translateY(${isAboutVisible ? '-50px' : '0'})`
                  }}
                >
                  HUMAN DESIGN
                </span>
              </span>
            </h1>
            {/* ADD THE PICTURE FRAME HERE */}
<div className="relative mt-10 w-full max-w-sm">
  <div className="relative rounded-lg overflow-hidden shadow-xl">
    <div className="relative aspect-[12/8] w-full">
      <Image
      src="/profile2.png"
      alt="Profile picture of Dionisius"
      fill
      className="object-cover"
/>
    </div>
  </div>
</div>
            {/* Floating icons */}
            <div 
              className="absolute top-1/4 left-1/4 transition-all duration-500"
              style={{
                opacity: isAboutVisible ? 0 : 1,
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
              }}
            >
              <Code className="w-8 h-8 text-gray-400 animate-float" />
            </div>
          </div>

          {/* Bottom Section - Info and Image */}
          <div className="max-w-7xl -mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
              {/* Left - Image with parallax */}
              <div 
                className="order-2 lg:order-1 transition-all duration-1000"
                style={{
                  opacity: isAboutVisible ? 0 : 1,
                  transform: `translateX(${isAboutVisible ? '-100px' : '0'}) rotate(${isAboutVisible ? '-5deg' : '0deg'})`
                }}
              >
                <div 
                  className="relative w-full aspect-[5/] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                  style={{
                    transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20 z-10" />
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    priority
                  />
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-gray-300/30 group-hover:border-gray-400/50 transition-all duration-500" />
                </div>
              </div>

              {/* Right - Info */}
              <div 
                className="order-1 lg:order-2 text-right space-y-6 transition-all duration-1000 delay-300 -mt-24"
                style={{
                  opacity: isAboutVisible ? 0 : 1,
                  transform: `translateX(${isAboutVisible ? '100px' : '0'})`
                }}
              >
                <div className="space-y-3 -mt-6">
                  <p className="text-gray-600 text-xs md:text-sm tracking-[0.2em] font-light uppercase">
                    BOGOR, INDONESIA
                  </p>
                  <p className="text-gray-900 text-xl md:text-2xl font-semibold">
                    Web Developer
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">
                    Dionisius Bennett Andrianto
                  </p>
                </div>

                {/* Social Links with hover effects */}
                <div className="flex gap-4 justify-end">
                  <a
                    href="https://www.linkedin.com/in/dionisius-bennett-andrianto-5a2515315/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg border border-gray-300 hover:border-gray-900 transition-all duration-300 hover:scale-110"
                  >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Linkedin className="w-5 h-5 text-gray-800 group-hover:text-white relative z-10" />
                  </a>
                  <a
                    href="https://instagram.com/dionisiusben"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg border border-gray-300 hover:border-gray-900 transition-all duration-300 hover:scale-110"
                  >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Instagram className="w-5 h-5 text-gray-800 group-hover:text-white relative z-10" />
                  </a>
                </div>

                {/* Animated skill indicators */}
                <div className="flex flex-wrap gap-3 justify-end mt-6">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full text-gray-700 text-sm font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 hover:scale-105"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section - Enhanced Monochrome Design */}
      <div 
        ref={aboutRef} 
        className="min-h-screen py-32 relative overflow-hidden"
      >
        {/* Animated background for about section */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200 transition-all duration-1000"
          style={{
            opacity: isAboutVisible ? 1 : 0,
            transform: `translateY(${isAboutVisible ? '0' : '100px'})`
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-400/30 rounded-full animate-float"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + (i % 3)}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header with enhanced animation */}
            <div className="mb-20 text-center">
              <h2 
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000"
                style={{
                  opacity: isAboutVisible ? 1 : 0,
                  transform: `translateY(${isAboutVisible ? '0' : '30px'}) scale(${isAboutVisible ? 1 : 0.9})`
                }}
              >
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-6 rounded-full" />
              <p 
                className="text-gray-700 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-300"
                style={{
                  opacity: isAboutVisible ? 1 : 0,
                  transform: `translateY(${isAboutVisible ? '0' : '20px'})`
                }}
              >
                Bridging technology and human-centered design through innovative solutions
              </p>
            </div>

            {/* Three Column Grid with Enhanced Animations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-gray-300 overflow-hidden"
                  onMouseEnter={() => setActiveCard(service.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{
                    opacity: isAboutVisible ? 1 : 0,
                    transform: `translateY(${isAboutVisible ? '0' : '50px'})`,
                    transitionDelay: `${200 + index * 200}ms`
                  }}
                >
                  {/* Animated background */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  {/* Hover effect line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  />
                  
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-2 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full" />
                    <div className="flex items-center gap-3">
                      <service.icon className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-700 mb-6 relative z-10">
                    {service.subtitle}
                  </h4>
                  
                  <ul className="space-y-3 mb-8 relative z-10">
                    {service.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-center text-gray-600 group/item transition-all duration-300 hover:text-gray-900"
                        style={{
                          opacity: activeCard === service.id ? 1 : 0.8,
                          transform: `translateX(${activeCard === service.id ? '5px' : '0'})`
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover/item:scale-125 transition-transform" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="flex items-center gap-2 text-gray-800 font-medium group-hover:gap-3 transition-all relative z-10 hover:text-gray-900">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>

            {/* Skills & Experience Section with Enhanced Visuals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Experience */}
              <div
                style={{
                  opacity: isAboutVisible ? 1 : 0,
                  transition: 'opacity 1s ease-out 800ms'
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-gray-600" />
                  Experience & Expertise
                </h3>
                <div className="space-y-6">
                  {[
                    { title: "Full Stack Development", years: "5+ Years", color: "border-l-gray-800", desc: "Building scalable web applications with modern frameworks and cloud technologies." },
                    { title: "UI/UX Design", years: "3+ Years", color: "border-l-gray-700", desc: "Creating intuitive user interfaces with a focus on accessibility and user experience." },
                    { title: "Technical Consulting", years: "2+ Years", color: "border-l-gray-600", desc: "Advising businesses on technology strategy and digital transformation." }
                  ].map((exp, index) => (
                    <div
                      key={index}
                      className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md border-l-4 border-gray-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      style={{
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                          {exp.title}
                        </h4>
                        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-gray-200 transition-colors">
                          {exp.years}
                        </span>
                      </div>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                        {exp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Technical Skills with Enhanced Animations */}
              <div
                style={{
                  opacity: isAboutVisible ? 1 : 0,
                  transition: 'opacity 1s ease-out 1000ms'
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-gray-600" />
                  Technical Proficiency
                </h3>
                <div className="space-y-8">
                  {skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <skill.icon className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform" />
                          <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span 
                          className="font-bold text-gray-900 transition-all duration-1000"
                          style={{
                            fontSize: isAboutVisible ? '1rem' : '0.875rem',
                            opacity: isAboutVisible ? 1 : 0
                          }}
                        >
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-gray-600 to-gray-800 transition-all duration-1500 ease-out"
                            style={{
                              width: isAboutVisible ? `${skill.percentage}%` : '0%',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}
                          />
                        </div>
                        {/* Animated dot on progress bar */}
                        <div 
                          className="absolute top-1/2 w-3 h-3 bg-gray-900 rounded-full -translate-y-1/2 transition-all duration-1000 ease-out"
                          style={{
                            left: isAboutVisible ? `${skill.percentage}%` : '0%',
                            transform: `translate(${isAboutVisible ? '-50%' : '0'}, -50%)`,
                            boxShadow: '0 0 10px rgba(0,0,0,0.2)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div 
        ref={projectsRef} 
        className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 relative"
      >
        {/* Project section content remains the same with monochrome updates */}
        {/* ... */}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes shimmer {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #888, #666);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #666, #444);
        }

        /* Selection color */
        ::selection {
          background-color: rgba(0, 0, 0, 0.1);
          color: #111;
        }
      `}</style>
    </>
  );
}