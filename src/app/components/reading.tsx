import Image from "next/image";

export default function Reading() {
  return (
    <Image
      src="https://m.media-amazon.com/images/I/61rS4ktR59L._AC_UF1000,1000_QL80_.jpg"
      width="100"
      height="150"
      alt="A New Program for Graphic Design by David Reinfurt"
      priority={true}
      style={{ userSelect: "none" }}
      draggable="false"
    />
  );
}
