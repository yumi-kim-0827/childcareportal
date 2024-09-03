//어린이집>월별신규
//pages>daycare>newmonthly
import React, { useState, useEffect } from "react";
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
    const MM = String(yyyymm.getUTCMonth() + 1).padStart(2, "0");
    const YYYY = String(yyyymm.getUTCFullYear());

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
        console.log(data);
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
      <div className="flex flex-col gap-4">
        <Card title="월별 신규 오픈"></Card>
        <Card>
          <Calendar
            value={yyyymm}
            onChange={(e) => {
              const selectMonth = formatDate(e.value);
              setYyyymm(selectMonth);
            }}
            view="month"
            dateFormat="yy/mm"
          />
        </Card>
        <Card>
          <Message
            text={`신규오픈 어린이집 총 수 ${list.length} (${yyyymm})`}
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
