export function AccordionComponent({ parentId, accordion }) {
  return (
    <div className="accordion-item accordion-shadow rounded-3">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed d-flex align-items-start pb-3 rounded-3 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collaspse${accordion.id}`}
          aria-expanded="false"
          aria-controls={`collaspse${accordion.id}`}
        >
          <p className="mb-0 text-secondary fs-xl lh-sm fw-bold me-2">Q.</p>
          <p className="mb-0 text-secondary fs-lg lh-sm fw-bold me-2">
            {accordion.title}
          </p>
        </button>
      </h2>
      <div
        id={`collaspse${accordion.id}`}
        className="accordion-collapse collapse "
        data-bs-parent={parentId}
      >
        <div className="accordion-body pt-0 ">
          <div className=" d-flex align-items-start  accordion-bottom-dot pt-3">
            <p className="mb-0 text-secondary fs-xl lh-sm fw-bold text-hover-primary me-2">
              A.
            </p>
            <p className=" fs-sm mb-0">{accordion.context}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
