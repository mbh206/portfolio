'use client';
import { useState, useEffect } from 'react';
import { projects, Project } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const messages = [
    'hi',
    'thanks for checking out my projects',
    "let's take a look...",
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (messageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setMessageIndex((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowCards(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [messageIndex]);

  const handleCardClick = (project: Project) => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full p-4">
      <div className="text-lg md:text-xl mb-8 min-h-[2rem] relative overflow-hidden">
        {messages[messageIndex]}
      </div>

      {showCards && (
        <div
          className="
        w-full max-w-4xl
        grid grid-cols-1 sm:grid-cols-2 gap-4
        transition-transform
        animate-slide-up
      "
        >
          {projects.map((project) => {
            const isSelected = selectedProject?.id === project.id;
            const isHidden = selectedProject && !isSelected;
            return (
              <div
                key={project.id}
                className={`
              border rounded-md p-4 bg-white dark:bg-sky-200 dark:text-slate-700 shadow
              hover:shadow-lg transition-all cursor-pointer
              ${isSelected ? 'sm:col-span-2' : ''}
              ${isHidden ? 'hidden' : ''}
              ${isSelected ? 'transform scale-105' : ''}
            `}
                onClick={() => handleCardClick(project)}
              >
                <h2 className="text-lg font-bold uppercase pb-4 text-center">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-1 justify-center">
                  {project.tech.map((item, index) => (
                    <p key={index} className="text-sm uppercase text-center">
                      {item}
                    </p>
                  ))}
                </div>
                {!isSelected && (
                  <Image
                    src={project.image}
                    width={500}
                    height={500}
                    alt={project.title}
                    className="border rounded-md"
                  />
                )}
                {isSelected && (
                  <div className="mt-2 text-sm transition-tranform  ease-in-out duration-300">
                    <p>{project.description}</p>
                    <div className="flex justify-center">
                      <Image
                        src={project.image}
                        width={500}
                        height={500}
                        alt={project.title}
                        className="border rounded-md my-2"
                      />
                    </div>
                    <p className="mt-2 text-orange-600">
                      <Link href={project.link} target="_blank">
                        View the {project.title} HERE
                      </Link>
                    </p>
                    <p className="text-blue-400 uppercase">
                      Click again to close
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
