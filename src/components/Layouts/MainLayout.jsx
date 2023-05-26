import {Outlet} from "react-router-dom"
import HeaderProject from "../HeaderProject/HeaderProject"
import AsiceMenu from "../AsideMenu/AsideMenu"
const MainLayout = () => {
  return (
    <div className="MainLayout">
        <HeaderProject/>
        <AsiceMenu/>
        <Outlet/>
    </div>
  )
}

export default MainLayout