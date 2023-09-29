import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import Title from "@/shared/UIComponents/Texts/Title";

const _requeriments = [
  {
    text: "ProShow Producer 6 or 7",
  },
  {
    text: "Photoshop or other Photo Editing Program",
  },
];

const RequerimentsCourse = () => {
  return (
    <Flex col noitemscenter className="mb-4">
      <Title className="mt-3 mb-2 text-2xl ">Requirements</Title>
      <ul className="list-disc ml-5">
        {_requeriments.map((el: any, index: number) => {
          return <li key={index} className="text-sm">{el.text}</li>;
        })}
      </ul>
    </Flex>
  );
};

export default RequerimentsCourse;
