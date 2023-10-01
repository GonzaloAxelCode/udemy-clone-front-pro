import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import InputTexts from "@/shared/UIComponents/Inputs/InputTexts";
import PopoverTooltip from "@/shared/UIComponents/Popovers/PopoverTooltip";
import ArrowDownIcon from "@/shared/UIComponents/icons/ArrowDownIcon";
import Link from "next/link";
import { useState } from "react";
const HeaderSearchCourse = () => {
  const [form, setForm] = useState({
    keywords: "",
  });
  const onChange = (e: any, valid: boolean = true) =>
    setForm({ ...form, [e.target.name]: valid ? e.target.value : "" });

  return (
    <Flex full col noitemscenter className="mb-6">
      <Flex full between className="">
        <Flex className="space-x-6">
          <Flex>
            <InputTexts
              variant="search"
              place="Search your courses"
              value={form.keywords}
              name="keywords"
              type="text"
              onChange={onChange}
            />
          </Flex>

          <PopoverTooltip
            click
            content={
              <Flex>
                <Button
                  extendClass="hover:bg-gray-100 flex items-center border-1 border-solid border-dark-100"
                  size="md"
                  variant="invert-primary"
                >
                  <span> Newest</span>
                  <span>
                    <ArrowDownIcon />
                  </span>
                </Button>
              </Flex>
            }
            placement="bottom"
            arrow={false}
          >
            <Flex col noitemscenter className=" w-[200px] py-3">
              <Link
                href="#"
                className="text-sm py-2 px-4  w-full  text-gray-300 hover:text-purple-300 m-auto "
              >
                Newest
              </Link>
              <Link
                href="#"
                className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
              >
                Oldest
              </Link>
              <Link
                href="#"
                className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
              >
                A-Z
              </Link>
              <Link
                href="#"
                className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
              >
                Z-A
              </Link>
              <Link
                href="#"
                className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
              >
                Published first
              </Link>
              <Link
                href="#"
                className="text-sm  py-2 px-4   w-full  text-gray-300 hover:text-purple-300 m-auto "
              >
                Unpublished first
              </Link>
            </Flex>
          </PopoverTooltip>
        </Flex>

        <Button size="md" variant="purple">
          New course
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeaderSearchCourse;
