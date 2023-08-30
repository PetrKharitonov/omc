import Link from "next/link";
import "./MainBtn.css";

const MainBtn = ({ children, onClick, contacts = false }) => {
  return contacts ? (
    <Link
      className={children.length === 2 ? "mainBtn mainBtn-arrow" : "mainBtn"}
      href="/contacts"
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={children.length === 2 ? "mainBtn mainBtn-arrow" : "mainBtn"}
    >
      {children}
    </button>
  );
};
export default MainBtn;
