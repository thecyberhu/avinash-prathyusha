import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LoadingScreen } from "@/components/wedding/LoadingScreen";
import { Hero } from "@/components/wedding/Hero";
import { Groom, Bride } from "@/components/wedding/Groom";
import { SaveTheDate } from "@/components/wedding/SaveTheDate";
import { Couple } from "@/components/wedding/Couple";
import { Events } from "@/components/wedding/Events";
import { Family } from "@/components/wedding/Family";

import { Venue } from "@/components/wedding/Venue";
import { Blessings } from "@/components/wedding/Blessings";
import { Finale } from "@/components/wedding/Finale";
import { MusicToggle } from "@/components/wedding/MusicToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avinash & Sai Prathyusha · A Royal Telugu Wedding" },
      {
        name: "description",
        content:
          "Join us in celebrating the sacred union of Nidamanuri Avinash & Dr. Bheemavarapu Sai Prathyusha — 03 July 2026, Ongole.",
      },
      { property: "og:title", content: "Avinash & Sai Prathyusha · 03 July 2026" },
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
      <Hero />
      <Groom />
      <Bride />
      <SaveTheDate />
      <Couple />
      <Events />
      <Family />
      <Venue />
      <Blessings />
      <Finale />
      <MusicToggle />
    </main>
  );
}
