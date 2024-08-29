//돌봄
//pages>sitter>index
import React, { useState, useEffect } from "react";
//components
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Message } from "primereact/message";
//data
import location from "@/src/data/location";

export default function Main() {
  const [ctpvNm, setctpvNm] = useState("");
  const [list, setList] = useState([]);

  const options = location.map((district) => {
    return { label: district.sido, value: district.sido };
  });

  const handleChange = (e) => {
    setctpvNm(e.value);
  };

  const fetchList = async (ctpvNm) => {
    try {
      const response = await fetch(
        `/api/sitter/getSitterService?ctpvNm=${ctpvNm}`
      );

      if (response.ok) {
        const result = await response.json();
        const data = result.response.body.items.item;
        setList(data);
      } else {
        console.log("응답 오류");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList(ctpvNm);
  }, [ctpvNm]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="zzzzzzzzzzzzzzzzzzz"></Card>
        <Card>
          <SelectButton onChange={handleChange} options={options} />
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
