//청소년>자원봉사>상세페이지
//pages>youth>volunteer>[id]
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
//components
import { Card } from "primereact/card";
import { Fieldset } from "primereact/fieldset";

export default function Main() {
  const router = useRouter();
  const { id } = router.query;
  //상세내용 상태관리
  const [programDetail, setProgramDetail] = useState([]);

  const fetchDetail = async (id) => {
    try {
      const response = await fetch(`/api/youth/getVolunteerDetail?key1=${id}`);

      if (response.ok) {
        const result = await response.json();
        const data = result?.response?.body?.[0]?.items?.[0]?.item?.[0];
        setProgramDetail(data);
      } else {
        const errorText = await response.text(); // 에러 메시지 확인
        console.log("응답 오류:", errorText);
        res.status(500).json({ error: errorText });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchDetail(id);
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>청소년 봉사활동 프로그램 상세내용</title>
        <meta
          name="description"
          content="청소년 봉사활동 지역별 찾기 검색, 청소년 봉사활동 상세내용 정보를 보실 수 있습니다."
        />
        <meta
          name="keywords"
          content="청소년 자원봉사, 내신, 청소년지역봉사센터, 자원봉사실적, 청소년 자원봉사 운영 안내"
        />
        <meta name="author" content="childcareportal" />
        <meta
          property="og:title"
          content="청소년 자원봉사 | 봉사활동 안내 찾기"
        />
        <meta
          property="og:description"
          content="청소년 봉사활동 지역별 찾기 검색, 청소년 봉사활동 상세내용 정보를 보실 수 있습니다."
        />
        <meta
          property="og:url"
          content="https://www.childcareportal.co.kr/youth/volunteer"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col gap-4">
        <Card title="상세">
          <div className="flex flex-col gap-2">
            <Fieldset legend="주소">
              <p className="m-0">
                {programDetail.addr?.[0] || `주소 정보가 없습니다.`}
              </p>
            </Fieldset>
            <Fieldset legend="프로그램 이름">
              <p className="m-0">
                {programDetail.pgmNm?.[0] || `정보가 없습니다.`}
              </p>
            </Fieldset>
            <Fieldset legend="봉사활동 내용">
              <p className="m-0">
                {programDetail.info1?.[0] || `정보가 없습니다.`}
              </p>
              <p className="m-0">
                {programDetail.info2?.[0] || `정보가 없습니다.`}
              </p>
            </Fieldset>
            <Fieldset legend="담당자 이름">
              <p className="m-0">
                {programDetail.managerNm?.[0] || `정보가 없습니다.`}
              </p>
            </Fieldset>
            <Fieldset legend="기관명">
              <p className="m-0">
                {programDetail.target?.[0] || `정보가 없습니다.`}
              </p>
            </Fieldset>
            <Fieldset legend="연락처">
              <p className="m-0">
                {programDetail.tel?.[0] || `정보가 없습니다.`}
              </p>
            </Fieldset>
            <Fieldset legend="참가 대상">
              <p className="m-0">
                {programDetail.organNm?.[0] || `정보가 없습니다.`}
              </p>
            </Fieldset>
          </div>
        </Card>
      </div>
    </>
  );
}
