const recipes = [
  {
    id: 1,
    name: "쌀미음",
    a1: "4~5개월",
    detail: "가장 기본적인 초기 이유식으로, 아기의 소화기관에 부담이 적습니다.",
    a2: "쌀 10g (밥 1큰술 정도), 물 100ml",
    a3: [
      "1. 쌀을 깨끗이 씻어 30분~1시간 정도 물에 불립니다.",
      "2. 불린 쌀을 믹서기에 넣고 물을 추가해 곱게 갈아줍니다.",
      "3. 간 쌀물을 냄비에 넣고 중약불에서 저어가며 끓입니다.",
      "4. 쌀알이 완전히 퍼지고 농도가 묽은 죽처럼 되면 완성입니다.",
      "(체에 한 번 걸러내면 더 부드럽게 만들 수 있습니다.)",
    ],
    a4: "좋음",
  },
  {
    id: 2,
    name: "애호박 미음",
    a1: "4~5개월",
    detail:
      "애호박은 소화가 잘 되고 알레르기 유발 가능성이 낮아 초기 이유식 재료로 적합합니다.",
    a2: "애호박 10g (작은 조각), 쌀가루 5g (1작은술), 물 50ml (10배 죽 비율)",
    a3: [
      "1. 애호박을 깨끗이 씻은 뒤 껍질을 벗기고 씨를 제거합니다.",
      "2. 적은 양(10g)만 준비하여 다진 후, 물에 살짝 데쳐주세요.",
      "3. 데친 애호박을 체에 걸러 곱게 만듭니다. (블렌더를 사용할 수도 있음)",
      "4. 쌀가루와 물을 냄비에 넣고 약한 불에서 저어가며 끓입니다.",
      "5. 완성된 쌀미음에 걸러놓은 애호박을 섞어줍니다.",
      "6. 필요하면 물을 약간 더 추가하여 부드럽고 묽게 만듭니다.",
    ],
    a4: "좋음",
  },
  {
    id: 3,
    name: "고구마 퓨레",
    a1: "4~5개월",
    detail: "고구마는 부드럽고 달콤해 아기들이 좋아하는 첫 채소 이유식입니다.",
    a2: "고구마 20g, 물 (삶을 때 사용)",
    a3: [
      "1. 고구마를 껍질째 씻고, 삶거나 찐 후 껍질을 벗깁니다.",
      "2. 삶은 고구마를 체에 걸러 곱게 으깹니다.",
      "3. 너무 퍽퍽하다 싶으면 분유물이나 생수를 약간 섞어 묽게 만들어줍니다.",
    ],
    a4: "좋음",
  },
  {
    id: 4,
    name: "배 퓨레",
    a1: "4~5개월",
    detail:
      "과일은 섬유질과 자연스러운 단맛을 제공합니다. 단, 너무 많이 주지 않도록 주의하세요.",
    a2: "잘 익은 배 20g(보통 큰거 반개),물 (필요시)",
    a3: [
      "1. 배의 껍질과 씨를 제거한 후 부드럽게 찌거나 끓는물에 1분 데친다.",
      "2. 배와 물과 함께 믹서기에 곱게 간다.",
      "3. 처음에는 물을 약간 섞어 묽게 만들어줍니다.",
    ],
    a4: "좋음",
  },
  {
    id: 5,
    name: "감자미음",
    a1: "4~5개월",
    detail:
      "담​백한 감자가 들어가 아기들이 맛에 대한 거부감없이 선호도가 좋습니다.",
    a2: "감자, 쌀가루,물",
    a3: [
      "1. 깨끗한 감자를 골라 물에 씻은후 감자를 젓가락이 들어갈 정도로 찝니다.",
      "2. 감자 30g 정도를 체에 내려 곱게 으깨주세요.",
      "3. 쌀가루 15g을 물 한컵을 넣고 풀어주세요. ",
      "4. 깬 감자를 넣고 물에 잘 풀어준 후 끓여주세요.",
      "5. 약불에서 늘러붙지않게 살살 저어주줍니다.",
    ],
    a4: "좋음",
  },
  {
    id: 10,
    name: "소고기미음(성장발육 촉진)",
    a1: "6~7개월",
    detail:
      "고기는 철분과 단백질이 풍부해 아기에게 중요한 영양소를 제공해줘요.",
    a2: "쌀가루 (15g), 소고기 안심(20g), 물",
    a3: [
      "1. 소고기는 최소30분 정도 핏물을 빼주세요.",
      "2. 물100g과 함께 소고기를 완전히 익혀주세요.",
      "3. 삶은 육수와 함께 고기를 믹서기에 곱게 갈아주세요.",
      "4. 찬물200g 과 쌀가루 15g을 먼저 풀어준 뒤 갈아놓은 소고기를 넣고 크림스프의 농도가 될 정도까지 조리한 후 미음을 완성시켜주세요.",
    ],
    a4: "좋음",
  },
  {
    id: 10,
    name: "세송이 두부 죽",
    a1: "6~7개월",
    detail: "다양한 영양소를 맛볼 수 있는 대표적인 중기 이유식 레시피",
    a2: "연두부, 쌀가루, 당근, 새송이버섯, 물",
    a3: [
      "1. 물기를 뺀 연두부를 칼로 으깨준다.",
      "2. 당근은 씻은 후 껍질을 제거하고, 새송이버섯은 물로 가볍게 씻은 후 밑동을 제거한다.",
      "3. 당근과 새송이버섯을 잘게 다지고, 쌀은 한시간 이상 불려준다.",
      "4. 생수에 잘게 썰은 당근과 새송이버섯, 불린 쌀 혹은 쌀가루를 넣고 세게 끓이다가 물이 졸아들 때 연두부를 넣고 중약불로 묽게 끓인다.",
    ],
    a4: "보통",
  },
];

export default recipes;
