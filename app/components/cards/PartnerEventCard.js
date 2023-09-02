import Link from "next/link";
import FeaturedImage from "../FeaturedImage";
import "./PartnerEventCard.css";

const PartnerEventCard = ({ post, id }) => {
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
    <Link className="partnerEventCard" href={`/news/${id}`}>
      <div className="partnerEventCard-image-holder">
        <FeaturedImage image={post.preview} alt={post.title} />
      </div>
      <div className="partnerEventCard-text-holder">
        <p className="partnerEventCard-title">{post.title}</p>
        {/* <p>{post.excerpt.slice(3, post.excerpt.length - 5)}</p> */}
        <div className="partnerEventCard-data">
          <p>{date}</p>
          <p>Подробнее</p>
        </div>
      </div>
    </Link>
  );
};
export default PartnerEventCard;
