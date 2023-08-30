import "./SecBtn.css";

const SecBtn = ({ children }) => {
  return (
    <a rel="noopener noreferrer" target="_blank" className="secBtn">
      {children}
    </a>
  );
};
export default SecBtn;
