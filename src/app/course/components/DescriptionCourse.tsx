import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import ArrowDownIcon from "@/shared/UIComponents/icons/ArrowDownIcon";
import { useState } from "react";

const DescriptionCourse = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Flex col noItemsCenter>
      <Title className="mt-3 mb-3 text-2xl">Description</Title>
      <div
        className={` ${
          showFullDescription
            ? "full-description"
            : "collapsed-description show-more-gradient-white"
        }`}
      >
        <p className="text-sm">
          In this course, youll learn how to create your own Slide Styles,
          Transitions and Templates in ProShow Producer 7. Youll learn how to
          create your own graphics that you may want to include in your designs
          and well also cover best practices for saving them, including labeling
          layers, identifying replaceable layers, categorizing your Styles and
          Transitions, and renaming individual slides in a Template. Youll also
          learn about the subtle, but important differences between linked
          layers and matched layers in a show template.
        </p>

        <p className="text-sm mt-3">
          In this course, youll learn how to create your own Slide Styles,
          Transitions and Templates in ProShow Producer 7. Youll learn how to
          create your own graphics that you may want to include in your designs
          and well also cover best practices for saving them, including labeling
          layers, identifying replaceable layers, categorizing your Styles and
          Transitions, and renaming individual slides in a Template. Youll also
          learn about the subtle, but important differences between linked
          layers and matched layers in a show template.
        </p>

        <p className="text-sm mt-3">
          Once youve started to create your own ProShow Designs, you may be
          ready to show them to the world, and maybe even make a little money on
          the side, by selling your designs on the Choice Slides Marketplace.
        </p>
        <p className="text-sm mt-3">
          In this course, youll learn how to create your own Slide Styles,
          Transitions and Templates in ProShow Producer 7. Youll learn how to
          create your own graphics that you may want to include in your designs
          and well also cover best practices for saving them, including labeling
          layers, identifying replaceable layers, categorizing your Styles and
          Transitions, and renaming individual slides in a Template. Youll also
          learn about the subtle, but important differences between linked
          layers and matched layers in a show template.
        </p>

        <p className="text-sm mt-3">
          Once youve started to create your own ProShow Designs, you may be
          ready to show them to the world, and maybe even make a little money on
          the side, by selling your designs on the Choice Slides Marketplace.
        </p>
        {/* Otras partes de la descripción */}
      </div>
      <button
        className="text-sm  flex items-center text-linkpurple mt-5 font-bold"
        onClick={toggleDescription}
      >
        <span>{showFullDescription ? "Show less" : "Show more"}</span>
        <span>
          <ArrowDownIcon fill="#5624d0" />
        </span>
      </button>
    </Flex>
  );
};

export default DescriptionCourse;
/* 
  <Title className="mt-3 mb-3 text-2xl">Who this course is for:</Title>
        <li className="test-sm">
          Anyone who uses ProShow Producer and wants to create their own
          designs!
        </li>
*/
