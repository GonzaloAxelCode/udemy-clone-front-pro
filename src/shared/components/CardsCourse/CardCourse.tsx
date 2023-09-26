import Flex from "@/shared/UIComponents/Wrappers/Flex";
import ReactStars from "@/shared/lib/react-stars";
import Link from "next/link";
interface CourseProps {
  id: number;
  image: string;
  title: string;
  hours: string;
  dataUpdated?: string;
  highestRated?: boolean;
  numValoraciones: string;
  author: string;
  betSeller?: boolean;
  rating?: string;
  peoples?: string;
  price: string;
}

const CardCourse = ({
  id,
  image,
  title,
  hours,
  dataUpdated,
  highestRated,
  numValoraciones,
  author,
  betSeller,
  rating,
  peoples,
  price,
}: CourseProps) => {
  return (
    <Flex
      key={id}
      noItemsCenter
      between
      col
      full
      className="justify-between py-4"
    >
      <img src={image} className="w-full" />

      <Flex full col noItemsCenter between>
        <span className="text-md font-bold text-dark-100 mt-3 leading-4 ">
          {title}
        </span>
        <span className="text-xs text-gray-300">{author}</span>

        <Flex col noItemsCenter className="space-x-2 items-center">
          <Link href="#" className="flex space-x-2 items-center">
            <Flex className="space-x-1">
              <span className="text-orange-500 font-bold text-sm mt-1">
                4.8
              </span>
              <span>
                <ReactStars
                  count={5}
                  size="15px"
                  char="★"
                  edit={false}
                  color1={"#b4690e"}
                  color2={"#b4690e"}
                />
              </span>
            </Flex>
            <span className="text-xs text-gray-300"> ({numValoraciones})</span>
          </Link>
        </Flex>
      </Flex>
      <span className="text-xs text-gray-300">
        {" "}
        {hours} total hours &middot; 46 lectures <br />
        &middot; all levels
      </span>
      <Flex className="space-x-3  mr-auto ">
        <span className="font-bold text-md">s/.{price}</span>
      </Flex>
    </Flex>
  );
};

export default CardCourse;
