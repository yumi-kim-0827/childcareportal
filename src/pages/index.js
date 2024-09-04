//메인
//pages>index
import React, { useState, useRef } from "react";
//components
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";

export default function Main() {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const items = [
    { title: "Item 1", description: "Description for item 1" },
    { title: "Item 2", description: "Description for item 2" },
    { title: "Item 3", description: "Description for item 3" },
    { title: "Item 4", description: "Description for item 4" },
    { title: "Item 5", description: "Description for item 5" },
  ];

  const itemTemplate = (item) => {
    return (
      <Card title={item.title}>
        <p>{item.description}</p>
      </Card>
    );
  };
  return (
    <>
      <Card title="어린이집 찾기">메인</Card>
      <Card>
        <Carousel
          value={items}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={itemTemplate}
        />
      </Card>
    </>
  );
}
