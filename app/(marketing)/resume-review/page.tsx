import { Metadata } from "next";
import ResumeReviewClient from "./ResumeReviewClient";

export const metadata: Metadata = {
  title: "Resume Review",
  description: "Get your resume reviewed by top recruiters.",
};

export default function ResumeReviewPage() {
  return <ResumeReviewClient />;
}
