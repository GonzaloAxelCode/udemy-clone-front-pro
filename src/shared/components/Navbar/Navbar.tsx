"use client";
import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import PopoverTooltip from "@/shared/UIComponents/Popovers/PopoverTooltip";
import CartIcon from "@/shared/UIComponents/icons/CartIcon";
import HeartIcon from "@/shared/UIComponents/icons/HeartIcon";
import LanguageIcon from "@/shared/UIComponents/icons/LanguageIcon";
import NotiIcon from "@/shared/UIComponents/icons/NotiIcon";
import SearchIcon from "@/shared/UIComponents/icons/SearchIcon";
import ThreeLinesIcon from "@/shared/UIComponents/icons/ThreeLinesIcon";
import Dialog from "@/shared/UIComponents/others/Dialog";
import Logo from "@/shared/UIComponents/others/Logo";
import SearchInput from "@/shared/components/Inputs/SearchInput";
import { useUIContext } from "@/shared/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import UserImage from "../UserImage";
import ItemNavDialog from "./ItemNavDialog";
import MenuCategories from "./MenuCategories";
import SubNavCategories from "./SubNavCategories";

const WrapperNabvar = styled.div`
  background: white;
  display: flex;

  padding-left: 1.3rem; /* pl-6 */
  padding-right: 1.3rem; /* pr-6 */
  width: 100%; /* w-full */

  padding-top: 0.68rem;
  padding-bottom: 0.68rem;
`;

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const isAuth = true;
  const { setOpenMenuNav, openMenuNav } = useUIContext();
  return (
    <Flex
      col
      full
      noitemscenter
      style={{
        boxShadow:
          " 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08)",
        position: "relative",
        zIndex:1000,
      }}


    >
      <WrapperNabvar className="hr-bottom">
        <Flex maxscreen={800} className="flex-grow">
          <Flex>
            <Link href="/">
              <Logo />
            </Link>
          </Flex>
          <Flex>
            <ItemNavDialog text="Categories" extraClassNames="block">
              <Dialog className="left-2 top-5" extraClassNames="p-0">
                <MenuCategories />
              </Dialog>
            </ItemNavDialog>
          </Flex>
          <Flex className="flex-grow">
            <SearchInput />
          </Flex>

          <Flex className="space-x-5">
            <ItemNavDialog text="Udemy Business">
              <Dialog
                className="-left-10 top-6"
                extraClassNames="w-[300px] -left-20 "
              >
                <h1 className="text-lg p-2 text-center font-semibold">
                  Turn what you know into an <br /> opportunity and reach <br />{" "}
                  millions around the world.
                </h1>
                <Button variant="secondary" extendClass="w-full p-2">
                  Learn More
                </Button>
              </Dialog>
            </ItemNavDialog>
            {!isAuth && (
              <ItemNavDialog text="Teach on Udemy">
                <Dialog className=" -left-20" extraClassNames="w-[300px] ">
                  <h1 className="text-lg p-2 text-center font-semibold">
                    Start learning from over <br /> 213,000 courses today.
                  </h1>
                  <Button variant="secondary" extendClass="w-full p-2">
                    Browse now
                  </Button>
                </Dialog>
              </ItemNavDialog>
            )}

            {isAuth && (
              <Link href="#" className="m-auto flex ">
                <span className="text-sm text-gray-400 pr-2 pl-2 hidden lg:block">
                  Instructor
                </span>
              </Link>
            )}
            {isAuth && (
              <ItemNavDialog text="My Learning">
                <Dialog className="-left-12 pt-6" extraClassNames="w-[300px]">
                  <h1 className="text-lg p-2 text-center font-semibold">
                    Start learning from over <br /> 213,000 courses today.
                  </h1>
                  <Button variant="primary" extendClass="w-full p-2">
                    Browse now
                  </Button>
                </Dialog>
              </ItemNavDialog>
            )}

            {isAuth && (
              <PopoverTooltip
                arrow={false}
                placement="bottom-start"
                content={
                  <Link href="#">
                    <HeartIcon />
                  </Link>
                }
              >
                <Flex col className=" w-[288px] px-4 py-3">
                  <p className="text-sm text-gray-300 text-center m-auto leading-5 ">
                    Switch to the student view here.
                  </p>
                  <Link href="#" className="text-sm text-purple-400 font-bold">
                    Explore courses
                  </Link>
                </Flex>
              </PopoverTooltip>
            )}

            <PopoverTooltip
              arrow={false}
              placement="bottom-start"
              content={
                <Link href="#">
                  <CartIcon />
                </Link>
              }
            >
              <Flex col className="w-[288px]  px-4 py-3">
                <Flex between full className="pb-4">
                  <p className="text-lg text-dark-100  font-bold ">Cart</p>
                  <Link href="#" className="text-sm text-purple-400 font-bold">
                    Settings
                  </Link>
                </Flex>
                <p className="text-sm text-gray-300 text-center m-auto leading-5">
                  Yout cart is empty.
                </p>
              </Flex>
            </PopoverTooltip>

            {isAuth && (
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
                    <p className="text-lg text-dark-100  font-bold ">
                      Notifications
                    </p>
                    <Link
                      href="#"
                      className="text-sm text-purple-400 font-bold"
                    >
                      Settings
                    </Link>
                  </Flex>
                  <p className="text-sm text-gray-300 text-center m-auto leading-5">
                    No notifications.
                  </p>
                </Flex>
              </PopoverTooltip>
            )}

            {isAuth && (
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
                            Gonzalo Axel
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
            )}

            {!isAuth && <Button variant="primary">Log In</Button>}
            {!isAuth && <Button variant="secondary">Sign Up</Button>}
            {!isAuth && (
              <Button extendClass="px2 min-w-[25px]" variant="primary">
                <LanguageIcon />
              </Button>
            )}
          </Flex>
        </Flex>

        <Flex minscreen={800} className="flex-grow">
          <Link
            onClick={() => setOpenMenuNav(true)}
            className="flex items-center"
            href="#"
          >
            <ThreeLinesIcon />
          </Link>

          <div className="flex-grow flex justify-center">
            <div className="ml-24">
              <Link href="#">
                <Logo scale="0.83" />
              </Link>
            </div>
          </div>

          <Flex>
            <Link href="#" className="px-3">
              <SearchIcon />
            </Link>
            <Link href="#" className="px-3">
              <CartIcon />
            </Link>
          </Flex>
        </Flex>
      </WrapperNabvar>
      {pathname == "/" && <SubNavCategories />}
    </Flex>
  );
};

export default Navbar;
