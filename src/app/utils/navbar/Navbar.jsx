import Link from "next/link"
import style from "./navbar.module.css"
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    const pathname = usePathname();

    return (
        <>
            <nav className={`navbar navbar-expand-lg  bg-white sticky-top ${scroll ? 'border-bottom' : ''}`}>
                <div className="container py-2">
                    <a className="navbar-brand text-uppercase text-dark fw-bold" href="#">CODENOFR.COM</a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`${style.f600} nav-link active text-dark px-md-3 px-md-3 ${pathname == "/" ? style.active : ""}`} href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${style.f600} nav-link active text-dark px-md-3 px-md-3 ${pathname == "/about" ? style.active : ""}`} href="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${style.f600} nav-link text-dark px-md-3 px-md-3`} href="#">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${style.f600} nav-link text-dark px-md-3 px-md-3 ${pathname == "/products" ? style.active : ""}`} href="#">Products</Link>
                            </li>
                        </ul>
                        <div>
                            <Link href="https://wa.me/6282389869057" target="_blank" className={`${style.f600}  btn btn-color rounded-3 border-0 px-4 w-100 `}>+62 823 8986 9057</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar