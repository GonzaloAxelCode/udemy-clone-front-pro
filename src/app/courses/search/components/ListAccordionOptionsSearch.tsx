import AccordionGroup from "@/shared/UIComponents/Acordeon/AccordionGroup";
import FIlterItem from "./FIlterItem";

const _data_filters = [
  {
    title: "Ratings",
    type: "radius",
    options: [
      {
        label: "4.5 & up",
        value: "4.5",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "4.0 & up",
        value: "4.0",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "3.5 & up",
        value: "3.5",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "3.0 & up",
        value: "3.0",
        count: Math.floor(Math.random() * 50) + 1,
      },
    ],
  },
  {
    title: "Language",
    options: [
      { value: "en", label: "English" },
      { value: "es", label: "Español" },
      { value: "tr", label: "Türkçe" },
      { value: "pt", label: "Português" },
      { value: "ar", label: "العربية" },
      { value: "ja", label: "日本語" },
      { value: "hi", label: "हिन्दी" },
      { value: "de", label: "Deutsch" },
      { value: "fr", label: "Français" },
      { value: "ru", label: "Русский" },
      { value: "id", label: "Bahasa Indonesia" },
      { value: "pl", label: "Polski" },
      { value: "it", label: "Italiano" },
      { value: "ko", label: "한국어" },
      { value: "zh", label: "中文" },
      { value: "th", label: "ไทย" },
      { value: "vi", label: "Tiếng Việt" },
    ],
  },
  {
    title: "Video Duration",
    options: [
      {
        label: "0-1 Hour",
        value: "0-1",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "1-3 Hour",
        value: "1-3",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "3-6 Hour",
        value: "3-6",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "6-17 Hour",
        value: "6-17",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "17+ Hour",
        value: "17+",
        count: Math.floor(Math.random() * 50) + 1,
      },
    ],
  },
  {
    title: "Features",
    options: [
      {
        label: "Subtitles",
        value: "subtitles",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "Quizzes",
        value: "quizzes",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "Coding Exercises",
        value: "coding_exercises",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "Practice Test",
        value: "practice_test",
        count: Math.floor(Math.random() * 50) + 1,
      },
    ],
  },
  {
    title: "Topic",
    options: [
      {
        value: "28016",
        label: "Angular",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "4476",
        label: "AngularJS",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "8322",
        label: "Web Development",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "6368",
        label: "JavaScript",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "6928",
        label: "Node.Js",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "8124",
        label: "Typescript",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "6290",
        label: "Ionic",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "6664",
        label: "MEAN Stack",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "10230",
        label: "ASP.NET Core",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "5884",
        label: "Front End Web Development",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "6336",
        label: "Java",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "7350",
        label: "Protractor",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "13302",
        label: "Full Stack Web Development",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "32046",
        label: "Angular Material",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "4562",
        label: "Apache Spark",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "4632",
        label: "ASP.NET MVC",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "24852",
        label: "Bug Bounty",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "4820",
        label: "Bootstrap",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "5306",
        label: "CSS",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "5954",
        label: "Git",
        count: Math.floor(Math.random() * 50) + 1,
      },
    ],
  },
  {
    title: "Level",

    options: [
      {
        label: "All levels",
        value: "all_levels",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "Beginner",
        value: "beginner",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "Intermediate",
        value: "intermediate",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "Expert",
        value: "expert",
        count: Math.floor(Math.random() * 50) + 1,
      },
    ],
  },
  {
    title: "Subtitles",
    options: [
      {
        value: "en",
        label: "English",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "pt",
        label: "Português",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "es",
        label: "Español",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "fr",
        label: "Français",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "it",
        label: "Italiano",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "de",
        label: "Deutsch",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "id",
        label: "Bahasa Indonesia",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "ro",
        label: "Română",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "ko",
        label: "한국어",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "vi",
        label: "Tiếng Việt",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "en_cc",
        label: "English [CC]",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "nl",
        label: "Nederlands",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "pl",
        label: "Polski",
        count: Math.floor(Math.random() * 50) + 1,
      },
      { value: "th", label: "ไทย", count: Math.floor(Math.random() * 50) + 1 },
      { value: "zh", label: "中文", count: Math.floor(Math.random() * 50) + 1 },
      {
        value: "bg",
        label: "Български",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "cs",
        label: "Čeština",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "da",
        label: "Dansk",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "el",
        label: "Ελληνικά",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "et",
        label: "Eesti",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "fi",
        label: "Suomi",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "hu",
        label: "Magyar",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "ja",
        label: "日本語",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "lt",
        label: "Lietuvių",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "lv",
        label: "Latviešu",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "sk",
        label: "Slovenčina",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "sv",
        label: "Svenska",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "uk",
        label: "Українська",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "tr",
        label: "Türkçe",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "ar",
        label: "العربية",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "fa",
        label: "فارسی",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        value: "ru",
        label: "Русский",
        count: Math.floor(Math.random() * 50) + 1,
      },
    ],
  },
  {
    title: "Price",
    options: [
      {
        label: "Paid",
        value: "paid",
        count: Math.floor(Math.random() * 50) + 1,
      },
      {
        label: "Free",
        value: "free",
        count: Math.floor(Math.random() * 50) + 1,
      },
    ],
  },
];

const ListAccordionOptionsSearch = () => {
  return (
    <AccordionGroup>
      {_data_filters.map((el: any, index: any) => {
        return (
          <FIlterItem item={el} key={index} />
        );
      })}
    </AccordionGroup>
  );
};

export default ListAccordionOptionsSearch;
