import styles from "@/app/page.module.css";
import ContactForm from "@/components/contact"; //needs the @ signs to direct properly!

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
        <main className={styles.main}>
            <ContactForm />
        </main>
    </div>
  );
}
