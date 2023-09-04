import { getPartners } from "../lib/getPartners";
import PartnerCard from "../components/cards/PartnerCard";
import "./aboutPage.css";
import AboutPartners from "../components/AboutPartners";
import { getCompanyDocs } from "../lib/getCompanyDocs";
import { AiOutlineArrowDown } from "react-icons/ai";

const AboutPage = async () => {
  const partners = await getPartners();
  const companyDocs = await getCompanyDocs();

  return (
    <div>
      <div className="blue-background">
        <div className="wrapper about-header" style={{ paddingBottom: "50px" }}>
          <h1 style={{ color: "white" }}>Обращение учредителей</h1>
        </div>
      </div>
      <div className="wrapper about-partners">
        <h2>С кем сотрудничаем</h2>
        <AboutPartners partners={partners} />
      </div>
      <div className="wrapper about-docs">
        <h2>Документы центра</h2>

        <div className="companyDocs-container">
          {companyDocs.map((el) => {
            const doc = el.clientdoc;
            return (
              <a
                href={doc.file.mediaItemUrl}
                target="_blank"
                className="companyDoc"
              >
                <p dangerouslySetInnerHTML={{ __html: doc.description }}></p>
                <AiOutlineArrowDown
                  size={20}
                  color="#2580e5"
                  style={{ transform: "rotate(270deg)" }}
                />
              </a>
            );
          })}
        </div>
      </div>

      <div className="wrapper requisites">
        <h2>Реквизиты</h2>

        <div className="requisites-container requisites-shadow">
          <div className="requisite">
            <p>Полное наименование организации</p>
            <p>
              Автономная некоммерческая организация «Объединенный Медиативный
              центр»
            </p>
          </div>
          <div className="requisite">
            <p>Сокращенное наименование организации</p>
            <p>АНО «ОМЦ»</p>
          </div>
          <div className="requisite">
            <p>ОГРН</p>
            <p>1237700254461</p>
          </div>
          <div className="requisite">
            <p>ИНН</p>
            <p>9701245414</p>
          </div>
          <div className="requisite">
            <p>КПП</p>
            <p>770101001</p>
          </div>
          <div className="requisite">
            <p>Юридический адрес</p>
            <p>
              УЛИЦА МАКАРЕНКО, Д. Д. 5, КОРП./СТ. СТР. 1А, КВ./ОФ. ЭТАЖ 2 ПОМ I
              КОМ. 6, Г. МОСКВА
            </p>
          </div>
          <div className="requisite">
            <p>Почтовый адрес</p>
            <p>
              УЛИЦА МАКАРЕНКО, Д. Д. 5, КОРП./СТ. СТР. 1А, КВ./ОФ. ЭТАЖ 2 ПОМ I
              КОМ. 6, Г. МОСКВА
            </p>
          </div>
          <div className="requisite">
            <p>Контактный телефон</p>
            <p>+7 (909) 087-35-46</p>
          </div>
          <div className="requisite">
            <p>E-mail</p>
            <p>anoomc@anoomc.ru</p>
          </div>
          <div className="requisite">
            <p>Руководитель</p>
            <p>Мучараева Оксана Ризвановна</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
