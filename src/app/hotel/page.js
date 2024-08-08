import HotelPageComponent from "@/components/hotelPageComponent";

const aaa = [
  // "基隆市",
  // "新北市",
  "連江縣",
  // "宜蘭縣",
  // "新竹市",
  // "新竹縣",
  // "苗栗縣",
  // "台中市",
  // "彰化縣",
  // "南投縣",
  // "嘉義市",
  // "嘉義縣",
  // "雲林縣",
  // "台南市",
  // "高雄市",
  "澎湖縣",
  "金門縣",
  // "屏東縣",
  // "台東縣",
  // "花蓮縣"
];

const items = [
  { key: "Keelung", label: "基隆市" },
  { key: "NewTaipei", label: "新北市" },
  { key: "Taipei", label: "台北市" },
  { key: "Taoyuan", label: "桃園市" },
  { key: "Hsinchu", label: "新竹縣市" },
  { key: "Miaoli", label: "苗栗縣" },
  { key: "Taichung", label: "台中市" },
  { key: "Changhua", label: "彰化縣市" },
  { key: "Nantou", label: "南投縣" },
  { key: "Yunlin", label: "雲林縣" },
  { key: "Chiayi", label: "嘉義縣市" },
  { key: "Tainan", label: "台南市" },
  { key: "kaohsiung", label: "高雄市" },
  { key: "Pingtung", label: "屏東縣" },
  { key: "Yilan", label: "宜蘭縣" },
  { key: "Hualien", label: "花蓮縣" },
  { key: "Taitung", label: "台東縣" },
  { key: "Lianjiang", label: "連江縣" },
  { key: "Kinmen", label: "金門縣" },
  { key: "Penghu", label: "澎湖縣" },
];

const hotelData = {
  Taichung: [
    {
      title: "Old School行旅 田中央旅店",
      mapLink:
        "!1m18!1m12!1m3!1d3641.0567274291316!2d120.68648771080046!3d24.13464587382673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d3dffe21381%3A0x517322447741a101!2zT2xkIFNjaG9vbOihjOaXhSDnlLDkuK3lpK7ml4XlupcgQ2VudHJhbCBMYW5kIEhvdGVs772c5aGU5pyo5b636YWS5bqX6ZuG5ZyY!5e0!3m2!1szh-TW!2stw!4v1722265987698!5m2!1szh-TW!2stw",
    },
  ],
};

const Hotel = ({ searchParams }) => {
  return (
    <HotelPageComponent
      searchParams={searchParams}
      items={items}
      hotelData={hotelData}
    />
  );
};
export default Hotel;
