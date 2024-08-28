import React, { useState, useRef } from "react";

//components
import { Card } from "primereact/card";
import AutoBreadcrumb from "@/src/components/breadcrumb/AutoBreadcrumb";

export default function Main() {
  return (
    <>
      <div className="card">
        <AutoBreadcrumb />
        <Card title="어린이집 찾기">메인</Card>
      </div>
    </>
  );
}
