//어린이집 > 서울
import React, { useState, useEffect } from "react";
//components
import { Card } from "primereact/card";
import { SelectButton } from "primereact/selectbutton";
//data
import location from "@/src/data/location";

export default function Main() {
  const [list, setList] = useState([]); // 어린이집 리스트 배열
  const options = location[0].sigungu.map((district) => {
    return district.name;
  });
  const [value, setValue] = useState(options[0]);

  const fetchList = async () => {
    try {
      const arcode = "11740";
      const response = await fetch(
        `/api/daycare/getTotalDaycare?arcode=${arcode}`
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setList(result.response.item);
      } else {
        console.log("응답 오류");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  console.log(list);
  return (
    <>
      <Card title="서울 어린이집 리스트">
        <SelectButton
          value={value}
          onChange={(e) => setValue(e.value)}
          options={options}
        />
      </Card>
    </>
  );
}
