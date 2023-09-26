import Flex from "@/shared/UIComponents/Wrappers/Flex";

const IndexBannerPresentation = () => {
  return (
    <div className="mb-12">
      <Flex className="relative">
        <img
          style={{
            position: "relative",
            zIndex: "-1",
          }}
          className="w-full h-full object-cover"
          src="https://img-c.udemycdn.com/notices/featured_carousel_slide/image/ed5bb7b8-25e7-481a-b6e8-0074a6dfcb28.png"
        />
        <Flex
          maxScreen={700}
          col
          noItemsCenter
          style={{
            position: "absolute",
            top: "12%",
            left: "5%",
          }}
          className="bg-white shadow-lg   lg:w-[440px] w-[340px] p-6"
        >
          <div className="mr-12">
            <p className="text-4xl font-suisse-works leading-10">
              Adelante, adelante
            </p>
          </div>

          <p className="my-2 text-md lg:text-lg  leading-6">
            Prospera aprendiendo las últimas habilidades. Cursos tan bajos como
            S / 49.90 finaliza el 28 de septiembre.
          </p>
        </Flex>
      </Flex>

      <Flex
        minScreen={700}
        col
        noItemsCenter
        className="bg-white  w-full p-6"
      >
        <div className="mr-12">
          <p className="text-2xl font-suisse-works leading-10">
            Adelante, adelante
          </p>
        </div>

        <p className="my-2 text-md lg:text-lg  leading-6">
          Prospera aprendiendo las últimas habilidades. Cursos tan bajos como S
          / 49.90 finaliza el 28 de septiembre.
        </p>
      </Flex>
    </div>
  );
};

export default IndexBannerPresentation;
