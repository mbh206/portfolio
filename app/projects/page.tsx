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
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowCards(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [messageIndex]);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  // Handle modal close
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full p-4">
      {/* Intro Messages */}
      <div className="text-lg md:text-xl mb-8 min-h-[2rem] relative overflow-hidden">
        <span
          key={messageIndex}
          className="transition-opacity duration-300 opacity-100"
        >
          {messages[messageIndex]}
        </span>
      </div>

      {/* Project Cards */}
      {showCards && (
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-up">
          {projects.map((project) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => handleCardClick(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(project);
                }
              }}
              className="rounded-md p-4 bg-white dark:bg-slate-800 shadow transition transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 active:scale-95 hover:shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <div className="relative w-full h-72 overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={`${project.title} image`}
                  fill
                  className="object-cover object-top transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <h2 className="text-lg font-bold mt-4">{project.title}</h2>
              <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                {project.description.substring(0, 100)}...
              </p>
              <div className="mt-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 py-1 text-xs rounded mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              closeModal();
            }
          }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5">
            <div className="relative">
              <Image
                src={selectedProject.image}
                alt={`${selectedProject.title} image`}
                width={800}
                height={600}
                className="w-full h-64 object-cover object-top"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-600 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-500 transition"
                aria-label="Close project details modal"
              >
                &#10005;
              </button>
            </div>
            <div className="p-4">
              <h2 id="modal-title" className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-sm mb-4 text-slate-600 dark:text-slate-400">
                {selectedProject.description}
              </p>
              <div className="mb-4">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 py-1 text-xs rounded mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sky-600 dark:bg-sky-400 text-white dark:text-slate-800 px-4 py-2 rounded-md hover:bg-sky-700 dark:hover:bg-sky-500 transition"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
