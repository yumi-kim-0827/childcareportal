//신생아>산후조리>경기
//pages>baby>mothercare>geonggi>goyang.js
import React, { useState, useEffect } from "react";
//components
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Message } from "primereact/message";

export default function Main() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const sigun_nm = "고양시";
    try {
      const response = await fetch(
        `/api/baby/getMotherCare?sigun_nm=${sigun_nm}`
      );

      if (response.ok) {
        const result = await response.json();
        const data = result.PostnatalCare[1].row;
        setList(data);
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

  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="경기 고양시 산후조리원 리스트"></Card>
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
