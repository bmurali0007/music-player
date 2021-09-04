import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Jazz Cabbage",
      cover:
        "https://w0.peakpx.com/wallpaper/744/368/HD-wallpaper-black-and-red-black-red-tree-nature.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
      artist: "Ft. Bala Murali Maya",
      color: ["#978598", "#C8C9C7"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Lagoons",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8266",
      artist: "Maya",
      color: ["#978598", "#C8C9C7"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
