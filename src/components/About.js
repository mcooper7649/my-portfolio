import React, { useState, useEffect, useContext } from 'react';
import sanityClient from '../client.js';
import './Logo.css';
import imageUrlBuilder from '@sanity/image-url';
import { ThemeContext } from '../contexts/ThemeContext';
import { ContactUs } from './ContactForm.js';
import headshot from '../images/headshot.png';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// Truthful, current focus areas. Kept general and accurate — no fabricated
// employers, dates, or credentials.
const focusAreas = [
  'Full-stack web — React, Next.js & TypeScript',
  'Native Android development in Kotlin',
  'Self-hosted homelab on Docker',
  'Workflow automation with n8n',
  'Home Assistant smart-home integrations',
  'PostgreSQL & REST API design',
  'Practical AI tooling for everyday workflows',
];

export default function About() {
  const { isDarkMode } = useContext(ThemeContext);

  // Sanity supplies an optional avatar + one-line bio. We render the page
  // immediately regardless of whether that request succeeds, so the About
  // page never gets stuck on a loading spinner.
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        "bio": bio[0].children[0].text,
        "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data && data[0]))
      .catch(console.error);
  }, []);

  const avatarSrc =
    author && author.authorImage
      ? urlFor(author.authorImage).url()
      : headshot;

  const styles = {
    classes: isDarkMode
      ? 'bg-gray-700 mySection pb-20'
      : 'pb-20 bg-img2 mySection',
    text: isDarkMode ? 'text-blue-400' : 'text-red-700',
  };

  return (
    <main className={styles.classes}>
      <div className="p-5 mx-auto">
        <section className="overflow-hidden max-w-5xl mx-auto items-center bg-black bg-opacity-50 rounded shadow-2xl lg:flex py-6 lg:px-6">
          <img
            src={avatarSrc}
            className="rounded-full w-44 h-44 lg:w-64 lg:h-64 mx-auto lg:mx-0 lg:mr-8 object-cover"
            alt="Michael Cooper"
          />
          <div className="overflow-hidden w-full lg:w-10/12 p-5 rounded text-lg bg-red-200 bg-opacity-75 mt-3 sm:mb-3">
            <h1 className="p-2 m-2 text-center cursive text-3xl lg:text-5xl text-gray-900 mb-4">
              👋 Hey there. I&apos;m{' '}
              <span className={styles.text}>Michael</span>
            </h1>

            <p className="lg:text-xl px-4 pb-3 text-gray-900 leading-relaxed">
              I&apos;m a senior full-stack engineer who likes shipping real
              things end to end — from the React/Next.js front end down to the
              PostgreSQL schema and the Docker host it all runs on. By day I work
              across the web stack and native Android (Kotlin); by night I run a
              self-hosted homelab where n8n, Home Assistant, and a stack of
              containers quietly automate the boring parts of life.
            </p>
            <p className="lg:text-xl px-4 pb-3 text-gray-900 leading-relaxed">
              Lately I&apos;ve been folding practical AI tooling into those
              workflows and writing about what actually works on the{' '}
              <a
                className="font-bold underline hover:text-red-700"
                href="https://blog.mycodedojo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                blog
              </a>
              .
            </p>

            <ul className="flex flex-wrap justify-center gap-2 px-4 pb-4">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="text-xs lg:text-sm font-bold text-gray-900 bg-white bg-opacity-70 rounded-full px-3 py-1 m-1"
                >
                  {area}
                </li>
              ))}
            </ul>

            <div className="text-white">
              <ContactUs />
              <p className="text-lg lg:text-xl p-5 text-center text-gray-900">
                Wanna talk about code, the homelab, or a new opportunity? Reach
                out — or find me on{' '}
                <a
                  className="font-bold underline"
                  href="https://github.com/mcooper7649"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{' '}
                and{' '}
                <a
                  className="font-bold underline"
                  href="https://www.linkedin.com/in/mcooper305/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
