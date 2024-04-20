import "./theme.css";

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <i class="uil uil-sun sun"/>
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"></label>
      <i class="uil uil-moon moon"/>
    </div>
  );
};
