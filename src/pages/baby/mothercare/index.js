//신생아>산후조리
//pages>baby>mothercare>index.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
//components
import { Card } from "primereact/card";

export default function Main() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="산후조리란?">
          <Image
            src="/images/mothercare1.png"
            alt="메인배너"
            layout="responsive"
            width={1000}
            height={2}
          />
          <h3>출산으로 인해 약해진 몸과 마음을 회복하기 위한 중요한 단계</h3>
          <p className="p-3 bg-gray-200 rounded-lg">
            산후조리는 출산 후 산모가 건강을 회복하고, 체력을 보강하며, 모유
            수유 등을 준비하는 기간 동안의 돌봄과 관리 과정을 말해요.산모의
            건강뿐 아니라 아기의 건강에도 영향을 줄 수 있답니다.
          </p>
        </Card>
        <Card title="산후조리 방법">
          <h3>1. 영양 관리</h3>
          <p className="mb-2 p-3 bg-gray-200 rounded-lg">
            - 국이나 탕 종류로 수분 섭취를 늘려 자궁 회복을 돕고, 모유 생성에
            도움을 줘요.
          </p>
          <p className="mb-2 p-3 bg-gray-200 rounded-lg">
            - 모체에서 빠져나간 철분, 단백질, 칼슘 등이 풍부한 음식을 섭취해요.
          </p>
          <h3>2. 휴식과 수면</h3>
          <p className="mb-2 p-3 bg-gray-200 rounded-lg">
            - 충분한 휴식을 취하며 피로를 해소해야 해요.
          </p>
          <p className="mb-2 p-3 bg-gray-200 rounded-lg">
            - 몸을 무리하게 움직이지 않고 점진적으로 운동을 시작하는 것이
            중요해요.
          </p>
          <h3>3. 온열 요법</h3>
          <p className="mb-2 p-3 bg-gray-200 rounded-lg">
            - 몸을 따뜻하게 유지해 혈액순환을 촉진하고 자궁 수축을 돕는 전통적인
            방식이에요.
          </p>
          <h3>4. 전문 산후조리원 이용</h3>
          <p className="mb-2 p-3 bg-gray-200 rounded-lg">
            - 산후조리원에서 체계적인 관리와 효율적인 돌봄을 받을 수 있어요.
          </p>
          <p className="mb-2 p-3 bg-gray-200 rounded-lg">
            - 아기의 기본 건강 상태를 점검하며 산모와 아기 모두를 위한 환경을
            제공해요.
          </p>
        </Card>
      </div>
    </>
  );
}
