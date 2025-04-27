// components/TechGroups.tsx
import { techCategoryMap } from '../data/techCategories';

export function TechGroups({ tech }: { tech: string[] }) {
  const cats = Array.from(
    new Set(tech.map((t) => techCategoryMap[t] || 'Other')),
  );

  return (
    <div className="flex flex-wrap gap-2">
      {cats.map((cat) => (
        <span
          key={cat}
          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded"
        >
          {cat}
        </span>
      ))}
    </div>
  );
}
