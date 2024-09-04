'use client'

import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();
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
                <a className={pathname === "/" ? "nav-link active" : "nav-link"} aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={pathname === "/works" ? "nav-link active" : "nav-link"} href="/works">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className={pathname === "/certificates" ? "nav-link active" : "nav-link"} href="/certificates">
                  Certificates
                </a>
              </li>
              <li className="nav-item">
                <a className={pathname === "/about" ? "nav-link active" : "nav-link"} href="/about">
                  About
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
