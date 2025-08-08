import { ButtonComponent } from "./ButtonComponent";
import { mdiChevronRight } from "@mdi/js";
export function CardPlanComponent({ card }) {
  return (
    <div
      className={`bg-primary rounded-4 backend-shadow p-4 p-lg-5 d-lg-flex ${
        card.isHot ? "border border-2 border-green pt-5 card-hot" : ""
      }`}
    >
      <div className="me-lg-4 flex-grow-1">
        <h4 className="fs-md fw-medium lh-sm mb-2 text-hover-primary ">
          {card.plan}
        </h4>
        <h3 className="mb-2 fs-2xl fw-medium lh-sm">{card.title}</h3>
        <p className="mb-2 fs-md">{card.context}</p>
        <ul className="mb-3 mb-lg-4 card-plan-list row-gap-1 d-flex flex-column">
          {card.item.map((item) => {
            return (
              <li className="fs-md d-flex align-items-center">
                <div className="card-plan-list-style p-1"></div>
                {item}
              </li>
            );
          })}
        </ul>
        <div className="mb-3 mb-lg-4 p-3 bg-secondary rounded-3">
          <div className="d-flex mb-2">
            <p className="fs-md mb-0 text-nowrap">適合對象：</p>
            <p className="mb-0 fw-bold fs-md lh-sm">{card.for}</p>
          </div>
          <div className="d-flex">
            <p className="fs-md mb-0 text-nowrap">優惠價格：</p>
            <p className="mb-0 fw-bold fs-2xl text-hover-primary lh-sm">
              NT$ {card.price.toLocaleString()}
            </p>
          </div>
        </div>
        <ButtonComponent
          icon={mdiChevronRight}
          iconPosition="right"
          otherClass="pe-2  pe-lg-12px"
        >
          我有興趣
        </ButtonComponent>
      </div>
      <div className="d-none d-lg-block">
        <img src={card.image} alt="" className="card-plan-image" />
      </div>
    </div>
  );
}
