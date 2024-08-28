import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import { useRouter } from "next/router";
import Link from "next/link";

const AutoBreadcrumb = () => {
  const router = useRouter();
  const pathArray = router.pathname.split("/").filter((segment) => segment);

  const items = pathArray.map((path, index) => {
    const url = "/" + pathArray.slice(0, index + 1).join("/");

    return {
      label: path === "/" ? <Link href="/">Home</Link> : path,
      url: path !== "/" ? url : undefined,
    };
  });

  const home = { icon: "pi pi-home", label: "홈", url: "/" };

  return <BreadCrumb model={items} home={home} />;
};
export default AutoBreadcrumb;
