//어린이집
//pages>daycare>index
import React, { useState, useEffect } from "react";
import Head from "next/head";
//components
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import NaverMap from "@/src/components/map/daycare/NaverMap";
import TotalLocationTab from "@/src/components/tab/TotalLocationTab";
//utills
import transformDayCareData from "@/src/utils/transformDayCareData";

export default function Main() {
  const [list, setList] = useState([]); //어린이집 리스트 배열
  const [code, setCode] = useState("11680"); //시군구코드 선택
  const [selectDayCare, setSelectDayCare] = useState(null); //선택된 어린이집 정보

  const handleClick = (sigunCode) => {
    setCode(sigunCode);
  };

  const viewLocationButton = (rowData) => {
    return (
      <Button
        icon="pi pi-map-marker"
        className="p-button-rounded"
        onClick={() => {
          setSelectDayCare(rowData);
        }}
      />
    );
  };

  const fetchList = async (code) => {
    try {
      const response = await fetch(
        `/api/daycare/getTotalDaycare?arcode=${code}`
      );

      if (response.ok) {
        const result = await response.json();
        const data = result.response.item;
        const formedData = transformDayCareData(data);
        setList(formedData);
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
    fetchList(code);
  }, [code]);

  return (
    <>
      <Head>
        <title>전국 어린이집 찾기 | 지역별 어린이집 지도 검색</title>
        <meta
          name="description"
          content="전국의 어린이집을 지역별로 쉽게 찾아보세요. 지도 검색 기능을 통해 가까운 어린이집을 검색하고, 어린이집 정보와 위치를 한눈에 확인하세요. 부모님을 위한 편리한 어린이집 검색 서비스 제공."
        />
        <meta
          name="keywords"
          content="어린이집, 전국 어린이집 찾기, 어린이집 지도, 어린이집 검색, 지역별 어린이집, 부모님 어린이집 검색"
        />
        <meta name="author" content="childcareportal" />
        <meta
          property="og:title"
          content="전국 어린이집 찾기 | 지역별 어린이집 지도 검색"
        />
        <meta
          property="og:description"
          content="전국의 어린이집을 지역별로 검색하고 지도에서 쉽게 찾으세요. 가까운 어린이집을 손쉽게 검색하여 필요한 정보를 빠르게 확인하세요."
        />
        <meta
          property="og:url"
          content="https://www.childcareportal.co.kr/daycare"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col gap-4">
        <Card title="전국 어린이집 지도에서 찾기"></Card>
        <Card>
          <TotalLocationTab onClick={handleClick} />
        </Card>
        <Card>
          <DataTable
            value={list}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="crname" header="이름" className="w-1/6"></Column>
            <Column field="craddr" header="주소"></Column>
            <Column field="crtel" header="전화번호"></Column>
            <Column field="crcapat" header="정원"></Column>
            <Column field="crfax" header="팩스"></Column>
            <Column field="crhome" header="홈페이지"></Column>
            <Column body={viewLocationButton} header="지도위치"></Column>
          </DataTable>
        </Card>
        <Card>
          <NaverMap item={selectDayCare} />
        </Card>
      </div>
    </>
  );
}
