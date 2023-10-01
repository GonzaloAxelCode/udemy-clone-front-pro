"use client";
import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import EditorTextSimple from "@/shared/UIComponents/EditorTexts/EditorTextSimple";
import InputTexts from "@/shared/UIComponents/Inputs/InputTexts";
import Select from "@/shared/UIComponents/Inputs/Select";
import _languages from "@/shared/data/_languages";
import { useState } from "react";
const Page = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    headline: "",
    language: "English (US)",
    website: "",
    twitterusername: "",
    facebookusername: "",
    linkedlnid: "",
    youtubeusername: "",
  });

  const onChange = (e: any, valid: boolean = true) => {
    setForm({ ...form, [e.target.name]: valid ? e.target.value : "" });
    console.log(form);
  };

  return (
    <Flex col noitemscenter full>
      <Flex full noitemscenter className="flex-col md2:flex-row gap-6">
        <Flex
          full
          col
          noitemscenter
          className="space-y-4  max-w-[600px] md2:w-full"
        >
          <InputTexts
            place=""
            value={form.firstname}
            name="firstname"
            type="text"
            onChange={onChange}
            label="Fisrt Name"
          />
          <InputTexts
            place=""
            value={form.lastname}
            name="lastname"
            type="text"
            onChange={onChange}
            label="Last Name"
          />
          <InputTexts
            place=""
            value={form.headline}
            name="headline"
            variant="countstring"
            type="text"
            onChange={onChange}
            label="Headline"
          />
          <EditorTextSimple
            label="Headline"
            name="headline"
            onChange={onChange}
          />
          <P xs className="pt-3">
            To help learners learn more about you, your bio should reflect your
            Credibility, Empathy, Passion, and Personality. Your biography
            should have at least 50 words, links and coupon codes are not
            permitted.
          </P>
          <Select
            label="Language"
            options={_languages}
            onChange={onChange}
            value={form.language}
            name="language"
          />
        </Flex>
        <Flex
          full
          col
          noitemscenter
          className="space-y-4 max-w-[600px] md2:w-full"
        >
          <InputTexts
            place="Url"
            value={form.website}
            name="website"
            type="text"
            disable
            onChange={onChange}
            label="Website"
          />
          <InputTexts
            place="Username"
            value={form.twitterusername}
            variant="prevvalue"
            name="twitterusername"
            type="text"
            prevValue="http://www.twitter.com/
            "
            onChange={onChange}
            label="Twitter"
          />
          <InputTexts
            place="Username"
            variant="prevvalue"
            value={form.facebookusername}
            name="facebookusername"
            type="text"
            prevValue="http://www.facebook.com/
          "
            onChange={onChange}
            label="Facebook"
          />
          <InputTexts
            place="Resource ID"
            value={form.linkedlnid}
            name="linkedlnid"
            variant="prevvalue"
            type="text"
            prevValue="http://www.linkedin.com/
            "
            onChange={onChange}
            label="Linkedln"
          />
          <InputTexts
            prevValue="http://www.youtube.com/
            "
            place="Username"
            value={form.youtubeusername}
            name="youtubeusername"
            type="text"
            variant="prevvalue"
            onChange={onChange}
            label="Youtube"
          />
        </Flex>
      </Flex>
      <Flex className="py-8">
        <Button variant="secondary" extendClass="px-4" size="md">
          Save
        </Button>
      </Flex>
    </Flex>
  );
};

export default Page;
