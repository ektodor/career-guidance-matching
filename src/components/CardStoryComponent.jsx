export function CardStoryComponent({ item }) {
  return (
    <div className="card card-story flex-shrink-0 pb-0">
      <div className=" overflow-hidden">
        <img src={item.img} className="card-img-top" alt="img" />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold fs-2xl lh-sm">{item.title}</h5>
        <p className="card-text fs-sm text-secondary">{item.context}</p>
        <div className="d-flex align-items-center mt-auto">
          <p className="mb-0 lh-sm fs-md fw-bold me-2">{item.work}</p>
          <p className="ps-2 mb-0 fs-sm  border-start border-1">{item.name}</p>
        </div>
      </div>
      <p className="card-story-badge fs-md fw-medium lh-sm">數位遊牧 2 年</p>
    </div>
  );
}
