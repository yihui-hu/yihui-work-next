import Image from "next/image";

export default function Currently() {
  return (
    <Image
      src="https://yihui-work.s3.us-east-2.amazonaws.com/sg_sota.webp"
      width="133"
      height="100"
      alt="currently missing summer in Singapore"
      className="currently-img"
    />
  );
}
