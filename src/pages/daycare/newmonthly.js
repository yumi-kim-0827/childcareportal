//어린이집>월별신규
//pages>daycare>newmonthly
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
    if (!date) return; //date가 null이면 fetch하지 않음

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
        const errorText = await response.text(); // 에러 메시지 확인
        console.log("응답 오류:", errorText);
        res.status(500).json({ error: errorText });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    function formatDate(date) {
      const MM = String(date.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(date.getUTCDate()).padStart(2, "0");
      const YYYY = String(date.getUTCFullYear());

      return `${YYYY}-${MM}-${dd}`;
    }

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
