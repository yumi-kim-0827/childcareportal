//어린이집 > 서울
import React, { useState, useEffect } from "react";
//components
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Message } from "primereact/message";
//data
import location from "@/src/data/location";

export default function Main() {
  const [list, setList] = useState([]); //어린이집 리스트 배열
  const [code, setCode] = useState("11680"); //어린이집 선택 시군구 코드

  const options = location[0].sigungu.map((district) => {
    return { label: district.name, value: district.code };
  });

  const handleChange = (e) => {
    setCode(e.value);
  };

  //데이터 형태 변환 함수
  const transformData = (list) => {
    return list.map((item) => ({
      stcode: item.stcode[0],
      craddr: item.craddr[0],
      crfax: item.crfax[0],
      crhome: item.crhome[0],
      crname: item.crname[0],
      crtel: item.crtel[0],
      crcapat: item.crcapat[0],
    }));
  };

  const fetchList = async (code) => {
    try {
      const response = await fetch(
        `/api/daycare/getTotalDaycare?arcode=${code}`
      );

      if (response.ok) {
        const result = await response.json();
        const data = result.response.item;
        const formedData = transformData(data);
        setList(formedData);
      } else {
        console.log("응답 오류");
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
      <div className="flex flex-col gap-4">
        <Card title="서울 어린이집 리스트"></Card>
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
