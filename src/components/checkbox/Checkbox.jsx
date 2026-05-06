function Checkbox({ id, checked, content, handleChangeCheckbox }) {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChangeCheckbox}
      ></input>
      <label htmlFor={id}> {content}</label>
    </div>
  );
}

export default Checkbox;
