import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LoadingScreen } from "@/components/wedding/LoadingScreen";
import { Hero } from "@/components/wedding/Hero";
import { SaveTheDate } from "@/components/wedding/SaveTheDate";
import { Events } from "@/components/wedding/Events";
import { Story } from "@/components/wedding/Story";
import { Venue } from "@/components/wedding/Venue";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Footer } from "@/components/wedding/Footer";
import { Petals } from "@/components/wedding/Petals";
import { MusicToggle } from "@/components/wedding/MusicToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sreekar & Ananya · A Royal Telugu Wedding" },
      {
        name: "description",
        content:
          "Join us in celebrating the sacred union of Sreekar & Ananya — August 25, 2026, Tirupati.",
      },
      { property: "og:title", content: "Sreekar & Ananya · A Royal Telugu Wedding" },
      {
        property: "og:description",
        content: "Two hearts, one sacred journey blessed for eternity.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative overflow-x-hidden">
      <LoadingScreen open={loading} onOpen={() => setLoading(false)} />
      {!loading && <Petals />}
      <Hero />
      <SaveTheDate />
      <Events />
      <Story />
      <Venue />
      <Rsvp />
      <Footer />
      <MusicToggle />
    </main>
  );
}
