import React from "react";
import IMG3 from "../../assets/New.PNG";
import IMG4 from "../../assets/tailwind-2.png";
import IMG5 from "../../assets/R.PNG";
import IMG6 from "../../assets/ecommerce.png";
import IMG7 from "../../assets/tailwind1.png";
import IMG8 from "../../assets/movie.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Tailwind Template 1",
      img: IMG7,
      description: "• I was responsible for building an template site using HTML, CSS, Java Script, React and Tailwind CSS.",
      technologies: "React | tailwind",
      link: "https://tailwind-templete-1.vercel.app/",
      github: "https://github.com/fouadmogy10/tailwind-templete-1",
    },
    {
      id: 2,
      title: "Travel, enjoy and live.",
      img: IMG4,
      description:
        "I was responsible for building an Travel site using HTML, CSS, Java Script, React and Tailwind CSS.",
      technologies: "React | tailwind",
      link: "https://earnest-rolypoly-578bfe.netlify.app/",
      github: "https://github.com/fouadmogy10/cart_reduxToolkit",
    },
    {
      id: 3,
      title: "Movie-TMDB",
      img: IMG8,
      description: "TMDB api movies using react, redux toolkit ",
      technologies: "React | bootstrap | ReduxToolkit",
      link: "https://movie-tmdb-pi.vercel.app",
      github: "https://github.com/fouadmogy10/Movie-TMDB",
    },
    {
      id: 4,
      title: "new-event",
      img: IMG3,
      description: "Fully responsive interactive website ",
      technologies: "React | React-bootstrap",
      link: "https://new-event-r.netlify.app/",
      github: "https://github.com/fouadmogy10/new-event-temp---React",
    },
    {
      id: 5,
      title: "retierd project",
      img: IMG5,
      description: "Fully responsive interactive website",
      technologies: "React | bootstrap",
      link: "https://teal-seahorse-070d22.netlify.app/",
      github: "https://github.com/fouadmogy10/react-axios-and-reactRouter",
    },
    {
      id: 6,
      title: "E-commerce app",
      img: IMG6,
      description:
        "• I was responsible for building an e-commerce website using HTML, CSS, Java Script, React,reduxToolkit, bootstrap and Back-End With Node js , Express ,Mongodb . ",
      technologies: "React | bootstrap",
      link: "https://eco-front-mu.vercel.app/",
      github: "https://eco-front-mu.vercel.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
