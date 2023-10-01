"use client";

import Button from "@/shared/UIComponents/Buttons/Button";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import P from "@/shared/UIComponents/CustomHTML/P";
import { useState } from "react";

const PageNOtificationSettings = () => {
  const [checkedForm, setCheckedForm] = useState({
    checkedHelpful: false,
    checkedPromotions: false,
    checkedAnnouncements: false,
    checkedDontSend: false,
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckedForm({
      ...checkedForm,
      [name]: checked,
    });
  };
  return (
    <Flex col noitemscenter>
      <P bold lg>
        As an instructor, I want to receive:
      </P>
      <Flex
        onClick={() =>
          setCheckedForm({
            ...checkedForm,
            checkedHelpful: !checkedForm.checkedHelpful,
          })
        }
        noitemscenter
        className="select-none cursor-pointer mt-4 mb-10 border-1 border-dark-100 border-solid max-w-[600px] p-3"
      >
        <input
          name="checkedHelpful"
          onChange={onChange}
          checked={checkedForm.checkedHelpful}
          className="mr-4 ml-1 mt-1"
          type="checkbox"
        />

        <Flex col noitemscenter>
          <P bold>
            Helpful resources and important updates related to being an
            instructor on Udemy.
          </P>
          <P sm>
            To adjust this preference by course, leave this box checked and go
            to ‘Course Settings’ on the course management dashboard to opt in or
            out of specific notifications.
          </P>
        </Flex>
      </Flex>

      <P bold lg>
        As an instructor, I want to receive:
      </P>
      <Flex
        disabled
        onClick={() =>
          setCheckedForm({
            ...checkedForm,
            checkedPromotions: !checkedForm.checkedPromotions,
          })
        }
        noitemscenter
        className="select-none cursor-pointer mt-4 border-1 border-dark-100 border-solid max-w-[600px] p-3"
      >
        <input
          name="checkedPromotions"
          onChange={onChange}
          checked={checkedForm.checkedPromotions}
          className="mr-4 ml-1 mt-1"
          type="checkbox"
        />

        <Flex col noitemscenter>
          <P bold>
            Promotions, course recommendations, and helpful resources from
            Udemy.
          </P>
          <P sm>
            Because you are an instructor, you will not receive course
            promotional emails from Udemy.
          </P>
        </Flex>
      </Flex>

      <Flex
        onClick={() =>
          setCheckedForm({
            ...checkedForm,
            checkedAnnouncements: !checkedForm.checkedAnnouncements,
          })
        }
        noitemscenter
        className="select-none cursor-pointer mt-3 border-1 border-dark-100 border-solid max-w-[600px] p-3"
      >
        <input
          name="checkedAnnouncements"
          onChange={onChange}
          checked={checkedForm.checkedAnnouncements}
          className="mr-4 ml-1 mt-1"
          type="checkbox"
        />

        <Flex col noitemscenter>
          <P bold>
            Announcements from instructors whose course(s) I’m enrolled in.
          </P>
          <P sm>
            To adjust this preference by course, leave this box checked and go
            to the course dashboard and click on Options to opt in or out of
            specific announcements.
          </P>
        </Flex>
      </Flex>
      <Flex
        onClick={() =>
          setCheckedForm({
            ...checkedForm,
            checkedDontSend: !checkedForm.checkedDontSend,
          })
        }
        noitemscenter
        className="select-none cursor-pointer mt-10 border-1 border-dark-100 border-solid max-w-[600px] p-3"
      >
        <input
          name="checkedDontSend"
          onChange={onChange}
          checked={checkedForm.checkedDontSend}
          className="mr-4 ml-1 mt-1"
          type="checkbox"
        />

        <Flex col noitemscenter>
          <P bold>Dont send me any promotional emails.</P>
          <P sm>
            If this box is checked, please note that you will continue to
            receive important transactional emails like purchase receipts.
          </P>
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
export default PageNOtificationSettings;
