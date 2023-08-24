"use client";
import Image from "next/image";
import Link from "next/link";
import "./NavBar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header>
      <div className="wrapper-wide header">
        <div className="header-container wrapper">
          <div className="header-main">
            <div className="logo-handler">
              <Image
                src="/logoomc1.svg"
                alt="omc Logo1"
                width={113.11}
                height={53.86}
                priority
              />
              <Image
                src="/logoomc2.svg"
                alt="omc Logo2"
                width={100.86}
                height={53.86}
                priority
              />
            </div>
            <div onClick={() => setNav(!nav)} className="mobile-btn">
              {nav ? <GrClose size={35} /> : <AiOutlineMenu size={35} />}
            </div>
          </div>

          <nav className={nav ? "nav-handler nav-active" : "nav-handler"}>
            <Link href="/">Главная</Link>
            <Link href="/client">Клиенту</Link>
            <Link href="/news">Мероприятия и новости</Link>
            <Link href="/about">О центре</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
