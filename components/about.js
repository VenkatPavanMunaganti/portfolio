"use client"
import Lottie from "lottie-react";
import animationData from "@/public/lottie/data.json";
import styles from '@/styles/about.module.css';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

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
      <div className={styles.mobile_view}>
        <Image className={styles.me_mobile} src="/images/Meeee.png" alt="me" width="100" height="100" />
        <div className={styles.m_about_container}>
          <div className={styles.m_about_me}>
            <p className={styles.m_salutation}>Hey, I'm</p>
            <p className={styles.m_name}> Pavan Munaganti</p>
            <div className={styles.roles}>
              <p>Full Stack Dev</p>
              <p>Java Dev</p>
            </div>
          </div>
          <div className={styles.socials}>
            <p>Wanna connect?</p>
            <a
              href="https://www.linkedin.com/in/venkatpavanmunaganti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

        </div>
      </div>
      <ul className={styles.about_me}>
        <li><span className={styles.highlight_container}><span className={styles.highlight}>full-stack developer</span></span> with 3+ years of experience developing robust and modular full stack applications</li>
        <li>Skilled in building efficient and fault-tolerant web applications using HTML, CSS, Angular, and Java Spring</li>
        <li>3+ of experience developing enterprise-grade web and batch applications</li>
        <li> Master's in Software Engineering Systems at Northeastern University, with a focus on cloud-front applications</li>
        <li>Eager to explore the synergy between web development and cloud computing for building more scalable and efficient systems</li>
      </ul>
    </div>
  );
}
