import { ButtonComponent } from "../../components/ButtonComponent";
import {
  mdiFaceManOutline,
  mdiClipboardClockOutline,
  mdiListBoxOutline,
} from "@mdi/js";
import { Outlet } from "react-router";
export function BackendLayout() {
  return (
    <main className="bg-secondary ">
      <div className="container-lg">
        <div className="row py-5 justify-content-center">
          <div className="col-12 d-flex justify-content-center px-2 column-gap-3 column-gap-lg-4">
            <ButtonComponent
              isOutline={true}
              icon={mdiFaceManOutline}
              to="/admin/info"
            >
              個人資料
            </ButtonComponent>
            <ButtonComponent
              isOutline={true}
              icon={mdiClipboardClockOutline}
              to="/admin/record"
            >
              預約紀錄
            </ButtonComponent>
            <ButtonComponent
              isOutline={true}
              icon={mdiListBoxOutline}
              to="/admin/career-plan"
            >
              職旅紀錄
            </ButtonComponent>
          </div>
          <div className="col-12 col-lg-10 mt-3 ">
            <div className="p-4 p-lg-5 bg-primary rounded-4 backend-shadow">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
