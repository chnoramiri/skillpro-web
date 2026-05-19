import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black py-12 px-4">
      <main className="w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
          Welcome to SkillForge.dev
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Discover a new way to build and learn. Start exploring today.
        </p>
        <div className="flex gap-4">
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}
