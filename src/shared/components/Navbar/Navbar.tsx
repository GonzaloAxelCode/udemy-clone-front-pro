"use client";
import Button from "@/shared/UIComponents/Buttons/Button";
import SearchInput from "@/shared/UIComponents/Inputs/SearchInput";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import WrapperNabvar from "@/shared/UIComponents/Wrappers/NavbarWrapper";
import CartIcon from "@/shared/UIComponents/icons/CartIcon";
import HeartIcon from "@/shared/UIComponents/icons/HeartIcon";
import LanguageIcon from "@/shared/UIComponents/icons/LanguageIcon";
import NotiIcon from "@/shared/UIComponents/icons/NotiIcon";
import SearchIcon from "@/shared/UIComponents/icons/SearchIcon";
import ThreeLinesIcon from "@/shared/UIComponents/icons/ThreeLinesIcon";
import Dialog from "@/shared/UIComponents/others/Dialog";
import Logo from "@/shared/UIComponents/others/Logo";
import { useUIContext } from "@/shared/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserImage from "../UserImage";
import ItemNavDialog from "./ItemNavDialog";
import MenuCategories from "./MenuCategories";
import SubNavCategories from "./SubNavCategories";
const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const isAuth = false;
  const { setOpenMenuNav, openMenuNav } = useUIContext();
  return (
    <Flex
      col
      full
      noItemsCenter
      style={{
        boxShadow:
          "0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08)",
      }}
    >
      <WrapperNabvar className="hr-bottom">
        <Flex maxScreen={800} className="flex-grow">
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

          <Flex className="space-x-2 ">
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
              <ItemNavDialog text={<HeartIcon />}>
                <Dialog
                  className="-left-20 top-6"
                  extraClassNames="w-[300px]  text-center"
                >
                  <Flex className="flex-col">
                    <p className="text-md text-gray-300 pb-3">
                      Your wishlist is empty.
                    </p>
                    <Link
                      href="#"
                      className="text-sm text-purple-400 font-bold"
                    >
                      Explore courses
                    </Link>
                  </Flex>
                </Dialog>
              </ItemNavDialog>
            )}

            <ItemNavDialog text={<CartIcon />}>
              <Dialog extraClassNames="w-[300px]  -left-20 text-center">
                Your cart is empty.
              </Dialog>
            </ItemNavDialog>

            {isAuth && (
              <ItemNavDialog text={<NotiIcon />}>
                <Dialog extraClassNames="w-[300px]  -left-30">
                  Notifications
                </Dialog>
              </ItemNavDialog>
            )}

            {isAuth && (
              <ItemNavDialog text={<UserImage />}>
                <Dialog
                  className=" -left-20"
                  extraClassNames="w-[300px]  -left-20"
                >
                  <div>
                    <UserImage />
                    <p>gonzaloaxel@gmail.com</p>
                  </div>
                </Dialog>
              </ItemNavDialog>
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

        <Flex minScreen={800} className="flex-grow">
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
