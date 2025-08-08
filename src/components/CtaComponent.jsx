import icon from "@images/logo-icon-w.svg";
import { mdiChevronRight, mdiPhoneOutline, mdiEmailOutline } from "@mdi/js";
import { ButtonComponent } from "@/components/ButtonComponent";
import Icon from "@mdi/react";
export function CtaComponent() {
  return (
    <div className="py-3 py-lg-4 px-lg-5 px-4 bg-action-primary rounded-4">
      <div className=" dot-border">
        <div className="mb-4">
          <img src={icon} alt="" />
        </div>

        <h3 className="mb-12px fs-4xl fw-bold lh-sm text-deepBg-primary">
          邁向你真正想過的生活，從這裡開始
        </h3>
        <p className="mb-4 fs-lg text-deepBg-primary">
          第一次諮詢只要 30 分鐘，可能改變你未來 30 年的生活方式
        </p>
      </div>
      <div className=" d-lg-flex mt-3 mt-lg-4">
        <div className="mb-3 d-flex align-items-center mb-lg-0">
          <Icon
            path={mdiPhoneOutline}
            size={"1.5rem"}
            className="text-deepBg-primary"
          />
          <p className="mb-0 text-deepBg-primary ms-2">0800-123-123</p>
        </div>
        <div className="mb-4 mb-lg-0 d-flex align-items-center ms-lg-4">
          <Icon
            path={mdiEmailOutline}
            size={"1.5rem"}
            className="text-deepBg-primary"
          />
          <p className="mb-0 text-deepBg-primary ms-2">Sample@mail.com</p>
        </div>
        <ButtonComponent
          isOutline={false}
          icon={mdiChevronRight}
          iconPosition="right"
          otherClass="pe-2 ms-lg-auto pe-lg-12px"
        >
          預約免費職涯探索
        </ButtonComponent>
      </div>
    </div>
  );
}
