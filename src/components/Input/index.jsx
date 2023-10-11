import style from "./style.module.scss"

export const Input = ({label, id, type, placeholder, value, setValue , required }) => {
  return (
  
    <div className={style.inputBox}>
      <label htmlFor={id}> {label}</label>
      <input
            className="headline"
            name={id}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            required = {required}
            onChange={(event) => setValue(event.target.value)}
      />
        
    </div>
    
  );
};
