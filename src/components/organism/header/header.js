import HeaderLeftSide from "../../molecules/headerLeftSide/headerLeftSide";
import HeaderRightSide from "../../molecules/headerRightSide/headerRightSide";
import ToolkitList from "../../molecules/tookitList/toolkitList";
import style from './header.module.css'



export default function Header(){


    return(
        <>
            <div className={style.headstyle}>
            <HeaderLeftSide/>
            <HeaderRightSide/>

            </div>
            <div>
                <ToolkitList/>
            </div>
        </>
    )
}