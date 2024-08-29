//어린이집 > 서울
import React, { useState, useEffect } from "react";
//components
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";

import { SelectButton } from "primereact/selectbutton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Message } from "primereact/message";

export default function Main() {
  const [date, setDate] = useState(null);
  const [newList, setNewList] = useState([]);

  function formatDate(date) {
    const MM = String(date.getUTCMonth() + 1).padStart(2, "0");
    const YYYY = String(date.getUTCFullYear());

    return `${YYYY}${MM}`;
  }

  const fetchList = async () => {
    if (!date) return; //date가 null 이면 fetch하지 않음

    try {
      const yyyymm = formatDate(date);
      const response = await fetch(
        `/api/daycare/getNewMonthly?yyyymm=${yyyymm}`
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        const data = result.response.item;
        console.log(result);
        setNewList(data);
      } else {
        console.log("응답 오류");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, [date]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="월별 신규 오픈"></Card>
        <Card>
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            view="month"
            dateFormat="yy/mm"
          />
        </Card>
      </div>
    </>
  );
}
