import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with HelloHire. Whether you're hiring or looking for opportunities, we'd love to hear from you.",
};

export default function ContactPage() {
  return <ContactClient />;
}
