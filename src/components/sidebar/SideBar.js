import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
//components
import { Tag } from "primereact/tag";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";

export default function SideBar() {
  const router = useRouter();
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const btnRef5 = useRef(null);

  return (
    <div className="fixed card z-50">
      <div className="min-h-screen flex flex-col relative lg:static">
        <div
          id="app-sidebar-2"
          className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
          style={{ width: "280px" }}
        >
          <div className="flex flex-column h-full">
            <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
              <span
                className="inline-flex align-items-center gap-2 cursor-pointer"
                onClick={() => {
                  router.push("/");
                }}
              >
                <span className="font-semibold text-2xl text-primary">
                  차일드케어포털
                  <Tag value="childcareportal"></Tag>
                </span>
              </span>
            </div>
            <div className="overflow-y-auto">
              <ul className="list-none p-3 m-0">
                <li>
                  <StyleClass
                    nodeRef={btnRef1}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <div
                      ref={btnRef1}
                      className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                    >
                      <span className="font-medium">신생아 케어</span>
                      <i className="pi pi-chevron-down"></i>
                      <Ripple />
                    </div>
                  </StyleClass>
                  <ul className="list-none p-0 m-0 overflow-hidden">
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-home mr-2"></i>
                        <span className="font-medium">Dashboard</span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-bookmark mr-2"></i>
                        <span className="font-medium">Bookmarks</span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <StyleClass
                        nodeRef={btnRef2}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <a
                          ref={btnRef2}
                          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                        >
                          <i className="pi pi-chart-line mr-2"></i>
                          <span className="font-medium">지역별 산후조리원</span>
                          <i className="pi pi-chevron-down ml-auto mr-1"></i>
                          <Ripple />
                        </a>
                      </StyleClass>
                      <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                        <li>
                          <StyleClass
                            nodeRef={btnRef3}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef3}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <i className="pi pi-chart-line mr-2"></i>
                              <span className="font-medium">경기도</span>
                              <i className="pi pi-chevron-down ml-auto mr-1"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/goyang");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">고양시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push(
                                  "/baby/mothercare/geongggi/gwangmyeong"
                                );
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">광명시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/gunpo");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">군포시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/gimpo");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">김포시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push(
                                  "/baby/mothercare/geongggi/namyongjoo"
                                );
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">남양주시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push(
                                  "/baby/mothercare/geongggi/bucheon"
                                );
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">부천시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push(
                                  "/baby/mothercare/geongggi/seongnam"
                                );
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">성남시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/suwon");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">수원시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push(
                                  "/baby/mothercare/geongggi/siheung"
                                );
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">시흥시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/ansan");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">안산시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/anyang");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">안양시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/yangju");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">양주시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/yongin");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">용인시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">의왕시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">의정부시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">이천시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">파주시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-search mr-2"></i>
                                <span className="font-medium">평택시</span>
                                <Ripple />
                              </a>
                            </li>
                            <li></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-users mr-2"></i>
                        <span className="font-medium">Team</span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-comments mr-2"></i>
                        <span className="font-medium">Messages</span>
                        <span
                          className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                          style={{ minWidth: "1.5rem", height: "1.5rem" }}
                        >
                          3
                        </span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-calendar mr-2"></i>
                        <span className="font-medium">Calendar</span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-cog mr-2"></i>
                        <span className="font-medium">Settings</span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="list-none p-3 m-0">
                <li>
                  <StyleClass
                    nodeRef={btnRef4}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <div
                      ref={btnRef4}
                      className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                    >
                      <span className="font-medium">어린이집</span>
                      <i className="pi pi-chevron-down"></i>
                      <Ripple />
                    </div>
                  </StyleClass>
                  <ul className="list-none p-0 m-0 overflow-hidden">
                    <li
                      onClick={() => {
                        router.push("/daycare/");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-folder mr-2"></i>
                        <span className="font-medium">지도로 찾기</span>
                        <Ripple />
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        router.push("/daycare/seoul");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-chart-bar mr-2"></i>
                        <span className="font-medium">서울 어린이집</span>
                        <Ripple />
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        router.push("/daycare/geonggi");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-cog mr-2"></i>
                        <span className="font-medium">경기 어린이집</span>
                        <Ripple />
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        router.push("/daycare/newmonthly");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-cog mr-2"></i>
                        <span className="font-medium">월별 신규 어린이집</span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="list-none p-3 m-0">
                <li>
                  <StyleClass
                    nodeRef={btnRef5}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <div
                      ref={btnRef5}
                      className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                    >
                      <span className="font-medium">돌봄서비스</span>
                      <i className="pi pi-chevron-down"></i>
                      <Ripple />
                    </div>
                  </StyleClass>
                  <ul className="list-none p-0 m-0 overflow-hidden">
                    <li
                      onClick={() => {
                        router.push("/sitter/");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <i className="pi pi-folder mr-2"></i>
                        <span className="font-medium">
                          아이돌봄 서비스 제공기관
                        </span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
