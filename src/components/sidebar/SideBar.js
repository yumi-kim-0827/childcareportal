import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
//components
import { Tag } from "primereact/tag";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { BsFillPinMapFill, BsRecordFill } from "react-icons/bs";
import { FaBaby, FaSchool, FaHandsHoldingChild } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";

export default function SideBar() {
  const router = useRouter();
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const btnRef5 = useRef(null);
  const btnRef6 = useRef(null);
  const btnRef7 = useRef(null);

  return (
    <div className="fixed card z-50">
      <div className="min-h-screen flex flex-col relative lg:static">
        <div
          id="app-sidebar-2"
          className="surface-section w-[280px] max-medium:w-[180px] h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
        >
          <div className="flex flex-column h-full">
            <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
              <span
                className="inline-flex align-items-center gap-2 cursor-pointer"
                onClick={() => {
                  router.push("/");
                }}
              >
                <span className="font-semibold text-2xl text-primary medium:text-xl">
                  차일드케어포털
                  <Tag value="childcareportal"></Tag>
                </span>
              </span>
            </div>
            <div className="overflow-y-auto">
              <ul className="list-none p-3 m-0 max-medium:p-2">
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
                      className="p-ripple large:p-3 flex align-items-center justify-content-between text-600 cursor-pointer medium:p-0"
                    >
                      <span className="font-medium max-medium:text-sm">
                        신생아 케어
                      </span>
                      <i className="pi pi-chevron-down"></i>
                      <Ripple />
                    </div>
                  </StyleClass>
                  <ul className="list-none p-0 m-0 overflow-hidden">
                    <li
                      onClick={() => {
                        router.push("/baby/mothercare/");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <BsFillPinMapFill className="mr-2" />
                        <span className="font-medium max-medium:text-sm">
                          산후조리가 필요한 이유
                        </span>
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
                          <FaHandsHoldingChild className=" mr-2" />
                          <span className="font-medium max-medium:text-sm">
                            지역별 산후조리원
                          </span>
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
                              <BsFillPinMapFill className="mr-2" />
                              <span className="font-medium max-medium:text-sm">
                                서울
                              </span>
                              <i className="pi pi-chevron-down ml-auto mr-1"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/seoul/gangnam");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  강남
                                </span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef4}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef4}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <BsFillPinMapFill className="mr-2" />
                              <span className="font-medium max-medium:text-sm">
                                경기
                              </span>
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
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  고양시
                                </span>
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
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  광명시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/gunpo");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  군포시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/gimpo");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  김포시
                                </span>
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
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  남양주시
                                </span>
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
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  부천시
                                </span>
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
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  성남시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/suwon");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  수원시
                                </span>
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
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  시흥시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/ansan");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  안산시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/anyang");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  안양시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/yangju");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  양주시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/yongin");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  용인시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/uiwang");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  의왕시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push(
                                  "/baby/mothercare/geongggi/uijeongbu"
                                );
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  의정부시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/icheon");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  이천시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push("/baby/mothercare/geongggi/paju");
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  파주시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li
                              onClick={() => {
                                router.push(
                                  "/baby/mothercare/geongggi/pyeongtaek"
                                );
                              }}
                            >
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <BsRecordFill className="mr-2 text-xs text-slate-300" />
                                <span className="font-medium max-medium:text-sm">
                                  평택시
                                </span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={() => {
                        router.push("/baby/recipe/");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <BsFillPinMapFill className="mr-2" />
                        <span className="font-medium max-medium:text-sm">
                          추천 이유식 레시피
                        </span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="list-none p-3 m-0">
                <li>
                  <StyleClass
                    nodeRef={btnRef6}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <div
                      ref={btnRef6}
                      className="p-ripple large:p-3 flex align-items-center justify-content-between text-600 cursor-pointer medium:p-0"
                    >
                      <span className="font-medium max-medium:text-sm">
                        어린이집
                      </span>
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
                        <BsFillPinMapFill className="mr-2" />
                        <span className="font-medium max-medium:text-sm">
                          지도로 찾기
                        </span>
                        <Ripple />
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        router.push("/daycare/seoul");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <FaSchool className="mr-2" />
                        <span className="font-medium max-medium:text-sm">
                          서울 어린이집
                        </span>
                        <Ripple />
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        router.push("/daycare/geonggi");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <FaSchool className="mr-2" />
                        <span className="font-medium max-medium:text-sm">
                          경기 어린이집
                        </span>
                        <Ripple />
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        router.push("/daycare/newmonthly");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <FaSchool className="mr-2" />
                        <span className="font-medium max-medium:text-sm">
                          월별 신규 어린이집
                        </span>
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
                      className="p-ripple large:p-3 flex align-items-center justify-content-between text-600 cursor-pointer medium:p-0"
                    >
                      <span className="font-medium max-medium:text-sm">
                        돌봄서비스
                      </span>
                      <i className="pi pi-chevron-down"></i>
                      <Ripple className="mr-2" />
                    </div>
                  </StyleClass>
                  <ul className="list-none p-0 m-0 overflow-hidden">
                    <li
                      onClick={() => {
                        router.push("/sitter/");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <FaBaby className="mr-2" />
                        <span className="font-medium max-medium:text-sm">
                          아이돌봄 서비스 제공기관
                        </span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="list-none p-3 m-0">
                <li>
                  <StyleClass
                    nodeRef={btnRef7}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="slidedown"
                    leaveToClassName="hidden"
                    leaveActiveClassName="slideup"
                  >
                    <div
                      ref={btnRef7}
                      className="p-ripple large:p-3 flex align-items-center justify-content-between text-600 cursor-pointer medium:p-0"
                    >
                      <span className="font-medium max-medium:text-sm">
                        청소년
                      </span>
                      <i className="pi pi-chevron-down"></i>
                      <Ripple />
                    </div>
                  </StyleClass>
                  <ul className="list-none p-0 m-0 overflow-hidden">
                    <li
                      onClick={() => {
                        router.push("/youth/volunteer/");
                      }}
                    >
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                        <BiSolidDonateHeart className="mr-2" />
                        <span className="font-medium max-medium:text-sm">
                          청소년 자원봉사 프로그램 목록
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
