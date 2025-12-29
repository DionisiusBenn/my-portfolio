'use client';

import Image from 'next/image';
import { Linkedin, Instagram, ArrowDown, ArrowRight, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  stats: string;
  color: string;
  image: string;
}

interface Service {
  title: string;
  projects: string;
  color: string;
}

interface OtherProject {
  id: number;
  title: string;
  category: string;
}

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [titleScale, setTitleScale] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Scalable online shopping solution with real-time inventory management",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      stats: "↑ 320% Revenue",
      color: "from-gray-800 to-gray-900",
      image: "/profile2.png"
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      category: "UI/UX Design",
      description: "Real-time data visualization platform for business intelligence",
      tech: ["Next.js", "D3.js", "Tailwind", "Firebase"],
      stats: "↑ 180% Engagement",
      color: "from-gray-700 to-gray-800",
      image: "/profile2.png"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure cross-platform banking application with biometric authentication",
      tech: ["React Native", "Expo", "Firebase", "AWS"],
      stats: "50K+ Users",
      color: "from-gray-600 to-gray-700",
      image: "/profile.jpg"
    },
    {
      id: 4,
      title: "API Gateway System",
      category: "Backend Development",
      description: "Microservices architecture with load balancing and rate limiting",
      tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
      stats: "99.9% Uptime",
      color: "from-gray-800 to-gray-900",
      image: "/profile2.png"
    }
  ];

  const projectServices: Service[] = [
    {
      title: "Web Development",
      projects: "24 Projects",
      color: "bg-gradient-to-r from-gray-800 to-gray-900"
    },
    {
      title: "UI/UX Design",
      projects: "18 Projects",
      color: "bg-gradient-to-r from-gray-700 to-gray-800"
    },
    {
      title: "3D Blender Design",
      projects: "12 Projects",
      color: "bg-gradient-to-r from-gray-600 to-gray-700"
    },
    {
      title: "Backend Systems",
      projects: "16 Projects",
      color: "bg-gradient-to-r from-gray-800 to-gray-900"
    }
  ];

  const otherProjects: OtherProject[] = [
    { id: 4, title: "Mobile Banking", category: "App" },
    { id: 5, title: "Analytics Dashboard", category: "SaaS" },
    { id: 6, title: "Learning Platform", category: "Web" },
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight - windowHeight;
      
      setScrollProgress(currentScrollY / totalHeight);
      setScrolled(currentScrollY > 100);
      
      if (projectsRef.current) {
        const projectsOffset = projectsRef.current.offsetTop;
        const distanceToProjects = projectsOffset - currentScrollY;
        const maxDistance = windowHeight * 0.7;
        
        if (distanceToProjects < maxDistance && distanceToProjects > -maxDistance) {
          const progress = 1 - Math.abs(distanceToProjects) / maxDistance;
          const scale = 1 + (progress * 0.15);
          setTitleScale(scale);
        } else {
          setTitleScale(1);
        }
        
        const rect = projectsRef.current.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > 0;
        setIsProjectsVisible(isVisible);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      window.scrollTo({
        top: projectsRef.current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200"
          style={{
            transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-gray-300/20 to-gray-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-gray-400/10 to-gray-500/10 blur-3xl animate-float" />
      </div>

      <main className="min-h-screen relative">
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div 
            className="h-full bg-gradient-to-r from-gray-800 to-gray-900 transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        <div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500"
          style={{
            opacity: isProjectsVisible ? 0 : 1,
            transform: `translate(-50%, ${isProjectsVisible ? '100px' : '0'})`
          }}
        >
          <button 
            onClick={scrollToProjects}
            className="group w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-300 hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <ArrowDown className="w-5 h-5 text-gray-800 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="absolute top-20 left-10 animate-pulse-slow">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
        </div>
        <div className="absolute top-40 right-10 animate-pulse-slow delay-1000">
          <div className="w-3 h-3 bg-gray-500 rounded-full" />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 pt-24 relative">
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div 
                className="text-gray-700 text-sm md:text-base leading-relaxed font-light transition-all duration-1000 mt-4"
                style={{
                  opacity: isProjectsVisible ? 0.2 : 1,
                  transform: `translateY(${isProjectsVisible ? '-40px' : '0'}) translateX(${mousePosition.x * -10}px)`
                }}
              >
                <p className="mb-2">I am an Undergraduate student from University of Indonesia</p>
                <p className="mb-2">Computer science student based in</p>
                <p>Bogor, Indonesia.</p>
              </div>

              <div 
                className="text-gray-700 text-sm md:text-base leading-relaxed text-left md:text-right font-light transition-all duration-1000 delay-200 mt-4"
                style={{
                  opacity: isProjectsVisible ? 0.2 : 1,
                  transform: `translateY(${isProjectsVisible ? '-40px' : '0'}) translateX(${mousePosition.x * 10}px)`
                }}
              >
                <p className="mb-2">Open to all forms of design</p>
                <p className="mb-2">collaboration, regardless of</p>
                <p>location and language.</p>
              </div>
            </div>
          </div>

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
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent animate-shimmer opacity-0" />
                <span 
                  className="block text-gray-900 transition-all duration-1000"
                  style={{
                    opacity: isProjectsVisible ? 0.3 : 1,
                    transform: `translateY(${isProjectsVisible ? '-50px' : '0'})`
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
                    opacity: isProjectsVisible ? 0.3 : 1,
                    transform: `translateY(${isProjectsVisible ? '-50px' : '0'})`
                  }}
                >
                  CODE.
                </span>
              </span>

              <span className="w-full flex justify-start text-12xl md:text-15xl lg:text-9xl mt-8 relative">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent animate-shimmer delay-1000 opacity-0" />
                <span 
                  className="text-gray-900 transition-all duration-1000 delay-200"
                  style={{
                    opacity: isProjectsVisible ? 0.3 : 1,
                    transform: `translateY(${isProjectsVisible ? '-50px' : '0'})`
                  }}
                >
                  HUMAN DESIGN
                </span>
              </span>
            </h1>
            
            <div 
              className="absolute top-1/4 left-1/4 transition-all duration-500"
              style={{
                opacity: isProjectsVisible ? 0 : 1,
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
              }}
            >
              <ChevronRight className="w-8 h-8 text-gray-400 animate-float" />
            </div>
          </div>

          <div className="max-w-7xl -mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
              <div 
                className="order-2 lg:order-1 transition-all duration-1000"
                style={{
                  opacity: isProjectsVisible ? 0 : 1,
                  transform: `translateX(${isProjectsVisible ? '-100px' : '0'}) rotate(${isProjectsVisible ? '-5deg' : '0deg'})`
                }}
              >
                <div 
                  className="relative w-full aspect-[5/4] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group mt-20"
                  style={{
                    transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20 z-10" />
                  <Image
                    src="/profile2.png"
                    alt="Profile"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 rounded-3xl border-2 border-gray-300/30 group-hover:border-gray-400/50 transition-all duration-500" />
                </div>
              </div>

              <div 
                className="order-1 lg:order-2 text-right space-y-6 transition-all duration-1000 delay-300 -mt-24"
                style={{
                  opacity: isProjectsVisible ? 0 : 1,
                  transform: `translateX(${isProjectsVisible ? '100px' : '0'})`
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

      <section 
        ref={projectsRef} 
        id="projects" 
        className="min-h-screen py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200" />
          <div 
            className="absolute inset-0 opacity-[0.03] animate-gridMove"
            style={{
              backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <section className="min-h-screen flex items-center justify-center pt-20">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-12">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8">
                  Design that<br />
                  <span className="relative">
                    <span className="absolute -inset-6 bg-gradient-to-r from-gray-200/30 to-transparent -z-10 rounded-3xl blur-xl" />
                    speaks.
                  </span>
                </h1>
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-700 leading-[0.9] tracking-tighter mb-12">
                  Delivery that<br />
                  converts.
                </h2>
              </div>

              <div className="max-w-2xl mx-auto text-center mb-16">
                <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
                  I craft focused digital experiences that captivate audiences and drive growth. 
                  Combining bold design with smart strategy, I elevate your brand to win and convert—seamlessly.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 justify-center mb-20">
                <button 
                  onClick={scrollToTop}
                  className="group relative px-10 py-5 bg-gray-900 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Back to Top
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="group relative px-10 py-5 bg-transparent text-gray-900 font-bold rounded-full border-2 border-gray-300 hover:border-gray-900 hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Contact Me
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center gap-24">
                  <div className="px-8 bg-gradient-to-b from-gray-50 to-gray-100">
                    <div className="text-5xl md:text-6xl font-bold text-gray-900">50.5K</div>
                    <div className="text-gray-600 text-sm mt-2 uppercase tracking-wider">Projects</div>
                  </div>
                  <div className="px-8 bg-gradient-to-b from-gray-50 to-gray-100">
                    <div className="text-5xl md:text-6xl font-bold text-gray-900">85K</div>
                    <div className="text-gray-600 text-sm mt-2 uppercase tracking-wider">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="py-32">
            <div className="mb-20 text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Project Portfolio
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-6 rounded-full" />
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Interactive showcase of my latest work
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {projectServices.map((service, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-300 hover:border-gray-900 hover:shadow-xl transition-all duration-500 cursor-pointer"
                  style={{
                    opacity: isProjectsVisible ? 1 : 0,
                    transform: `translateY(${isProjectsVisible ? '0' : '30px'})`,
                    transitionDelay: `${index * 100}ms`
                  }}
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className={`w-12 h-1 ${service.color} rounded-full mb-4 group-hover:w-16 transition-all duration-300`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.projects}</p>
                </div>
              ))}
            </div>

            <div className="space-y-20">
              <div className="space-y-16">
                {projects.slice(0, 3).map((project, index) => (
                  <div
                    key={project.id}
                    className="group cursor-pointer"
                    style={{
                      opacity: isProjectsVisible ? 1 : 0,
                      transform: isProjectsVisible ? 'translateY(0)' : 'translateY(40px)',
                      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`
                    }}
                  >
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${
                          index === 0 ? 'from-blue-500/20 to-purple-500/20' :
                          index === 1 ? 'from-emerald-500/20 to-cyan-500/20' :
                          'from-rose-500/20 to-orange-500/20'
                        } transition-transform duration-700 group-hover:scale-105`} />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium">
                              {project.category}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="text-white text-center space-y-4">
                            <div className="flex justify-center gap-2">
                              {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                                  {t}
                                </span>
                              ))}
                            </div>
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:gap-4 transition-all">
                              View Project
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-1 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full"></div>
                          <span className="text-sm text-gray-500 uppercase tracking-wider">
                            Featured Project
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <p className="text-gray-600">
                          {project.description}
                        </p>
                        <div className="flex gap-4 pt-4">
                          {project.tech.map((t) => (
                            <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className="text-lg font-bold text-gray-900 pt-4">{project.stats}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">More Work</h3>
                  <p className="text-gray-500">Additional projects worth exploring</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {otherProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className="group aspect-[4/3] rounded-xl overflow-hidden cursor-pointer relative"
                      style={{
                        opacity: isProjectsVisible ? 1 : 0,
                        transform: isProjectsVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${450 + index * 100}ms`
                      }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        index === 0 ? 'from-blue-400/10 to-cyan-400/10' :
                        index === 1 ? 'from-purple-400/10 to-pink-400/10' :
                        'from-emerald-400/10 to-teal-400/10'
                      } group-hover:scale-105 transition-transform duration-700`} />
                      
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                          <ArrowRight className="w-5 h-5 text-gray-700 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className="text-center pt-8"
                style={{
                  opacity: isProjectsVisible ? 1 : 0,
                  transform: isProjectsVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 700ms'
                }}
              >
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:gap-4 hover:shadow-xl transition-all">
                  View All Projects
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div id="contact" className="mt-32 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-5xl font-bold text-gray-900">
                Have a project in mind?
              </h2>
              <p className="text-gray-600 text-xl">
                Let's collaborate to create something extraordinary that drives results.
              </p>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 px-12 py-6 bg-gray-900 text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="fixed bottom-8 right-8 z-50">
          <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-300 shadow-lg">
            <div className="text-sm text-gray-600 font-medium">
              {Math.round(scrollProgress * 100)}%
            </div>
            <div className="w-24 h-1 bg-gray-300 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-gray-700 to-gray-900 transition-all duration-300"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <h4 className="text-xl font-bold mb-6">Dionisius Bennett</h4>
                <p className="text-gray-400">
                  Creating digital experiences that drive growth and innovation.
                </p>
              </div>
              
              <div>
                <h5 className="font-bold mb-6">Services</h5>
                <ul className="space-y-3 text-gray-400">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Mobile Apps</li>
                  <li>Backend Systems</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-bold mb-6">Connect</h5>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/dionisius-bennett-andrianto-5a2515315/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com/dionisiusben" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h5 className="font-bold mb-6">Contact</h5>
                <p className="text-gray-400">
                  Bogor, Indonesia<br />
                  Available for projects worldwide
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Dionisius Bennett Andrianto. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-50px, -50px);
          }
        }

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

        .animate-gridMove {
          animation: gridMove 20s linear infinite;
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

        html {
          scroll-behavior: smooth;
        }

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

        ::selection {
          background-color: rgba(0, 0, 0, 0.1);
          color: #111;
        }
      `}</style>
    </>
  );
}