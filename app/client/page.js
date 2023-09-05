import "./clientPage.css";
import ClientPath from "../components/ClientPath";
import Scheme from "../components/Scheme";
import { getFaqs } from "../lib/getFaqs";
import Faq from "../components/Faq";
import { getClientDocs } from "../lib/getClientDocs";
import { AiOutlineArrowDown } from "react-icons/ai";

const ClientPage = async () => {
  const faqsRev = await getFaqs();
  const clientDocs = await getClientDocs();

  const faqs = faqsRev.reverse();

  return (
    <div>
      <div className="blue-background">
        <div
          className="wrapper client-header"
          style={{ paddingBottom: "100px" }}
        >
          <h1 style={{ color: "white" }}>Услуги клиенту</h1>
        </div>
      </div>
      <div className="wrapper-wide ">
        <div className="wrapper client-path">
          <h2>
            Подробный путь <br />
            решения проблемы
          </h2>
        </div>
        <div className="shadow-container">{<ClientPath />}</div>
      </div>
      <div className="wrapper-wide participantsBlock">
        <div className="wrapper">
          <h2>Участники процесса</h2>
        </div>
        <Scheme />
      </div>
      <div className="principesBlock wrapper">
        <h2>Наши принципы</h2>
        <div className="principesContainer">
          <div className="princip">
            Клиент – всегда в Центре нашего внимания
          </div>
          <div className="princip">Реагируем на изменения лучше других</div>
          <div className="princip">
            Докажем на цифрах, что договариваться - выгодно
          </div>
          <div className="princip">
            Знаем, что кризисы проходят, а репутация – остается
          </div>
        </div>
      </div>
      <div className="wrapper faqBlock">
        <h2>Ответы на вопросы</h2>
        <Faq faqs={faqs} />
      </div>

      <div className="wrapper clientDocsBlock">
        <h2>Перечень документов</h2>
        <p>
          Ниже представлен перечень всех необходимых документов, с которыми вы
          можете ознакомиться и скачать для дальнейшего заполнения.
        </p>
        <div className="clientDocs-container">
          {clientDocs.map((el) => {
            const doc = el.clientdoc;
            return (
              <>
                {doc.file != null ? (
                  <a
                    href={doc.file.mediaItemUrl}
                    target="_blank"
                    className="clientDoc"
                  >
                    <p
                      dangerouslySetInnerHTML={{ __html: doc.description }}
                    ></p>
                    <AiOutlineArrowDown
                      size={20}
                      color="#2580e5"
                      style={{ transform: "rotate(270deg)" }}
                    />
                  </a>
                ) : (
                  <div className="clientDoc" style={{ cursor: "pointer" }}>
                    <p
                      dangerouslySetInnerHTML={{ __html: doc.description }}
                    ></p>
                    <AiOutlineArrowDown
                      size={20}
                      color="#2580e5"
                      style={{ transform: "rotate(270deg)" }}
                    />
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ClientPage;
