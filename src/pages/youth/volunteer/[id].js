//청소년>자원봉사>상세페이지
//pages>youth>volunteer>[id]
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
//components
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function Main() {
  const router = useRouter();
  const { id } = router.query;

  const [programDetail, setProgramDetail] = useState({});

  const fetchList = async (id) => {
    try {
      const response = await fetch(`/api/youth/getVolunteerDetail?key1=${id}`);

      if (response.ok) {
        const result = await response.json();
        const data = result.response.body[0].items[0].item[0];
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
    fetchList(id);
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
        <Card title="상세"></Card>
      </div>
    </>
  );
}
