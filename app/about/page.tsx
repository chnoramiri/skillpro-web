import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-zinc-50 dark:bg-black py-12 px-4">
      <main className="w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
          About SkillForge.dev
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
            Our Mission
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            SkillForge.dev is dedicated to empowering individuals to build,
            learn, and grow. We believe in providing accessible tools and
            resources that help people master new skills and achieve their
            goals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
            What We Offer
          </h2>
          <ul className="text-lg text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>• Comprehensive learning resources</li>
            <li>• Interactive tools and projects</li>
            <li>• Community support and collaboration</li>
            <li>• Personalized learning paths</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
            Get Started
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
            Ready to begin your journey? Explore our resources and start
            building your skills today.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Back to Home
          </Link>
        </section>
      </main>
    </div>
  );
}
