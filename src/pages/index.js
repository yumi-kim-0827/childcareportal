import React, { useState, useRef } from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import Link from "next/link";

//components
import { Card } from "primereact/card";

export default function Main() {
  const items = [
    { label: "메뉴1" },
    { label: "메뉴2" },
    {
      label: "메뉴3",
      template: () => <Link href="/inputtext">InputText</Link>,
    },
  ];
  const home = { icon: "pi pi-home", url: "https://primereact.org" };
  return (
    <>
      <BreadCrumb model={items} home={home} />
      <div className="card">
        <Card title="어린이집 찾기">ㄴㄴ</Card>
      </div>
    </>
  );
}
