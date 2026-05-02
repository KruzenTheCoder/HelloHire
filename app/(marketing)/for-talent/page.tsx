import type { Metadata } from "next";
import ForTalentClient from "./ForTalentClient";

export const metadata: Metadata = {
  title: "For Talent",
  description: "Work globally, live in South Africa. Join HelloHire's talent network and connect with top companies worldwide.",
};

export default function ForTalentPage() {
  return <ForTalentClient />;
}
