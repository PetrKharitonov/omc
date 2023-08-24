import { getPost } from "@/app/lib/getPost";
import { FaRegCalendar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
import "./newsPage.css";

const page = async ({ params }) => {
  let id = params.name.slice(0, -3);
  const postQ = await getPost(id);

  let post;
  let postType;

  Object.keys(postQ).forEach((key, index) => {
    if (postQ[key] != null) {
      post = Object.values(postQ[key])[2];
      postType = Object.keys(postQ[key])[2];
    }
  });

  if (post.customdate == null) {
    post.customdate = "20";
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

  Object.keys(post.files).forEach((key, index) => {
    if (post.files[key] != null) {
      files.push(post.files[key]);
    }
  });

  return (
    <div className="wrapper" style={{ paddingTop: "160px" }}>
      <div className="newsMain-container">
        <div className="newsMain-content">
          {postType == "omcPostNews" ? (
            <div className="newsMain-tag-n">Новость</div>
          ) : (
            <div className="newsMain-tag-e">Мероприятие</div>
          )}
          <h2>{post.title}</h2>
          <div className="newsMain-info">
            <div className="newsMain-date">
              <FaRegCalendar />
              {date}
            </div>
            {postType != "omcPostNews" && post.adress && (
              <div className="newsMain-adress">
                <MdLocationOn style={{ flexShrink: "0" }} />
                {post.adress}
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
            <Image
              src={post.preview.sourceUrl}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {files.length != 0 &&
            files.map((file) => {
              <div key={file.mediaItemUrl} className="newsMain-file">
                {file.title}
              </div>;
            })}
        </div>
      </div>
    </div>
  );
};
export default page;
