import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import TabGroup from "@/shared/UIComponents/Tabs/TabGroup";
import TabItem from "@/shared/UIComponents/Tabs/TabItem";

export const HeaderProfile = () => {
  return (
    <Flex col noitemscenter full>
      <h1 className=" text-4xl font-bold font-suisse-works mt-2 mb-8">
        Profile & Settings
      </h1>
      <TabGroup>
        <TabItem
          name="Udemy profile"
          href="/instructor/profile/basic-information/"
        />
        <TabItem name="Profile picture" href="/instructor/profile/photo/" />
        <TabItem name="Privacy settings" href="/instructor/profile/privacy/" />
      </TabGroup>
    </Flex>
  );
};
