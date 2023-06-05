import style from './headerLeftSide.module.css';
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
import Input from '../../atoms/inputfield/input';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';



export default function HeaderLeftSide() {


    return (
        <>
            <div className={style.maincontainer}>
                    <TextSnippetIcon sx={{
                        width: '3rem',
                        height: '3rem',
                        color: '#2684fc'
                    }} />
                    <div className={style.wrapper}>
                <div className={style.icons}>
                    <Input type='button' value='Untitled Document' />

                    <StarBorderIcon />
                    <DriveFileMoveOutlinedIcon />
                    <CloudDoneOutlinedIcon />
                </div>
                <div className={style.filenames}>
                    <p>File</p>
                    <p>Edit</p>
                    <p>View</p>
                    <p>Insert</p>
                    <p>Format</p>
                    <p>Tools</p>
                    <p>Extensions</p>
                    <p>Help</p>
                </div>
                </div>







            </div>


        </>
    )
}