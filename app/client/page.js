import "./clientPage.css";
import ClientPath from "../components/ClientPath";
import Scheme from "../components/Scheme";
import { getFaqs } from "../lib/getFaqs";
import Faq from "../components/Faq";
import { getClientDocs } from "../lib/getClientDocs";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";

const ClientPage = async () => {
  const faqsRev = await getFaqs();
  const clientDocs = await getClientDocs();

  const faqs = faqsRev.reverse();

  return (
    <div>
      <div className="blue-background">
        <div className="client-header">
          <div className="wrapper">
            <h1 style={{ color: "white" }}>Услуги клиенту</h1>
            <div className="servicesContainer">
              <div className="service">
                Due diligence и оптимизация бизнес-плана
              </div>
              <div className="service">Оценка активов</div>
              <div className="service">
                Медиация и досудебное урегулирование споров
              </div>
              <div className="service">Привлечение инвестирования</div>
              <div className="service">Аудит</div>
              <div className="service">
                Урегулирование задолженности перед бюджетом
              </div>
              <div className="service">Покупка и продажа бизнеса</div>
              <div className="service">
                Согласительные процедуры в банкротстве
              </div>
            </div>
          </div>
          <div
            className="services-down-container"
            style={{ padding: "0 10px" }}
          >
            <div className="services-down">
              <div className="services-down-border"> </div>
            </div>
            <div className="services-down-line-container">
              <div className="services-down-line"></div>
            </div>
            <div className="services-down-content">
              <div className="services-down-key">
                <Image src={"/feKey0.svg"} width={82} height={41} alt="key" />
                <div className="services-down-key-text">
                  <h4>Проект «под ключ»</h4>
                  <p>
                    Каждая услуга предоставляется «под ключ», наш Центр будет с
                    вами на протяжении всего процесса решения проблемы
                  </p>
                </div>
              </div>
            </div>
          </div>
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
