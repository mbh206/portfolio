import Image from 'next/image';
import Footer from './components/footer';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr_40px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Ruby on Rails, React, Next.js, Tailwind</h1>
        <Image
          className="dark:invert rounded-full animate-slowspin hover:[animation-play-state:paused]"
          src="/logo.svg"
          alt="Mark Harris logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <Footer />
    </div>
  );
}
