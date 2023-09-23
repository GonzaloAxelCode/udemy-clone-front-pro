import React, { useState } from "react";

const AccordionGroup = ({ children }: any) => {
  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (index: any) => {
    setOpenAccordions((prevOpenAccordions: any) => {
      if (prevOpenAccordions.includes(index)) {
        return prevOpenAccordions.filter((item: any) => item !== index);
      } else {
        return [...prevOpenAccordions, index];
      }
    });
  };

  return (
    <div className="w-full">
      {React.Children.map(children, (child: any, index: any) =>
        React.cloneElement(child, {
          //@ts-ignore
          isOpen: openAccordions.includes(index),
          toggle: () => toggleAccordion(index),
        })
      )}
    </div>
  );
};

export default AccordionGroup;
