import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import './intro.css';
import img from "../../assets/img.jpg"

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2 className='pb-5'>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image mb-4">
            <img  src={img} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p className='text-capitalize'>I can accomplish many tasks in record time with high accuracy and quality. I graduated from the Faculty of Computer and Information Science at MET Academy, majoring in Computer Science.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro