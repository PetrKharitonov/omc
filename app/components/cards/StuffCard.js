import Image from "next/image";

const StuffCard = ({ image, name, position }) => {
  return (
    <div className="stuffCard">
      <Image
        alt={name}
        src={image.sourceUrl}
        width={280}
        height={280}
        style={{ borderRadius: "10px" }}
      />
      <h4 style={{ marginTop: "10px" }}>{name}</h4>
      <p style={{ marginTop: "5px" }}>{position}</p>
    </div>
  );
};
export default StuffCard;
