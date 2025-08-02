import { NavLink } from "react-router";
export function FooterComponent() {
  return (
    <footer className="footer py-4  bg-secondary">
      <div className="container-lg d-lg-flex justify-content-between  align-items-center">
        <ul className="list-unstyled mb-2 d-flex flex-wrap justify-content-center row-gap-2 nav mb-lg-0">
          <li className="nav-item">
            <NavLink
              to="/service-plan"
              className=" py-2 px-3 px-lg-4  link-underline link-underline-opacity-0 fs-md nav-link"
            >
              服務方案
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className=" py-2 px-3 px-lg-4  link-underline link-underline-opacity-0 fs-md nav-link"
            >
              關於職旅
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className=" py-2 px-3 px-lg-4  link-underline link-underline-opacity-0 fs-md nav-link"
            >
              聯絡我們
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/policy"
              className=" py-2 px-3 px-lg-4  link-underline link-underline-opacity-0 fs-md nav-link"
            >
              隱私權政策
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/policy"
              className=" py-2 px-3 px-lg-4  link-underline link-underline-opacity-0 fs-md nav-link"
            >
              用戶條款
            </NavLink>
          </li>
        </ul>
        <p className="mb-0 fs-sm text-secondary text-center">
          Copyright © 2025 職旅 workway. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
