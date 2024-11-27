//이유식 준비기
//pages>baby>recipe>index
import React, { useState, useEffect } from "react";
import Image from "next/image";
//components
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Main() {
  const products = [
    {
      a1: "4~5개월",
      a2: "f230fh0g3",
      a3: "Bamboo Watch",
      a4: "Product Description",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="이유식 준비기 추천 레시피" />
        <Card title="준비기">
          <Image
            src=""
            alt="이유식 준비기 추천 레시피 쌀미음 사진"
            layout="responsive"
            width={1000}
            height={400}
          />
          <p>4~5개월 이유식 레시피 : 쌀미음</p>
          <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
            <Column field="a1" header="개월 수"></Column>
            <Column field="a2" header="래시피 재료"></Column>
            <Column field="a3" header="레시피"></Column>
            <Column field="a4" header="선호도"></Column>
          </DataTable>
        </Card>
      </div>
    </>
  );
}
