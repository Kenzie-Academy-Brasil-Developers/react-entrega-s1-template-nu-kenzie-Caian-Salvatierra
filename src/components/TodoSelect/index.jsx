import style from "./style.module.scss";

export const TodoSelect = ({children,setValueType, id, label }) => {
  return (
    <div className={style.selectBox}>
      <label htmlFor={id}> {label}</label>
      <select
        className="headline"
        id="category"
        onChange={(event) => setValueType(event.target.value)}
        
      >
        {children}
        
      </select>
    </div>
  );
};
