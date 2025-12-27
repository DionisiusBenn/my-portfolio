'use client';

import { Briefcase, GraduationCap, Award, Calendar, MapPin, Rocket, TrendingUp, Users as UsersIcon, Star } from 'lucide-react';
import { useState } from 'react';

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'achievements'>('work');

  const workExperience = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      location: "Jakarta, Indonesia",
      description: "Lead development of scalable web applications using modern technologies.",
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Mentored 5 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      id: 2,
      company: "Digital Agency XYZ",
      position: "Frontend Developer",
      period: "2020 - 2022",
      location: "Bandung, Indonesia",
      description: "Developed responsive web applications for various clients.",
      achievements: [
        "Built 20+ client websites with 95% client satisfaction",
        "Reduced page load time by 50%",
        "Implemented accessibility standards across all projects"
      ],
      technologies: ["React", "Next.js", "Tailwind", "GraphQL"]
    },
    {
      id: 3,
      company: "Startup ABC",
      position: "Junior Developer",
      period: "2019 - 2020",
      location: "Bogor, Indonesia",
      description: "Contributed to early-stage product development.",
      achievements: [
        "Developed core product features",
        "Participated in agile development processes",
        "Improved code quality through testing"
      ],
      technologies: ["JavaScript", "Python", "Django", "PostgreSQL"]
    }
  ];

  const education = [
    {
      id: 1,
      institution: "University of Indonesia",
      degree: "Bachelor of Computer Science",
      period: "2019 - 2023",
      description: "Specialized in Software Engineering and Human-Computer Interaction",
      courses: ["Data Structures", "Algorithms", "Database Systems", "UI/UX Design", "Cloud Computing"]
    },
    {
      id: 2,
      institution: "Online Courses & Certifications",
      period: "2020 - Present",
      description: "Continuous learning through various platforms",
      courses: ["Full Stack Development", "AWS Solutions Architect", "React Advanced Patterns", "System Design"]
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Best Project Award 2023",
      issuer: "Indonesia Tech Conference",
      year: "2023",
      description: "Awarded for innovative e-commerce platform design"
    },
    {
      id: 2,
      title: "Top Performer",
      issuer: "Tech Solutions Inc.",
      year: "2022",
      description: "Recognized for outstanding contribution to team projects"
    },
    {
      id: 3,
      title: "Hackathon Winner",
      issuer: "Google Developer Groups",
      year: "2021",
      description: "First place in national hackathon competition"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "5+", icon: Calendar, color: "blue" },
    { label: "Projects Delivered", value: "50+", icon: Briefcase, color: "green" },
    { label: "Technologies", value: "20+", icon: Rocket, color: "purple" },
    { label: "Team Members Mentored", value: "15+", icon: UsersIcon, color: "orange" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Experience <span className="text-blue-600">&</span> Journey
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A timeline of professional growth, education, and achievements in the world of technology
          </p>
        </div>

        {/* Stats Overview */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-${stat.color}-50`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'work' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <Briefcase className="w-5 h-5" />
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'education' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <GraduationCap className="w-5 h-5" />
              Education
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'achievements' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <Award className="w-5 h-5" />
              Achievements
            </button>
          </div>

          {/* Content */}
          {activeTab === 'work' && (
            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                      <div className="flex items-center gap-4 text-gray-600 mb-4">
                        <span className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-6">{exp.description}</p>
                    </div>
                    <div className="lg:text-right">
                      <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                        {exp.technologies.length} Technologies
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree || edu.institution}</h3>
                      <div className="flex items-center gap-4 text-gray-600 mb-4">
                        <span className="font-medium">{edu.institution}</span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-6">{edu.description}</p>
                      
                      <div className="space-y-4">
                        <h4 className="font-bold text-gray-900">Key Courses & Skills:</h4>
                        <div className="flex flex-wrap gap-3">
                          {edu.courses.map((course, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-yellow-50 rounded-xl">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.issuer}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{achievement.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{achievement.year}</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      Award
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Growth Timeline */}
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Career Growth Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {[
              { year: "2019", title: "Started University", description: "Began Computer Science degree at University of Indonesia" },
              { year: "2020", title: "First Internship", description: "Junior Developer at Startup ABC" },
              { year: "2021", title: "Professional Growth", description: "Frontend Developer at Digital Agency XYZ" },
              { year: "2022", title: "Senior Role", description: "Promoted to Senior Full Stack Developer" },
              { year: "2023", title: "Leadership", description: "Started mentoring junior developers" },
              { year: "2024", title: "Continuous Learning", description: "Focus on advanced architecture and system design" }
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'lg:pr-1/2 lg:pl-0 lg:text-right' : 'lg:pl-1/2 lg:pr-0'}`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-bold text-gray-900">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}