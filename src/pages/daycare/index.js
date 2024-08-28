//어린이집
import React, { useState, useRef } from "react";

//components
import { SelectButton } from "primereact/selectbutton";
import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import NaverMap from "@/src/components/map/NaverMap";
import TotalLocationTab from "@/src/components/tab/TotalLocationTab";

export default function Main() {
  const [list, setList] = useState([]); //어린이집 리스트 배열
  const [code, setCode] = useState("11680"); //어린이집 선택 시군구 코드

  const handleChange = (e) => {
    setCode(e.value);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="전국 어린이집 지도에서 찾기"></Card>
        <Card>
          <TotalLocationTab />
        </Card>
        <Card>
          <NaverMap />
        </Card>
      </div>
    </>
  );
}
