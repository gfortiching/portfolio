import AOS from "aos";
import { useEffect } from "react";

function AnimateOnScroll() {
    useEffect(() => {
      AOS.init({duration: 2000});
    }, []);
}

export default AnimateOnScroll;