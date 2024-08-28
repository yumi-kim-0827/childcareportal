//어린이집 > 서울
import React, { useState, useEffect } from "react";
//components
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";
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

  const fetchList = async (code) => {
    try {
      const response = await fetch(
        `/api/daycare/getTotalDaycare?arcode=${code}`
      );

      if (response.ok) {
        const result = await response.json();
        setList(result.response.item);
      } else {
        console.log("응답 오류");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code) {
      fetchList(code);
    } else {
      fetchList();
    }
  }, [code]);

  return (
    <>
      <Card title="서울 어린이집 리스트">
        <SelectButton value={code} onChange={handleChange} options={options} />
        {list.map((item, id) => {
          return <p key={id}>{item.craddr[0]}</p>;
        })}
      </Card>
    </>
  );
}
