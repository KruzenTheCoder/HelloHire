import { Metadata } from "next";
import BookClient from "./BookClient";

export const metadata: Metadata = {
  title: "Book a Session",
  description: "Book a 1:1 career coaching session with HelloHire experts.",
};

export default function BookPage() {
  return <BookClient />;
}
