// pages/api/youth/getVolunteerDetail.js
// 청소년 자원봉사활동 상세내용
import { parseStringPromise } from "xml2js";

export default async function getVolunteerDetail(req, res) {
  const { key1: id } = req.query;
  const KEY = process.env.NEXT_PUBLIC_PUBLICDATA_KEY;

  if (!id) {
    return res.status(400).json({ error: "id parameter is required." });
  }

  if (req.method === "GET") {
    try {
      const response = await fetch(
        `https://apis.data.go.kr/1383000/YouthActivInfoVolSrvc/getVolProgrmInfo?serviceKey=${KEY}&key1=${id}`
      );
      const text = await response.text();
      console.log(id);
      // XML 텍스트를 JavaScript 객체로 변환
      const data = await parseStringPromise(text);
      res.setHeader("Access-Control-Allow-Origin", "*");
      // 변환된 데이터를 JSON 형식으로 클라이언트에게 보냄
      res.status(200).json(data);
      return data;
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
