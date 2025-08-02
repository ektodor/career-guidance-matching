export function CheckboxComponent({
  name,
  id,
  value,
  checkList,
  setCheckList,
}) {
  return (
    <div className="form-check mb-0 d-flex justify-content-center align-items-center">
      <input
        className="form-check-input fs-5 mt-0 me-1"
        type="checkbox"
        value={value}
        name={name}
        id={id}
        onChange={(e) => {
          if (e.target.checked) {
            setCheckList([...checkList, value]);
          } else {
            setCheckList([...checkList].filter((item) => item != value));
          }
        }}
      />
      <label
        className="form-check-label fw-normal lh-base text-primary fs-sm"
        for={id}
      >
        {value}
      </label>
    </div>
  );
}
