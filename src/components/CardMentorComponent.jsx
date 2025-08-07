export function CardMentorComponent({ item }) {
  return (
    <div className="card card-mentor  flex-shrink-0">
      <div className=" overflow-hidden">
        <img src={item.img} className="card-img-top" alt="img" />
      </div>
      <div className="card-body d-flex flex-column  pb-0">
        <p className="card-title fw-medium fs-md lh-sm text-secondary mb-2">
          {item.title}
        </p>
        <h3 className="card-text fs-2xl lh-sm text-primary mb-3">
          {item.name}
        </h3>
        <div className="d-flex align-items-center column-gap-2 row-gap-1 flex-wrap">
          {item.tags.map((tag) => {
            return (
              <p className="mb-0 py-1 px-2 text-secondary border border-1 border-primary rounded-3 fs-sm">
                # {tag}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
