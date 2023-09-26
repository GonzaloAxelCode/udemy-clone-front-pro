"use client";

import WrapperIndex from "@/shared/UIComponents/Wrappers/WrapperIndex";
import BecauseYouViewed from "./components/BecauseYouViewed";
import NewestCoursesIn from "./components/NewestCoursesIn";
import PopularForNetworkEngineer from "./components/PopularForNetworkEngineer";
import RecommendedForFou from "./components/RecommendedForFou";
import TopCoursesIn from "./components/TopCoursesIn";
import TopicsRecommendedForYou from "./components/TopicsRecommendedForYou";

import __courses from "@/app/components/__courses";
import Flex from "@/shared/UIComponents/Wrappers/Flex";
import TrainingPeople from "@/shared/components/Notices/TrainingPeople";
import IndexBannerPresentation from "./components/IndexBannerPresentation";

export default function Inicio() {
  return (
    <WrapperIndex>
      <IndexBannerPresentation />
      <Flex col noItemsCenter className="px-6">
        <TrainingPeople />
        <p className="text-4xl font-suisse-works leading-10 py-8">
          What to learn next
        </p>
        <BecauseYouViewed />
        {/*
        
        <FeaturedCoursesIn />
        <NewAndNoteworthyIn />
        */}
        <NewestCoursesIn />
        <TopicsRecommendedForYou />
        <PopularForNetworkEngineer />
        <RecommendedForFou />

        {/*<ShortAndSweetCoursesForYou />
        <StudentsAreViewing />
      */}

        <TopCoursesIn
          categoryname="Programming Languages"
          asLink
          courses={__courses}
        />
        {/*
        
        <WhatPeopleWhoLearnTakeNext />
        */}
      </Flex>
    </WrapperIndex>
  );
}
