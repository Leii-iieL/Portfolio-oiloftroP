import Image from "next/image";
import PROJECTS from "@/constants/projects"


export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    const project = PROJECTS.find((project) => project.slug === slug);

    console.log("PROJECT", project);


    return (
        <div>
            <h1>My Project: {project?.title}</h1>

            <p>{project?.description}</p>

            <Image src={project?.mainImage} alt={project?.title} width={200} height={200} />
        </div>
    )
  }