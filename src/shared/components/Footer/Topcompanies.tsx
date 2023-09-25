import Title from "@/shared/UIComponents/Texts/Title";
import Flex from "@/shared/UIComponents/Wrappers/Flex";

const Topcompanies = () => {
  return (
    <Flex className="bg-darkfull hr-bottom-dark px-5 py-5">
      <Flex full between noItemsCenter className="flex-wrap">
        <Title className="mt-3 mb-3 text-xl text-white">
          Top companies choose{" "}
          <span className="text-purplegray">Udemy Business</span> to build
          in-demand career skills.
        </Title>
        <Flex full className="space-x-4">
          <img
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
            alt="Nasdaq"
            height={44}
            width={115}
            loading="lazy"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
            alt="Volkswagen"
            height={44}
            width={44}
            loading="lazy"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
            alt="Box"
            height={44}
            width={67}
            loading="lazy"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
            alt="NetApp"
            height={44}
            width={115}
            loading="lazy"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
            alt="Eventbrite"
            height={44}
            width={115}
            loading="lazy"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Topcompanies;
