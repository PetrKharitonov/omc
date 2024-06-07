"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiSolidCircle } from "react-icons/bi";
import { useWindowWidth } from "../hooks/useWindowWidth";

const ClientPath = () => {
  const boxRef = useRef();

  const [y, setY] = useState();

  const getPosition = () => {
    let viewportOffset = boxRef.current.getBoundingClientRect();
    let top = viewportOffset.top;
    setY(top);
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", getPosition);

    return () => window.removeEventListener("scroll", getPosition);
  }, []);

  const windowWidth = useWindowWidth();

  return (
    <div>
      <div className="wrapper client-path-container">
        {windowWidth > 1100 && (
          <div className="path-tags">
            <svg
              viewBox="0 0 100 200"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", zIndex: "-20" }}
            >
              <line
                x1="5.85"
                y1="6"
                x2="5.85"
                y2="146"
                stroke="black"
                strokeWidth={0.4}
              />
            </svg>
            <div className="path-tag">
              <div className="path-tag-circle">
                <BiSolidCircle
                  size={y > 2300 ? 30 : 10}
                  color={y > 2300 ? "#2580e5" : "black"}
                />
              </div>
              <p className={y > 2300 && "path-tagfw"}>Обращение</p>
            </div>
            <div className="path-tag">
              <div className="path-tag-circle">
                <BiSolidCircle
                  size={2000 < y && 2300 > y ? 30 : 10}
                  color={2000 < y && 2300 > y ? "#2580e5" : "black"}
                />
              </div>
              <p className={2000 < y && 2300 > y && "path-tagfw"}>
                Предварительные переговоры
              </p>
            </div>
            <div className="path-tag">
              <div className="path-tag-circle">
                <BiSolidCircle
                  size={1600 < y && 2000 > y ? 30 : 10}
                  color={1600 < y && 2000 > y ? "#2580e5" : "black"}
                />
              </div>
              <p className={1600 < y && 2000 > y && "path-tagfw"}>
                Проведение Центром многофакторного анализа
              </p>
            </div>
            <div className="path-tag">
              <div className="path-tag-circle">
                <BiSolidCircle
                  size={1200 < y && 1600 > y ? 30 : 10}
                  color={1200 < y && 1600 > y ? "#2580e5" : "black"}
                />
              </div>
              <p className={1200 < y && 1600 > y && "path-tagfw"}>
                Формирование Профайла
              </p>
            </div>
            <div className="path-tag">
              <div className="path-tag-circle">
                <BiSolidCircle
                  size={900 < y && 1200 > y ? 30 : 10}
                  color={900 < y && 1200 > y ? "#2580e5" : "black"}
                />
              </div>
              <p className={900 < y && 1200 > y && "path-tagfw"}>
                Решение о дальнейшем сотрудничестве
              </p>
            </div>
            <div className="path-tag">
              <div className="path-tag-circle">
                <BiSolidCircle
                  size={600 < y && 900 > y ? 30 : 10}
                  color={600 < y && 900 > y ? "#2580e5" : "black"}
                />
              </div>
              <p className={600 < y && 900 > y && "path-tagfw"}>
                Выбор стратегии
              </p>
            </div>
            <div className="path-tag">
              <div className="path-tag-circle">
                <BiSolidCircle
                  size={600 > y ? 30 : 10}
                  color={600 > y ? "#2580e5" : "black"}
                />
              </div>
              <p className={600 > y && "path-tagfw"}>
                Реализация стратегии «под ключ»
              </p>
            </div>
          </div>
        )}

        <div className="path-items">
          <div
            className={
              y > 2300
                ? "path-item path-item-active"
                : "path-item path-item-inactive"
            }
          >
            <h1>1</h1>
            <div className="path-item-container">
              <h3>Обращение заинтересованного лица в Центр</h3>
              <p>
                Вы можете связаться с нами по почте anoomc@anoomc.ru или
                заказать звонок, заполнив форму на сайте, и мы перезвоним Вам в
                течение рабочего дня
              </p>
            </div>
            <div className="path-image-holder">
              <Image
                width={225}
                height={236}
                alt="Обращение заинтересованного лица в Центр"
                src="/1.jpg"
              />
            </div>
          </div>
          <div
            className={
              2000 < y && 2300 > y
                ? "path-item path-item-active"
                : "path-item path-item-inactive"
            }
          >
            <h1>2</h1>
            <div className="path-item-container">
              <h3>Предварительные переговоры</h3>
              <p>
                Встреча в офисе или в онлайн-формате: обсуждаем сложившуюся
                ситуацию и Ваш запрос по ее разрешению
              </p>
            </div>
            <div
              className="path-image-holder that-image"
              style={{ paddingTop: "30px", paddingLeft: "60px" }}
            >
              <Image
                width={225}
                height={156}
                alt="Предварительные переговоры"
                src="/2.jpg"
              />
            </div>
          </div>
          <div
            className={
              1600 < y && 2000 > y
                ? "path-item path-item-active"
                : "path-item path-item-inactive"
            }
          >
            <h1>3</h1>
            <div
              className="path-item-container"
              style={{ paddingBottom: "30px" }}
            >
              <h3>
                Проведение Центром многофакторного анализа Вашего бизнеса или
                Вашего проекта
              </h3>
              <p>
                После подписания Соглашения о конфиденциальности Центр проводит
                многофакторную комплексную оценку должника и его бизнеса с
                привлечением специалистов экспертной группы - антикризисных
                менеджеров, аудиторов, экономистов, финансистов, юристов,
                профильных консультантов, оценщиков и других специалистов.
                Научно-методологическая поддержка обеспечивается представителями
                ведущих ВУЗов России
              </p>
            </div>
            <div className="path-image-holder" style={{ paddingTop: "30px" }}>
              <Image
                width={225}
                height={270}
                alt="Проведение Центром многофакторного анализа Вашего бизнеса или
                    Вашего проекта"
                src="/3.jpg"
              />
            </div>
          </div>
          <div
            className={
              1200 < y && 1600 > y
                ? "path-item path-item-active"
                : "path-item path-item-inactive"
            }
          >
            <h1>4</h1>
            <div
              className="path-item-container"
              style={{ paddingBottom: "30px" }}
            >
              <h3>Формирование стандартизированного Профайла</h3>
              <p>
                Центр формирует стандартизированный Профайл в отношении Вашей
                компании или Вашего проекта. Профайл содержит в себе
                характеризующую их информацию, сильные и слабые стороны, текущее
                положение дел и выводы о возможности восстановления
                платежеспособности с предлагаемыми для этого сценарными планами.
                Профайл также содержит в себе информацию, требующуюся внешним
                пользователям (потенциальным инвесторам, кредиторам и т.д.) и
                бенефициарам для оценки предприятия и его актива как бизнеса
              </p>
            </div>
            <div className="path-image-holder" style={{ paddingTop: "50px" }}>
              <Image
                width={225}
                height={245}
                alt="Формирование стандартизированного Профайла"
                src="/4.jpg"
              />
            </div>
          </div>
          <div
            className={
              900 < y && 1200 > y
                ? "path-item path-item-active"
                : "path-item path-item-inactive"
            }
          >
            <h1>5</h1>
            <div className="path-item-container">
              <h3>Решение о дальнейшем сотрудничестве</h3>
              <p>
                Опираясь на профайл, принимается решение смогут ли стороны
                работать друг с другом и решить возникшие сложности
              </p>
            </div>
            <div className="path-image-holder" style={{ paddingTop: "10px" }}>
              <Image
                width={225}
                height={207}
                alt="Решение о дальнейшем сотрудничестве"
                src="/5.jpg"
              />
            </div>
          </div>
          <div
            className={
              600 < y && 900 > y
                ? "path-item path-item-active"
                : "path-item path-item-inactive"
            }
          >
            <h1>6</h1>
            <div className="path-item-container">
              <h3>Выбор стратегии</h3>
              <p>
                Центр предложит несколько стратегий разрешения ситуации на
                выбор: с расчетом моделей реагирования и сроков реализации,
                необходимой инфраструктуры и ожидаемого результата
              </p>
            </div>
            <div className="path-image-holder" style={{ paddingTop: "15px" }}>
              <Image
                width={225}
                height={192}
                alt="Выбор стратегии"
                src="/6.jpg"
              />
            </div>
          </div>
          <div
            className={
              600 > y
                ? "path-item path-item-active"
                : "path-item path-item-inactive"
            }
          >
            <h1>7</h1>
            <div className="path-item-container">
              <h3>Реализация стратегии «под ключ»</h3>
              <p>
                Выбранная Вами стратегия будет реализована «под ключ»: с нами
                работают ведущие эксперты и лидеры рынка
              </p>
            </div>
            <div className="path-image-holder" style={{ paddingTop: "25px" }}>
              <Image
                width={225}
                height={159}
                alt="Реализация стратегии «под ключ»"
                src="/7.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={boxRef}></div>
    </div>
  );
};
export default ClientPath;
