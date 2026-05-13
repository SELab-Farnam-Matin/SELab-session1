// src/components/Home/Home.jsx
import React from 'react';
import styles from './Home.module.css';
import heroImage from '../../assets/hero/heroImage.png';

import linkedinIcon from '../../assets/icons/linkedinIcon.png';
import githubIcon from '../../assets/icons/githubIcon.png';

const Home = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Farnam Forghani</h1>
                <p className={styles.description}>
                    I'm a full-stack developer with 3 years of experience using React and Node.js.
                    Reach out if you'd like to learn more!
                </p>
                <div className={styles.contactButtons}>
                    <a href="mailto:farnam1104@gmail.com" className={styles.contactBtn}>Contact Me</a>
                    {/* Optional: Add social media links */}

              <a href="https://linkedin.com/in/farnam-forghani" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://github.com/farnamforghani" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <img src={githubIcon} alt="GitHub" />
              </a>

                </div>
            </div>
            <img
                src={heroImage}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};

export default Home;
