import React from 'react';
import styles from "@/app/page.module.css";
import Header from "@/components/header";
        
export default function ProjectsPage() {
  return ( 
    <div className={styles.page}>
       <Header /> {/* Include the Header component here */}
      <main className={styles.main}>
      </main>
      <h1>RESUME</h1>
    </div>
  );
}
