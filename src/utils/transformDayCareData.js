//[{id:[value]},{id:[value]}]
//[{id:value},{id:value}]
//데이터 형 변환
const transformDayCareData = (data) => {
  return data.map((item) => ({
    stcode: item.stcode[0],
    craddr: item.craddr[0],
    crfax: item.crfax[0],
    crhome: item.crhome[0],
    crname: item.crname[0],
    crtel: item.crtel[0],
    crcapat: item.crcapat[0],
  }));
};
export default transformDayCareData;
