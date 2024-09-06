import { useEffect, useRef, useState } from "react";

const NaverMap = ({ list }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const handleScriptLoad = () => {
      if (window.naver && window.naver.maps) {
        const mapInstance = new naver.maps.Map(mapRef.current, {
          logoControl: false,
          center: new naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 10,
        });
        setMap(mapInstance);
        setScriptLoaded(true); // 스크립트 로드 완료
      } else {
        console.error("Naver Maps API not loaded.");
      }
    };

    if (window.naver && window.naver.maps) {
      handleScriptLoad();
    } else {
      const script = document.createElement("script");
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVERMAP_CLIENT_ID}&submodules=geocoder`;
      script.async = true;
      script.onload = handleScriptLoad;
      script.onerror = () => console.error("Failed to load Naver Maps API");
      document.head.appendChild(script);
    }
  }, []);

  // TM128 좌표를 WGS84로 변환하는 함수
  const transformCoords = (x, y) => {
    if (window.naver && window.naver.maps && naver.maps.TransCoord) {
      const tm128 = new naver.maps.Point(x, y);
      console.log(`Original TM128 Coordinates: X=${x}, Y=${y}`);

      const wgs84 = naver.maps.TransCoord.fromTM128ToLatLng(tm128); // TM128에서 WGS84로 변환

      if (wgs84) {
        console.log(
          `Converted WGS84 Coordinates: Lat=${wgs84._lat}, Lng=${wgs84._lng}`
        );
        return wgs84;
      } else {
        console.error("Conversion to WGS84 failed.");
        return null;
      }
    } else {
      console.error("Naver Maps API or TransCoord is not available.");
      return null;
    }
  };

  // 마커 추가 함수
  const addMarkers = () => {
    if (map && scriptLoaded) {
      list.forEach((item) => {
        const x = parseFloat(item.X);
        const y = parseFloat(item.Y);
        const coords = transformCoords(x, y); // 좌표 변환
        if (coords) {
          // 변환된 좌표로 마커 추가
          console.log(coords);
          var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(coords._lat, coords._lng),
            map: map,
          });
        }
      });
    }
  };

  useEffect(() => {
    if (list.length > 0) {
      addMarkers();
    }
  }, [list, map, scriptLoaded]); // 지도, 리스트, 스크립트가 로드된 후 마커를 추가

  return (
    <div>
      <div ref={mapRef} style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default NaverMap;
