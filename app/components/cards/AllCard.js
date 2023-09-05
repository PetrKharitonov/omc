import Link from "next/link";
import FeaturedImage from "../FeaturedImage";
import "./AllCard.css";

const AllCard = ({ post, type, id }) => {
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
    <Link className="AllCard" href={`/news/${id}`}>
      <div className="AllCard-image-holder">
        {type === "omcPostNews" ? (
          <div className="AllCard-tag-new">Новости</div>
        ) : type === "omcPostEvent" &&
          new Date(post.customdate) > Date.now() ? (
          <div className="AllCard-tag-ev">Предстоящее</div>
        ) : (
          ""
        )}
        <FeaturedImage image={post.preview} alt={post.title} />
      </div>
      <div className="AllCard-text-holder">
        <p className="AllCard-title">{post.title}</p>
        <div className="AllCard-data">
          <p>{date}</p>
          <p>Подробнее</p>
        </div>
      </div>
    </Link>
  );
};
export default AllCard;
