import Image from "next/image";

const LetterCard = ({ image, title }) => {
  return (
    <div style={{ width: "280px" }}>
      <Image
        alt={title}
        src={image}
        width={280}
        height={400}
        style={{ borderRadius: "10px", border: "1px solid grey" }}
      />
      <h4 style={{ marginTop: "10px" }}>{title}</h4>
    </div>
  );
};
export default LetterCard;
