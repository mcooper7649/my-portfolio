import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'react-materialize';
import sanityClient from '../client.js';
import './Logo.css';
import { ThemeContext } from '../contexts/ThemeContext';
import featuredProjects from '../data/featuredProjects';

export default function Project() {
  const { isDarkMode } = useContext(ThemeContext);

  const [projectData, setProjectData] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date,
        place,
        language,
        description,
        projectType,
        link,
        tags,
        mainImage{
          asset->{
              _id,
              url
          },
          alt
      }
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredProjects = projectData.filter((project) =>
    project.title.toLowerCase().includes(searchField.toLowerCase())
  );

  const dateSorted = filteredProjects.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  const styles = {
    main: isDarkMode
      ? 'bg-gray-700 min-h-screen lg:p-12'
      : 'bg-img2 min-h-screen lg:p-12',
    section: isDarkMode
      ? 'p-5 container mx-auto bg-gray-800 rounded-lg'
      : 'p-5 container mx-auto bg-gray-800 rounded-lg',
    input: {
      backgroundColor: 'white',
      border: '1px solid white',
      borderRadius: '25px',
      paddingLeft: '3px',
    },
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className="bg-black mb-6 py-1 text-gray-200 rounded text-3xl lg:text-5xl flex justify-center cutive">
          Featured Projects
        </h1>
        <hr className="myHr"></hr>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-lg shadow-xl bg-white p-6"
            >
              <div className="text-4xl mb-2">{project.emoji}</div>
              <h3 className="text-blue-700 text-xl lg:text-2xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed flex-grow">
                {project.blurb}
              </p>
              <ul className="my-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag-pill">
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center px-4 py-2 rounded-md font-bold text-white bg-blue-600 hover:bg-blue-500 transition"
              >
                {project.linkLabel} ↗
              </a>
            </article>
          ))}
        </section>

        <input
          className="p-1 w-full"
          type="search"
          placeholder="🔍 Search more by keyword eg: React, Node, Mongo"
          onChange={handleChange}
          style={styles.input}
        />
        <h1 className="bg-black my-6 py-1 text-gray-200 rounded text-3xl lg:text-5xl flex justify-center cutive">
          More Projects
        </h1>
        <hr className="myHr"></hr>
        {/* <h2 className="text-md lg:text-lg text-gray-600 flex justify-center mb-4 lg:mb-12 cutive">
          Check Out My Projects Below!
        </h2> */}
        <section className="grid lg:grid-cols-2 gap-8">
          {dateSorted &&
            dateSorted.map((project, index) => (
              <article
                key={index}
                className="relative rounded-lg shadow-xl bg-white p-2 lg:p-16"
              >
                <img
                  className="rounded"
                  src={project.mainImage.asset.url}
                  alt={project.mainImage.alt}
                />

                <h3 className="text-blue-600 text-xl lg:text-3xl font-bold mb-2 hover:text-red-700">
                  <Button
                    onClick={() => window.open(project.link, '_blank')}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    <p className="text-red-500 font-bold hover:text-red-400">
                      {' '}
                      {project.title}
                    </p>
                  </Button>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{' '}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{' '}
                    {project.projectType}
                  </span>
                </div>
                <p className="my-6 text-sm lg:text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <ul className="my-6 text-sm lg:text-lg text-gray-700 leading-relaxed">
                  {project.tags &&
                    project.tags.map((tag, index) => {
                      return (
                        <li key={index} className="project-tags">
                          {tag}
                        </li>
                      );
                    })}
                </ul>

                <Button
                  className="project-btn"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <p className="text-red-500 font-bold hover:text-red-400">
                    View The Project
                    <span role="img" aria-label="up pointer">
                      👆🏻
                    </span>
                  </p>
                </Button>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
