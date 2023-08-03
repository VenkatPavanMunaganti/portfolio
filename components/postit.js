import styles from '@/styles/postit.module.css'

const PostIt = ({heading, backgroundColor, rotation, elements}) => {
    return (
        <div className={styles.post_it} style={{ background: backgroundColor, transform: `rotate(${rotation}deg)` }}>
            <h4 style={{ color: "rgb(160, 4, 4)" }}>{heading}</h4>
            <ul>
                {elements.map((element, index)=>{
                    return(
                        <li key={index}>{element}</li>
                    );
                })}
            </ul>
        </div>
    )
}

export default PostIt