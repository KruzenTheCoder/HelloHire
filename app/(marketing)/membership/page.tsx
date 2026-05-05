import { Metadata } from "next";
import MembershipClient from "./MembershipClient";

export const metadata: Metadata = {
  title: "Membership",
  description: "Join the HelloHire talent network membership.",
};

export default function MembershipPage() {
  return <MembershipClient />;
}
