import React from "react";
import {
  EventsContainer,
  EventsGrid,
  EventsLayout,
  EventItem,
} from "./EventsElements";

const EventsSection = () => {
  return (
    <EventsContainer>
      <EventsLayout>
        <EventsGrid>
          <EventItem></EventItem>
          <EventItem></EventItem>
          <EventItem></EventItem>
          <EventItem></EventItem>
          <EventItem></EventItem>
          <EventItem></EventItem>
        </EventsGrid>
      </EventsLayout>
    </EventsContainer>
  );
};

export default EventsSection;
