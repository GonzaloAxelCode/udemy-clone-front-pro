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
            <div className="flex flex-grow h-screen">{children}</div>
          </Flex>

          <Footer />
        </body>
      </Providers>
    </html>
  );
};

export default LayoutInstructor;
