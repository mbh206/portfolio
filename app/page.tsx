'use client';
import { useState, useEffect } from 'react';
import { projects, Project } from '../app/data/projects';
import { techCategoryMap } from '../app/data/techCategories';
import Image from 'next/image';

const techPerCategory: Record<string, string[]> = {};
for (const p of projects) {
  for (const t of p.tech) {
    const cat = techCategoryMap[t] || 'Other';
    if (!techPerCategory[cat]) techPerCategory[cat] = [];
    if (!techPerCategory[cat].includes(t)) techPerCategory[cat].push(t);
  }
}
Object.values(techPerCategory).forEach((arr) => arr.sort());

const categories = ['All', ...Object.keys(techPerCategory).sort()];

export default function Home() {
  const messages = [
    'hi',
    'thank you for checking out my portfolio',
    'here are my recent projects',
  ];
  const [messageIndex, setMessageIndex] = useState(0);
  const [showCards, setShowCards] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string>('All');

  useEffect(() => {
    if (messageIndex < messages.length - 1) {
      const t = setTimeout(() => setMessageIndex((i) => i + 1), 1000);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowCards(true), 1500);
      return () => clearTimeout(t);
    }
  }, [messageIndex]);

  const handleCardClick = (proj: Project) => setSelectedProject(proj);
  const closeModal = () => setSelectedProject(null);

  const filtered = projects.filter((p) => {
    if (selectedTech !== 'All') {
      return p.tech.includes(selectedTech);
    } else if (selectedCategory !== 'All') {
      return p.tech.some(
        (t) => (techCategoryMap[t] || 'Other') === selectedCategory,
      );
    }
    return true;
  });

  return (
    <main className="flex flex-col items-center w-full p-2 gap-8">
      {/* Intro */}
      <div className="text-lg md:text-xl min-h-[2rem]">
        <span
          key={messageIndex}
          className="transition-opacity duration-300 opacity-100"
        >
          {messages[messageIndex]}
        </span>
      </div>

      {/* Only show filters & cards after intro finishes */}
      {showCards && (
        <>
          {/* — Category selector — */}
          <div className="text-sm text-gray-500">
            View all or filter by type
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedTech('All');
                }}
                className={`px-3 py-1 rounded text-sm ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* — Tech selector (only when a real category is active) — */}
          {selectedCategory !== 'All' && (
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <button
                onClick={() => setSelectedTech('All')}
                className={`px-2 py-1 rounded text-sm ${
                  selectedTech === 'All'
                    ? 'bg-sky-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-600'
                }`}
              >
                All {selectedCategory}
              </button>
              {techPerCategory[selectedCategory].map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-2 py-1 rounded text-sm ${
                    selectedTech === tech
                      ? 'bg-sky-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-600'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          )}

          {/* — Cards Grid — */}
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((proj) => (
              <div
                key={proj.id}
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(proj)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(proj);
                  }
                }}
                className="rounded-md p-4 bg-white dark:bg-slate-800 shadow transition transform hover:-translate-y-1 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <div className="relative w-full h-72 overflow-hidden rounded-md">
                  <Image
                    src={proj.image}
                    alt={`${proj.title} image`}
                    fill
                    className="object-cover object-top transition-transform ease-in-out hover:scale-105"
                  />
                </div>
                <h2 className="text-lg font-bold mt-4">{proj.title}</h2>
                <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                  {proj.description.substring(0, 100)}...
                </p>
                {/* Show only the category badges here */}
                {/* <div className="mt-3 flex flex-wrap gap-1 text-xs">
                  {Array.from(
                    new Set(
                      proj.tech.map((t) => techCategoryMap[t] || 'Other'),
                    ),
                  ).map((cat) => (
                    <span
                      key={cat}
                      className="inline-block bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </>
      )}

      {/* — Modal (unchanged) — */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          onKeyDown={(e) => e.key === 'Escape' && closeModal()}
          onClick={closeModal}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5">
            <div className="relative">
              <Image
                src={selectedProject.image}
                alt={`${selectedProject.title} image`}
                width={600}
                height={300}
                className="w-full max-h-72 rounded-lg object-contain "
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
              <div className="mb-4 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-pink-200 dark:bg-pink-600 px-2 py-1 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {selectedProject.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block bg-purple-200 dark:bg-purple-600 px-2 py-1 text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mr-2 bg-sky-600 dark:bg-sky-400 text-white px-4 py-2 rounded-md hover:bg-sky-700 dark:hover:bg-sky-500 transition"
              >
                View Live Project
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sky-600 dark:bg-sky-400 text-white px-4 py-2 rounded-md hover:bg-sky-700 dark:hover:bg-sky-500 transition"
              >
                View GitHub Repo
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
