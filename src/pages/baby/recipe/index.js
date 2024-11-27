//이유식 준비기
//pages>baby>recipe>index
import React, { useState, useEffect } from "react";
import Image from "next/image";
import recipes from "@/src/data/babyRecipe";
//components
import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

export default function Main() {
  const recipesTemplate = (recipes) => {
    return (
      <div>
        {recipes.a3.map((item, id) => {
          return <p key={id}>{item}</p>;
        })}
      </div>
    );
  };

  const likeTemplate = (recipes) => {
    return <Tag value={recipes.a4} severity="success"></Tag>;
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="이유식 준비기 추천 레시피" />
        <Card>
          <TabView>
            <TabPanel header="" leftIcon="pi pi-calendar mr-2">
              <Card title="준비기">
                <Image
                  src=""
                  alt="이유식 준비기 추천 레시피 쌀미음 사진"
                  layout="responsive"
                  width={1000}
                  height={400}
                />
                <p>4~5개월 이유식 레시피 : 쌀미음</p>
                <DataTable value={recipes} tableStyle={{ minWidth: "50rem" }}>
                  <Column field="a1" header="개월 수"></Column>
                  <Column field="a2" header="래시피 재료"></Column>
                  <Column
                    field="a3"
                    header="레시피"
                    body={recipesTemplate}
                  ></Column>
                  <Column
                    field="a4"
                    header="선호도"
                    body={likeTemplate}
                  ></Column>
                </DataTable>
              </Card>
            </TabPanel>
          </TabView>
        </Card>
      </div>
    </>
  );
}
