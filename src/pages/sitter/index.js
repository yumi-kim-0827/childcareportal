//돌봄
//pages>sitter>index
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
//components
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Message } from "primereact/message";
//data
import location from "@/src/data/location";

import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";

export default function Main() {
  const [ctpvNm, setctpvNm] = useState("경기");
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
      <Head>
        <script
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAPS_API_KEY}`}
          async
          defer
        ></script>
      </Head>
      <div className="flex flex-col gap-4">
        <Card title="아이돌봄 서비스 제공기관"></Card>
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
            <Column
              field="childCareInstNm"
              header="이름"
              className="w-1/6"
            ></Column>
            <Column field="addr" header="주소"></Column>
            <Column drtlnTelno="crtel" header="전화번호"></Column>
            <Column field="crcapat" header="정원"></Column>
            <Column field="fxno" header="팩스"></Column>
            <Column field="childCareInstNo" header="아이돌봄기관번호"></Column>
          </DataTable>
        </Card>
        <Card>
          <MapDiv
            style={{
              height: 400,
            }}
          >
            <NaverMap>
              <Marker defaultPosition={{ lat: 37.5666103, lng: 126.9783882 }} />
              <Marker defaultPosition={{ lat: 38.5666103, lng: 126.9783882 }} />
              <Marker defaultPosition={{ lat: 42.5666103, lng: 126.9783882 }} />
            </NaverMap>
          </MapDiv>
        </Card>
      </div>
    </>
  );
}
