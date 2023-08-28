import Image from "next/image";
import "./mainPage.css";
import MainBtn from "./components/btns/MainBtn";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import SecBtn from "./components/btns/SecBtn";
import MainSwiper from "./components/swipers/MainSwiper";
import PartnersSwiper from "./components/swipers/PartnersSwiper";
import { getLastPosts } from "./lib/getLastPosts";
import { getPartners } from "@/app/lib/getPartners";
import { getStuff } from "@/app/lib/getStuff";
import StuffSwiper from "./components/swipers/StuffSwiper";
import PartnerForm from "./components/forms/PartnerForm";
import PartnerFormContainer from "./components/forms/PartnerFormContainer";
import Link from "next/link";

export default async function Home() {
  const posts = await getLastPosts();
  const partners = await getPartners();
  const stuff = await getStuff();

  return (
    <div>
      <div className="wrapper">
        <div className="main-header">
          <div className="main-header_text">
            <h1>
              Объединенный <br />
              Медиативный Центр
            </h1>
            <h3>С нами договариваться выгодно</h3>
          </div>
          <div className="main-header_img">
            <Image
              src="/headerImg.png"
              alt="header image"
              fill
              style={{ objectFit: "contain" }}
              priority={true}
            ></Image>
          </div>
        </div>
      </div>
      <div className="shadow-container wrapper-wide">
        <div className="wrapper-wide main-infoBlock">
          <div className="infoBlock-left">
            <h2>
              Автономная некоммерческая организация поддержки
              предпринимательства
            </h2>
            <p>
              Нашей целью является формирование комфортной инфраструктуры для
              предприятий, попавших в трудную экономическую ситуацию и не
              только, обеспечивающей получения всей необходимой помощи,
              связанной с выходом из сложных ситуаций и решением различных
              бизнес задач.
            </p>

            <div className="infoBlock-btns">
              <MainBtn>
                <p>Связаться с нами</p>
                <AiOutlineArrowDown size={20} />
              </MainBtn>
              <SecBtn>Скачать презентацию</SecBtn>
            </div>
          </div>

          <div className="infoBlock-swiper">
            <h3>Новости и мероприятия</h3>
            <MainSwiper posts={posts} />
          </div>
        </div>
      </div>
      <div className="helpingBlock">
        <div className="wrapper helpingBlock-container">
          <div className="helpingBlock-left">
            <h2>Кому мы помогаем</h2>
            <p>
              Добросовестный бизнес ежедневно сталкивается с внешними и
              внутренними вызовами. От сложных ситуаций никто не застрахован, но
              всегда есть способ выйти из них на взаимовыгодных условиях. Мы
              поможем выработать эффективную и комфортную стратегию, обеспечим
              необходимой инфраструктурой «под ключ» и сохраним Вашу репутацию
              надежного партнера
            </p>
          </div>
          <div className="helpingBlock-right">
            <h3>Какие проблемы мы решаем</h3>
            <div className="helpingBlock-problem-container">
              <div className="helpingBlock-problem">Последствия санкций</div>
              <div className="helpingBlock-problem">
                Проблемы с контрагентами
              </div>
              <div className="helpingBlock-problem">
                Изменение нормативного регулирования
              </div>
              <div className="helpingBlock-problem">
                Оптимизация долговой нагрузки и расходов
              </div>
              <div className="helpingBlock-problem">
                Корпоративные конфликты
              </div>
              <div className="helpingBlock-problem">
                Расширение бизнеса и покупка активов
              </div>
              <div className="helpingBlock-problem">Поиск инвестора</div>
              <div className="helpingBlock-problem">Банкротство</div>
              <div className="helpingBlock-problem">Продажа бизнеса</div>
            </div>
          </div>
        </div>
      </div>
      <div className="solvingProblemBlock">
        <div className="wrapper">
          <h2>Путь решения проблемы</h2>
        </div>
        <div className="wrapper-wide solvingProblem-shadow">
          <div className="wrapper solvingProblem-container">
            <div className="solvingProblem-step">
              <div className="solvingProblem-step-upper">
                <Image
                  src="/obrasheniye.jpg"
                  alt="obrasheniye"
                  width={280}
                  height={265}
                ></Image>
                {/* <h2>1</h2> */}
              </div>
              <div className="solvingProblem-step-down">
                <h4>1. Обращение</h4>
                <p></p>
              </div>
            </div>

            <div className="solvingProblem-step">
              <div className="solvingProblem-step-upper">
                <Image
                  src="/sostavleniyeProfayla.jpg"
                  alt="sostavleniyeProfayla"
                  width={280}
                  height={265}
                ></Image>
                {/* <h2>2</h2> */}
              </div>
              <div className="solvingProblem-step-down">
                <h4>2. Составление профайла</h4>
                <p>
                  Многофакторный сценарный финансовый анализ Вашей компании или
                  Вашего проекта
                </p>
              </div>
            </div>

            <div className="solvingProblem-step">
              <div className="solvingProblem-step-upper">
                <Image
                  src="/prinyatiyeResheniya.jpg"
                  alt="prinyatiyeResheniya"
                  width={280}
                  height={265}
                ></Image>
                {/* <h2>3</h2> */}
              </div>
              <div className="solvingProblem-step-down">
                <h4>3. Выбор стратегии</h4>
                <p>
                  Несколько стратегий разрешения ситуации на выбор: с расчетом
                  моделей и сроков реализации, необходимой инфраструктуры и
                  ожидаемого результата
                </p>
              </div>
            </div>

            <div className="solvingProblem-step">
              <div className="solvingProblem-step-upper">
                <Image
                  src="/realizatsia.jpg"
                  alt="realizatsia"
                  width={280}
                  height={265}
                ></Image>
                {/* <h2>4</h2> */}
              </div>
              <div className="solvingProblem-step-down">
                <h4>4. Реализация</h4>
                <p>Реализация выбранной стратегии «под ключ»</p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper solvingProblem-btn">
          <MainBtn>
          <Link href="/client">Подробный путь</Link>
            <AiOutlineArrowRight size={20} />
          </MainBtn>
        </div>
      </div>
      <div className="mainPartners wrapper-wide">
        <div className="wrapper">
          <h2>С кем сотрудничаем</h2>
        </div>

        <div className="mainPartners-swiper">
          <PartnersSwiper partners={partners} />
        </div>
        <PartnerFormContainer />
      </div>
      <div className="stuffBlock wrapper-wide">
        <div className="wrapper">
          <h2>Руководство</h2>
        </div>
        <div className="stuffBlock-swiper">
          <StuffSwiper stuff={stuff} />
        </div>
      </div>
      {/* <div className="block"></div> */}
    </div>
  );
}
