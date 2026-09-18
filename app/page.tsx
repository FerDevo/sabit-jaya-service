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

const phone = "085773334303";
const whatsapp = "6285773334303";

const areas = [
  {
    name: "DKI Jakarta",
    links: [
      ["Service AC Jakarta Selatan", "/jakarta-selatan"],
      ["Service AC Jakarta Timur", "/jakarta-timur"],
      ["Service AC Jakarta Barat", "/jakarta-barat"],
      ["Service AC Jakarta Utara", "/jakarta-utara"],
      ["Service AC Jakarta Pusat", "/jakarta-pusat"],
    ],
  },
  {
    name: "Banten",
    links: [
      ["Service AC Tangerang Selatan", "/tangerang-selatan"],
      ["Service AC Kota Tangerang", "/tangerang"],
      ["Service AC Kabupaten Tangerang", "/kabupaten-tangerang"],
    ],
  },
  {
    name: "Jawa Barat",
    links: [
      ["Service AC Bekasi", "/bekasi"],
      ["Service AC Depok", "/depok"],
      ["Service AC Bogor", "/bogor"],
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [layananOpen, setLayananOpen] = useState(false);

  return (
    <main className="home">

      {/* HEADER */}
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
          href={`https://wa.me/${whatsapp}`}
          className="header-whatsapp"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Buka menu"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">
          <div className="eyebrow">
            SERVICE AC PROFESIONAL
          </div>

          <h1>
            Service AC 24 Jam
            <strong>Jabodetabek</strong>
            <span>Murah Bergaransi</span>
          </h1>

          <p className="hero-description">
            Udara panas bikin nggak nyaman?
            <br />
            Kami siap bantu! Tim profesional kami akan
            buat AC Anda kembali sejuk dan optimal —
            cepat, bersih, dan bergaransi.
          </p>

          {/* FITUR */}
          <div className="features">

            <div className="feature-card">
              <div className="feature-icon">
                <Snowflake size={27} />
              </div>
              <div>
                <b>AC Kembali</b>
                <span>Sejuk Optimal</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={27} />
              </div>
              <div>
                <b>Teknisi</b>
                <span>Profesional</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Clock3 size={27} />
              </div>
              <div>
                <b>Layanan</b>
                <span>24 Jam</span>
              </div>
            </div>

          </div>
        </div>

        {/* FOTO */}
        <div className="technician-area">
          <img
            src="/home.png"
            alt="Sabit Jaya Service"
            className="technician"
          />
        </div>

      </section>

      {/* TOMBOL FLOATING */}
      <div className="contact-buttons">

        <a
          href={`tel:${phone}`}
          className="contact-button phone-button"
        >
          <Phone size={24} />
          <span>Hubungi Kami</span>
        </a>

        <a
          href={`https://wa.me/${whatsapp}`}
          className="contact-button whatsapp-button"
        >
          <MessageCircle size={25} />
          <span>Hubungi Kami</span>
        </a>

      </div>

      {/* MENU */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="menu-panel"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER MENU */}
            <div className="menu-header">

              <div>
                <div className="menu-title">
                  SABIT JAYA <span>SERVICE</span>
                </div>

                <div className="menu-subtitle">
                  Solusi AC Anda
                </div>
              </div>

              <button
                className="close-menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={25} />
              </button>

            </div>

            {/* ISI MENU */}
            <div className="menu-content">

              <a
                href="/"
                className="menu-link"
              >
                Beranda
              </a>

              <button
                className="layanan-button"
                onClick={() =>
                  setLayananOpen(!layananOpen)
                }
              >
                <span>Layanan</span>
                <ChevronDown
                  size={22}
                  className={
                    layananOpen ? "rotate" : ""
                  }
                />
              </button>

              {layananOpen && (
                <div className="area-list">

                  {areas.map((area) => (
                    <div
                      className="area-group"
                      key={area.name}
                    >

                      <div className="province">
                        {area.name}
                      </div>

                      {area.links.map(
                        ([label, href]) => (
                          <a
                            key={href}
                            href={href}
                            className="area-link"
                          >
                            {label}
                          </a>
                        )
                      )}

                    </div>
                  ))}

                </div>
              )}

              <a
                href="/harga"
                className="menu-link"
              >
                Daftar Harga
              </a>

              <a
                href="/galeri"
                className="menu-link"
              >
                Galeri Pengerjaan
              </a>

            </div>
          </div>
        </div>
      )}

      {/* CSS SEDERHANA */}
      <style jsx global>{`

        .header {
          position: relative;
          z-index: 10;
        }

        .menu-button {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0;
          background: transparent;
          color: white;
          cursor: pointer;
        }

        .hero {
          position: relative;
        }

        .technician-area {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .technician {
          width: 100%;
          max-width: 540px;
          height: auto;
          display: block;
          object-fit: contain;
        }

        /* TOMBOL TETAP DI LAYAR */
        .contact-buttons {
          position: fixed;
          left: 50%;
          bottom: 15px;
          transform: translateX(-50%);
          width: calc(100% - 30px);
          max-width: 900px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          z-index: 9999;
        }

        .contact-button {
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 15px;
          color: white;
          font-weight: 700;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,.7);
          box-shadow: 0 8px 25px rgba(0,0,0,.25);
        }

        .phone-button {
          background: #1685e8;
        }

        .whatsapp-button {
          background: #19c964;
        }

        /* MENU */
        .menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(0,0,0,.45);
          backdrop-filter: blur(6px);
        }

        .menu-panel {
          margin-left: auto;
          width: min(100%, 480px);
          height: 100%;
          background: white;
          color: #222;
          overflow-y: auto;
        }

        .menu-header {
          padding: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eee;
        }

        .menu-title {
          font-size: 18px;
          font-weight: 800;
        }

        .menu-title span {
          color: #2584d5;
        }

        .menu-subtitle {
          font-size: 10px;
          color: #888;
          margin-top: 3px;
        }

        .close-menu {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border: 1px solid #ddd;
          border-radius: 10px;
          color: #68727e;
          cursor: pointer;
        }

        .menu-content {
          padding: 20px 22px 120px;
        }

        .menu-link {
          display: flex;
          align-items: center;
          min-height: 58px;
          padding: 0 20px;
          font-size: 18px;
          color: #222;
          text-decoration: none;
        }

        .layanan-button {
          width: 100%;
          min-height: 60px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 0;
          border-radius: 13px;
          background: #f1f7fd;
          color: #2584d5;
          font-size: 19px;
          font-weight: 700;
          cursor: pointer;
        }

        .rotate {
          transform: rotate(180deg);
        }

        .area-list {
          margin: 0 18px;
          padding: 10px 0 10px 18px;
          border-left: 2px solid #e0e7ee;
        }

        .area-group {
          margin-bottom: 20px;
        }

        .province {
          color: #2584d5;
          font-size: 17px;
          font-weight: 800;
          margin-bottom: 7px;
        }

        .area-link {
          display: block;
          padding: 8px 0;
          color: #555;
          font-size: 15px;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          .header-whatsapp {
            font-size: 10px;
          }

          .contact-button {
            min-height: 60px;
            font-size: 14px;
          }

          .hero {
            padding-bottom: 100px;
          }

          .menu-panel {
            width: 100%;
          }
        }

      `}</style>

    </main>
  );
}
