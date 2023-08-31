"use client";
import "./Scheme.css";
import { useWindowWidth } from "../hooks/useWindowWidth";

const Scheme = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className="participantsBlock-shadow">
      {windowWidth > 1300 ? (
        <svg
          className="scheme-svg"
          width={1280}
          height={580}
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", zIndex: "0" }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 7 3.5, 0 7" />
            </marker>
          </defs>
          <rect
            fill="transparent"
            stroke="black"
            x={200}
            y={50}
            height={80}
            width={440}
            rx={20}
            ry={20}
            strokeWidth={1.5}
          ></rect>
          <rect fill="#fafafa" x={190} y={95} height={60} width={500}></rect>
          <line
            x1="640"
            y1="86"
            x2="640"
            y2="87"
            stroke="#000"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          ></line>
          <rect
            fill="transparent"
            stroke="black"
            x={200}
            y={420}
            height={80}
            width={440}
            rx={20}
            ry={20}
            strokeWidth={1.5}
          ></rect>
          <rect fill="#fafafa" x={190} y={400} height={60} width={500}></rect>
          <line
            x1="640"
            y1="463"
            x2="640"
            y2="462"
            stroke="#000"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          ></line>
          <line
            x1="400"
            y1="275"
            x2="440"
            y2="275"
            stroke="#000"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          ></line>
          <line
            x1="830"
            y1="275"
            x2="870"
            y2="275"
            stroke="#000"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          ></line>
          <line
            x1="870"
            y1="275"
            x2="835"
            y2="275"
            stroke="#000"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          ></line>
        </svg>
      ) : (
        <div className="scheme-container">
          <svg
            className="scheme-svg"
            width={360}
            height={600}
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", zIndex: "0" }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 7 3.5, 0 7" />
              </marker>
            </defs>
            <rect
              fill="transparent"
              stroke="black"
              x={1}
              y={85}
              height={385}
              width={40}
              rx={10}
              ry={10}
              strokeWidth={1.5}
            ></rect>
            <rect
              fill="transparent"
              stroke="black"
              x={319}
              y={195}
              height={275}
              width={40}
              rx={10}
              ry={10}
              strokeWidth={1.5}
            ></rect>
            <rect fill="#fafafa" x={19} y={10} height={500} width={322}></rect>
            <line
              x1="180"
              y1="345"
              x2="180"
              y2="385"
              stroke="#000"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            ></line>
            <line
              x1="180"
              y1="545"
              x2="180"
              y2="572"
              stroke="#000"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            ></line>
            <line
              x1="180"
              y1="580"
              x2="180"
              y2="550"
              stroke="#000"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            ></line>
            <line
              x1="8"
              y1="470"
              x2="10"
              y2="470"
              stroke="#000"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            ></line>
            <line
              x1="351"
              y1="470"
              x2="350"
              y2="470"
              stroke="#000"
              strokeWidth="1.5"
              markerEnd="url(#arrowhead)"
            ></line>
          </svg>
        </div>
      )}

      <div
        className="wrapper scheme"
        style={{ position: "relative", zIndex: "10" }}
      >
        <div className="scheme-left">
          <div className="schemeBlock">
            Кредиторы: <br />
            ФНС, Банк, контрагенты и т.д.
          </div>
          <div className="schemeBlock">
            Компании, попавшие в сложную финансовую ситуацию
          </div>
          <div className="schemeBlock">Инвесторы</div>
        </div>
        <div className="schemeMain">
          <h3>
            Объединённый <br />
            Медиативный <br />
            Центр
          </h3>
        </div>
        <div className="scheme-right">
          <div className="schemeBlock">Экспертная группа</div>
          <ul>
            <li>
              <h4>Профильные специалисты:</h4>
              <p>
                аудиторы, бизнес-аналитики, юристы, оценщики, антикризисные
                менеджеры, и т.д.
              </p>
            </li>
            <li>
              <h4>Центр медиации при РСПП</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Scheme;
