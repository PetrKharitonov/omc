import Image from "next/image";
import { getOneStuff } from "@/app/lib/getOneStuff";
import "./stuffPage.css";
import personIcon from "@/public/person_icon.png";

const page = async ({ params }) => {
  let id = params.name.slice(0, -3);
  const stuffQ = await getOneStuff(id);

  let name = stuffQ.name;
  let position = stuffQ.position;
  let biography = stuffQ.biography || "";
  let image;
  if (stuffQ.image == null) {
    image = personIcon;
  } else {
    image = stuffQ.image.sourceUrl;
  }

  return (
    <div className="one-stuff">
      <div className="wrapper-wide shadow-container stuff">
        <div className="wrapper stuff-container">
          <div className="stuff-content">
            <h2>{name}</h2>
            <h3>
              Должность: <span>{position}</span>
            </h3>
            <div
              className="stuff-biography"
              dangerouslySetInnerHTML={{ __html: biography }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                textIndent: "30px",
                textAlign: "justify",
              }}
            ></div>
          </div>
          <div className="stuff-preview">
            <Image
              src={image}
              sizes="(max-width: 768px) 100%"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
