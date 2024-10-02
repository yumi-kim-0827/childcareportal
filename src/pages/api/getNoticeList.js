// pages/api/index.js
// 메인페이지 = 정책뉴스 목록 조회

export default async function getNoticeList(req, res) {
  const KEY = process.env.NEXT_PUBLIC_PUBLICDATA_KEY;

  if (req.method === "GET") {
    try {
      const response = await fetch(
        `http://apis.data.go.kr/1383000/mogefNew/nwEnwSelectList?serviceKey=${KEY}&pageNo=1&numOfRows=20&type=json`
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
