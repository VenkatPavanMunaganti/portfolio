import education from '@/public/data/education.json'
import educationStyles from '@/styles/education.module.css'
const Education = ({ university }) => {
    return (
        <div className={educationStyles.education}>
            <div className={educationStyles.tape_section}></div>
            <p className={educationStyles.education_title}>{university.name}</p>
            <div className={educationStyles.education_content}>
                <div className={educationStyles.program}>
                    {university.degree} 
                    <span className={educationStyles.timeline}>
                        {university.start} - {university.end}
                    </span>
                </div>
                <ul className={educationStyles.learnings}>
                    {university.learnings.map((skill) =>
                        <li key={skill.id}>{skill.data}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

const Educations = () => {
    return (
        <div className={educationStyles.education_container}>
            {education.map((university) => {
                return (
                    <Education key={university.id} university={university} />
                )
            })}
        </div>
    )
}

export default Educations