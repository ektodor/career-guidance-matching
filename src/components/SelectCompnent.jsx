import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
export function SelectCompnent({ select, list, setSelect }) {
  // 利用 dropdown 模擬 select 樣式
  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn px-12px py-3 w-100 border-primary d-flex fs-md"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {select}
        <Icon path={mdiChevronDown} size={"20px"} className="ms-auto" />
      </button>
      <ul className="dropdown-menu w-100">
        {list.map((item) => {
          return (
            <li
              className="py-2 px-4 fs-md"
              key={item.value}
              onClick={(e) => {
                setSelect(e.target.textContent);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
