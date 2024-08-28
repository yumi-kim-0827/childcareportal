import React, { useState, useRef } from "react";

//components
import { Card } from "primereact/card";
import AutoBreadcrumb from "@/src/components/breadcrumb/AutoBreadcrumb";

export default function Main() {
  return (
    <>
      <AutoBreadcrumb />
      <p>서울</p>
    </>
  );
}
