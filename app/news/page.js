import { IoMdSettings } from "react-icons/io";
import "./newsPage.css";
import { getLastEvents } from "../lib/getLastEvents";
import NewEventsSwiper from "../components/swipers/NewEventsSwiper";
import { getLastPartnersEvents } from "../lib/getLastPartnersEvents";
import NewPartnersEventsSwiper from "../components/swipers/NewPartnersEventsSwiper";
import { getAllPosts } from "../lib/getAllPosts";
import AllPosts from "../components/AllPosts";

const NewsPage = async () => {
  const posts = await getLastEvents();
  const pertnersPosts = await getLastPartnersEvents();
  const allPosts = await getAllPosts();

  const dateNow = new Date(Date.now());
  dateNow.setDate(dateNow.getDate() - 1);

  const checkIfuptoDate = (posts) => {
    const filteredPosts = posts.filter(
      (post) => new Date(post.omcPostEvent.customdate) > dateNow
    );

    return filteredPosts;
  };

  const filteredPosts = checkIfuptoDate(posts);
  const filteredPartnersPosts = checkIfuptoDate(pertnersPosts);

  return (
    <div>
      <div className="wrapper news-header">
        <h1>Мероприятия и новости</h1>
        <p>
          Ниже вы можете узнать какие мероприятия ожидаются в ближайшие время, а
          также увидеть прошедшие.
        </p>
      </div>
      <div className="wrapper-wide shadow-container">
        <div className="wrapper latestEvents" style={{ marginBottom: "20px" }}>
          <h2>Предстоящие мероприятия</h2>
        </div>
        {filteredPosts.length >= 1 ? (
          <NewEventsSwiper posts={filteredPosts} />
        ) : (
          <div className="wrapper">
            В настоящий момент нет предстоящих мероприятий
          </div>
        )}
        <div
          className="wrapper latestPartnersEvents"
          style={{ marginBottom: "20px" }}
        >
          <h2>Мероприятия партнёров</h2>
        </div>
        {filteredPartnersPosts.length >= 1 ? (
          <NewPartnersEventsSwiper posts={filteredPartnersPosts} />
        ) : (
          <div className="wrapper">
            В настоящий момент нет предстоящих мероприятий
          </div>
        )}
      </div>
      <div className="wrapper all-events-news">
        <h2>Все мероприятия и новости</h2>
        <AllPosts posts={allPosts} />
      </div>
    </div>
  );
};
export default NewsPage;
