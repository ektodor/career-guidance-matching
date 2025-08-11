import { NavLink } from "react-router";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.png";
import { ButtonComponent } from "./ButtonComponent";
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
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            class="offcanvas offcanvas-start p-4"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header p-0 pb-3">
              {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas
              </h5> */}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body p-0 d-flex flex-column flex-lg-row">
              <ul className="nav justify-content-center flex-column flex-lg-row column-gap-lg-4 w-100">
                <li className="nav-item">
                  <NavLink
                    to="/service-plan"
                    className="nav-link fs-md px-lg-4 py-3 text-center py-lg-0"
                  >
                    服務方案
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link  px-lg-4 fs-md py-3 text-center py-lg-0"
                  >
                    關於職旅
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link  px-lg-4 fs-md py-3 text-center py-lg-0"
                  >
                    聯絡我們
                  </NavLink>
                </li>
              </ul>
              <ButtonComponent
                otherClass={"mt-auto d-lg-none py-2"}
                isBtnLg={true}
              >
                登入/註冊
              </ButtonComponent>
            </div>
          </div>
          {/* <div
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
          </div> */}
        </div>
      </nav>
    </header>
  );
}
