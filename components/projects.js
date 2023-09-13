import projects from '@/public/data/projects.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import projectStyles from '@/styles/project.module.css'
import styles from '@/styles/projects.module.css'
import Link from 'next/link';
import Masonry from 'react-masonry-css';
import { useEffect, useRef, useState } from 'react';
import Filter from './filter';
import filterStyles from '@/styles/filter.module.css'



const Project = ({ projectDetails, activeTech, visibleTags }) => {

    return (
        <>
            {<div className={projectStyles.project_container}>
                <h3 className={projectStyles.title}>{projectDetails.title}</h3>
                <p className={projectStyles.description}>{projectDetails.description}</p>
                <ul>
                    {projectDetails.points && projectDetails.points.map((point, index) =>
                        <li key={index}>{point}</li>
                    )}
                </ul>
                <div className={projectStyles.technologies_container}>
                    {visibleTags.map((tech, index) =>
                        <span key={index}>{tech}</span>
                    )}
                </div>
                <div className={projectStyles.links}>
                    {projectDetails.github != null && <Link className={projectStyles.github} href={projectDetails.github}><FontAwesomeIcon icon={faGithub} /></Link>}
                    {projectDetails.live != null && <Link className={projectStyles.live} href={projectDetails.live}><span>Demo</span><FontAwesomeIcon icon={faSquareArrowUpRight} /></Link>}
                </div>
            </div>}
        </>
    )
}

const Projects = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };
    const technologies = useRef([]);;
    const [activeTechnologies, setActiveTechnologies] = useState([]);
    const projectsRef = useRef([]);

    useEffect(() => {
        const set = new Set();
        projects.forEach((project) => projectsRef.current.push({ ...project }));
        projectsRef.current.forEach((project) => {
            project.technologies.forEach((tech) => {
                set.add(tech);
            });
            project.visible = true;
        });
        technologies.current = Array.from(set);
        setActiveTechnologies(technologies.current);
    }, []);

    const handleFilterChange = (event) => {
        const filter = event.target.value;
        const isSelected = event.target.checked;
        if (!isSelected) {
            setActiveTechnologies(activeTechnologies.filter((tech) => tech != filter))
        } else {
            setActiveTechnologies([...activeTechnologies, filter]);
        }
    };

    return (
        <>
            <div className={filterStyles.filter_container}>
                <Filter filters={technologies.current} handleChange={handleFilterChange} />
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.projects}
            >
                {projectsRef.current.map((project, index) => {
                    const projectTags = project.technologies;
                    const visibleTags = projectTags.filter(tag => activeTechnologies.includes(tag));

                    if (visibleTags.length > 0) {
                        return (
                            <Project key={index} projectDetails={project} activeTech={activeTechnologies} visibleTags={visibleTags} />
                        );
                    }

                    return null;
                })}
            </Masonry>
        </>
    )
}

export default Projects