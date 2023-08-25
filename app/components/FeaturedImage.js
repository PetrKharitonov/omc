import Image from "next/image";
import Link from "next/link";

export default function FeaturedImage({ image, alt }) {
  let img = "";

  const defaultFeaturedImage = "";
  const defaultWidth = "";
  const defaultHeight = "";

  if (image) {
    img = {
      src: image.sourceUrl,
    };
  } else {
    img = {
      src: defaultFeaturedImage,
      width: defaultWidth,
      height: defaultHeight,
    };
  }

  return (
    <>
      <Image
        src={img.src}
        fill
        style={{ objectFit: "cover" }}
        alt={alt}
      ></Image>
    </>
  );
}
