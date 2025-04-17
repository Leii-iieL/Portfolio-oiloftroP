import CDA from "@/assets/CDA.png"
import CDA1 from "@/assets/CDA1.png"
import highland_lh from "@/assets/highland_lh.png"
import type_poster from "@/assets/type_poster.png"
import { v4 as uuidv4 } from 'uuid';




const PROJECTS = [
    {
        id: uuidv4(),
        slug: "font-poster",
        title: "Font poster",
        description: "WOW, that image is SMUSHED.",
        category: "print",
        mainImage: type_poster.src,
        images: [
            {
                src: "",
                title: "",
                alt: "",
            }
        ],
    },

    {
        id: uuidv4(),
        slug: "epic-boat-project",
        title: "Epic boat project",
        description: "Wow, wouldja lookat that lake, so very nice, i sure hope the titanic doesnt happen again..",
        category: "web",
        mainImage: CDA1.src,
        images: [
            {
                src: "",
                title: "",
                alt: "",
            }
        ],
    },

    {
        id: uuidv4(),
        slug: "highland-project",
        title: "highland project",
        description: "Amazing, I actually designed something worthwhile.",
        category: "not web",
        mainImage: highland_lh.src,
        images: [
            {
                src: "",
                title: "",
                alt: "",
            }
        ],
    },

]; //this is linking back the original PROJECTS

export default PROJECTS;