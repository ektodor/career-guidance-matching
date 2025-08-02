export function RadioComponent({ name, id, value, radio, setRadio }) {
  return (
    <div className="mb-0 d-flex justify-content-center align-items-center">
      <input
        className="form-check-input fs-5 mt-0 me-1"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={value == radio}
        onChange={(e) => {
          setRadio(e.target.value);
        }}
      />
      <label className="form-check-label fs-sm text-primary" htmlFor={id}>
        {value}
      </label>
    </div>
  );
}
