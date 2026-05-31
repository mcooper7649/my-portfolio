import React from 'react';

// A self-contained identity hero. Previously this pulled rotating quotes from
// quotable.io; that external dependency is gone in favor of a fast, accurate
// introduction that renders instantly and never blocks on a network call.

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Kotlin / Android',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'n8n',
  'Home Assistant',
];

export default function Hero() {
  return (
    <div>
      <h2 className="section-title px-3 mb-6 text-white lg:text-4xl uppercase">
        Welcome to the Dojo
      </h2>
      <section className="content justify-center lg:px-8 lg:mx-20">
        <div className="h-auto min-w-screen wrapper pb-8 pt-6 px-6 mx-4 rounded shadow-2xl text-center">
          <p className="myText uppercase tracking-widest text-sm md:text-base text-blue-200 mb-3">
            Senior Full-Stack &amp; Homelab Engineer
          </p>
          <h1 className="myText break-words text-4xl md:text-6xl font-bold cursive mb-4">
            Hi, I&apos;m <span className="text-blue-300">Michael Cooper</span>
          </h1>
          <p className="myText max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed mb-6">
            I build production web apps with React &amp; Next.js, ship native
            Android in Kotlin, and run a self-hosted homelab where Docker, n8n
            automations, Home Assistant, and PostgreSQL do the heavy lifting.
            Lately I&apos;m wiring practical AI tooling into the things I use
            every day.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs md:text-sm font-bold text-blue-100 bg-blue-900 bg-opacity-50 rounded-full px-3 py-1 m-1"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/project"
              className="m-2 inline-block px-6 py-3 rounded-md font-bold text-white bg-blue-600 hover:bg-blue-500 transition shadow-lg"
            >
              View Projects
            </a>
            <a
              href="https://blog.mycodedojo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 inline-block px-6 py-3 rounded-md font-bold text-blue-200 border border-blue-300 hover:bg-blue-900 hover:bg-opacity-40 transition"
            >
              Read the Blog
            </a>
            <a
              href="https://github.com/mcooper7649"
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 inline-block px-6 py-3 rounded-md font-bold text-blue-200 border border-blue-300 hover:bg-blue-900 hover:bg-opacity-40 transition"
            >
              <i className="fab fa-github mr-2"></i>GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
