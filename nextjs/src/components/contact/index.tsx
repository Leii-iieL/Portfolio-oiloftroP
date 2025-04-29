
"use client";
 import { useState } from "react";
 import styles from "./contact.module.css"
 
 const ContactForm = () => {
     const defaultSubmission = {
         status: null,
         message: null,
     }
 
     const [submission, setSubmission] = useState(defaultSubmission);
 
     const handleSubmit = async (formData: any) => {
         console.log(formData);
         let object: any = {};
         formData.forEach((value: string, key: string) => object[key] = value);
         await fetch('/contact/send', {
             method: 'POST',
             body: JSON.stringify(object),
           })
             .then((res) => res.json())
             .then((res) => {
               console.log("MY AWESOME RESPONSE", res);
               setSubmission(res);
             });
     }
 
     return (
         <div>
             {submission?.status ? (
                 <div >
                     {submission.message}
                 </div>
             ) : null}
             
             <form className={styles.contactForm} action={handleSubmit}>
                 <div>
                     <input name="name" id="name-basic" color="primary" type="text" />
                 </div>
                 <div>
                     <input name="email" id="email-basic" type="email" />
                 </div>
                 <div>
                     <textarea name="message" id="message" placeholder="Enter message here!" />
                 </div>
                 <button type="submit" color="secondary">Submit contact</button>
             </form>
         </div>
         
     );
 
 }
 
 export default ContactForm;