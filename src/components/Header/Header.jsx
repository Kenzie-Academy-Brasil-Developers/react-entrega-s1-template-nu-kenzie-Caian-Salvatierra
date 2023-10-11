import nukenzie from "../../assets/Nu Kenzie.png";
import style from "./style.module.scss"

export const Header = () => {
  
    return(
        
        <header className={style.header}>
            <div className={style.img}>
            <img src={nukenzie} alt="logo Nukenzie" />
            </div>
        </header>
    )
};