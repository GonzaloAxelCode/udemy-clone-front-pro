import Link from "next/link";
import Flex from "../../UIComponents/CustomHTML/Flex";
import PopoverTooltip from "../../UIComponents/Popovers/PopoverTooltip";
import NotiIcon from "../../UIComponents/icons/NotiIcon";
import UserImage from "../../components/UserImage";

const NavbarInstructor = () => {
  return (
    <Flex
      full
      style={{
        position: "absolute",
        zIndex: 30,
      }}
      className="bg-white h-[50px] px-4 py-8  w-full"
      between={true}
    >
      <Flex></Flex>
      <Flex className="flex-end  space-x-5 px-4">
        <PopoverTooltip
          arrow={false}
          placement="bottom-start"
          content={
            <Link href="#" className="text-sm">
              Student
            </Link>
          }
        >
          <Flex className=" w-[288px] px-4 py-3">
            <p className="text-sm text-gray-300 text-center m-auto leading-5 ">
              Switch to the student view here - get back to the courses you’re
              taking.
            </p>
          </Flex>
        </PopoverTooltip>

        <PopoverTooltip
          arrow={false}
          placement="bottom-start"
          content={
            <Link href="#">
              <NotiIcon />
            </Link>
          }
        >
          <Flex col className="w-[288px]  px-4 py-3">
            <Flex between full className="pb-4">
              <p className="text-lg text-dark-100  font-bold ">Notifications</p>
              <Link href="#" className="text-sm text-purple-400 font-bold">
                Settings
              </Link>
            </Flex>
            <p className="text-sm text-gray-300 text-center m-auto leading-5">
              No notifications.
            </p>
          </Flex>
        </PopoverTooltip>

        <PopoverTooltip
          arrow={false}
          placement="bottom-start"
          content={
            <Link href="#">
              <UserImage className="w-[32px] h-[32px]" />
            </Link>
          }
        >
          <Flex className="text-dark-100  w-[260px]">
            <Flex col noitemscenter full>
              <Link href="#" className="p-4">
                <Flex full justifycenter className=" space-x-3 ">
                  <UserImage className="w-[64px] h-[64px]" />

                  <Flex col noitemscenter justifycenter>
                    <span
                      style={{
                        fontSize: "1rem",
                      }}
                      className="text-dark-100 hover:text-purple-300 font-bold"
                    >
                      GonzaloInstructor
                    </span>

                    <span
                      style={{
                        fontSize: "0.75rem",
                      }}
                      className="font-normal text-gray-300"
                    >
                      gonzaloaxelh@gmail.com
                    </span>
                  </Flex>
                </Flex>
              </Link>
              <Flex justifycenter full className="hr-top">
                <Link
                  href="#"
                  className="text-sm  p-4 pl-3  w-full  text-gray-300 hover:text-purple-300 m-auto "
                >
                  Student
                </Link>
              </Flex>
              <Flex justifycenter full className="hr-top">
                <Link
                  href="#"
                  className="text-sm p-4 pl-3 w-full  text-gray-300 hover:text-purple-300 m-auto "
                >
                  Notifications
                </Link>
              </Flex>
              <Flex col justifycenter full className="hr-top">
                <Link
                  href="#"
                  className="text-sm  p-4 pl-3  w-full  text-gray-300 hover:text-purple-300 m-auto "
                >
                  Acount Settings
                </Link>
                <Link
                  href="#"
                  className="text-sm  pt-0 p-4 pl-3  w-full  text-gray-300 hover:text-purple-300 m-auto "
                >
                  Payout & Tax settings
                </Link>
              </Flex>
              <Flex col justifycenter full className="hr-top">
                <Link
                  href="#"
                  className="text-sm  p-4 pl-3  w-full  text-gray-300 hover:text-purple-300 m-auto "
                >
                  Public profile
                </Link>
                <Link
                  href="#"
                  className="text-sm pt-0 p-4 pl-3  w-full  text-gray-300 hover:text-purple-300 m-auto "
                >
                  Edit profile
                </Link>
              </Flex>
              <Flex col justifycenter full className="hr-top">
                <Link
                  href="#"
                  className="text-sm  p-4 pl-3  w-full  text-gray-300 hover:text-purple-300 m-auto "
                >
                  Help
                </Link>
                <Link
                  href="#"
                  className="text-sm  pt-0 p-4 pl-3  w-full  text-gray-300 hover:text-purple-300 m-auto "
                >
                  Log out
                </Link>
              </Flex>
              <Flex col justifycenter full className="hr-top">
                <Link
                  href="#"
                  className="text-sm  p-4 pl-3  w-full  text-gray-300  m-auto "
                >
                  <p
                    style={{
                      fontSize: "1rem",
                    }}
                    className="font-bold text-lg text-dark-100 "
                  >
                    Udemy Business
                  </p>
                  <p className="text-sm">Bring learning to yur company</p>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </PopoverTooltip>
      </Flex>
    </Flex>
  );
};

export default NavbarInstructor;
