import { ButtonComponent } from "../../components/ButtonComponent";
import Icon from "@mdi/react";
import { mdiFilterVariant } from "@mdi/js";
import { RecordListComponent } from "../../components/RecordListComponent";
export function Record() {
  // todo dropdown 尚未完成
  const bookings = [
    {
      id: 1,
      course: "職涯定位-職涯探索包",
      session: "6/6堂",
      date: "2025/11/11",
      duration: "60分鐘",
      method: "視訊",
      status: "等待上課",
      isExpired: false,
    },
    {
      id: 2,
      course: "職涯定位-職涯探索包",
      session: "5/6堂",
      date: "2025/10/10",
      duration: "60分鐘",
      method: "視訊",
      status: "等待上課",
      isExpired: false,
    },
    {
      id: 3,
      course: "職涯定位-職涯探索包",
      session: "4/6堂",
      date: "2025/09/09",
      duration: "60分鐘",
      method: "視訊",
      status: "已完成",
      isExpired: true,
    },
    {
      id: 4,
      course: "職涯定位-職涯探索包",
      session: "3/6堂",
      date: "2025/08/08",
      duration: "60分鐘",
      method: "面對面",
      status: "已完成",
      isExpired: true,
    },
    {
      id: 5,
      course: "職涯定位-職涯探索包",
      session: "2/6堂",
      date: "2025/07/07",
      duration: "60分鐘",
      method: "面對面",
      status: "已完成",
      isExpired: true,
    },
    {
      id: 6,
      course: "職涯定位-職涯探索包",
      session: "1/6堂",
      date: "2025/06/06",
      duration: "90分鐘",
      method: "面對面",
      status: "已完成",
      isExpired: true,
    },
  ];
  return (
    <main>
      <h1 className=" fw-medium lh-sm fs-2xl mb-3 mb-lg-4">預約紀錄</h1>
      <div className="mb-4 mb-lg-5 d-flex column-gap-4">
        <div className="py-3 py-lg-4 border border-primary rounded-3 text-center d-none d-lg-block w-100">
          <p className=" mb-2 text-hover-primary fw-bold fs-4xl lh-sm">3</p>
          <p className="mb-0 text-secondary fs-lg ">已完成諮詢</p>
        </div>
        <div className="py-3 py-lg-4 border border-primary rounded-3 text-center w-100 ">
          <p className=" mb-2 text-hover-primary fw-bold fs-4xl lh-sm">
            2025/10/10
          </p>
          <p className="mb-0 text-secondary fs-lg ">即將到來</p>
        </div>
        <div className="py-3 py-lg-4 border border-primary rounded-3 text-center  d-none d-lg-block w-100">
          <p className=" mb-2 text-hover-primary fw-bold fs-4xl lh-sm">3/6</p>
          <p className="mb-0 text-secondary fs-lg ">使用方案進度</p>
        </div>
      </div>

      <div className="d-flex column-gap-2 align-items-center mb-3 mb-lg-4">
        <ButtonComponent>全部預約</ButtonComponent>
        <ButtonComponent isOutline={true}>已完成</ButtonComponent>
        <ButtonComponent isOutline={true}>已取消</ButtonComponent>
        <div className="dropdown ms-auto">
          <ButtonComponent
            otherClass="border-lg-1 border-lg border-0  bg-transparent"
            type="button"
            toggle="dropdown"
            isOutline={true}
            aria-expanded="false"
          >
            <p className="mb-0 d-none d-lg-inline-block">排序</p>
            <Icon path={mdiFilterVariant} size={"1.5rem"} />
          </ButtonComponent>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                新到舊
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                舊到新
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <RecordListComponent list={bookings} />
      </div>
    </main>
  );
}
