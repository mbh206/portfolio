'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-center gap-3">
        <span className="font-bold">©</span>{' '}
        <span className="dark:text-sky-400 text-sky-600 uppercase">
          <Link href="/">Mark Harris</Link>{' '}
        </span>
        <span className="font-bold">2025</span>
      </div>
    </footer>
  );
}
