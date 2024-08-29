import { useEffect, useRef, useState } from "react";

const NaverMap = ({ item }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [markers, setMarkers] = useState([]); //지도 마커 상태관리
  const KEY = process.env.NEXT_PUBLIC_NAVERMAP_CLIENT_ID;
  console.log(item);
  useEffect(() => {
    const handleScriptLoad = () => {
      if (window.naver && window.naver.maps) {
        const mapInstance = new naver.maps.Map(mapRef.current, {
          logoControl: false,
          center: new naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 14,
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
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${KEY}&submodules=geocoder`;
      script.async = true;
      script.onload = handleScriptLoad;
      script.onerror = () => console.error("Failed to load Naver Maps API");
      document.head.appendChild(script);
    }
  }, [KEY]);

  // 지도 및 마커를 초기화하는 함수
  const initializeMapAndMarkers = () => {
    if (map) {
      // 기존 마커 제거
      markers.forEach((marker) => marker.setMap(null));
      setMarkers([]);
    }
  };

  const listToCoordinate = (item) => {
    if (!map || !scriptLoaded || !item) return;

    if (window.naver && window.naver.maps && window.naver.maps.Service) {
      const address = item.craddr;
      const kinderName = item.crname;
      naver.maps.Service.geocode({ query: address }, (status, response) => {
        if (status === naver.maps.Service.Status.ERROR) {
          console.error("Geocode error:", response);
          return;
        }
        const geocodeResult = response.v2.addresses[0];
        const { x: longitude, y: latitude } = geocodeResult;

        // 지도 중심 변경 및 마커 추가
        map.setCenter(new naver.maps.LatLng(latitude, longitude));
        const marker = new naver.maps.Marker({
          map: map,
          position: new naver.maps.LatLng(latitude, longitude),
        });

        // 새로 추가된 마커를 상태에 저장
        setMarkers([marker]);

        //정보창 표시
        // 정보창 객체
        const infowindow = new naver.maps.InfoWindow({
          content: ['<div class="iw_inner">', `${kinderName}`, "</div>"].join(
            ""
          ),
        });

        naver.maps.Event.addListener(marker, "click", function (e) {
          if (infowindow.getMap()) {
            infowindow.close();
          } else {
            infowindow.open(map, marker);
          }
        });
      });
    } else {
      console.error("Naver Maps Service not available.");
    }
  };

  useEffect(() => {
    initializeMapAndMarkers();
    listToCoordinate(item);
  }, [item, map, scriptLoaded]);

  return (
    <div>
      <div ref={mapRef} style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default NaverMap;
