import "./SecBtn.css";

const SecBtn = ({ children, fileURL }) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className="secBtn"
      href={fileURL}
    >
      {children}
    </a>
  );
};
export default SecBtn;
