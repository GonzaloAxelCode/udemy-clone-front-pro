import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import TabGroup from "@/shared/UIComponents/Tabs/TabGroup";
import TabItem from "@/shared/UIComponents/Tabs/TabItem";

const HeaderAccount = () => {
  return (
    <Flex col noitemscenter full>
      <h1 className=" text-4xl font-bold font-suisse-works mt-2 mb-8">
        Account
      </h1>
      <TabGroup>
        <TabItem name="Account security" href="/instructor/account/security/" />
        <TabItem
          name="Notification settings"
          href="/instructor/account/notifications/"
        />
        <TabItem name="Message settings" href="/instructor/account/messages/" />

        <TabItem name="Close Account" href="/instructor/account/close/" />
      </TabGroup>
    </Flex>
  );
};

export default HeaderAccount;
