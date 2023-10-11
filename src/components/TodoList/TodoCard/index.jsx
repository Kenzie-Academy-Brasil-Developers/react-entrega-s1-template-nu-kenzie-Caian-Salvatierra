import style from "./style.module.scss";

export const TodoCard = ({description, value, valueType, id, removeNote }) => {

    return (

        <div className={`${style.container} ${valueType === "Entrada" ? style.green : style.grey}`}>
            <div className={style.teste}>
            <h3 className="title three">{description}</h3>
            <p className="headline">{valueType}</p>
            </div> 
            <div className={style.teste2}> 
            <p>{value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            
            <button onClick={() => removeNote(id)} className="btn small">Excluir</button>
            </div>
        </div>
    );
};