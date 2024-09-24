//어린이집>경기
//pages>daycare>geonggi
import React, { useState, useEffect } from "react";
import Head from "next/head";
//components
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function Main() {
  const [list, setList] = useState([]); //
  const [pageNo, setPageNo] = useState(1); //어린이집 선택 시군구 코드

  const handleChange = (e) => {
    setCode(e.value);
  };

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
    fetchList(pageNo);
  }, [pageNo]);

  const viewLocationButton = (rowData) => {
    return (
      <Button
        icon="pi pi-map-marker"
        className="p-button-rounded"
        onClick={() => {
          setSelectCenter(rowData);
        }}
      ></Button>
    );
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
          <DataTable
            value={list}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="organNm" header="활동장소명"></Column>
            <Column field="pgmNm" header="자원봉사 프로그램명"></Column>
            <Column field="price" header="참가비"></Column>
            <Column field="target" header="참여대상"></Column>
            <Column body={viewLocationButton} header="상세내용"></Column>
          </DataTable>
        </Card>
      </div>
    </>
  );
}
