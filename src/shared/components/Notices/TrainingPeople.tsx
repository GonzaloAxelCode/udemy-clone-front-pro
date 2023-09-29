import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";

const TrainingPeople = () => {
  return (
    <Flex
      maxscreen={700}
      cssmax="flex-direction:column;"
      between
      full
      className="bg-gray-500  p-6 space-x-3"
    >
      <p className="text-white py-2">
        <span className="font-bold">Training 5 or more people? </span>
        <span className="ml-1 py-0 md:py-3">
          Get your team access to Udemys top 22,000+ courses
        </span>
      </p>
      <Flex className="">
        <Flex className="ml-auto space-x-3 ">
          <Button extendClass="min-w-[200px] px-4" variant="white">
            Get Udemy Business
          </Button>
          <Button extendClass="px-4 text-white" variant="invert-primary">
            Dimiss
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TrainingPeople;
