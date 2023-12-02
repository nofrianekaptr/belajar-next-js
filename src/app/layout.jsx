"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'
import { useEffect } from "react";
import Navbar from "./utils/navbar/Navbar";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import NextNProgress from 'nextjs-progressbar';

export default function RootLayout({ children }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-light-subtle">
        <NextNProgress color="#dc143c" />
        <Navbar />
        {children}
        <FloatingWhatsApp
          accountName="Nofrian E. Putra"
          phoneNumber="6282389869057"
          notification
          notificationSound
          chatMessage="Halo selamat datang! Apa ada yang bisa saya bantu?"
          avatar="/l1.svg"
          statusMessage="Biasanya membalas dalam 1 jam"
        />


        <footer>
          <div className="container  border-top">
            <div className="row py-3 ">
              <div className="col-lg-8 mb-2 mb-lg-0 text-center text-lg-start small">
                &copy; 2023 Codenofr <span className="text-muted"> | </span> Codenofr adalah Platform Jasa Layanan Digital Creative Pembuatan Website Profesional.
              </div>
              <div className="col-lg-4 text-center text-lg-end small">
                <span className=" text-muted">All Right Reserved | Build With <span className="color-utama">&#10084;</span> From Dharmasraya </span>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}
