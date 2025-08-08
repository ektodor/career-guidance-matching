import { ButtonComponent } from "./ButtonComponent";
import { mdiChevronRight } from "@mdi/js";
export function CardServerComponent({ card }) {
  return (
    <div className=" col-lg-4">
      <div
        className={`bg-primary rounded-4 backend-shadow py-4 px-3 d-flex flex-column align-items-center ${
          card.isHot ? "border border-2 border-green card-hot" : ""
        }`}
      >
        <img src={card.image} alt="" className="mb-3 mb-lg-4" />
        <div className="mb-3 mb-lg-4">
          <h3 className="mb-2 fs-2xl fw-bold lh-sm text-center">
            {card.title}
          </h3>
          <p className="mb-2 fs-sm text-center text-secondary">
            {card.context}
          </p>
          <p className="mb-0 fw-bold fs-2xl text-hover-primary lh-sm text-center">
            NT$ {card.price.toLocaleString()}
          </p>
        </div>

        <ButtonComponent
          icon={mdiChevronRight}
          iconPosition="right"
          otherClass="pe-2 pe-lg-12px"
        >
          我有興趣
        </ButtonComponent>
      </div>
    </div>
  );
}
