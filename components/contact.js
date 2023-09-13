import React, { useEffect, useRef } from 'react'
import styles from '@/styles/contact.module.css'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    const name = useRef(null);
    const message = useRef(null);
    const email= useRef(null);
    const mobile= useRef(null);

    useEffect(() => {
        const editableElements = document.querySelectorAll('.editable');
        console.log(editableElements)
        const handleBackspace = (e) => {
            console.log("e.key", e.key)
            if (e.key === 'Backspace') {
                if(e.target.textContent.length === 1){
                    e.preventDefault();
                    e.target.textContent = ""
                }
                if(e.target.textContent.length === 0){
                    e.preventDefault();
                }
            }
        };

        editableElements.forEach((element) => {
            element.addEventListener('keydown', handleBackspace);
        });

        return () => {
            editableElements.forEach((element) => {
                element.removeEventListener('keydown', handleBackspace);
            });
        };
    }, []);

    const hanbleSubmit= () =>{
        console.log("name", name.current.innerHTML)
    }

    return (
        <div className={styles.contact_container}>
            <p>Hey Munaganti,</p> <br />
            <p>
                I'm <span id="your-name" ref={name} className={`editable ${styles.editable}`}  contentEditable="true" data-placeholder="your name"></span>, and I wanted to reach out to you for <span id="reason" ref={message} className={`editable ${styles.editable}`} contentEditable="true" data-placeholder=" your message"></span>.
            </p>
            <br />
            <p>You can contact me at <span id="your-email" ref={email} className={`editable ${styles.editable}`} contentEditable="true" data-placeholder=" your email address"></span> or call me on <span id="your-mobile" ref={mobile} className={`editable ${styles.editable}`} contentEditable="true" data-placeholder=" your mobile number"></span>
                .</p>
            <br />
            <p>Looking forward to connecting soon!</p>
            <br /><br />
            <p>Best regards,<br /><span id="your-signature" ref={name} className={`editable ${styles.editable}`} contentEditable="true" data-placeholder=" your name"></span></p>

            <button className={styles.contact_btn} onClick={hanbleSubmit}>
                Post it
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    )
}

export default Contact