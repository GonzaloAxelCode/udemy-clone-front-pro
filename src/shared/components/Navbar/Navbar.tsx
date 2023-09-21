import Button from "@/shared/UIComponents/Buttons/Button";
import CategoryDropDown from "@/shared/UIComponents/Dropdowns/CategoryDropDown";
import SearchInput from "@/shared/UIComponents/Inputs/SearchInput";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import WrapperNabvar from "@/shared/UIComponents/Wrappers/NavbarWrapper";
import CartIcon from "@/shared/UIComponents/icons/CartIcon";
import LanguageIcon from "@/shared/UIComponents/icons/LanguageIcon";
import SearchIcon from "@/shared/UIComponents/icons/SearchIcon";
import ThreeLinesIcon from "@/shared/UIComponents/icons/ThreeLinesIcon";
import Logo from "@/shared/UIComponents/others/Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <WrapperNabvar>
      <Flex maxScreen={800} className="flex-grow">
        <Flex>
          <Link href="/">
            <Logo />
          </Link>
        </Flex>
        <Flex>
          <CategoryDropDown />
        </Flex>
        <Flex className="flex-grow">
          <SearchInput />
        </Flex>

        <Flex className="space-x-2 ">
          <Link href="#" className="m-auto flex ">
            <span className="text-sm text-gray-400 pr-2 pl-2 hidden lg:block">
              {" "}
              Udemy Business{" "}
            </span>
          </Link>
          <Link href="#">
            <span className="text-sm m-auto text-gray-400 px-2 hidden lg:block">
              Teach on Udemy
            </span>
          </Link>
          <Link href="#" className="">
            <CartIcon />
          </Link>
          <Button variant="primary">Log In</Button>
          <Button variant="secondary">Sign Up</Button>
          <Button extendClass="px2 min-w-[25px]" variant="primary">
            <LanguageIcon />
          </Button>
        </Flex>
      </Flex>

      <Flex minScreen={800} className="flex-grow">
        <Link href="#">
          <ThreeLinesIcon />
        </Link>

        <Link href="#" className="flex-grow flex justify-center">
          <Logo />
        </Link>
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
  );
};

export default Navbar;
