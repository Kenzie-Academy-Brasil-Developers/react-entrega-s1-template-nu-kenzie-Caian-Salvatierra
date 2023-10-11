import { Amount } from "../../components/Amount";
import { Header } from "../../components/Header/Header";
import { TodoForm } from "../../components/TodoForm";
import { TodoList } from "../../components/TodoList";

import style from "./style.module.scss";

export const HomePage = ({ listNotes, addNote, removeNote }) => {
  return (
    <>
      <Header />
      <main className={style.flexHomePage} >
          <div className={style.box}>
          <TodoForm addNote={addNote} />
          {listNotes.length > 0 && <Amount listNotes={listNotes} />}
          </div>
          <div className={style.summary}>
          <TodoList listNotes={listNotes} removeNote={removeNote} />
          </div>
        
      </main>
    </>
  );
};
