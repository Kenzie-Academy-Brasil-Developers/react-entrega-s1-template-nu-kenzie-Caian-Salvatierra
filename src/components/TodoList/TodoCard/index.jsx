import style from "./style.module.scss";

export const TodoCard = ({description, value, valueType, id, removeNote }) => {

    return (

        <div className={`${style.container} ${valueType === "Entrada" ? style.green : style.grey}`}>
            <div className={style.box1}>
            <h3 className="title three">{description}</h3>
            <p className="body">{valueType}</p>
            </div> 
            <div className={style.box2}> 
            <p className="body">{value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            
            <button onClick={() => removeNote(id)} className="btn small">Excluir</button>
            </div>
        </div>
    );
};