import Image from "next/image";
import { HeroHeader } from "./components/sections/hero";
import { About } from "./components/sections/about";
import { Featured } from "./components/sections/featured";
import { SpotLight } from "./components/sections/spotlight";
import { Community } from "./components/sections/community";
import { Resources } from "./components/sections/resources";
import { Testimonials } from "./components/sections/testimonials";
import { Awards } from "./components/sections/award";
import { Trusties } from "./components/sections/trusty";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <About />
      <Featured />
      <SpotLight />
      <Community />
      <Resources />
      <Testimonials />
      <Awards />
      <Trusties />
    </>
  );
}
