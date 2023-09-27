import Flex from "@/shared/UIComponents/Wrappers/Flex";
import HighestRated from "@/shared/UIComponents/others/HighestRated";
import ReactStars from "@/shared/lib/react-stars";

const _course = {
  id: 1,
  image: "https://img-c.udemycdn.com/course/480x270/5448338_bbd5_6.jpg",
  title: "Video Production: Create Corporate & Interview Videos",
  hours: "1.5",
  dataUpdated: "4/2023",
  highestRated: false,
  numValoraciones: "114,334",
  author: "Gonzalo Axel",
  betSeller: false,
  raiting: "4.7",
  peoples: "1,400",
  price: "59.90",
  //Estra
  description:
    "Hands-On Raspberry Pi Projects: Unleash Your Creativity with Python, Linux, GPIO, Thingspeak, AWS IoT Core and IFTTT",
  isNew: true,
  isHot: true,
  updatedFormat: "Agustus 2023",
  numLectures: "106",
  levels: "All Levels",
  discount: "48.90",
};
const FeaturedCourse = () => {
  return (
    <Flex noItemsCenter className="p-6 hr-full hover:bg-gray-100">
      <img src={_course.image} className="w-full mr-6" />
      <Flex col noItemsCenter key={_course.id} between full>
        <Flex full col noItemsCenter between>
          <span className="text-2xl font-bold mb-2 leading-7 ">
            {_course.title}
          </span>
          <p className="line-h">{_course.description}</p>
          <span className="text-xs text-gray-300">By {_course.author}</span>

          <Flex className="space-x-2 items-center">
            <div className="flex space-x-2 items-center">
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
              <span className="mr-2 text-xs text-gray-300">
                {" "}
                ({_course.numValoraciones})
              </span>
              <HighestRated
                text="Hot & new"
                className="bg-red-200 text-red-500"
              />
            </div>
          </Flex>
          <span className="text-xs text-gray-300">
            Updated{" "}
            <span className="font-bold mr-2">{_course.updatedFormat}</span>
            {_course.hours} total hours &middot; {_course.levels}
          </span>
        </Flex>

        <Flex className="space-x-3 mt-auto">
          <span className="font-bold text-lg">s/.{_course.price}</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FeaturedCourse;
