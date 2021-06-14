import {useRef, useState, useLayoutEffect} from "react";

const useProjects = (project,name) =>{
    let items = useRef({
        projects:{
            recypher:{
                name:"Recypher",
                img: ["Recypher1.jpg","Recypher2.jpg","Recypher3.jpg"],
                desc:"This is a chrome extension built to aid language learning. I am an active reader of various news sites like medium, and also learning french. This extension allows me to do both at the same time. Recypher searches the pages you visit prioritizing specific symantec html tags, randomly selecting sentences to be translated into french. After translation it injects them back into the page. Upon hovering translated text the extension will show the original sentence in english. Secondly when reading french articles a user can highlight any text, press a control + shift + 3 and get an english translation of the highlighted selection displayed on the page. This 2 stage approach helps involve the learner at every step in the learning journey and makes the french language as accessible as possible. The chrome extension is build using JS, HTML, and CSS. While the backend is build using Flask and Azure.",
                tech: ["js","python","flask","html","css"],
                link: null,
            },
            sideScroller:{
                name:"Side Scroller",
                img: ["cartrage.png","SideScroll2.jpg"],  // loading from public
                desc: "Inspired by retro games like Castlevania and Super Mario Bros, made using JavaScript (ES6+) and HTML canvas. I decided to not use any external libraries building this project, instead using this as an opportunity to solve problems like tile maps, enemy logic and looping parallax with my own implementation. This project was a great opportunity to focus on my javascript fundamentals and organization of larger project structures.",
                tech: ["js", "html","css"],
                link: "https://brianadams731.github.io/SideScroller/",
            },
            elderLawForm:{
                name:"Elder Law Form",
                img: ["elderform1.jpg","elderform2.jpg","elderform3.jpg"],
                desc:"Application used to onboard new clients at a local law office. This is a complex form featuring 7 pages of various form elements, including a 2 dynamic fields that expand to add more fields if needed. This application is animated with Framer Motion, which gives the progress bar and card animations a more polished and natural feel. This application is using  React Hook Forms which helped with form validation as well as speed up the development process. The onboarding application uses a Flask backend which parses the data collected into a shape the client desired, as well as updating the client when a potential client submits the form, then sends the data to the attorney.",
                tech: ["js","react","python","flask","html","css"],
                link: "https://elderlaw.netlify.app/",
            },
            soulShine:{
                name:"Soul Shine Sisters",
                img: [],
                desc:"Ecommerce store, **currently being built**",
                tech: ["js","react","next","html","css"],
                link: null,
            }
        },
        about:{
            skills:{
                name:"Skills"
            },
            interests:{
                name:"Interests"
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