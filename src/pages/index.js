//메인
//pages>index
import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import Image from "next/image";
import { useRouter } from "next/router";
//components
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Tag } from "primereact/tag";

export default function Main() {
  const [list, setList] = useState([]);
  const router = useRouter();
  const today = new Date();
  console.log(today);

  function formatDate(today) {
    if (!today) return "";
    const MM = String(today.getUTCMonth() + 1).padStart(2, "0");
    const YYYY = String(today.getUTCFullYear());
    console.log(MM);
    return `${YYYY}${MM}`;
  }

  const fetchList = async (yyyymm) => {
    if (!yyyymm) return; //date가 null이면 fetch하지 않음

    try {
      const response = await fetch(
        `/api/daycare/getNewMonthly?yyyymm=${yyyymm}`
      );

      if (response.ok) {
        const result = await response.json();
        const data = result.response.item;
        setList(data);
        console.log(data);
      } else {
        const errorText = await response.text(); // 에러 메시지 확인
        console.log("응답 오류:", errorText);
        res.status(500).json({ error: errorText });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (today) {
      const yyyymm = formatDate(today);
      fetchList(yyyymm);
    }
  }, []);

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
    {
      title: "영유아",
      description: "초보 부모를 위한 필수 육아 정보, 한 곳에서 쉽게 찾으세요!",
      imgSrc: "/images/main_slide4.jpg",
      router: "/baby/mothercare/geongggi/goyang",
    },
    {
      title: "산후조리원 조회",
      description: "엄마와 아기를 위한 완벽한 케어, 공식 인가 산후조리원 찾기",
      imgSrc: "/images/main_slide3.jpg",
      router: "/baby/mothercare/geongggi/goyang",
    },
    {
      title: "어린이집",
      description: "우리 아이의 첫 사회생활, 안전한 어린이집을 찾아보세요.",
      imgSrc: "/images/main_slide1.jpg",
      router: "/daycare",
    },
    {
      title: "청소년보호센터 정보",
      description:
        "청소년의 꿈과 도전을 응원하는, 다양한 프로그램을 만나보세요!",
      imgSrc: "/images/main_slide2.jpg",
      router: "/baby/mothercare/geongggi/goyang",
    },
    {
      title: "영유아",
      description: "초보 부모를 위한 필수 육아 정보, 한 곳에서 쉽게 찾으세요!",
      imgSrc: "/images/main_slide4.jpg",
      router: "/baby/mothercare/geongggi/goyang",
    },
    {
      title: "산후조리원 조회",
      description: "엄마와 아기를 위한 완벽한 케어, 공식 인가 산후조리원 찾기",
      imgSrc: "/images/main_slide3.jpg",
      router: "/baby/mothercare/geongggi/goyang",
    },
    {
      title: "어린이집",
      description: "우리 아이의 첫 사회생활, 안전한 어린이집을 찾아보세요.",
      imgSrc: "/images/main_slide1.jpg",
      router: "/daycare",
    },
    {
      title: "청소년보호센터 정보",
      description:
        "청소년의 꿈과 도전을 응원하는, 다양한 프로그램을 만나보세요!",
      imgSrc: "/images/main_slide2.jpg",
      router: "/baby/mothercare/geongggi/goyang",
    },
  ];

  const itemTemplate = (item) => {
    return (
      <div className="mr-2">
        <h3>{item.title}</h3>
        <Image
          src={`${item.imgSrc}`}
          alt="메인배너"
          layout="responsive"
          width={1000}
          height={400}
        />
        <p>{item.description}</p>
        <Button
          icon="pi pi-chevron-right"
          onClick={() => {
            router.push(`${item.router}`);
          }}
        />
      </div>
    );
  };
  return (
    <>
      <Card title="어린이집 찾기">메인</Card>
      <Card>
        <Carousel
          value={items}
          numVisible={2}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={itemTemplate}
        />
      </Card>
      <Card>
        <div className="flex gap-2 justi">
          <Card title="이번달 신규 어린이집" className="flex-1">
            <div className="h-[500px] overflow-y-scroll">
              <Accordion>
                {list.map((item, id) => {
                  return (
                    <AccordionTab header={`${item.crname}`} key={id}>
                      <Tag value="new"></Tag>
                      <p>주소 : {item.craddr}</p>
                      <p>정원 : {item.crcapat}</p>
                    </AccordionTab>
                  );
                })}
              </Accordion>
            </div>
          </Card>
          <Card title="이번달 신규 어린이집" className="flex-1">
            ㄴㄴㄴㄴ
          </Card>
        </div>
      </Card>
    </>
  );
}
