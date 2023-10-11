import style from "./style.module.scss";

export const Amount = ({ listNotes }) => {
  const totalReleases = listNotes.reduce((acc, note) => {
    return note.valueType === "Entrada" ? acc + note.value : acc - note.value;
  }, 0);

  return (
    <>
   
      <div className={style.flexAmount}>
        <div className={style.box}>
          <h2 className="title two">Valor Total:</h2>
          <h3 className= {style.h3}>{totalReleases.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        </div>
        <span className="headline">O valor se refere ao saldo</span>
      </div>
      </>
    
  );
};
