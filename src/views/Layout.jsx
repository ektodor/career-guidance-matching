import { NavLink, Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <nav className="d-flex gap-2">
        <NavLink to="/">首頁</NavLink>
        <NavLink to="/service-plan">服務方案</NavLink>
        <NavLink to="/about">關於職旅</NavLink>
        <NavLink to="/contact">聯絡我們</NavLink>
        <NavLink to="/login">登入</NavLink>
        <NavLink to="/register">註冊</NavLink>
        <NavLink to="/admin/info">個人資料</NavLink>
        <NavLink to="/admin/record">預約紀錄</NavLink>
        <NavLink to="/admin/career-plan">職旅計畫</NavLink>
        <NavLink to="/policy">隱私權/用戶條款</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
