import Image from "next/image";
import styles from "@/app/page.module.css";
import PROJECTS from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <h1>MY PROJECTS</h1>

      <div className={styles.row}>
          {
            PROJECTS.map((project, index) => {
              return (
                <div key={project.id} className={styles.projectTeaser}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Image src={project.mainImage} alt={project.title} width={200} height={200} />
                </div>
              );
            })
          }
      </div>
    </div>
  );
}
