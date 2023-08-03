import PostIt from './postit'

const Skills = () => {
    const languages = {
        heading: "Languages",
        backgroundColor: "#FEFA98",
        rotation: "3",
        elements: ["Java", "JavaScript", "Python", "Go", "TypeScript"]
    }

    const frontendTech = {
        heading: "Frontend Technologies",
        backgroundColor: "#FEFA92",
        rotation: "-4",
        elements: ["React", "Angular", "HTML5 & CSS3", "JQuery", "Redux"]
    }

    const backendTech = {
        heading: "Backend Technologies",
        backgroundColor: "#FEFA92",
        rotation: "10",
        elements: ["Spring", "Servlets & JSP", "NodeJS", "ExpressJS", "Flask"]
    }

    const databases = {
        heading: "Databases",
        backgroundColor: "#FEFA92",
        rotation: "-8",
        elements: ["Oracle", "MySQL", "MongoDB", "PostgreSQL"]
    }
    return (
        <div className="container">
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: space-around;
                    padding-right: 5rem;
                }
            `}</style>
            <PostIt heading={languages.heading}
                backgroundColor={languages.backgroundColor}
                rotation={languages.rotation}
                elements={languages.elements} />

            <PostIt heading={frontendTech.heading}
                backgroundColor={frontendTech.backgroundColor}
                rotation={frontendTech.rotation}
                elements={frontendTech.elements} />

            <PostIt heading={backendTech.heading}
                backgroundColor={backendTech.backgroundColor}
                rotation={backendTech.rotation}
                elements={backendTech.elements} />

            <PostIt heading={databases.heading}
                backgroundColor={databases.backgroundColor}
                rotation={databases.rotation}
                elements={databases.elements} />

        </div>
    )
}

export default Skills