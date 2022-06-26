import React from "react";
import {
  EventsContainer,
  EventsGrid,
  EventsLayout,
  EventItem,
  RButtom,
  LabelInputs,
  RadioB,
  EventDate,
  TextDay,
  TextTime,
  EventInfo,
  InfoText,
  Icon

} from "./EventsElements";
import LogoYellow from "../../images/LogoIPC-Amarillo.png"

const EventsSection = () => {
  return (
    <EventsContainer>
      <EventsLayout>
        <RButtom type="radio" name="Rbs" id="rb1" />
        <RButtom type="radio" name="Rbs" id="rb2" />
        <RButtom type="radio" name="Rbs" id="rb3" />
        <RButtom type="radio" name="Rbs" id="rb4" />
        <EventsGrid id="eventgrid">
          {/* //1 */}
          <EventItem>
            <EventDate>
              <TextDay>10 Ene</TextDay>
              <TextTime>00:00</TextTime>
            </EventDate>
             <EventInfo>
              <InfoText>Event: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, laboriosam!</InfoText>
            </EventInfo>
            <div>
              <Icon src={LogoYellow} alt="..." />
            </div>
          </EventItem>
          {/* //2 */}
          <EventItem>
          <EventDate>
              <TextDay>10 Feb</TextDay>
              <TextTime>00:00</TextTime>
            </EventDate>
             <EventInfo>
              <InfoText>Event: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, laboriosam!</InfoText>
            </EventInfo>
            <div>
              <Icon src={LogoYellow} alt="..." />
            </div>
          </EventItem>
          {/* //3 */}
          <EventItem>
          <EventDate>
              <TextDay>10 Mar</TextDay>
              <TextTime>00:00</TextTime>
            </EventDate>
             <EventInfo>
              <InfoText>Event: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, laboriosam!</InfoText>
            </EventInfo>
            <div>
              <Icon src={LogoYellow} alt="..." />
            </div>
          </EventItem>
          {/* //4 */}
          <EventItem>
          <EventDate>
              <TextDay>10 Abr</TextDay>
              <TextTime>00:00</TextTime>
            </EventDate>
             <EventInfo>
              <InfoText>Event: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, laboriosam!</InfoText>
            </EventInfo>
            <div>
              <Icon src={LogoYellow} alt="..." />
            </div>
          </EventItem>
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
