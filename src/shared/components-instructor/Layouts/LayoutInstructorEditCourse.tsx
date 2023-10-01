import Providers from "@/app/providers";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Footer from "@/shared/components/Footer/Footer";
import HeaderTopFixed from "../Headers/HeaderTopFixed";
import LeftBarDrafCourseOptions from "../Sidebars/LeftBarDrafCourseOptions";

const LayoutInstructorEditCourse = ({ children }: any) => {
  return (
    <html lang="es">
      <Providers>
        <body className="min-h-screen">
          <HeaderTopFixed />
          <Flex noitemscenter full className="mt-14 pt-10 pb-16 px-8">
            <LeftBarDrafCourseOptions />
            <Flex
              style={{
                boxShadow:
                  " 0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.16)",
              }}
              noitemscenter
              full
              className="flex-grow min-h-screen"
            >
              {children}
            </Flex>
          </Flex>
          <Footer />
        </body>
      </Providers>
    </html>
  );
};

export default LayoutInstructorEditCourse;
