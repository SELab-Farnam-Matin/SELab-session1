import React from 'react';
import './Projects.css';

const Projects = () => {
    // آرایه اطلاعات پروژه‌ها
    const projectList = [
        {
            id: 1,
            title: 'E-commerce Website',
            description: 'A full-stack e-commerce platform with cart and checkout functionality.',
            techStack: ['React', 'Node.js', 'MongoDB'],
            link: '#'
        },
        {
            id: 2,
            title: 'Weather Dashboard',
            description: 'A real-time weather app fetching data from a public API.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'API'],
            link: '#'
        },
        {
            id: 3,
            title: 'Task Manager',
            description: 'A simple drag-and-drop to-do list application.',
            techStack: ['React', 'Tailwind'],
            link: '#'
        }
    ];

    return (
        <section id="projects" className="projects-section animate-fade-in">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projectList.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-tags">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className="tag">{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noreferrer" className="project-link">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
