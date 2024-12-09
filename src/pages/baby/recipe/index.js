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

  console.log(recipes);
  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="이유식 추천 레시피" />
        <Card>
          <Image
            src="/images/babyfood1.png"
            alt="메인배너"
            layout="responsive"
            width={1000}
            height={400}
          />
          <p>
            3~4개월 아기는 일반적으로 모유나 분유만으로도 충분한 영양을 얻을 수
            있습니다. 하지만 의사와 상의 후 이유식을 시작하기로 결정했다면,
            아기에게 맞는 첫 이유식 레시피를 신중히 선택해야 합니다.
          </p>
          <h3>이유식 준비 전에 확인할 점</h3>
          <p>
            - 아기의 준비 상태: 목을 가눌 수 있고, 음식에 관심을 보이며, 혀
            내밀기 반사가 줄어든 상태인지 확인하세요.
          </p>
          <p>
            - 알레르기 체크: 새로운 음식을 줄 때마다 3~4일 간격으로 천천히
            진행하며 알레르기 반응을 관찰하세요.
          </p>
        </Card>
        <Card>
          <TabView>
            <TabPanel header="생후 4~5개월" leftIcon="pi pi-calendar mr-2">
              <TabView>
                {recipes.map((item) => {
                  return (
                    <TabPanel header={item.name} key={item.id}>
                      <ul>
                        {item.a3.map((list, id) => {
                          return <li key={id}>{list}</li>;
                        })}
                      </ul>
                    </TabPanel>
                  );
                })}
              </TabView>
            </TabPanel>
            <TabPanel header="생후 6~7개월" leftIcon="pi pi-calendar mr-2">
              22
            </TabPanel>
          </TabView>
        </Card>
      </div>
    </>
  );
}
