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
import { Paginator } from "primereact/paginator";
import { ProgressSpinner } from "primereact/progressspinner";

export default function Main() {
  //월별 신규 어린이집
  const [listNewMonthlyCare, setListNewMonthlyCare] = useState([]);
  //경기 운영중인 산후조리원
  const [listGeonggiMother, setListGeonggiMother] = useState([]);
  //여성가족부 정책 리스트
  const [notice, setNotice] = useState([]);
  //청소년 봉사활동 프로그램 목록
  const [volunteerList, setVolunteerList] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(1);

  const KEY = process.env.NEXT_PUBLIC_PUBLICDATA_KEY;

  const router = useRouter();
  const today = new Date();

  function formatDate(today) {
    if (!today) return "";
    const MM = String(today.getUTCMonth() + 1).padStart(2, "0");
    const YYYY = String(today.getUTCFullYear());
    return `${YYYY}${MM}`;
  }

  //월별 신규 어린이집 fetch
  const fetchListNewMonthlyCare = async (yyyymm) => {
    if (!yyyymm) return;

    try {
      const response = await fetch(
        `/api/daycare/getNewMonthly?yyyymm=${yyyymm}`
      );

      if (response.ok) {
        const result = await response.json();
        const data = result.response.item;
        setListNewMonthlyCare(data);
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
      fetchListNewMonthlyCare(yyyymm);
    }
  }, []);

  //경기 운영중인 산후조리원 fetch
  const fetchList = async () => {
    const sigun_nm = "";
    try {
      const response = await fetch(
        `/api/baby/getMotherCare?sigun_nm=${sigun_nm}`
      );

      if (response.ok) {
        const result = await response.json();
        const data = result.PostnatalCare[1].row;
        const filteredData = data.filter(
          (item) => item.BSN_STATE_NM !== "폐업" //폐업인 산후조리원은 제외하여 필터링
        );
        setListGeonggiMother(filteredData);
      } else {
        const errorText = await response.text(); // 에러 메시지 확인
        console.log("응답 오류:", errorText);
        res.status(500).json({ error: errorText });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchList();
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

  //정책 뉴스 브리핑 모음 api
  const fetchNoticeList = async () => {
    try {
      const response = await fetch("/api/getNoticeList");

      if (response.ok) {
        const result = await response.json();
        const data = result.body[0].items.item;
        setNotice(data);
      } else {
        console.log("응답 오류");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNoticeList();
  }, []);

  //청소년 봉사활동 프로그래밍 api
  const fetchVolunteerList = async () => {
    try {
      const response = await fetch(
        `https://apis.data.go.kr/1383000/YouthActivInfoVolSrvc/getVolProgrmList?serviceKey=${KEY}&pageNo=1&numOfRows=20&sdate=20200101`
      );

      if (response.ok) {
        const result = await response.json();
        const data = result.response.body[0].items[0].item;
        setList(data);
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
    fetchVolunteerList();
  }, []);

  const handleProgramDetailPage = (programKey) => {
    const prmKey = Number(programKey);
    router.push(`/youth/volunteer/${prmKey}`);
  };

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    setPageNo(event.first + 1);
  };

  return (
    <>
      <Card title="어린이집 찾기" />
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
      <Card title="청소년, 육아 정책 브리핑 모음">
        <div className="pb-2 flex justify-end items-center gap-2">
          <span className="py-2">출처 : 여성가족부</span>
          <Button
            icon="pi pi-external-link"
            className="bg-indigo-300 border-0"
            rounded
            onClick={() => {
              router.push(
                "https://www.mogef.go.kr/mp/pcd/mp_pcd_s001.do?mid=plc500"
              );
            }}
          />
        </div>
        <div>
          {notice.map((item, id) => {
            return (
              <div key={id} className="mb-2 flex justify-between items-center">
                <div>
                  <h3 className="m-0">{item.title}</h3>
                  <span>{item.regDt}</span>
                </div>
                <Button label="Submit" icon="pi pi-check" iconPos="right" />
              </div>
            );
          })}
        </div>
      </Card>
      <Card>
        <div className="flex gap-2 justi">
          <Card title="이번달 신규 어린이집" className="flex-1">
            <div className="h-[500px] overflow-y-scroll">
              <Accordion>
                {listNewMonthlyCare.map((item, id) => {
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
          <Card title="경기도 운영 중인 산후조리원" className="flex-1">
            <div className="h-[500px] overflow-y-scroll">
              <Accordion>
                {listGeonggiMother.map((item, id) => {
                  return (
                    <AccordionTab
                      header={`${item.SIGUN_NM} - ${item.BIZPLC_NM}`}
                      key={id}
                    >
                      <p>주소 : {item.REFINE_LOTNO_ADDR}</p>
                      <p>임산부 정원수: {item.PWNM_PSN_CAPA_CNT}</p>
                    </AccordionTab>
                  );
                })}
              </Accordion>
            </div>
          </Card>
        </div>
      </Card>
      <Card title="청소년 자원봉사 최신 목록">
        <div className="flex text-center">
          <p className="w-1/5">
            <span className="py-1 px-2 rounded-full">
              <i className="pi pi-building"></i>
            </span>
            활동장소명
          </p>
          <p className="w-2/5">
            <i className="pi pi-hammer"></i>자원봉사 프로그램명
          </p>
          <p className="w-1/5">
            <i className="pi pi-user"></i>참여대상
          </p>
          <p className="w-1/5">
            <i className="pi pi-money-bill"></i>참가비
          </p>
          <p className="w-1/5">
            <i className="pi pi-money-bill"></i>자세히보기
          </p>
        </div>
        {volunteerList.length > 0 ? (
          <>
            {volunteerList.map((item, id) => {
              return (
                <div key={id} className="flex text-center">
                  <p className="w-1/5">{item.organNm}</p>
                  <p className="w-2/5">{item.pgmNm}</p>
                  <p className="w-1/5">{item.target}</p>
                  <p className="w-1/5">{item.price}</p>
                  <p className="w-1/5">
                    <Button
                      icon="pi pi-external-link"
                      onClick={() => {
                        const programKey = item.key1[0];
                        handleProgramDetailPage(programKey);
                      }}
                    />
                  </p>
                </div>
              );
            })}
            <Paginator
              first={first}
              rows={rows}
              totalRecords={10}
              onPageChange={onPageChange}
            />
          </>
        ) : (
          <div className="py-6 flex flex-col items-center justify-center gap-4">
            <ProgressSpinner
              style={{ width: "50px", height: "50px" }}
              strokeWidth="8"
              fill="var(--surface-ground)"
              animationDuration=".5s"
              className="text-center"
            />
            <span>잠시만 기다려주세요 ...</span>
          </div>
        )}
      </Card>
    </>
  );
}
