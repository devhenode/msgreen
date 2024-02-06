import Accordion from "./Accordion";
import { useState } from "react";

const SeventhPage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionToggle = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };

  return (
    <div>
      <div className="text-5xl text-center my-16">
        <span>Ms Green's Quote</span>
      </div>
      <div className="hs-accordion-group md:mx-52">
        <Accordion
          id="hs-basic-with-arrow-heading-one"
          title="Quote 1"
          content="Oh, C'mon she'd eat you for dinner"
          isOpen={openAccordion === "hs-basic-with-arrow-heading-one"}
          onToggle={handleAccordionToggle}
        />
        <Accordion
          id="hs-basic-with-arrow-heading-two"
          title="Quote 2"
          content="Are we good"
          isOpen={openAccordion === "hs-basic-with-arrow-heading-two"}
          onToggle={handleAccordionToggle}
        />
        <Accordion
          id="hs-basic-with-arrow-heading-three"
          title="Quote 3"
          content="Well, It's our job to change that."
          isOpen={openAccordion === "hs-basic-with-arrow-heading-three"}
          onToggle={handleAccordionToggle}
        />
        <Accordion
          id="hs-basic-with-arrow-heading-four"
          title="Quote 4"
          content="Whew! Wow, all this running is- kinda excruciating. If I had hair it'll be flowing luxuriantly behind me just like in the Shampoo ads, and I'll be fighting with creepy little tribal guys off me with a stick."
          isOpen={openAccordion === "hs-basic-with-arrow-heading-four"}
          onToggle={handleAccordionToggle}
        />
        <Accordion
          id="hs-basic-with-arrow-heading-five"
          title="Quote 5"
          content="Hey, guys. I didn't know you've worked out."
          isOpen={openAccordion === "hs-basic-with-arrow-heading-five"}
          onToggle={handleAccordionToggle}
        />
        <Accordion
          id="hs-basic-with-arrow-heading-six"
          title="Quote 6"
          content="Men... Women... GO BUY A BAG."
          isOpen={openAccordion === "hs-basic-with-arrow-heading-six"}
          onToggle={handleAccordionToggle}
        />
        <Accordion
          id="hs-basic-with-arrow-heading-seven"
          title="Quote 7"
          content="I'm naked"
          isOpen={openAccordion === "hs-basic-with-arrow-heading-seven"}
          onToggle={handleAccordionToggle}
        />
        <Accordion
          id="hs-basic-with-arrow-heading-eight"
          title="Quote 8"
          content="More than you can handle. [clears throat] Short stuff... where's Crispy?"
          isOpen={openAccordion === "hs-basic-with-arrow-heading-eight"}
          onToggle={handleAccordionToggle}
        />
      </div>
    </div>
  );
};

export default SeventhPage;
