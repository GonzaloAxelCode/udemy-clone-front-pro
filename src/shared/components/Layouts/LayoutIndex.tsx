import Providers from "@/app/providers";
import Footer from "../Footer/Footer";
import MenuPhone from "../MenuPhone/MenuPhone";
import Navbar from "../Navbar/Navbar";

const LayoutIndex = ({ children }: any) => {
  return (
    <html lang="es">
      <Providers>
        <body className="relative">
          <Navbar />
          <MenuPhone />
          <div>{children}</div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
};

export default LayoutIndex;
