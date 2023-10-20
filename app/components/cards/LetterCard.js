import Image from "next/image";

const LetterCard = ({ image, title }) => {
  return (
    <a style={{ width: "280px" }} href={image}>
      <Image
        alt={title}
        src={image}
        width={280}
        height={400}
        style={{ borderRadius: "10px", border: "1px solid grey" }}
      />
      <h4 style={{ marginTop: "10px" }}>{title}</h4>
    </a>
  );
};
export default LetterCard;
