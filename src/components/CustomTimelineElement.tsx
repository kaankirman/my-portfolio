import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface CustomTimelineElementProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

const CustomTimelineElement: React.FC<CustomTimelineElementProps> = ({
  title,
  subtitle,
  date,
  description,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{boxShadow:"0 0 50px #fff"}}
      date={date}
      dateClassName="text-white"
      iconStyle={{ background: "#c084fc", color: "#fff" }}
    >
      <h3 className="vertical-timeline-element-title text-4xl">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle text-2xl">
        {subtitle}
      </h4>
      <h1 className="text-lg">{description}</h1>
    </VerticalTimelineElement>
  );
};

export default CustomTimelineElement;
