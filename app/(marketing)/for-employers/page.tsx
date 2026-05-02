import type { Metadata } from "next";
import ForEmployersClient from "./ForEmployersClient";

export const metadata: Metadata = {
  title: "For Employers",
  description: "Build your dream remote team from South Africa. Elite talent, transparent pricing, zero headaches.",
};

export default function ForEmployersPage() {
  return <ForEmployersClient />;
}
