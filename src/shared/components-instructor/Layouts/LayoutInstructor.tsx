"use client";
import Providers from "@/app/providers";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Footer from "@/shared/components/Footer/Footer";
import NavbarInstructor from "../Sidebars/NavbarInstructor";
import SidebarInstructor from "../Sidebars/SidebarInstructor";
import StickyWraperSidebar from "../Wrappers/StickyWraperSidebar";

const LayoutInstructor = ({ children }: any) => {
  return (
    <html lang="es">
      <Providers>
        <body>
          <NavbarInstructor />
          <Flex full noitemscenter className="relative">
            <StickyWraperSidebar>
              <SidebarInstructor />
            </StickyWraperSidebar>
            <Flex full className="flex-grow">
              {children}
            </Flex>
          </Flex>
          <Footer />
        </body>
      </Providers>
    </html>
  );
};

export default LayoutInstructor;
