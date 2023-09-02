import Link from "next/link";
import FeaturedImage from "../FeaturedImage";
import "./EventCard.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const EventCard = ({ post, id }) => {
  let monthsDate = {
    1: "Января",
    2: "Февраля",
    3: "Марта",
    4: "Апреля",
    5: "Мая",
    6: "Июня",
    7: "Июля",
    8: "Августа",
    9: "Сентября",
    10: "Октября",
    11: "Ноября",
    12: "Декабря",
  };

  let MO = post.customdate.slice(5, 7);

  if (MO[0] === "0") {
    MO = MO.slice(1);
  }

  let date = `${post.customdate.slice(8, 10)} ${
    monthsDate[MO]
  } ${post.customdate.slice(0, 4)}`;

  return (
    <Link className="eventCard" href={`/news/${id}`}>
      <div className="eventCard-image-holder">
        <FeaturedImage image={post.preview} alt={post.title} />
      </div>
      <div className="eventCard-content">
        <div className="eventCard-text-holder">
          <h4 className="eventCard-title">{post.title}</h4>
          <p className="eventCard-subtitle">{post.subtitle}</p>
        </div>
        <div className="eventCard-data">
          <div className="eventCard-data-block">
            <AiTwotoneCalendar size={20} style={{ flexShrink: "0" }} />
            <p>{date}</p>
          </div>
          <div className="eventCard-data-block">
            <MdLocationOn size={20} style={{ flexShrink: "0" }} />
            <p dangerouslySetInnerHTML={{ __html: post.adress }}></p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default EventCard;
