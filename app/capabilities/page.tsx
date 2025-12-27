'use client';

import { Code, Palette, Users, Zap, Sparkles, Target, Globe, Cpu, Server, Database, Cloud, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<'expertise' | 'skills' | 'approach'>('expertise');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: Target,
      title: "Business and Tech",
      subtitle: "Brand Strategy & Growth",
      description: "Building strong brand identities that resonate with target audiences and drive business growth.",
      items: ["Brand Strategy", "Product Growth", "Market Research", "Competitive Analysis"],
      color: "border-l-blue-500",
      bgColor: "bg-blue-50"
    },
    
    {
      id: 2,
      icon: Code,
      title: "Development",
      subtitle: "Software Engineering",
      description: "Full-stack development with focus on scalable architecture and clean, maintainable code.",
      items: ["Web Applications", "Mobile Apps", "API Development", "System Architecture"],
      color: "border-l-green-500",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      icon: Users,
      title: "Digital Product",
      subtitle: "Digital Talent Development",
      description: "Empowering teams through training, mentorship, and building sustainable development practices.",
      items: ["Team Training", "Technical Mentoring", "Process Optimization", "Knowledge Sharing"],
      color: "border-l-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "FastAPI", "REST APIs"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle"] },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] }
  ];

  const approachSteps = [
    { step: "01", title: "Discovery", description: "Understanding requirements and defining project scope", icon: Sparkles },
    { step: "02", title: "Research", description: "Market analysis and user research to inform design decisions", icon: Globe },
    { step: "03", title: "Design", description: "Creating wireframes, prototypes, and user interfaces", icon: Palette },
    { step: "04", title: "Development", description: "Building scalable and maintainable code solutions", icon: Code },
    { step: "05", title: "Testing", description: "Quality assurance and user testing for optimal performance", icon: Cpu },
    { step: "06", title: "Launch", description: "Deployment and ongoing support for continuous improvement", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Me</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Passionate Full Stack Developer with a focus on creating human-centered digital experiences 
              that balance technical excellence with intuitive design.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveSection('expertise')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeSection === 'expertise' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Expertise
            </button>
            <button
              onClick={() => setActiveSection('skills')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeSection === 'skills' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveSection('approach')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeSection === 'approach' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Approach
            </button>
          </div>

          {/* Content Sections */}
          {activeSection === 'expertise' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${service.bgColor} border ${service.color} border-l-4`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
                    <div className="space-y-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Visualization */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Tech Stack Progression</h3>
                <div className="space-y-8">
                  {[
                    { name: "Frontend", level: 95, techs: "React, Next.js, TypeScript" },
                    { name: "Backend", level: 90, techs: "Node.js, Python, Express" },
                    { name: "UI/UX Design", level: 88, techs: "Figma, Tailwind, Framer" },
                    { name: "DevOps", level: 85, techs: "Docker, AWS, CI/CD" }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{item.name}</span>
                        <span className="font-bold text-blue-600">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1500"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{item.techs}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'approach' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {approachSteps.map((step, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-3xl font-bold text-gray-300 group-hover:text-blue-500 transition-colors">
                      {step.step}
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <div className="flex items-center gap-4 mb-8">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Design Philosophy</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            "I believe great technology should feel invisible. The best digital experiences don't shout 
            for attention but work seamlessly in the background, making complex systems feel intuitive 
            and accessible to everyone."
          </p>
          <div className="flex items-center justify-between pt-6 border-t border-gray-700">
            <div>
              <p className="text-gray-400">Years of Experience</p>
              <p className="text-2xl font-bold">1+</p>
            </div>
            <div>
              <p className="text-gray-400">Projects Completed</p>
              <p className="text-2xl font-bold">10+</p>
            </div>
            <div>
              <p className="text-gray-400">Client Satisfaction</p>
              <p className="text-2xl font-bold">82%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}