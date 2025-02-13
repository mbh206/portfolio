import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center">
      <div className="flex flex-col mx-10 gap-2 md:text-center md:max-w-xl">
        <h1 className="font-black uppercase text-slate-200">
          Hi, welcome to my portfolio
        </h1>
        <h2 className="text-slate-300">
          I&#39;m a (mostly) full-stack developer (front-end by nature) and
          designer who loves to tinker and learn new things.
        </h2>
        <h2 className="text-slate-400">
          I have several projects here built in Ruby on Rails, React, Bootstrap,
          JavaScript, and plain old HTML & CSS. This site was built in Next.js
          and Tailwind because I wanted to try them out.
        </h2>
      </div>
      <div className="flex justify-center">
        <Link href="/projects">
          <Image
            className="dark:invert rounded-full animate-slowspin hover:[animation-play-state:paused]"
            src="/logo.svg"
            alt="Mark Harris logo"
            width={200}
            height={38}
            priority
          />
        </Link>
      </div>
    </main>
  );
}
