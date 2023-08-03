import workEx from '@/public/data/experience.json'
import companyStyles from '@/styles/company.module.css'
import roleStyles from '@/styles/roles.module.css'

const Role = ({ role }) => {
    return (
        <ul className={roleStyles.main_ul}>
            <li className={roleStyles.heading}><h3>{role.role}</h3></li>
            <ul className={roleStyles.sub_ul}>
                {role.experiences.map((experience, index) => {
                    return (
                        <li key={index}>{experience.work}</li>
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