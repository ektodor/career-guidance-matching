import { NavLink } from "react-router";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.png";
export function HeaderComponent() {
  return (
    <header className="header bg-primary">
      <nav className="navbar w-100 navbar-expand-lg py-0">
        <div className="container-lg justify-content-between d-flex">
          <NavLink className="navbar-brand me-auto me-lg-0" href="/">
            <img src={logo} alt="logo" className="header__logo" />
          </NavLink>
          <NavLink
            to="/admin/info"
            href="#"
            className="link-underline link-underline-opacity-0 d-flex align-items-center order-lg-last link-dark "
          >
            <img
              src={avatar}
              alt="avatar"
              className="rounded-circle header__avatar"
            />
            <p className="mb-0 ms-2 fw-medium lh-sm fs-md">Mokumaru</p>
          </NavLink>

          <button
            className="navbar-toggler ms-12px border-0 header__nav-btn  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse flex-lg-grow-0"
            id="navbarNav"
          >
            <ul className="nav justify-content-center flex-column flex-lg-row column-gap-lg-4">
              <li className="nav-item">
                <NavLink to="/service-plan" className="nav-link fs-md px-lg-4">
                  服務方案
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link  px-lg-4 fs-md">
                  關於職旅
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link  px-lg-4 fs-md ">
                  聯絡我們
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
