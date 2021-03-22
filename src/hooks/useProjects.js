import {useRef} from "react";

const useProjects = () =>{
    let projects = useRef({
        projects:{
            recypher:{
                name:"Recypher",
                img: [],
                desc:"Translates English text into french",
                tech: [],
                link: null,
            },
            sideScroller:{
                name:"Side Scroller",
                img: ["/SideScroller.jpg","/Death - Copy.png"],  // loading from public
                desc: "Inspired by retro games like Castlvenia, made using pure js Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                tech: ["js", "html","css"],
                link: "https://brianadams731.github.io/sideScrollerResume/sideScroller/",
            },
            elderLawForm:{
                name:"Elder Law Form",
                img: [],
                desc:"Large form application used to onboard new clients",
                tech: [],
                link: null,
            },
            soulShine:{
                name:"Soul Shine Sisters",
                img: [],
                desc:"Ecommerce store",
                tech: [],
                link: null,
            }
        },
        about:{
            recypher:{
                name:"Recypher",
                img: null,
                desc:null,
                link: null,
            },
        },
        contact:{
            recypher:{
                name:"Recypher",
                img: null,
                desc:null,
                link: null,
            },
        }
    })

    return projects;
}


export default useProjects;