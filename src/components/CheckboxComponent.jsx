export function CheckboxComponent({
  name,
  id,
  value,
  checkList,
  setCheckList,
  otherClass,
  children,
}) {
  return (
    <div
      className={`form-check mb-0 d-flex align-items-center ${otherClass} ps-lg-28px`}
    >
      <input
        className="form-check-input fs-5 mt-0 me-1 checkbox"
        type="checkbox"
        value={value}
        name={name}
        id={id}
        onChange={(e) => {
          if (checkList.length == 0) {
            setCheckList(e.target.checked);
            return;
          }
          if (e.target.checked) {
            setCheckList([...checkList, value]);
          } else {
            setCheckList([...checkList].filter((item) => item != value));
          }
        }}
      />

      <label
        className="form-check-label fw-normal lh-base text-primary fs-sm"
        htmlFor={id}
      >
        {children ? children : value}
      </label>
    </div>
  );
}
