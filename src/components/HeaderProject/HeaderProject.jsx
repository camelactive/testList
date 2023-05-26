import style from "./HeaderProject.module.css"
import logo from "../../images/logo.svg"
import bell from "../../images/bell.svg"
import avatar from "../../images/avatar.svg"


const HeaderProject = () => {
  return (
    <div className={style.HeaderProject}>
        <div className={style.HeaderProject__left}>
            <img className={style.logo} alt="logo" src={logo}/>
            <h3 className={style.header}>Проект</h3>
        </div>
        <div className={style.HeaderProject__right}>
            <img className={style.bell} alt="bell" src={bell}/>
            <img className={style.avatar} alt="avatar" src={avatar}/>
            <div className={style.user}>
                <h3 className={style.user__name}>Иванова.А.А</h3>
                <p className={style.user__rank}>Должность</p>
            </div>
        </div>
    </div>
  )
}

export default HeaderProject