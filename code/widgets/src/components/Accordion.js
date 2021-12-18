import React, { useState } from "react";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onItemClick = (index) => {
    setActiveIndex(index);
  };

  const renderItems = props.items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onItemClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
