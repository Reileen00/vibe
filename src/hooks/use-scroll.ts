import { useState ,useEffect } from "react";
export const useScroll=(threshold=10)=>{
    const [isScrolled,setIsScroled]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            setIsScroled(window.scrollY>threshold);
        }
        window.addEventListener("scroll",handleScroll);
        handleScroll();
        return ()=>window.removeEventListener("scroll",handleScroll);
    },[threshold]);
    return isScrolled;
};