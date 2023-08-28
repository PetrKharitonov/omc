import { IoMdSettings } from "react-icons/io";

const NewsPage = () => {
  return (
    <div>
      <div
        className="wrapper"
        style={{ paddingTop: "150px", textAlign: "center" }}
      >
        <IoMdSettings size={50} className="setting-anim" />
        <h3>
          Приносим свои извинения <br />В данный момент страница находится в
          разработке
        </h3>
      </div>
    </div>
  );
};
export default NewsPage;
