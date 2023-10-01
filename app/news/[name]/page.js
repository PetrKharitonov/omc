import { getPost } from "@/app/lib/getPost";
import { FaRegCalendar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import "./newsPage.css";

const page = async ({ params }) => {
  let id = params.name.slice(0, -3);
  const postQ = await getPost(id);

  let wpDate;
  let post;
  let postType;

  Object.keys(postQ).forEach((key, index) => {
    if (postQ[key] != null) {
      post = Object.values(postQ[key])[2];
      postType = Object.keys(postQ[key])[2];
    }
  });

  if (postType == "omcPostNews") {
    wpDate = postQ.postNewBy.date;
  } else {
    wpDate = postQ.postEventBy.date;
  }

  if (post.customdate == null) {
    post.customdate = wpDate;
  }

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

  let files = [];

  Object.keys(post.files).forEach((key) => {
    if (post.files[key] != null) {
      files.push(post.files[key]);
    }
  });

  const images = [];

  Object.keys(post.images).forEach((key) => {
    if (post.images[key] != null) {
      images.push(post.images[key]);
    }
  });

  return (
    <div className="wrapper newsMain">
      <div className="newsMain-container">
        <div className="newsMain-content">
          {postType == "omcPostNews" ? (
            <div className="newsMain-tag-n">Новости</div>
          ) : (
            <div className="newsMain-tag-e">Мероприятие</div>
          )}
          <div className="newsMain-preview-container-mobile">
            {post.preview && (
              <Image
                src={post.preview.sourceUrl}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
          <h2>{post.title}</h2>
          <div className="newsMain-info">
            <div className="newsMain-date">
              <FaRegCalendar />
              {date}
            </div>
            {postType != "omcPostNews" && post.adress && (
              <div className="newsMain-adress">
                <MdLocationOn style={{ flexShrink: "0" }} />
                <p dangerouslySetInnerHTML={{ __html: post.adress }}></p>
              </div>
            )}
          </div>
          <div className="newsMain-text">
            <p>{post.subtitle}</p>
            <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
          </div>
        </div>
        <div className="newsMain-right">
          <div className="newsMain-preview-container">
            {post.preview && (
              <Image
                src={post.preview.sourceUrl}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
          {files.length >= 1 && (
            <div className="newsMain-file-container">
              {files.map((file) => {
                return (
                  <a
                    key={file.title}
                    href={file.mediaItemUrl}
                    target="_blank"
                    className="newsMain-file"
                  >
                    {file.title}
                    <AiOutlineArrowDown
                      size={20}
                      color="#2580e5"
                      style={{ transform: "rotate(270deg)" }}
                    />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {images.length >= 1 && (
        <div className=" news-gallery-container">
          <h2>Фото с мероприятия</h2>
          <div className="news-gallery">
            {images.map((image) => {
              return (
                <div style={{ position: "relative", minHeight: "0" }}>
                  <Image
                    src={image.sourceUrl}
                    alt={image.sourceUrl}
                    width={image.mediaDetails.width}
                    height={image.mediaDetails.height}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default page;
