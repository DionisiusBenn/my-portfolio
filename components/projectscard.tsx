'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    year: string;
    status: string;
    tags: string[];
    link: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
            project.status === 'Completed' 
              ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
              : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
          <span>{project.category}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={project.link}
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm group/link"
        >
          View Project
          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}