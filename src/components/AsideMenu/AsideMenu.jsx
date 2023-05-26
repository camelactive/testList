import { NavLink } from "react-router-dom"
import style from "./AsideMenu.module.css"
import list from "../../images/list.svg"

const AsiceMenu = () => {
  return (
    <div className={style.AsideMenu}>
      <NavLink to={"/"}>
        <img className={style.logo} alt="logo" src={list}/>
      </NavLink>
    </div>
  )
}

export default AsiceMenu