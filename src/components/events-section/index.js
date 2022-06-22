import React from "react";
import {
  EventsContainer,
  EventsGrid,
  EventsLayout,
  EventItem,
  RButtom,
  LabelInputs,
  RadioB,
} from "./EventsElements";

const EventsSection = () => {
  return (
    <EventsContainer>
      <EventsLayout>
        <RButtom type="radio" name="Rbs" id="rb1" />
        <RButtom type="radio" name="Rbs" id="rb2" />
        <RButtom type="radio" name="Rbs" id="rb3" />
        <RButtom type="radio" name="Rbs" id="rb4" />
        <EventsGrid>
          <EventItem>1</EventItem>
          <EventItem>2</EventItem>
          <EventItem>3</EventItem>
          <EventItem>4</EventItem>
        </EventsGrid>
        {/* <div id="rButtoms">
        <div id="labels-inputs">
          <label for="rb1" class="radioB"></label>
          <label for="rb2" class="radioB"></label>
          <label for="rb3" class="radioB"></label>
          <label for="rb4" class="radioB" id="last-rb"></label>
        </div>
      </div> */}
      </EventsLayout>

      <LabelInputs>
        <RadioB for="rb1" />
        <RadioB for="rb2" />
        <RadioB for="rb3" />
        <RadioB for="rb4" />
      </LabelInputs>
    </EventsContainer>
  );
};

export default EventsSection;
