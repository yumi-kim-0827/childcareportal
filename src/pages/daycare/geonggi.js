//어린이집>경기
//pages>daycare>geonggi
import React, { useState, useEffect } from "react";
import Head from "next/head";
//components
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Message } from "primereact/message";
//data
import location from "@/src/data/location";
//utills
import transformDayCareData from "@/src/utils/transformDayCareData";

export default function Main() {
  const [list, setList] = useState([]); //어린이집 리스트 배열
  const [code, setCode] = useState("41150"); //어린이집 선택 시군구 코드

  const options = location[4].sigungu.map((district) => {
    return { label: district.name, value: district.code };
  });

  const handleChange = (e) => {
    setCode(e.value);
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
        <title>경기 어린이집 정보 리스트 | 지역별 어린이집 찾기</title>
        <meta
          name="description"
          content="경기에 있는 어린이집 정보를 확인하세요. 지역별로 정리된 어린이집 리스트에서 위치, 연락처, 정원 등의 세부 정보를 쉽게 찾을 수 있습니다."
        />
        <meta
          name="keywords"
          content="경기 어린이집, 경기 어린이집 리스트, 경기도 어린이집 정보, 경기 어린이집 찾기, 어린이집 연락처, 어린이집 위치"
        />
        <meta name="author" content="childcareportal" />
        <meta
          property="og:title"
          content="경기 어린이집 정보 리스트 | 지역별 어린이집 찾기"
        />
        <meta
          property="og:description"
          content="경기 지역의 어린이집을 검색하고, 위치, 연락처, 정원 등의 세부 정보를 확인하세요."
        />
        <meta
          property="og:url"
          content="https://www.childcareportal.co.kr/daycare/seoul"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col gap-4">
        <Card title="경기 어린이집 리스트"></Card>
        <Card>
          <SelectButton
            value={code}
            onChange={handleChange}
            options={options}
          />
        </Card>
        <Card>
          <Message
            severity="success"
            text={`전체 리스트 수 ${list.length}`}
            className="mb-2"
          />
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
          </DataTable>
        </Card>
      </div>
    </>
  );
}
