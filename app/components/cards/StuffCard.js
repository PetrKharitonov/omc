import Image from "next/image";
import Link from "next/link";
import "./stuffCard.css";
import personIcon from "@/public/person_icon.png";

const StuffCard = ({ image, name, position, id }) => {
  return (
    <Link className="stuffCard" href={`/about/${id}`}>
      <Image
        alt={name}
        src={image == null ? personIcon : image.sourceUrl}
        width={280}
        height={280}
        style={{ borderRadius: "10px" }}
      />
      <h4 style={{ marginTop: "10px" }}>{name}</h4>
      <p style={{ marginTop: "5px" }}>{position}</p>
    </Link>
  );
};
export default StuffCard;
