import type { Metadata } from "next";
import AnchorPointHero from "./components/AnchorPointHero";
import WhatItIs from "./components/WhatItIs";
import WhatHappens from "./components/WhatHappens";
import WhoItsFor from "./components/WhoItsFor";
import Agenda from "./components/Agenda";
import RSVP from "./components/RSVP";
import PastEditions from "./components/PastEditions";
import Partners from "./components/Partners";

export const metadata: Metadata = {
  title: "Anchor Point — the Stellar builder community by stellarIDE",
  description:
    "Solid ground for builders shipping on Stellar. A recurring meetup series for developers, founders, and ecosystem leaders.",
  openGraph: {
    title: "Anchor Point — the Stellar builder community by stellarIDE",
    description:
      "Solid ground for builders shipping on Stellar. A recurring meetup series for developers, founders, and ecosystem leaders.",
    images: ["/anchor-point-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchor Point — the Stellar builder community by stellarIDE",
    description:
      "Solid ground for builders shipping on Stellar. A recurring meetup series for developers, founders, and ecosystem leaders.",
    images: ["/anchor-point-og.png"],
  },
};

export default function AnchorPointPage() {
  return (
    <>
      <AnchorPointHero />
      <WhatItIs />
      <WhatHappens />
      <WhoItsFor />
      <Agenda />
      <RSVP />
      <PastEditions />
      <Partners />
    </>
  );
}
