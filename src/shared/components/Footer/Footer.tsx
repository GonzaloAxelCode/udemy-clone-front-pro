import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import LanguageIconWhite from "@/shared/UIComponents/icons/LanguageIconWhite";
import Logo from "@/shared/UIComponents/others/Logo";
import Link from "next/link";
import Topcompanies from "./Topcompanies";

const Footer = () => {
  return (
    <div className="mt-14 text-white w-full">
      <Topcompanies />
      <div
        id="elementoReferencia"
        className="bg-darkfull w-full footer-paddings"
      >
        <Flex full col noItemsCenter className="">
          <Flex between noItemsCenter full className="">
            <ul className="ul-footer">
              <li>
                <a
                  href="/udemy-business/?locale=en_US&mx_pg=clp-angular-course&path=%2F&ref=footer"
                  className="text-sm link-footer"
                  target="_blank"
                  rel="noopener"
                >
                  Udemy Business
                </a>
              </li>
              <li>
                <a
                  className="text-sm link-footer"
                  href="/teaching/?ref=teach_footer"
                >
                  Teach on Udemy
                </a>
              </li>
              <li>
                <a
                  className="text-sm link-footer"
                  href="/mobile/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get the app
                </a>
              </li>
              <li>
                <a
                  className="text-sm link-footer"
                  href="https://about.udemy.com/?locale=en-us"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-sm link-footer"
                  href="https://about.udemy.com/company?locale=en-us#offices"
                >
                  Contact us
                </a>
              </li>
            </ul>
            <ul className="ul-footer">
              <li>
                <a
                  className="text-sm link-footer"
                  href="https://about.udemy.com/careers?locale=en-us"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-sm link-footer"
                  href="https://blog.udemy.com/?ref=footer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a className="text-sm link-footer" href="/support/">
                  Help and Support
                </a>
              </li>
              <li>
                <a className="text-sm link-footer" href="/affiliate/">
                  Affiliate
                </a>
              </li>
              <li>
                <a
                  className="text-sm link-footer"
                  href="https://investors.udemy.com"
                >
                  Investors
                </a>
              </li>
            </ul>
            <ul className="ul-footer">
              <li>
                <a className="text-sm link-footer" href="/terms/">
                  Terms
                </a>
              </li>
              <li>
                <a className="text-sm link-footer" href="/terms/privacy/">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="text-sm link-footer" href="/terms/privacy/">
                  Cookie settings
                </a>
              </li>

              <li>
                <a className="text-sm link-footer" href="/sitemap/">
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  className="text-sm link-footer"
                  href="https://about.udemy.com/accessibility-statement?locale=en-us"
                >
                  Accessibility statement
                </a>
              </li>
            </ul>
            <Flex full className="flex-end ml-auto">
              <Button
                extendClass="w-auto flex items-center"
                variant="invert-primary"
              >
                <Flex full className="h-full space-x-4 pr-6">
                  <LanguageIconWhite scale="1" />
                  <span className="text-white text-md font-normal ">
                    English
                  </span>
                </Flex>
              </Button>
            </Flex>
          </Flex>
          <Flex between full className="pt-14 pb-6">
            <Flex className="">
              <Link href="#">
                <Logo white />
              </Link>
            </Flex>
            <div className="text-xs">© 2023 Udemy, Inc.</div>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Footer;
