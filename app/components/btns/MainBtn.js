import "./MainBtn.css";

const MainBtn = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={children.length === 2 ? "mainBtn mainBtn-arrow" : "mainBtn"}
    >
      {children}
    </button>
  );
};
export default MainBtn;
