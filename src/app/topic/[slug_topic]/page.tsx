"use client";
import CoursesToGetYouStarted from "@/app/courses/components/CoursesToGetYouStarted";
import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import React from "react";
import Title from "@/shared/UIComponents/Texts/Title";
import capitalizarPrimerPalabra from "@/shared/utilities/first-uppercase";
import { useParams } from "next/navigation";

const PageTopic = () => {
  const params = useParams();

  return (
    <div>
      <p className="text-4xl font-suisse-works leading-10 py-8">
        {capitalizarPrimerPalabra(params?.slug_topic)} Courses
      </p>

      <Flex col noitemscenter>
        <p>
          {capitalizarPrimerPalabra(params?.slug_topic)} relates to Development,
          It Software
        </p>
        <p>
          <span>people icon</span>
          <span>15,991,964 learners</span>
        </p>
      </Flex>
      <Flex full col noitemscenter className="mt-8">
        <Title className=" mt-3 mb-1 text-2xl ">
          <span>Courses to get started</span>
        </Title>
        <CoursesToGetYouStarted />
      </Flex>
    </div>
  );
};

export default PageTopic;
