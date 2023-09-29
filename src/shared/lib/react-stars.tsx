"use client";
import { Rating } from "@smastrom/react-rating";
import Flex from "../UIComponents/CustomHTML/Flex";

const ReactStars2 = ({ count, size, char, edit, color1, color2 }: any) => {
  return (
    <Flex>
      <Rating
        style={{ maxWidth: 60 }}
        readOnly
        orientation="horizontal"
        value={3}
      />
    </Flex>
  );
};

export default ReactStars2;
