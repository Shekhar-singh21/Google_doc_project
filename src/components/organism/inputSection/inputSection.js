import style from './inputSection.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { FormControl, TextField } from '@mui/material';
import { BorderAll } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import {setTextAreaValue,setFontSize,toggleBold,textAreaSize,setFontColor} from '../../store/slices/textAreaslice'

export default function InputSection() {

  const dispatch= useDispatch();
  const textAreaValue = useSelector((state)=> state.toolkitList.textAreaValue)
  const counter = useSelector((state)=>state.toolkitList.counter);
  const isBold = useSelector((state)=> state.toolkitList.isBold);
  const isItalic = useSelector((state)=>state.toolkitList.isItalic)
  const textAreaSize = useSelector((state)=>state.toolkitList.textAreaSize)
  const fontColor = useSelector((state)=> state.toolkitList.fontColor)

  function getTextAreaValue(e){
    dispatch(setTextAreaValue(e.target.value))
  }

 



  return (
    <div className={style.maincontainer}>
      <div className={style.container}>
        <div className={style.inputcontroler}>
          <ArrowBackIcon />
          <div className={style.tags}>
            <p>Summary</p>
            <AddIcon />
          </div>
          <div>
            <h6>Outline</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum?</p>
          </div>
        </div>
        <div className={style.textfield}>
         <textarea value={textAreaValue} onChange={getTextAreaValue} name="" id="" cols="110" rows="80" style={{width:textAreaSize,height:'100vh', outline:'none' ,Border:'1px solid #bdb6b5' , fontSize:`${12 + counter * 2}px` , fontWeight: isBold ? '900' : '200',fontStyle:isItalic?'italic':'normal' , color :fontColor?'back':'red'}} >

         </textarea>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
