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

  // 4~5개월 레시피 필터링
  const month4to5Recipes = recipes.filter((recipe) => recipe.a1 === "4~6개월");
  // 6~7개월 레시피 필터링
  const month6to7Recipes = recipes.filter((recipe) => recipe.a1 === "6~8개월");
  // 8~12개월 레시피 필터링
  const month8to12Recipes = recipes.filter(
    (recipe) => recipe.a1 === "8~12개월"
  );
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
          <p className="max-medium:text-sm">
            3~4개월 아기는 일반적으로 모유나 분유만으로도 충분한 영양을 얻을 수
            있습니다. 하지만 의사와 상의 후 이유식을 시작하기로 결정했다면,
            아기에게 맞는 첫 이유식 레시피를 신중히 선택해야 합니다.
          </p>
          <h3 className="py-2">이유식 준비 전에 확인할 점</h3>
          <p className="max-medium:text-sm">
            - 아기의 준비 상태: 목을 가눌 수 있고, 음식에 관심을 보이며, 혀
            내밀기 반사가 줄어든 상태인지 확인하세요.
          </p>
          <p className="max-medium:text-sm">
            - 알레르기 체크: 새로운 음식을 줄 때마다 3~4일 간격으로 천천히
            진행하며 알레르기 반응을 관찰하세요.
          </p>
        </Card>
        <Card>
          <TabView pt={{ panelcontainer: { style: { padding: "1rem 0" } } }}>
            <TabPanel header="생후 4~6개월" leftIcon="pi pi-calendar mr-2">
              <h3>초기 이유식 레시피</h3>
              <p>첫 이유식, 또는 초기 이유식</p>
              <span className="max-medium:text-sm">
                이 시기에는 아기의 소화 시스템이 아직 미숙하므로, 쌀미음, 애호박
                미음 등 부드럽고 소화가 용이한 음식이 주로 제공됩니다.
              </span>
              <TabView
                pt={{
                  root: {
                    style: { margin: "2rem 0", border: "1px solid #f0f0f0" },
                  },
                }}
              >
                {month4to5Recipes.map((item) => {
                  return (
                    <TabPanel header={item.name} key={item.id}>
                      <strong className="text-lg">{item.detail}</strong>
                      <p className="pt-4 max-medium:text-sm">
                        재료 : {item.a2}
                      </p>
                      <p className="max-medium:text-sm">
                        선호도 :
                        {item.a4 === "보통"
                          ? "🧡"
                          : item.a4 === "좋음"
                          ? "🧡🧡"
                          : item.a4 === "아주 좋음"
                          ? "🧡🧡🧡"
                          : null}
                      </p>
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
            <TabPanel header="생후 6~8개월" leftIcon="pi pi-calendar mr-2">
              <h3>중기 이유식 레시피</h3>
              <span className="max-medium:text-sm">
                아기가 점차 더 다양한 음식을 시도할 수 있게 되며, 이 시기에는
                고기나 다양한 채소, 과일을 포함한 이유식이 제공됩니다.
              </span>
              <TabView
                pt={{
                  root: {
                    style: { margin: "2rem 0", border: "1px solid #f0f0f0" },
                  },
                }}
              >
                {month6to7Recipes.map((item) => {
                  return (
                    <TabPanel header={item.name} key={item.id}>
                      <strong className="text-lg">{item.detail}</strong>
                      <p className="pt-4 max-medium:text-sm">
                        재료 : {item.a2}
                      </p>
                      <p className="max-medium:text-sm">
                        선호도 :
                        {item.a4 === "보통"
                          ? "🧡"
                          : item.a4 === "좋음"
                          ? "🧡🧡"
                          : item.a4 === "아주 좋음"
                          ? "🧡🧡🧡"
                          : null}
                      </p>
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
            <TabPanel header="생후 8~12개월" leftIcon="pi pi-calendar mr-2">
              <h3>후기 이유식 레시피</h3>
              <span className="max-medium:text-sm">
                아기가 스스로 음식을 조금씩 씹고, 음식을 더 다양한 형태로 섭취할
                수 있습니다. 이 시기에는 죽보다는 미음, 스튜 등 다양한 형태의
                이유식이 포함되며, 야채, 고기, 다양한 과일이 더해집니다.
              </span>
              <TabView
                pt={{
                  root: {
                    style: { margin: "2rem 0", border: "1px solid #f0f0f0" },
                  },
                }}
              >
                {month8to12Recipes.map((item) => {
                  return (
                    <TabPanel header={item.name} key={item.id}>
                      <strong className="text-lg">{item.detail}</strong>
                      <p className="pt-4 max-medium:text-sm">
                        재료 : {item.a2}
                      </p>
                      <p className="max-medium:text-sm">
                        선호도 :
                        {item.a4 === "보통"
                          ? "🧡"
                          : item.a4 === "좋음"
                          ? "🧡🧡"
                          : item.a4 === "아주 좋음"
                          ? "🧡🧡🧡"
                          : null}
                      </p>
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
          </TabView>
        </Card>
        <Card>
          <Image
            src="/images/babyfood2.png"
            alt="메인배너"
            layout="responsive"
            width={1000}
            height={400}
          />
          <h3 className="py-2">아기가 이유식을 거부해요.</h3>
          <p className="max-medium:text-sm">
            아기가 이유식을 거부할 때는 여러 가지 이유가 있을 수 있습니다.
          </p>
          <p className="max-medium:text-sm">
            아기가 처음 이유식을 시작하거나 새로운 맛과 질감에 익숙하지 않을 때
            자연스러운 반응일 수 있으므로 너무 걱정하지 마세요.
          </p>
          <h3 className="py-2">이유식 거부 대처법</h3>
          <p className="max-medium:text-sm">
            - 억지로 먹이지 않기 : 억지로 이유식을 먹이면 아기가 더 거부감을
            느낄 수 있으니 아기가 관심을 보일 때까지 천천히 기다리세요.
          </p>
          <p className="max-medium:text-sm">
            - 다른 시간대에 시도하기 : 아기가 더 기운이 있고 배고플 때 다시
            시도해 보세요. 예를 들어, 낮잠 후 기분이 좋은 시간에 시도할 수
            있습니다.
          </p>
          <p className="max-medium:text-sm">
            - 작은 양으로 시작하기 : 한두 숟가락 정도로 소량씩 시작해 아기의
            부담을 줄입니다. 숟가락 대신 손가락 끝에 음식을 묻혀 입에 살짝
            대보는 것도 좋습니다.
          </p>
          <p className="max-medium:text-sm">
            - 맛과 질감 신경쓰기 : 너무 묽거나 뻑뻑한 질감은 조절해 보세요.
            단맛이 나는 고구마, 단호박 같은 재료로 시작하면 더 잘 받아들일 수
            있습니다.
          </p>
          <p className="max-medium:text-sm">
            - 놀이처럼 접근하기 : 이유식 시간을 즐겁고 재미있게 만들어 보세요.
          </p>
        </Card>
      </div>
    </>
  );
}
