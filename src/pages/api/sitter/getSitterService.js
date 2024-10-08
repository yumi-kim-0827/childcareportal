// pages/api/sitter/getSitterService.js
// 지역별 아이돌봄 서비스 제공 기관

export default async function getSitterService(req, res) {
  const KEY = process.env.NEXT_PUBLIC_PUBLICDATA_KEY;

  if (req.method === "GET") {
    const { ctpvNm } = req.query;
    try {
      const response = await fetch(
        `https://apis.data.go.kr/1383000/idis/serviceInstitutionService/getServiceInstitutionList?serviceKey=${KEY}&pageNo=1&type=json&numOfRows=100&ctpvNm=${encodeURIComponent(
          ctpvNm
        )}`
      );

      const data = await response.json();
      // 변환된 데이터를 JSON 형식으로 클라이언트에게 보냄
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    // 만약 GET 메소드가 아닌 다른 메소드로 요청이 들어오면 405 상태 코드와 함께 오류 메시지 반환
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
