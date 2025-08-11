import { NavLink, Outlet } from "react-router";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
export function Layout() {
  return (
    <>
      <HeaderComponent />
      <div>
        <Outlet />
      </div>
      <FooterComponent />
    </>
  );
}
