import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import CommunityIcon from "@/shared/UIComponents/icons/CommunityIcon";
import InsightIcon from "@/shared/UIComponents/icons/InsightIcon";
import InterrogateIcon from "@/shared/UIComponents/icons/InterrogateIcon";
import TeacherIcon from "@/shared/UIComponents/icons/TeacherIcon";
import VideoIcon from "@/shared/UIComponents/icons/VideoIcon";
import Link from "next/link";

const SourceUnits = () => {
  return (
    <Flex full justifycenter noitemscenter className="flex-wrap gap-6 mb-32">
      <Link href="#" className="max-w-[200px]">
        <Flex col justifycenter className="space-y-4">
          <VideoIcon scale="2" />
          <Link
            href="#"
            className="font-bold underline underline-offset-2 text-linkpurple"
          >
            Test Video
          </Link>
          <P sm center className="">
            Send us a sample video and get expert feedback.
          </P>
        </Flex>
      </Link>
      <Link href="#" className="max-w-[200px]">
        <Flex col justifycenter className="space-y-4">
          <CommunityIcon scale="2" />
          <Link
            href="#"
            className="font-bold underline underline-offset-2 text-linkpurple"
          >
            Instructor Community
          </Link>
          <P sm center className="">
            Connect with experienced instructors. Ask questions, browse
            discussions, and more.
          </P>
        </Flex>
      </Link>
      <Link href="#" className="max-w-[200px]">
        <Flex col justifycenter className="space-y-4">
          <TeacherIcon scale="2" />
          <Link
            href="#"
            className="underline underline-offset-2 text-linkpurple font-bold"
          >
            Teaching Center
          </Link>
          <P sm center className="">
            Learn about best practices for teaching on Udemy.
          </P>
        </Flex>
      </Link>
      <Link href="#" className="max-w-[200px]">
        <Flex col justifycenter className="space-y-4">
          <InsightIcon scale="2" />
          <Link
            href="#"
            className="font-bold underline underline-offset-2 text-linkpurple"
          >
            Marketplace Insights
          </Link>
          <P sm center className="">
            Validate your course topic by exploring our marketplace supply and
            demand.
          </P>
        </Flex>
      </Link>
      <Link href="#" className="max-w-[200px]">
        <Flex col justifycenter className="space-y-4">
          <InterrogateIcon scale="2" />
          <Link
            href="#"
            className="font-bold underline underline-offset-2 text-linkpurple"
          >
            Help and Support
          </Link>
          <P sm center className="">
            Browse our Help Center or contact our support team.
          </P>
        </Flex>
      </Link>
    </Flex>
  );
};

export default SourceUnits;
