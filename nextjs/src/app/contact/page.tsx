import styles from "@/app/page.module.css";
import ContactForm from "@/components/contact"; //needs the @ signs to direct properly!
import Header from '@/components/header';

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
       <Header title="Goldtrace Studio" /> 
        <main className={styles.main}>
            <ContactForm />
        </main>
    </div>
  );
}
