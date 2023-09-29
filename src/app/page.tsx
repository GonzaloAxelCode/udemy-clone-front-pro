"use client";

import BecauseYouViewed from "./components/BecauseYouViewed";
import NewestCoursesIn from "./components/NewestCoursesIn";
import PopularForNetworkEngineer from "./components/PopularForNetworkEngineer";
import RecommendedForFou from "./components/RecommendedForFou";
import TopCoursesIn from "./components/TopCoursesIn";
import TopicsRecommendedForYou from "./components/TopicsRecommendedForYou";

import Flex from "@/shared/UIComponents/CustomHTML/Flex";
import TrainingPeople from "@/shared/components/Notices/TrainingPeople";
import __courses from "@/shared/data/__courses";
import IndexBannerPresentation from "./components/IndexBannerPresentation";

export default function Inicio() {
  return (
    <main>
      <IndexBannerPresentation />
      <Flex col noitemscenter className="px-6">
        <TrainingPeople />
        <p className="text-4xl font-suisse-works leading-10 py-8">
          What to learn next
        </p>
        <BecauseYouViewed />
        <NewestCoursesIn />
        <TopicsRecommendedForYou />
        <PopularForNetworkEngineer />
        <RecommendedForFou />
        <TopCoursesIn
          categoryname="Programming Languages"
          asLink
          courses={__courses}
        />
      </Flex>
    </main>
  );
}
