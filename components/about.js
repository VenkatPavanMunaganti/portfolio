"use client"
import Lottie from "lottie-react";
import animationData from "@/public/lottie/data.json";
import styles from '@/styles/about.module.css';

export default function About() {
  return (
    <div className={styles.section_container}>
        <div className={styles.about_lottie}>
            <Lottie
                animationData={animationData}
                className="flex justify-center items-center"
                loop={true}
            />
        </div>
        <ul className={styles.about_me}>
            <li><span className={styles.highlight_container}><span className={styles.highlight}>full-stack developer</span></span> with a strong foundation in writing optimized algorithms and robust software architecture</li> 
            <li>Skilled in building efficient and fault-tolerant web applications using HTML, CSS, Angular, and Java Spring</li>
            <li>Two years of experience developing enterprise-grade web and batch applications</li>
            <li>Currently pursuing a Master's in Software Engineering Systems at Northeastern University, with a focus on cloud-front applications</li>
            <li>Eager to explore the synergy between web development and cloud computing for building more scalable and efficient systems</li>
        </ul>
    </div>
  );
}
