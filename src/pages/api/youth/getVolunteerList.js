// pages/api/youth/getVolunteerList.js
// 청소년 자원봉사활동
import { parseStringPromise } from "xml2js";

export default async function getVolunteerList(req, res) {
  const KEY = process.env.NEXT_PUBLIC_PUBLICDATA_KEY;

  if (req.method === "GET") {
    const { pageNo } = req.query;

    try {
      const response = await fetch(
        `https://apis.data.go.kr/1383000/YouthActivInfoVolSrvc/getVolProgrmList?serviceKey=${KEY}&pageNo=${pageNo}&numOfRows=20&sdate=20240101`
      );
      const text = await response.text();

      // XML 텍스트를 JavaScript 객체로 변환
      const data = await parseStringPromise(text);
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
