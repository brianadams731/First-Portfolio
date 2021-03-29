import {useRef, useState, useEffect} from "react";

const useProjects = (project,name) =>{
    let items = useRef({
        projects:{
            recypher:{
                name:"Recypher",
                img: [],
                desc:"Translates English text into French",
                tech: ["js","python","flask","html","css"],
                link: null,
            },
            sideScroller:{
                name:"Side Scroller",
                img: ["cartrage.png","Death - Copy.png"],  // loading from public
                desc: "Inspired by retro games like Castlvenia, made using pure js Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                tech: ["js", "html","css"],
                link: "https://brianadams731.github.io/sideScrollerResume/sideScroller/",
            },
            elderLawForm:{
                name:"Elder Law Form",
                img: [],
                desc:"Large form application used to onboard new clients",
                tech: ["js","react","html","css"],
                link: null,
            },
            soulShine:{
                name:"Soul Shine Sisters",
                img: [],
                desc:"Ecommerce store",
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
    
    useEffect(()=>{
        setItem(items.current[project][name])
    },[name,project])

    return item;
}


export default useProjects;