'use client'

import { usePathname } from "next/navigation";

import './style.css';//
import { Link } from "@/i18n/routing";
const Navbar = () => {

  const pathnameSplit: string[] = usePathname().split("/");
  pathnameSplit.shift(); 
  pathnameSplit.shift(); //remove locale code
  const pathname = pathnameSplit.join("/");
  console.log(pathname);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <span className="navbar-brand  mb-0  h1 ">ANUCHIT.NET</span>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
              <li className="nav-item">
                <Link className={pathname ===""? "nav-link active" : "nav-link"} aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={pathname === "works" ? "nav-link active" : "nav-link"} href="/works">
                  Works
                </Link>
              </li>
              <li className="nav-item">
                <Link className={pathname === "certificates" ? "nav-link active" : "nav-link"} href="/certificates">
                  Certificates
                </Link>
              </li>
              <li className="nav-item">
                <Link className={pathname === "about" ? "nav-link active" : "nav-link"} href="/about">
                  About
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
