import workEx from '@/public/data/experience.json'
import companyStyles from '@/styles/company.module.css'
import roleStyles from '@/styles/roles.module.css'
import filterStyles from '@/styles/filter.module.css'
import { useEffect, useRef, useState } from 'react'
import Filter from './filter'


const Role = ({ role }) => {

    useEffect(() => {

        for (let i = 0; i < role.experiences.length; i++) {
            role.experiences[i]['visibility'] = true
        }

        role.technologies.forEach(technology => {
            activeSelectionsRef.current.push(technology)
        });

    }, [])

    const [selectedExperience, setSelectedExperience] = useState(
        role.experiences
    );

    const activeSelectionsRef = useRef([]);

    const handleFiltering = (event) => {
        const filteredTechnology = event.target.value;
        const isSelected = event.target.checked;
        if (isSelected) {
            if (!activeSelectionsRef.current.includes(filteredTechnology)) {
                activeSelectionsRef.current = [...activeSelectionsRef.current, filteredTechnology];
            }
            for (let i = 0; i < role.experiences.length; i++) {
                const experienceTags = role.experiences[i].tags;
                role.experiences[i].visibility = true;
                for (let j = 0; j < experienceTags.length; j++) {
                    if (!activeSelectionsRef.current.includes(experienceTags[j]))
                        role.experiences[i].visibility = false;
                }
            }
        } else {
            for (let i = 0; i < role.experiences.length; i++) {
                if (role.experiences[i].tags.includes(filteredTechnology)) {
                    role.experiences[i].visibility = false;
                    activeSelectionsRef.current = activeSelectionsRef.current.filter(
                        (tech) => tech !== filteredTechnology
                    );
                }
            }
        }
        setSelectedExperience(role.experiences.filter((experience) => experience.visibility))
    };

    return (
        <ul className={roleStyles.main_ul}>
            <li className={roleStyles.heading}><h3>{role.role}</h3></li>
            <div className={filterStyles.filter_container}>
                <Filter filters={role.technologies} handleChange={handleFiltering} />
            </div>
            <ul className={roleStyles.sub_ul}>
                {selectedExperience.map((experience, index) => {
                    return (
                        <li key={index}>
                            {experience.work}
                            <span className={roleStyles.tags}>
                                {experience.tags.map((tag, index) => {
                                    if (activeSelectionsRef.current.length === 0) {
                                        return (
                                            <span key={index} className={roleStyles.tag}>{tag}</span>
                                        )
                                    } else {
                                        for (let i = 0; i < activeSelectionsRef.current.length; i++) {
                                            console.log(activeSelectionsRef.current[i])
                                            if (activeSelectionsRef.current[i] === tag)
                                                return (
                                                    <span key={index} className={roleStyles.tag}>{tag}</span>
                                                )
                                        }
                                    }
                                })}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </ul>
    )
}

const Company = ({ name, location, roles }) => {
    return (
        <>
            <span className={companyStyles.highlight_container}><span className={companyStyles.highlight}><h2 className={companyStyles.heading}>{name}, {location}</h2></span></span>
            {roles.map((role, index) => {
                return (
                    <Role key={index} role={role} />
                )
            })}
        </>
    )
}

const Experience = () => {
    return (
        <div>
            {workEx.map((experience, index) => {
                return (
                    <Company key={index} name={experience.company} location={experience.location} roles={experience.roles} />
                );
            })}
        </div>
    )
}

export default Experience