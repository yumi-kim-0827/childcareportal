import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import { useRouter } from "next/router";
import Link from "next/link";

const AutoBreadcrumb = () => {
  const router = useRouter();
  console.log(router.pathname); // /

  const items = [
    { label: "메뉴1" },
    { label: "메뉴2" },
    {
      label: "메뉴3",
      template: () => <Link href={`${router.pathname}`}>메뉴3</Link>,
    },
  ];
  const home = { icon: "pi pi-home", url: "https://primereact.org" };

  return <BreadCrumb model={items} home={home} />;
};

export default AutoBreadcrumb;
