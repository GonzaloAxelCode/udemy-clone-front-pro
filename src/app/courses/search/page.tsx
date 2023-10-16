"use client";
import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import PopoverTooltip from "@/shared/UIComponents/Popovers/PopoverTooltip";
import Title from "@/shared/UIComponents/Texts/Title";
import ArrowDownIcon from "@/shared/UIComponents/icons/ArrowDownIcon";
import FilterIcon from "@/shared/UIComponents/icons/FilterIcon";
import HighestRated from "@/shared/UIComponents/others/HighestRated";
import ReactStars2 from "@/shared/lib/react-stars";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { cn } from "tailwind-cn";
import ListAccordionOptionsSearch from "./components/ListAccordionOptionsSearch";

const data = [
  {
    id: 16,
    image: "https://img-b.udemycdn.com/course/240x135/1879018_95b6_3.jpg",
    title: "Advanced Web Development",
    hours: "3.0",
    dataUpdated: "6/2023",
    highestRated: true,
    numValoraciones: "55,432",
    author: "Jane Smith",
    betSeller: true,
    raiting: "4.8",
    peoples: "3,500",
    price: "89.99",
    description: "Master advanced web development techniques and frameworks.",
    isNew: false,
    isHot: true,
    updatedFormat: "June 2023",
    numLectures: "120",
    levels: "Advanced",
    discount: "74.99",
  },
  {
    id: 17,
    image: "https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg",
    title: "Machine Learning Fundamentals",
    hours: "2.5",
    dataUpdated: "7/2023",
    highestRated: true,
    numValoraciones: "75,621",
    author: "Alex Chen",
    betSeller: true,
    raiting: "4.9",
    peoples: "2,800",
    price: "99.99",
    description: "Master the fundamentals of machine learning and AI.",
    isNew: false,
    isHot: true,
    updatedFormat: "July 2023",
    numLectures: "85",
    levels: "Intermediate",
    discount: "84.99",
  },
  {
    id: 18,
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
    title: "Digital Marketing Strategies",
    hours: "2.0",
    dataUpdated: "8/2023",
    highestRated: true,
    numValoraciones: "42,198",
    author: "Maria Rodriguez",
    betSeller: true,
    raiting: "4.7",
    peoples: "1,900",
    price: "69.99",
    description: "Learn effective digital marketing strategies for success.",
    isNew: false,
    isHot: true,
    updatedFormat: "August 2023",
    numLectures: "70",
    levels: "Intermediate",
    discount: "59.99",
  },
  {
    id: 19,
    image: "https://img-b.udemycdn.com/course/240x135/625204_436a_3.jpg",
    title: "Photography Basics",
    hours: "1.5",
    dataUpdated: "9/2023",
    highestRated: false,
    numValoraciones: "28,987",
    author: "Michael Johnson",
    betSeller: false,
    raiting: "4.5",
    peoples: "1,200",
    price: "49.99",
    description: "A comprehensive guide to photography basics and techniques.",
    isNew: false,
    isHot: true,
    updatedFormat: "September 2023",
    numLectures: "50",
    levels: "Beginner",
    discount: "39.99",
  },
  {
    id: 20,
    image: "https://img-b.udemycdn.com/course/240x135/625204_436a_3.jpg",
    title: "Mobile App Development with React Native",
    hours: "2.5",
    dataUpdated: "10/2023",
    highestRated: false,
    numValoraciones: "38,765",
    author: "Chris Evans",
    betSeller: false,
    raiting: "4.6",
    peoples: "1,600",
    price: "59.99",
    description: "Build mobile apps using React Native and JavaScript.",
    isNew: false,
    isHot: true,
    updatedFormat: "October 2023",
    numLectures: "65",
    levels: "Intermediate",
    discount: "49.99",
  },
  {
    id: 21,
    image: "https://img-b.udemycdn.com/course/240x135/3309182_4ea3_6.jpg",
    title: "Artificial Intelligence and Ethics",
    hours: "1.5",
    dataUpdated: "11/2023",
    highestRated: true,
    numValoraciones: "20,123",
    author: "Sophia Lee",
    betSeller: false,
    raiting: "4.8",
    peoples: "1,100",
    price: "79.99",
    description:
      "Explore the ethical considerations in AI and machine learning.",
    isNew: true,
    isHot: true,
    updatedFormat: "November 2023",
    numLectures: "40",
    levels: "Advanced",
    discount: "69.99",
  },
  {
    id: 22,
    image: "https://img-c.udemycdn.com/course/240x135/1657930_7b48_3.jpg",
    title: "Data Science with Python",
    hours: "3.0",
    dataUpdated: "12/2023",
    highestRated: true,
    numValoraciones: "45,678",
    author: "Daniel Kim",
    betSeller: true,
    raiting: "4.9",
    peoples: "3,200",
    price: "99.99",
    description: "Master data science using Python and machine learning.",
    isNew: true,
    isHot: true,
    updatedFormat: "December 2023",
    numLectures: "100",
    levels: "Intermediate",
    discount: "89.99",
  },
  {
    id: 23,
    image: "https://img-c.udemycdn.com/course/240x135/4866246_c9a9_16.jpg",
    title: "Digital Illustration for Beginners",
    hours: "1.5",
    dataUpdated: "1/2024",
    highestRated: false,
    numValoraciones: "15,432",
    author: "Emily Parker",
    betSeller: false,
    raiting: "4.5",
    peoples: "800",
    price: "49.99",
    description: "Learn the basics of digital illustration and design.",
    isNew: true,
    isHot: true,
    updatedFormat: "January 2024",
    numLectures: "45",
    levels: "Beginner",
    discount: "39.99",
  },
  {
    id: 24,
    image: "https://img-b.udemycdn.com/course/240x135/4527016_a992_5.jpg",
    title: "Entrepreneurship: Start and Grow Your Business",
    hours: "2.5",
    dataUpdated: "2/2024",
    highestRated: true,
    numValoraciones: "25,876",
    author: "Mark Taylor",
    betSeller: true,
    raiting: "4.9",
    peoples: "1,500",
    price: "79.99",
    description:
      "A comprehensive guide to entrepreneurship and business growth.",
    isNew: true,
    isHot: true,
    updatedFormat: "February 2024",
    numLectures: "75",
    levels: "Intermediate",
    discount: "69.99",
  },
  {
    id: 25,
    image: "https://img-c.udemycdn.com/course/240x135/4649166_678c_2.jpg",
    title: "Learn Spanish for Travelers",
    hours: "1.0",
    dataUpdated: "3/2024",
    highestRated: true,
    numValoraciones: "18,765",
    author: "Isabel Lopez",
    betSeller: true,
    raiting: "4.8",
    peoples: "900",
    price: "49.99",
    description: "Basic Spanish phrases and language for travelers.",
    isNew: true,
    isHot: true,
    updatedFormat: "March 2024",
    numLectures: "30",
    levels: "Beginner",
    discount: "39.99",
  },
  {
    id: 26,
    image: "https://img-c.udemycdn.com/course/240x135/4596820_788a_6.jpg",
    title: "Eco-Friendly Home Design",
    hours: "2.0",
    dataUpdated: "4/2024",
    highestRated: false,
    numValoraciones: "10,234",
    author: "Laura Green",
    betSeller: false,
    raiting: "4.5",
    peoples: "700",
    price: "69.99",
    description: "Design and build environmentally friendly homes.",
    isNew: true,
    isHot: true,
    updatedFormat: "April 2024",
    numLectures: "50",
    levels: "Intermediate",
    discount: "59.99",
  },
  {
    id: 27,
    image: "https://img-c.udemycdn.com/course/240x135/4985956_8f22.jpg",
    title: "Introduction to Astronomy",
    hours: "1.5",
    dataUpdated: "5/2024",
    highestRated: true,
    numValoraciones: "22,567",
    author: "Michael Brown",
    betSeller: false,
    raiting: "4.8",
    peoples: "1,100",
    price: "79.99",
    description: "Discover the wonders of the universe with astronomy basics.",
    isNew: true,
    isHot: true,
    updatedFormat: "May 2024",
    numLectures: "40",
    levels: "Beginner",
    discount: "69.99",
  },
  {
    id: 28,
    image: "https://img-c.udemycdn.com/course/240x135/4861820_5d02_2.jpg",
    title: "Mastering the Piano",
    hours: "2.5",
    dataUpdated: "6/2024",
    highestRated: false,
    numValoraciones: "14,321",
    author: "David Smith",
    betSeller: false,
    raiting: "4.6",
    peoples: "600",
    price: "59.99",
    description: "Become a piano maestro with comprehensive piano lessons.",
    isNew: true,
    isHot: true,
    updatedFormat: "June 2024",
    numLectures: "65",
    levels: "Intermediate",
    discount: "49.99",
  },
  {
    id: 29,
    image: "https://img-c.udemycdn.com/course/240x135/3101472_cf8c_2.jpg",
    title: "Cooking Essentials: From Chef to Home Cook",
    hours: "1.5",
    dataUpdated: "7/2024",
    highestRated: true,
    numValoraciones: "19,876",
    author: "Julia Martin",
    betSeller: true,
    raiting: "4.9",
    peoples: "800",
    price: "69.99",
    description:
      "Learn essential cooking skills and techniques from a professional chef.",
    isNew: true,
    isHot: true,
    updatedFormat: "July 2024",
    numLectures: "45",
    levels: "Beginner",
    discount: "59.99",
  },
  {
    id: 30,
    image: "https://img-c.udemycdn.com/course/240x135/4761226_67b3.jpg",
    title: "Effective Time Management for Productivity",
    hours: "2.0",
    dataUpdated: "8/2024",
    highestRated: false,
    numValoraciones: "12,345",
    author: "Sarah Johnson",
    betSeller: false,
    raiting: "4.7",
    peoples: "500",
    price: "49.99",
    description: "Improve your productivity with time management techniques.",
    isNew: true,
    isHot: true,
    updatedFormat: "August 2024",
    numLectures: "60",
    levels: "Intermediate",
    discount: "39.99",
  },
];
const PageSearch = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const searchParams = useSearchParams();
  const order = searchParams.get("q") || "reactjs";

  return (
    <Flex full col noitemscenter>
      <Title className="mb-5 mt-12">{`297 results for “${order}”`}</Title>
      <Flex full className="space-x-4">
        <Button
          onClick={() => setOpenFilters(!openFilters)}
          variant="white"
          size="md"
          extendClass="border-1 flex items-center h-[62px] border-solid border-dark-100"
        >
          <FilterIcon />
          <span>Filter</span>
        </Button>
        <div className="relative  sm:w-auto w-full cursor-pointer">
          <span className="absolute font-bold px-3 pt-2 text-xs ">Sort By</span>
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <ArrowDownIcon />
          </span>
          <select className="sm:w-auto w-full pt-5 px-3 appearance-none select-filter outline-none cursor-pointer min-w-[178px] border-1 h-[62px] border-solid border-dark-100 hover:bg-gray-100">
            <option value="opcion1" selected>
              Most Relevant
            </option>
            <option value="opcion2">Most Reviewed</option>
            <option value="opcion3">Highest Rated</option>
            <option value="opcion3">Newest</option>
          </select>
        </div>
      </Flex>
      <Flex full noitemscenter className="relative z-2 overflow-x-hidden ">
        <Flex
          full
          noitemscenter
          style={{
            marginLeft: openFilters ? "-300px" : "0px",
            transition: "0.45s all",
            width: "118vw",
          }}
          className={cn(" min-h-screen relative  z-2  ")}
        >
          <Flex
            noitemscenter
            full
            className={cn("hidden md2:flex  pr-12 max-w-[300px] py-6")}
          >
            <ListAccordionOptionsSearch />
          </Flex>
          <Flex full noitemscenter col>
            {data.map((el: any, index: any) => {
              return (
                <div key={index}>
                  <PopoverTooltip
                    arrow={false}
                    placement="bottom-start"
                    content={
                      <Flex
                        noitemscenter
                        className="py-6 border-b-1 border-solid border-gray-200 "
                      >
                        <img
                          className="w-[64px] h-[64px]  sm:w-[240px] sm:h-[135px] mr-4"
                          src={el.image}
                        />
                        <Flex col noitemscenter key={el.id} between full>
                          <Flex full col noitemscenter between>
                            <Flex
                              full
                              between
                              noitemscenter
                              className="  font-bold leading-7 "
                            >
                              <span>{el.title}</span>
                              <Flex className="space-x-3 mt-auto">
                                <span className="font-bold text-lg">
                                  s/.{el.price}
                                </span>
                              </Flex>
                            </Flex>
                            <p className="line-h">{el.description}</p>
                            <span className="text-xs text-gray-300">
                              By {el.author}
                            </span>

                            <Flex className="space-x-2 items-center">
                              <div className="flex space-x-2 items-center">
                                <Flex className="space-x-1">
                                  <span className="text-orange-500 font-bold text-sm mt-1">
                                    4.8
                                  </span>
                                  <ReactStars2 />
                                </Flex>
                                <span className="mr-2 text-xs text-gray-300">
                                  {" "}
                                  ({el.numValoraciones})
                                </span>
                                <HighestRated
                                  text="Hot & new"
                                  className="bg-red-200 text-red-500"
                                />
                              </div>
                            </Flex>
                            <span className="text-xs text-gray-300">
                              Updated{" "}
                              <span className="font-bold mr-2">
                                {el.updatedFormat}
                              </span>
                              {el.hours} total hours &middot; {el.levels}
                            </span>
                          </Flex>
                        </Flex>
                      </Flex>
                    }
                  >
                    HOLA XD
                  </PopoverTooltip>
                </div>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageSearch;
