//어린이집>월별신규
//pages>daycare>newmonthly
import React, { useState, useEffect } from "react";
import Head from "next/head";
//components
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Message } from "primereact/message";

export default function Main() {
  const [yyyymm, setYyyymm] = useState(null);
  const [list, setList] = useState([]);

  function formatDate(yyyymm) {
    if (!yyyymm) return "";
    const MM = String(yyyymm.getUTCMonth() + 2).padStart(2, "0");
    const YYYY = String(yyyymm.getUTCFullYear());
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
    if (yyyymm) {
      fetchList(yyyymm);
    }
  }, [yyyymm]);

  return (
    <>
      <Head>
        <title>월별 신규 오픈 어린이집 리스트 | 최신 어린이집 정보</title>
        <meta
          name="description"
          content="매월 새로 오픈하는 어린이집 정보를 확인하세요. 지역별로 최신 어린이집을 검색하고, 상세한 정보와 연락처를 알아보세요. 부모님들을 위한 신뢰할 수 있는 어린이집 정보 제공."
        />
        <meta
          name="keywords"
          content="어린이집, 신규 어린이집, 월별 어린이집, 새로 오픈한 어린이집, 최신 어린이집 정보, 지역별 어린이집"
        />
        <meta name="author" content="childcareportal" />
        <meta
          property="og:title"
          content="월별 신규 오픈 어린이집 리스트 | 최신 어린이집 정보"
        />
        <meta
          property="og:description"
          content="매월 새롭게 오픈한 어린이집을 검색하고, 상세한 정보를 확인하세요. 부모님들을 위한 신뢰할 수 있는 최신 어린이집 정보 제공."
        />
        <meta
          property="og:url"
          content="https://www.childcareportal.co.kr/daycare/newmonthly"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col gap-4">
        <Card title="월별 신규 오픈"></Card>
        <Card>
          <p>캘린더에서 찾으신 월별을 선택하세요.</p>
          <Calendar
            value={yyyymm}
            onChange={(e) => {
              const selectMonth = formatDate(e.value);
              setYyyymm(selectMonth);
            }}
            view="month"
            dateFormat="yy/mm"
            placeholder="📆 click"
          />
        </Card>
        <Card>
          {list?.length > 0 ? (
            <Message
              text={`신규오픈 어린이집 총 수 ${list.length} (${yyyymm})`}
              className="mb-2"
            />
          ) : (
            ""
          )}
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
            <Column field="frstcnfmdt" header="개설 일자"></Column>
            <Column field="crfax" header="팩스"></Column>
            <Column field="crhome" header="홈페이지"></Column>
          </DataTable>
        </Card>
      </div>
    </>
  );
}
