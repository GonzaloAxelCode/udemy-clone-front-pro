import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import { styled } from "@mui/material/styles";

import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  width: "100%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#5624d0" : "#308fe8",
  },
}));
const MyCourseCard = () => {
  return (
    <Flex full stretch hfull className="hr-full">
      <Flex>
        <img
          width={118}
          height={118}
          src="https://s.udemycdn.com/course/200_H/placeholder.jpg"
        />
      </Flex>
      <Flex full noitemscenter between>
        <Flex col between hfull noitemscenter className="p-4 md:w-[40%]">
          <P bold>Aprender Javascript</P>
          <Flex className="space-x-2">
            <P bold sm>
              DRAFT
            </P>
            <P xs>Public</P>
          </Flex>
        </Flex>

        <Flex
          maxscreen={768}
          hfull
          full
          className="flex-grow p-4 flex-6 space-x-3"
          justifycenter
        >
          <P className="flex-5" bold>
            Finish your course
          </P>
          <div className="w-full flex-1 hidden md:flex">
            <BorderLinearProgress variant="determinate" value={15} />
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MyCourseCard;
