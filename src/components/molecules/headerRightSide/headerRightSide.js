import style from './headerRightSide.module.css';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


export default function HeaderRightSide() {


    return (
        <>
            <div className={style.container}>
                <div className={style.icons}>
                    <HistoryOutlinedIcon sx={{width:'3rem', height:'2rem'}} />
                    <CommentOutlinedIcon sx={{width:'3rem', height:'2rem'}}/>
                    <VideocamOutlinedIcon sx={{width:'3rem', height:'2rem'}}/>
                </div>

                <div className={style.midpart}>
                    <p className={style.share}><span> <LockOutlinedIcon /> </span> Share</p>
                </div>
                <div className={style.profile}>

                </div>



            </div>
        </>
    )
}