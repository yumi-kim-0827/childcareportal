//신생아>산후조리>서울>강남
//pages>baby>mothercare>seoul>gangnam.js
import React, { useState, useEffect } from "react";
import Head from "next/head";

//components
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Message } from "primereact/message";
import ClickNaverMap from "@/src/components/map/baby/ClickNaverMap";

export default function Main() {
  const [list, setList] = useState([]);
  const [selectMothercare, setSelectMothercare] = useState(null); //선택된 아이템

  const fetchList = async () => {
    try {
      const response = await fetch("/api/baby/getMotherCareGangnam");

      if (response.ok) {
        const result = await response.json();
        const data = result.LOCALDATA_010104_GN.row;
        const filteredData = data.filter(
          (item) => item.DTLSTATENM !== "폐업" //폐업인 산후조리원은 제외하여 필터링
        );
        setList(filteredData);
      } else {
        const errorText = await response.text(); // 에러 메시지 확인
        console.log("응답 오류:", errorText);
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
      <Head>
        <script
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVERMAP_CLIENT_ID}`}
          async
          defer
        ></script>
        <script
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVERMAP_CLIENT_ID}&submodules=geocoder`}
          async
          defer
        ></script>
      </Head>
      <div className="flex flex-col gap-4">
        <Card title="서울 강남">인허가 받은 산후조리원 리스트</Card>
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
              field="BPLCNM"
              header="산후조리원 이름"
              className="w-1/6"
            ></Column>
            <Column field="RDNWHLADDR" header="주소"></Column>
            <Column field="APVPERMYMD" header="인허가일자"></Column>
            <Column field="PGRMAR" header="임산부실면적(㎡)"></Column>
            <Column field="BBRMAR" header="영유아실면적(㎡)"></Column>
            <Column field="PWNMRGLSTNUM" header="임산부정원수"></Column>
            <Column field="BABYRGLSTNUM" header="영유아정원(명)"></Column>
            <Column field="NURSECNT" header="간호사수(명)"></Column>
            <Column field="NURSAIDCNT" header="간호조무사수(명)"></Column>
            <Column field="NUTRCNT" header="영양사수(명)"></Column>
            <Column field="BDNGLAYERCNT" header="건물층수"></Column>
            <Column body={viewLocationButton} header="지도위치"></Column>
          </DataTable>
        </Card>
        <Card>
          <ClickNaverMap
            item={selectMothercare}
            itemPath={selectMothercare?.RDNWHLADDR}
            itemName={selectMothercare?.BPLCNM}
          />
        </Card>
      </div>
    </>
  );
}
