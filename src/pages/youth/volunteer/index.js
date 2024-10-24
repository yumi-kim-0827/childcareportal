//청소년>자원봉사
//pages>youth>volunteer>index
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
//components
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Paginator } from "primereact/paginator";

export default function Main() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [pageNo, setPageNo] = useState(1); //페이징 번호
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(1);

  const fetchList = async (pageNo) => {
    try {
      const response = await fetch(
        `/api/youth/getVolunteerList?pageNo=${pageNo}`
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
    if (pageNo > 0) {
      fetchList(pageNo);
    }
  }, [pageNo]);

  const viewLocationButton = (rowData) => {
    return (
      <Button
        icon="pi pi-map-marker"
        className="p-button-rounded"
        onClick={() => {
          const prmKey = Number(rowData.key1[0]);
          router.push(`/youth/volunteer/${prmKey}`);
        }}
      ></Button>
    );
  };

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    setPageNo(event.first + 1);
  };

  return (
    <>
      <Head>
        <title>청소년 자원봉사 | 봉사활동 안내 찾기</title>
        <meta
          name="description"
          content="청소년 봉사활동 지역별 찾기 검색, 청소년 봉사활동 정보 목록을 보실 수 있습니다."
        />
        <meta
          name="keywords"
          content="청소년 자원봉사, 내신, 청소년지역봉사센터, 자원봉사실적, 청소년 자원봉사 운영 안내"
        />
        <meta name="author" content="childcareportal" />
        <meta
          property="og:title"
          content="청소년 자원봉사 | 봉사활동 안내 찾기"
        />
        <meta
          property="og:description"
          content="청소년 봉사활동 지역별 찾기 검색, 청소년 봉사활동 정보 목록을 보실 수 있습니다."
        />
        <meta
          property="og:url"
          content="https://www.childcareportal.co.kr/youth/volunteer"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col gap-4">
        <Card title="청소년 자원봉사 최신 목록"></Card>
        <Card>
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
          {list.map((item, id) => {
            return (
              <div key={id} className="flex text-center">
                <p className="w-1/5">{item.organNm}</p>
                <p className="w-2/5">{item.pgmNm}</p>
                <p className="w-1/5">{item.target}</p>
                <p className="w-1/5">{item.price}</p>
                <p className="w-1/5">{item.price}</p>
              </div>
            );
          })}
          <Paginator
            first={first}
            rows={rows}
            totalRecords={10}
            onPageChange={onPageChange}
          />
        </Card>
      </div>
    </>
  );
}
