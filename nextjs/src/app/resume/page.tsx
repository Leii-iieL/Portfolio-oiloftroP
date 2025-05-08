import React from 'react';
import styles from "@/app/page.module.css";
import Header from "@/components/header";
        
export default function ProjectsPage() {
  return ( 
    <div className={styles.page}>
        <header>
          <Header title="Goldtrace Studio" /> 
        </header>
      <main className={styles.main}>
      <h1>RESUME</h1>
      </main>
      
    </div>
  );
}
