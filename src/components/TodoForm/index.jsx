import { useState } from "react";
import { Input } from "../Input";
import { TodoSelect } from "../TodoSelect";

import style from "./style.module.scss";

export const TodoForm = ({addNote}) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("Entrada");

  const submit = (event) => {


    event.preventDefault();
    let newValue = Number(value)
    
      
      addNote({description, value: newValue, valueType});
    


    setDescription("");
    setValue("");
    setValueType("Entrada");
  };
 

  return (
    <div className={style.boxForm}>
      <form  onSubmit={submit}>
        
        <Input 
        label="Descrição"
        placeholder="Digite aqui sua descrição"
        type="text"
        id="text"
        required={true}
        value={description}
        setValue={setDescription}
        />
        <p>Ex: Compra de roupas</p>

        <Input 
        label="Valor (R$)"
        placeholder="1"
        type="number"
        id="text"
        required={true}
        value={value}
        setValue={setValue}
        />   

        <TodoSelect label= "Tipo de Valor"
        id = "text"
        value= {valueType}
        setValueType={setValueType}>
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
        </TodoSelect>
          
                
        <button className="btn large full" type="submit">Inserir valor</button>
      </form>
    </div>
  );
};
