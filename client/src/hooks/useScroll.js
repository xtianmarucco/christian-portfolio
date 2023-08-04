import React from "react";

const useSmoothScroll = () => {

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const yOffset = -50; // You can adjust the offset to fit your layout
          const y =
            sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
        return scrollToSection;
      };
    
};
 export default useSmoothScroll