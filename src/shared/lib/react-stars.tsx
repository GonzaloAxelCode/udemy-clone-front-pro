"use client";
import { Rating, Star } from "@smastrom/react-rating";
import Flex from "../UIComponents/CustomHTML/Flex";

const ReactStars2 = ({
  count = "5",
  size,
  char,
  edit,
  color1,
  color2,
}: any) => {
  return (
    <Flex>
      <Rating
        style={{
          maxWidth: 70,
        }}
        itemStyles={{
          itemShapes: Star,
          activeFillColor: "#b4690e",
          inactiveFillColor: "transparent",
          activeStrokeColor: "#b4690e",
          inactiveStrokeColor: "#b4690e",
          itemStrokeWidth: 1,
        }}
        readOnly
        orientation="horizontal"
        value={count}
      />
    </Flex>
  );
};

export default ReactStars2;
