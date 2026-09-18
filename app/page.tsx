"use client";

import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  Snowflake,
  ShieldCheck,
  Clock3,
  ChevronDown,
} from "lucide-react";

const phoneNumber = "085773334303";
const whatsappNumber = "6285773334303";

const menuAreas = [
  {
    province: "DKI Jakarta",
    items: [
      "Service AC Jakarta Selatan",
      "Service AC Jakarta Timur",
      "Service AC Jakarta Barat",
      "Service AC Jakarta Utara",
      "Service AC Jakarta Pusat",
    ],
  },
  {
    province: "Banten",
    items: [
      "Service AC Tangerang Selatan",
      "Service AC Kota Tangerang",
      "Service AC Kabupaten Tangerang",
    ],
  },
  {
    province: "Jawa Barat",
    items: [
      "Service AC Bekasi",
      "Service AC Depok",
      "Service AC Bogor",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [layananOpen, setLayananOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <main className="home">
        {/* ================= HEADER ================= */}
        <header className="header">
          <div className="logo-area">
            <div className="logo-mark">S</div>

            <div>
              <div className="brand-name">
                SABIT JAYA <span>SERVICE</span>
              </div>

              <div className="brand-tagline">
                Solusi AC Anda
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="header-whatsapp"
            aria-label="WhatsApp Sabit Jaya Service"
          >
            <MessageCircle size={21} />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Buka menu"
          >
            <Menu size={29} />
          </button>
        </header>

        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="hero-content">
            <div className="eyebrow">
              SERVICE AC PROFESIONAL
            </div>

            <h1>
              <span>Service AC 24 Jam</span>
              <strong>Jabodetabek</strong>
              <em>Murah Bergaransi</em>
            </h1>

            <p className="hero-description">
              Udara panas bikin nggak nyaman?
              <br />
              Kami siap bantu! Tim profesional kami akan
              buat AC Anda kembali sejuk dan optimal —
              cepat, bersih, dan bergaransi.
            </p>

            <div className="features">
              <div className="feature-card">
                <div className="feature-icon">
                  <Snowflake size={27} />
                </div>

                <div className="feature-text">
                  <b>AC Kembali</b>
                  <span>Sejuk Optimal</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <ShieldCheck size={27} />
                </div>

                <div className="feature-text">
                  <b>Teknisi</b>
                  <span>Profesional</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <Clock3 size={27} />
                </div>

                <div className="feature-text">
                  <b>Layanan</b>
                  <span>24 Jam</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FOTO HOME ================= */}
          <div className="technician-area">
            <img
              src="/home.png"
              alt="Sabit Jaya Service"
              className="technician"
            />

            <div className="technician-glow" />
          </div>

          <div className="slider-dots">
            <span className="active" />
            <span />
            <span />
          </div>
        </section>
      </main>

      {/* ================= FLOATING CONTACT ================= */}
      <div className="contact-buttons">
        <a
          href={`tel:${phoneNumber}`}
          className="contact-button phone-button"
          aria-label={`Telepon ${phoneNumber}`}
        >
          <Phone size={24} />
          <span>Hubungi Kami</span>
        </a>

        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="contact-button whatsapp-button"
          aria-label={`WhatsApp ${phoneNumber}`}
        >
          <MessageCircle size={25} />
          <span>Hubungi Kami</span>
        </a>
      </div>

      {/* ================= OVERLAY MENU ================= */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        >
          {/* ================= MENU PANEL ================= */}
          <aside
            className="menu-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="menu-header">
              <div className="menu-brand">
                <div className="menu-logo">S</div>

                <div>
                  <div className="menu-brand-name">
                    SABIT JAYA <span>SERVICE</span>
                  </div>

                  <div className="menu-subtitle">
                    Solusi AC Anda
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="close-menu"
                onClick={closeMenu}
                aria-label="Tutup menu"
              >
                <X size={25} />
              </button>
            </div>

            <div className="menu-content">
              {/* BERANDA */}
              <a
                href="/"
                className="menu-main-link"
                onClick={closeMenu}
              >
                Beranda
              </a>

              {/* LAYANAN */}
              <button
                type="button"
                className={`layanan-button ${
                  layananOpen ? "open" : ""
                }`}
                onClick={() =>
                  setLayananOpen(!layananOpen)
                }
              >
                <span>Layanan</span>

                <ChevronDown
                  size={23}
                  className={
                    layananOpen
                      ? "chevron rotated"
                      : "chevron"
                  }
                />
              </button>

              {/* AREA LAYANAN */}
              {layananOpen && (
                <div className="area-list">
                  {menuAreas.map((area) => (
                    <div
                      className="province-group"
                      key={area.province}
                    >
                      <div className="province-title">
                        {area.province}
                      </div>

                      {area.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="area-link"
                          onClick={closeMenu}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* DAFTAR HARGA */}
              <a
                href="#harga"
                className="menu-main-link"
                onClick={closeMenu}
              >
                Daftar Harga
              </a>

              {/* GALERI */}
              <a
                href="#galeri"
                className="menu-main-link"
                onClick={closeMenu}
              >
                Galeri Pengerjaan
              </a>
            </div>
          </aside>
        </div>
      )}

      {/* ================= CSS ================= */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #180044;
          color: #ffffff;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        /* ================= HOME ================= */

        .home {
          min-height: 100vh;
          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 78% 12%,
              rgba(207, 73, 255, 0.42),
              transparent 30%
            ),
            radial-gradient(
              circle at 15% 80%,
              rgba(102, 34, 235, 0.42),
              transparent 35%
            ),
            linear-gradient(
              145deg,
              #12002f 0%,
              #37007d 48%,
              #21005e 100%
            );
        }

        /* ================= HEADER ================= */

        .header {
          width: 100%;
          min-height: 72px;

          padding: 12px 25px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          position: relative;
          z-index: 50;

          background: rgba(17, 0, 45, 0.72);
          border-bottom: 1px solid
            rgba(255, 255, 255, 0.12);

          backdrop-filter: blur(14px);
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-mark {
          width: 43px;
          height: 43px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 11px;

          background: linear-gradient(
            145deg,
            #ffffff,
            #d8c6ff
          );

          color: #5912b8;

          font-size: 25px;
          font-weight: 900;

          box-shadow:
            0 5px 20px rgba(180, 80, 255, 0.35);
        }

        .brand-name {
          font-size: 16px;
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: 0.3px;
        }

        .brand-name span {
          color: #d79bff;
        }

        .brand-tagline {
          margin-top: 3px;
          font-size: 9px;
          color: rgba(255, 255, 255, 0.65);
        }

        .header-whatsapp {
          display: flex;
          align-items: center;
          gap: 7px;

          padding: 10px 15px;

          border-radius: 10px;

          background: #19c964;
          color: #ffffff;

          font-size: 12px;
          font-weight: 800;

          box-shadow:
            0 7px 20px rgba(25, 201, 100, 0.3);
        }

        .menu-button {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 43px;
          height: 43px;

          border: 0;
          border-radius: 10px;

          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;

          cursor: pointer;
        }

        /* ================= HERO ================= */

        .hero {
          position: relative;

          min-height: calc(100vh - 72px);

          padding:
            55px
            max(25px, 7vw)
            115px;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(300px, 0.85fr);

          align-items: center;

          gap: 30px;

          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(10px);
        }

        .glow-one {
          width: 400px;
          height: 400px;

          top: -160px;
          right: -100px;

          background:
            rgba(201, 54, 255, 0.25);
        }

        .glow-two {
          width: 350px;
          height: 350px;

          left: -140px;
          bottom: -150px;

          background:
            rgba(91, 31, 255, 0.3);
        }

        .hero-content {
          position: relative;
          z-index: 5;

          max-width: 650px;
        }

        .eyebrow {
          display: inline-block;

          margin-bottom: 16px;
          padding: 7px 12px;

          border: 1px solid
            rgba(255, 255, 255, 0.18);

          border-radius: 8px;

          background:
            rgba(255, 255, 255, 0.08);

          color: #e3c5ff;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .hero h1 {
          margin: 0;

          display: flex;
          flex-direction: column;

          font-size: clamp(39px, 5vw, 70px);

          line-height: 1.03;

          font-weight: 900;

          letter-spacing: -1.7px;
        }

        .hero h1 span {
          color: #ffffff;
        }

        .hero h1 strong {
          color: #d59aff;
          font-weight: 900;
        }

        .hero h1 em {
          color: #ffffff;
          font-style: normal;
        }

        .hero-description {
          max-width: 610px;

          margin:
            22px 0
            27px;

          font-size: 15px;
          line-height: 1.75;

          color:
            rgba(255, 255, 255, 0.82);
        }

        /* ================= FEATURE ================= */

        .features {
          max-width: 500px;

          display: flex;
          flex-direction: column;

          gap: 11px;
        }

        .feature-card {
          min-height: 86px;

          display: flex;
          align-items: center;

          gap: 18px;

          padding: 11px;

          border:
            1px solid
            rgba(255, 255, 255, 0.18);

          border-radius: 17px;

          background:
            linear-gradient(
              100deg,
              rgba(255, 255, 255, 0.14),
              rgba(255, 255, 255, 0.04)
            );

          box-shadow:
            inset 0 1px 0
              rgba(255, 255, 255, 0.08),
            0 10px 30px
              rgba(0, 0, 0, 0.12);

          backdrop-filter: blur(10px);
        }

        .feature-icon {
          width: 63px;
          height: 63px;
          flex: 0 0 63px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 15px;

          background: #ffffff;
          color: #6814c2;

          box-shadow:
            0 5px 17px
              rgba(0, 0, 0, 0.12);
        }

        .feature-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .feature-text b {
          font-size: 16px;
          font-weight: 800;
        }

        .feature-text span {
          font-size: 13px;
          color:
            rgba(255, 255, 255, 0.72);
        }

        /* ================= HOME IMAGE ================= */

        .technician-area {
          position: relative;

          min-height: 430px;

          display: flex;
          align-items: center;
          justify-content: center;

          z-index: 4;
        }

        .technician {
          position: relative;
          z-index: 3;

          display: block;

          width: min(100%, 540px);

          max-height: 560px;

          object-fit: contain;

          filter:
            drop-shadow(
              0 22px 38px
              rgba(0, 0, 0, 0.35)
            );
        }

        .technician-glow {
          position: absolute;
          z-index: 1;

          width: 75%;
          height: 45%;

          left: 12.5%;
          bottom: 8%;

          border-radius: 50%;

          background:
            rgba(194, 75, 255, 0.35);

          filter: blur(55px);
        }

        /* ================= DOTS ================= */

        .slider-dots {
          position: relative;
          z-index: 5;

          grid-column: 1 / -1;

          display: flex;
          justify-content: center;
          align-items: center;

          gap: 9px;

          margin-top: -15px;
        }

        .slider-dots span {
          width: 38px;
          height: 6px;

          border-radius: 5px;

          background:
            rgba(255, 255, 255, 0.3);
        }

        .slider-dots span.active {
          background: #ffffff;
        }

        /* ================= FLOATING BUTTON ================= */

        .contact-buttons {
          position: fixed;

          left: 50%;
          bottom: 17px;

          transform: translateX(-50%);

          z-index: 9999;

          width: calc(100% - 35px);
          max-width: 900px;

          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 13px;
        }

        .contact-button {
          min-height: 64px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          border: 2px solid
            rgba(255, 255, 255, 0.7);

          border-radius: 16px;

          color: #ffffff;

          font-size: 16px;
          font-weight: 800;

          box-shadow:
            0 10px 25px
              rgba(0, 0, 0, 0.28);
        }

        .phone-button {
          background: #1584e8;
        }

        .whatsapp-button {
          background: #19c964;
        }

        /* ================= MENU OVERLAY ================= */

        .menu-overlay {
          position: fixed;

          inset: 0;

          z-index: 10000;

          background:
            rgba(5, 0, 20, 0.45);

          backdrop-filter: blur(7px);

          display: flex;
          justify-content: flex-end;

          animation:
            overlayIn 0.2s ease;
        }

        @keyframes overlayIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        /* ================= MENU PANEL ================= */

        .menu-panel {
          width: min(100%, 485px);

          height: 100vh;

          background: #ffffff;

          color: #20232b;

          box-shadow:
            -10px 0 40px
              rgba(0, 0, 0, 0.22);

          display: flex;
          flex-direction: column;

          animation:
            panelIn 0.25s ease;
        }

        @keyframes panelIn {
          from {
            transform: translateX(100%);
          }

          to {
            transform: translateX(0);
          }
        }

        .menu-header {
          min-height: 100px;

          padding: 18px 22px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border-bottom:
            1px solid #e9edf2;
        }

        .menu-brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .menu-logo {
          width: 43px;
          height: 43px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background:
            linear-gradient(
              145deg,
              #6814c2,
              #9a3be8
            );

          color: #ffffff;

          font-size: 24px;
          font-weight: 900;
        }

        .menu-brand-name {
          font-size: 17px;
          font-weight: 800;
          color: #171a21;
        }

        .menu-brand-name span {
          color: #2384d5;
        }

        .menu-subtitle {
          margin-top: 2px;

          font-size: 9px;

          color: #8b929c;
        }

        .close-menu {
          width: 44px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid #e3e7ec;

          border-radius: 11px;

          background: #ffffff;

          color: #68727e;

          cursor: pointer;
        }

        .menu-content {
          flex: 1;

          overflow-y: auto;

          padding:
            25px
            22px
            120px;
        }

        .menu-main-link {
          min-height: 58px;

          display: flex;
          align-items: center;

          padding: 0 23px;

          font-size: 18px;
          font-weight: 500;

          color: #20242b;

          border-radius: 13px;

          transition:
            background 0.2s ease;
        }

        .menu-main-link:hover {
          background: #f5f8fc;
        }

        /* ================= LAYANAN ================= */

        .layanan-button {
          width: 100%;
          min-height: 60px;

          margin: 5px 0;

          padding:
            0
            23px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border: 0;

          border-radius: 13px;

          background: #f1f7fd;

          color: #2580cf;

          font-size: 19px;
          font-weight: 700;

          cursor: pointer;
        }

        .layanan-button.open {
          background: #f1f7fd;
        }

        .chevron {
          transition:
            transform 0.2s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }

        /* ================= AREA ================= */

        .area-list {
          margin:
            0
            18px
            8px;

          padding:
            7px
            0
            7px
            21px;

          border-left:
            2px solid #e1e8ef;

          animation:
            areaIn 0.2s ease;
        }

        @keyframes areaIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .province-group {
          margin-bottom: 18px;
        }

        .province-title {
          margin:
            0
            0
            8px;

          color: #247fca;

          font-size: 17px;
          font-weight: 800;
        }

        .area-link {
          display: block;

          padding:
            9px
            0;

          color: #555c66;

          font-size: 16px;
          line-height: 1.45;

          transition:
            color 0.2s ease;
        }

        .area-link:hover {
          color: #247fca;
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;

            min-height: auto;

            padding:
              45px
              25px
              125px;
          }

          .hero-content {
            width: 100%;
            max-width: 700px;

            margin: 0 auto;
          }

          .technician-area {
            min-height: auto;

            margin-top: 10px;
          }

          .technician {
            width: min(100%, 520px);
          }

          .features {
            max-width: 100%;
          }

          .slider-dots {
            margin-top: 5px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .header {
            min-height: 67px;

            padding:
              10px
              15px;
          }

          .logo-mark {
            width: 37px;
            height: 37px;

            border-radius: 9px;

            font-size: 21px;
          }

          .brand-name {
            font-size: 13px;
          }

          .brand-tagline {
            font-size: 8px;
          }

          .header-whatsapp {
            padding:
              9px
              10px;

            border-radius: 9px;

            font-size: 10px;
          }

          .menu-button {
            width: 39px;
            height: 39px;
          }

          .hero {
            min-height: auto;

            padding:
              35px
              18px
              110px;

            display: flex;
            flex-direction: column;
          }

          .eyebrow {
            margin-bottom: 13px;

            padding:
              6px
              10px;

            font-size: 8px;
          }

          .hero h1 {
            font-size:
              clamp(
                34px,
                10vw,
                48px
              );

            line-height: 1.04;

            letter-spacing: -1px;
          }

          .hero-description {
            margin:
              19px
              0
              23px;

            font-size: 13px;

            line-height: 1.7;
          }

          .features {
            width: 100%;

            gap: 10px;
          }

          .feature-card {
            min-height: 85px;

            padding: 10px;

            gap: 16px;

            border-radius: 16px;
          }

          .feature-icon {
            width: 63px;
            height: 63px;
            flex-basis: 63px;

            border-radius: 14px;
          }

          .feature-text b {
            font-size: 15px;
          }

          .feature-text span {
            font-size: 12px;
          }

          .technician-area {
            width: 100%;

            min-height: auto;

            margin:
              24px
              0
              12px;
          }

          .technician {
            width: 100%;

            max-width: 100%;

            max-height: none;
          }

          .technician-glow {
            width: 80%;
            left: 10%;
          }

          .slider-dots {
            margin-top: 5px;
          }

          /* FLOATING BUTTON MOBILE */

          .contact-buttons {
            position: fixed;

            left: 50%;
            bottom: 12px;

            transform: translateX(-50%);

            width: calc(100% - 28px);

            z-index: 9999;

            gap: 10px;
          }

          .contact-button {
            min-height: 61px;

            border-radius: 15px;

            font-size: 14px;

            gap: 7px;
          }

          .contact-button svg {
            width: 23px;
            height: 23px;
          }

          /* MENU MOBILE */

          .menu-panel {
            width: 100%;
          }

          .menu-header {
            min-height: 88px;

            padding:
              16px
              18px;
          }

          .menu-brand-name {
            font-size: 16px;
          }

          .menu-content {
            padding:
              22px
              18px
              120px;
          }

          .menu-main-link {
            min-height: 57px;

            padding:
              0
              17px;

            font-size: 18px;
          }

          .layanan-button {
            min-height: 58px;

            padding:
              0
              17px;

            font-size: 18px;
          }

          .area-list {
            margin-left: 17px;

            padding-left: 17px;
          }

          .province-title {
            font-size: 16px;
          }

          .area-link {
            font-size: 15px;

            padding:
              8px
              0;
          }
        }
      `}</style>
    </>
  );
            }
