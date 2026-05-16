// src/components/About/About.jsx
import React from 'react';
import styles from './About.module.css';
import htmlIcon from '../../assets/skills/html.png';
import cssIcon from '../../assets/skills/css.png';
import reactIcon from '../../assets/skills/react.png';
import nodeIcon from '../../assets/skills/node.png';

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>

                <div className={styles.aboutItems}>
                    <div className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in building responsive
                                and optimized sites.
                            </p>
                        </div>
                    </div>

                    <div className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimized back-end systems
                                and APIs.
                            </p>
                        </div>
                    </div>

                    <div className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>UI/UX Designer</h3>
                            <p>
                                I have designed multiple landing pages and have created design
                                systems as well.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className={styles.skillsTitle} id="skills">My Skills</h2>
            <div className={styles.skills}>
                {/* Replace with actual skill icons if available */}
                <div className={styles.skillItem}>
                     <img src={htmlIcon} alt="HTML" />
                    <p>HTML</p>
                </div>
                <div className={styles.skillItem}>
                     <img src={cssIcon} alt="CSS" />
                    <p>CSS</p>
                </div>
                <div className={styles.skillItem}>
                     <img src={reactIcon} alt="React" />
                    <p>React</p>
                </div>
                <div className={styles.skillItem}>
                     <img src={nodeIcon} alt="Node.js" />
                    <p>Node.js</p>
                </div>
            </div>
        </section>
    );
};

export default About;
