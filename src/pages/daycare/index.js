//어린이집
//pages>daycare>index
import React, { useState, useEffect } from "react";
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
        console.log("응답 오류");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList(code);
  }, [code]);

  const viewLocationButton = (rowData) => {
    return (
      <Button
        icon="pi pi-map-marker"
        className="p-button-rounded p-button-info"
        onClick={() => {
          setSelectDayCare(rowData);
        }}
      />
    );
  };

  return (
    <>
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
