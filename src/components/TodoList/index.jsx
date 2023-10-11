import { TodoCard } from "./TodoCard";

import style from "./style.module.scss";

export const TodoList = ({listNotes, removeNote}) =>{
   
    return (

        <div className={style.listBox}>
            <div className={style.box}>
            <h3 className="title three ">Resumo Financeiro</h3>
            {listNotes.length === 0 ? <h2 className="title tow"> Você ainda não possui nenhum lançamento </h2> : null }
            </div>
            <ul>
                {listNotes.map((note) =>{
                    const {description, value, valueType, id} = note; 
                  
                    return <TodoCard 
                        key={id}
                        description={description} 
                        value={value} 
                        valueType={valueType}
                        id={id}
                        removeNote ={removeNote}/>
                })}
            </ul>
            
        </div>
    );
};