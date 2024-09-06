// pages/api/baby/getMotherCareGangnam.js
// 서울 강남 산후조리원 조회

export default async function getMotherCareGangnam(req, res) {
  const KEY = process.env.NEXT_PUBLIC_GANGNAMMOTHERCARE_KEY;

  if (req.method === "GET") {
    try {
      const response = await fetch(
        `http://openapi.seoul.go.kr:8088/${KEY}/json/LOCALDATA_010104_GN/1/100/`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
