import type { Metadata } from "next";
import HowItWorksClient from "./HowItWorksClient";

export const metadata: Metadata = {
  title: "How It Works",
  description: "From brief to hired in 47 days. Learn our streamlined 5-step process for hiring elite South African talent.",
};

export default function HowItWorksPage() {
  return <HowItWorksClient />;
}
