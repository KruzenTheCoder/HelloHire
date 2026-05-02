import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Born in South Africa. Built for the World. Learn about HelloHire's mission to connect elite SA talent with global companies.",
};

export default function AboutPage() {
  return <AboutClient />;
}
