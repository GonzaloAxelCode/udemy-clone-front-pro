"use client";
import Button from "@/shared/UIComponents/Buttons/Button";
import Sidebar from "@/shared/UIComponents/Sidebars/Sidebar";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import ArrowLeftIcon from "@/shared/UIComponents/icons/ArrowLeftIcon";
import LanguageIcon from "@/shared/UIComponents/icons/LanguageIcon";
import Link from "next/link";
import categorias from "../Navbar/_data_categories";
import UserImage from "../UserImage";

const MenuPhone = () => {
  return (
    <Sidebar>
      <Flex col noItemsCenter full>
        <Link href="#">
          <Flex full justifyCenter className="bg-gray-100 space-x-1 p-4">
            <UserImage className="w-16 h-16" />
            <span className="flex flex-grow">
              <span className="flex flex-col flex-grow text-dark-100 text-md font-bold">
                Hi, <br />
                GonzaloInstructor <br />
                <span className="text-sm  font-normal text-gray-400">
                  Welcome back
                </span>
              </span>
            </span>
            <Flex className="m-auto">
              <ArrowLeftIcon scale="0.8" />
            </Flex>
          </Flex>
        </Link>
        <Flex justifyCenter full className=" py-3 px-3  ">
          <Link href="#" className="w-full text-purple-300 m-auto ">
            Switch to instructor view
          </Link>
        </Flex>
        <Flex
          col
          full
          noItemsCenter
          className=" py-3 px-3 border-t-1	 border-solid border-t  border-gray-200"
        >
          <Link href="#" className="flex w-full flex-col">
            <span className="text-sm font-bold text-gray-300">Learn</span>
            <span>My learning</span>
          </Link>
        </Flex>

        <Flex
          full
          col
          noItemsCenter
          className="py-3 px-3 border-t-1	 border-solid border-t  border-gray-200"
        >
          <span className="text-sm font-bold text-gray-300">Learn</span>
          <Flex full col noItemsCenter>
            {categorias?.map((el: any, index: number) => {
              return (
                <Link
                  key={index}
                  href="#"
                  className="flex w-full py-2 items-center justify-between space-x-2"
                >
                  <span>{el.text}</span>
                  <span>
                    <ArrowLeftIcon />
                  </span>
                </Link>
              );
            })}
          </Flex>
        </Flex>

        <Flex
          col
          noItemsCenter
          className="p-3 border-t-1	 border-solid border-t  border-gray-200"
        >
          <span className="text-sm font-bold text-gray-300">
            More From Udemy
          </span>
          <div className="py-2">
            <Link href="#">Udemy Business</Link>
          </div>
          <div className="py-2">
            <Link href="#">Get the app</Link>
          </div>
          <div className="py-2">
            <Link href="#">Invite friends</Link>
          </div>
          <div className="py-2">
            <Link href="#">Help</Link>
          </div>
        </Flex>
        <Flex full className="p-3">
          <Button extendClass="w-[60%]" size="md" variant="primary">
            <Flex className="space-x-2">
              <LanguageIcon />
              <span>English</span>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Sidebar>
  );
};

export default MenuPhone;
