'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <div>
        <span className="font-bold">©</span>{' '}
        <span className="dark:text-sky-400 text-sky-600 uppercase">
          <Link href="/">Mark Harris</Link>{' '}
        </span>
        <span className="font-bold">2025</span>
      </div>
    </footer>
  );
}
