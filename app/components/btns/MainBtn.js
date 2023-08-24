import "./MainBtn.css";

const MainBtn = ({ children }) => {
  return (
    <button
      className={children.length === 2 ? "mainBtn mainBtn-arrow" : "mainBtn"}
    >
      {children}
    </button>
  );
};
export default MainBtn;
