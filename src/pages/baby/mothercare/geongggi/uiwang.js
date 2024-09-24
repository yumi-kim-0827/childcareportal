//신생아>산후조리>경기>의왕시
//pages>baby>mothercare>geonggi>goyang.js
import React, { useState, useEffect } from "react";
//components
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Message } from "primereact/message";
import ClickNaverMap from "@/src/components/map/ClickNaverMap";

export default function Main() {
  const [list, setList] = useState([]);
  const [selectMothercare, setSelectMothercare] = useState(null); //선택된 아이템

  const fetchList = async () => {
    const sigun_nm = "의왕시";
    try {
      const response = await fetch(
        `/api/baby/getMotherCare?sigun_nm=${sigun_nm}`
      );

      if (response.ok) {
        const result = await response.json();
        const data = result.PostnatalCare[1].row;
        const filteredData = data.filter(
          (item) => item.BSN_STATE_NM !== "폐업" //폐업인 산후조리원은 제외하여 필터링
        );
        setList(filteredData);
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

  const viewLocationButton = (rowData) => {
    return (
      <Button
        icon="pi pi-map-marker"
        className="p-button-rounded"
        onClick={() => {
          setSelectMothercare(rowData);
        }}
      />
    );
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="경기 의왕시 산후조리원 리스트">
          인허가 받은 산후조리원 리스트
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
            <Column
              field="BIZPLC_NM"
              header="산후조리원 이름"
              className="w-1/6"
            ></Column>
            <Column field="REFINE_ROADNM_ADDR" header="주소"></Column>
            <Column field="LICENSG_DE" header="인허가일자"></Column>
            <Column field="PWNMRM_AR" header="임산부실면적(㎡)"></Column>
            <Column field="INFANTRM_AR" header="영유아실면적(㎡)"></Column>
            <Column field="PWNM_PSN_CAPA_CNT" header="임산부정원수"></Column>
            <Column field="INFANT_PSN_CAPA" header="영유아정원(명)"></Column>
            <Column field="NURSE_CNT" header="간호사수(명)"></Column>
            <Column field="NURSAID_CNT" header="간호조무사수(명)"></Column>
            <Column field="NUTRST_CNT" header="영양사수(명)"></Column>
            <Column field="BULDNG_FLOOR_CNT" header="건물층수"></Column>
            <Column body={viewLocationButton} header="지도위치"></Column>
          </DataTable>
        </Card>
        <Card>
          <ClickNaverMap
            item={selectMothercare}
            itemPath={selectMothercare?.REFINE_ROADNM_ADDR}
            itemName={selectMothercare?.BIZPLC_NM}
          />
        </Card>
      </div>
    </>
  );
}
