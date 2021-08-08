import {useRef, useState, useLayoutEffect} from "react";

const useProjects = (project,name) =>{
    let items = useRef({
        projects:{
            recypher:{
                name:"Recypher",
                img: ["Recypher1.jpg","Recypher2.jpg","Recypher3.jpg"],
                desc:"This is a Chrome extension built to aid language learning. I'm an active reader of various news sites like medium while also learning French, this extension allows me to do both at the same time. Recypher searches the pages you visit, prioritizing specific symantec html tags, then randomly selects sentences to be translated into french. After translation it injects them back into the page. Upon hovering over the translated text Recypher will show the original sentence in english. Secondly when reading french articles a user can highlight any text, press control + shift + 3 to get an english translation of the highlighted selection displayed on the page. This 2 stage approach that helps involve the learner at every step in the learning journey and makes the French language as accessible as possible. The Chrome extension is built using JS, HTML, and CSS. While the backend is built using Flask and Azure.",
                tech: ["js","python","flask","html","css"],
                link: null,
            },
            sideScroller:{
                name:"Side Scroller",
                img: ["cartridge.png","SideScroll2.jpg"],  // loading from public
                desc: "Inspired by retro games like Castlevania and Super Mario Bros, made using JavaScript (ES6+) and HTML canvas. I decided not to use any external libraries building this project, instead using this project as an opportunity to solve problems like tile maps, enemy logic and looping parallax with my own implementation. This project was a great opportunity to focus on my javascript fundamentals and organization of larger project structures.",
                tech: ["js", "python","flask","html","css","pg"],
                link: "https://brianadams731.github.io/SideScroller/",
            },
            elderLawForm:{
                name:"Elder Law Form",
                img: ["elderform1.jpg","elderform2.jpg","elderform3.jpg"],
                desc:"This is an application used to onboard new clients at a local law office. This is a complex form featuring 7 pages of various form elements, including 2 dynamic fields that expand to add more fields if needed. This application is animated with Framer Motion, which gives the progress bar and card animations a more polished and natural feel. This application leverages React Hook Forms which helps with form validation and dynamic elements. The onboarding application uses a Flask backend which parses the data collected into a shape the client desires, as well as notifies and serves the data to the attorney when a potential client submits the form.",
                tech: ["js","react","python","flask","html","css"],
                link: "https://elderlaw.netlify.app/",
            },
            soulShine:{
                name:"Clear Cuisine",
                img: [],
                desc:"**Coming Soon**, this is a fully featured web application that aggregates San Francisco restaurant reviews from various sources, while providing detailed information about that restaurant's food and safety. This includes detailed descriptions of a restaurant's potential food safety violations, food safety scores, and the frequency of their violations over time. This application allows registered users to search, review and share images about restaurants they've visited. This application leverages PostGIS to provide geospatial searching through the Postgres database, user authentication and authorization, optimized queries through a Postgres database using large datasets, and a complex SPA which consumes various libraries for mapping, animation, and state management.",
                tech: ["js","react","next","html","css", "flask", "python","pg"],
                link: null,
            }
        },
        about:{
            skills:{
                name:"Skills"
            },
            interests:{
                name:"About Me"
            }
        },
        contact:{
            form:{
                name:"Contact Me",
            },
            connect:{
                name:"Connect With Me"
            }
        }
    })
    const [item,setItem] = useState(items.current[project][name])
    
    useLayoutEffect(()=>{
        setItem(items.current[project][name])
    },[name,project])

    return item;
}


export default useProjects;