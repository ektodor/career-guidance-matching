import Icon from "@mdi/react";
import { NavLink } from "react-router";
export function ButtonComponent({
  isOutline = false,
  icon,
  iconSize = "20px",
  iconPosition = "left",
  disabled = false,
  type = "button",
  to, // NavLink 的 to 屬性
  otherClass,
  toggle,
  target,
  children,
}) {
  const style = isOutline ? "btn-default-outline" : "btn-default";
  const padding = iconPosition == "left" ? "pe-12px pe-lg-20px" : "";
  if (to) {
    return (
      <NavLink
        className={({ isActive }) =>
          `btn ${style}  ${otherClass} text-center fs-md ${padding} ${
            isActive ? "active" : ""
          }`
        }
        to={to}
        disabled={disabled}
        type={type}
      >
        {icon && iconPosition == "left" && <Icon path={icon} size={iconSize} />}
        {children}
        {icon && iconPosition == "right" && (
          <Icon path={icon} size={iconSize} />
        )}
      </NavLink>
    );
  }
  return (
    <button
      className={`btn ${style}  ${otherClass} text-center fs-md ${padding}`}
      disabled={disabled}
      type={type}
      data-bs-toggle={toggle}
      data-bs-target={target}
    >
      {icon && iconPosition == "left" && <Icon path={icon} size={iconSize} />}
      {children}
      {icon && iconPosition == "right" && <Icon path={icon} size={iconSize} />}
    </button>
  );
}
