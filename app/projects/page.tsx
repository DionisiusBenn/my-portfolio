'use client';

import { ExternalLink, Github, Eye, ArrowRight, Star, Users, Calendar, Code, Palette, Database, Zap, Lock, Filter, Search, Layers } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and secure payment integration.",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind"],
      status: "Live",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      year: "2023",
      teamSize: "3",
      highlights: ["Real-time updates", "Scalable architecture", "Payment processing", "Admin dashboard"],
      image: "/project1.jpg",
      color: "from-blue-500 to-blue-600",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop interface and team collaboration features.",
      category: "web",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Socket.io"],
      status: "Live",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      year: "2023",
      teamSize: "2",
      highlights: ["Real-time collaboration", "File sharing", "Progress tracking", "Notifications"],
      image: "/project2.jpg",
      color: "from-green-500 to-green-600",
      featured: true
    },
    {
      id: 3,
      title: "Health & Fitness Mobile App",
      description: "Mobile application for workout tracking, nutrition planning, and progress monitoring.",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux", "Charts.js", "HealthKit"],
      status: "In Development",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      year: "2024",
      teamSize: "4",
      highlights: ["Offline support", "AI recommendations", "Social features", "Progress analytics"],
      image: "/project3.jpg",
      color: "from-purple-500 to-purple-600",
      featured: false
    },
    {
      id: 4,
      title: "Design System Library",
      description: "Comprehensive design system with reusable components and documentation for consistent UI development.",
      category: "design",
      technologies: ["Figma", "Storybook", "React", "Tailwind", "TypeScript"],
      status: "Completed",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      year: "2023",
      teamSize: "1",
      highlights: ["60+ components", "Dark mode", "Accessibility", "Theming"],
      image: "/project4.jpg",
      color: "from-pink-500 to-pink-600",
      featured: false
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "WebSocket-based chat application with file sharing, video calls, and end-to-end encryption.",
      category: "web",
      technologies: ["Vue.js", "Socket.io", "Node.js", "Redis", "WebRTC"],
      status: "Live",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      year: "2022",
      teamSize: "2",
      highlights: ["End-to-end encryption", "Media sharing", "Group chats", "Video calls"],
      image: "/project5.jpg",
      color: "from-orange-500 to-orange-600",
      featured: true
    },
    {
      id: 6,
      title: "Portfolio Generator",
      description: "AI-powered portfolio website generator with customizable templates and content suggestions.",
      category: "web",
      technologies: ["Next.js", "OpenAI API", "Tailwind", "Supabase", "Prisma"],
      status: "In Development",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      year: "2024",
      teamSize: "3",
      highlights: ["AI suggestions", "Multiple templates", "Export options", "Analytics"],
      image: "/project6.jpg",
      color: "from-cyan-500 to-cyan-600",
      featured: false
    },
    {
      id: 7,
      title: "Learning Management System",
      description: "Platform for creating, managing, and delivering educational courses with progress tracking.",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "AWS S3"],
      status: "Live",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      year: "2023",
      teamSize: "5",
      highlights: ["Course creation", "Video streaming", "Quizzes", "Progress tracking"],
      image: "/project7.jpg",
      color: "from-indigo-500 to-indigo-600",
      featured: false
    },
    {
      id: 8,
      title: "Finance Dashboard",
      description: "Interactive dashboard for financial data visualization and analytics with real-time updates.",
      category: "web",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      status: "Completed",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      year: "2023",
      teamSize: "2",
      highlights: ["Data visualization", "Real-time updates", "Export reports", "Multi-currency"],
      image: "/project8.jpg",
      color: "from-teal-500 to-teal-600",
      featured: false
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'web': return <Code className="w-5 h-5" />;
      case 'mobile': return <Zap className="w-5 h-5" />;
      case 'design': return <Palette className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'web': return 'bg-blue-100 text-blue-600';
      case 'mobile': return 'bg-green-100 text-green-600';
      case 'design': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Live': return 'bg-green-100 text-green-600';
      case 'In Development': return 'bg-yellow-100 text-yellow-600';
      case 'Completed': return 'bg-blue-100 text-blue-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  // Filter projects based on active filter and search query
  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Project <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            A collection of innovative solutions showcasing technical expertise and design thinking
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{projects.length}</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{featuredProjects.length}</div>
              <div className="text-gray-600">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">3+</div>
              <div className="text-gray-600">Years</div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>Highlighted Work</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.teamSize}
                      </span>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Section */}
        <div className="max-w-6xl mx-auto">
          {/* Controls */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects, technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Filters and View Toggle */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <select
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value as any)}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Projects</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Apps</option>
                    <option value="design">UI/UX Design</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <Layers className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <div className="flex flex-col gap-1">
                      <div className="w-5 h-1 bg-current rounded"></div>
                      <div className="w-5 h-1 bg-current rounded"></div>
                      <div className="w-5 h-1 bg-current rounded"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {activeFilter !== 'all' && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {activeFilter === 'web' && <Code className="w-3 h-3" />}
                  {activeFilter === 'mobile' && <Zap className="w-3 h-3" />}
                  {activeFilter === 'design' && <Palette className="w-3 h-3" />}
                  {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Projects
                  <button
                    onClick={() => setActiveFilter('all')}
                    className="ml-2 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 hover:text-gray-800"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>

          {/* Projects Grid/List */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg ${getCategoryColor(project.category)}`}>
                            {getCategoryIcon(project.category)}
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {project.highlights.slice(0, 3).map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.teamSize} team
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                          title="View Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Left Side - Project Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-4 mb-3">
                            <div className={`p-3 rounded-xl ${getCategoryColor(project.category)}`}>
                              {getCategoryIcon(project.category)}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                              <div className="flex items-center gap-3 mt-2">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                                  {project.status}
                                </span>
                                <span className="text-gray-500">
                                  {project.year} • Team of {project.teamSize}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-8">
                            {project.description}
                          </p>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-medium text-gray-700 mb-3">Project Highlights:</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.highlights.map((highlight, idx) => (
                                  <div key={idx} className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-gray-600">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Side - Technologies & Actions */}
                    <div className="lg:w-1/3">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                          >
                            <Eye className="w-5 h-5" />
                            View Live Demo
                            <ArrowRight className="w-5 h-5" />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
                          >
                            <Github className="w-5 h-5" />
                            View Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="mt-8 text-center text-gray-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </div>
    </div>
  );
}