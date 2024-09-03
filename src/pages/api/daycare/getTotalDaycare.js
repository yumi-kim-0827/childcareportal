// pages/api/daycare/getTotalDaycare.js
// 전국 어린이집 정보 조회
import { parseStringPromise } from "xml2js";

export default async function getTotalDaycare(req, res) {
  const URI = process.env.NEXT_PUBLIC_IP_TOTALCARE_URI;
  const KEY = process.env.NEXT_PUBLIC_IP_TOTALCARE_KEY;

  if (req.method === "GET") {
    const { arcode } = req.query; // 쿼리 파라미터에서 arcode 값을 가져옴
    try {
      const response = await fetch(`${URI}request?key=${KEY}&arcode=${arcode}`);

      // 응답 본문을 텍스트 형태로 읽어옴
      const text = await response.text();

      // XML 텍스트를 JavaScript 객체로 변환
      const data = await parseStringPromise(text);
      // 변환된 데이터를 JSON 형식으로 클라이언트 응답 보냄
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
