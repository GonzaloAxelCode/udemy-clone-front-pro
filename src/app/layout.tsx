"use client";
import LayoutInstructor from "@/shared/components-instructor/Layouts/LayoutInstructor";
import LayoutInstructorEditCourse from "@/shared/components-instructor/Layouts/LayoutInstructorEditCourse";
import LayoutIndex from "@/shared/components/Layouts/LayoutIndex";
import "@/shared/styles/index.scss";
import "@smastrom/react-rating/style.css";
import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import "quill/dist/quill.snow.css";
import "suneditor/dist/css/suneditor.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  if (path.match(/^\/instructor\/course\/\w+\/manage/)) {
    return <LayoutInstructorEditCourse>{children}</LayoutInstructorEditCourse>;
  }

  if (path.startsWith("/instructor")) {
    return <LayoutInstructor>{children}</LayoutInstructor>;
  }
  return <LayoutIndex>{children}</LayoutIndex>;
}
