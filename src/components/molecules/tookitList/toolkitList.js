import style from './toolkitList.module.css';
import UTurnLeftOutlinedIcon from '@mui/icons-material/UTurnLeftOutlined';
import UTurnRightOutlinedIcon from '@mui/icons-material/UTurnRightOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';
import ImagesearchRollerOutlinedIcon from '@mui/icons-material/ImagesearchRollerOutlined';
import { Button, FormControl, InputLabel, MenuList, Select, MenuItem, ToggleButton } from '@mui/material';
import Input from '../../atoms/inputfield/input';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AddCommentIcon from '@mui/icons-material/AddComment';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import Menu, { MenuProps } from '@mui/material/Menu';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Divider from '@mui/material/Divider';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import { setCounter,printTextArea,toggleBold,toggleItalic,toggleRedoStack,toggleUndoStack , toggletextAreaSize,textAreaSize ,setFontColor,fileUpload,SetTextUnderLine,setIsTextAlign} from '../../store/slices/textAreaslice';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { createObjectURL } from 'url';

const SmallToggleButton = styled(ToggleButton)({
    fontSize: '1rem', padding:'0.4rem',border:'none',
    cursor:'pointer'
  });





export default function ToolkitList() {
    const dispatch = useDispatch()
    const counter = useSelector((state)=> state.toolkitList.counter);
    const [input,setInput] = useState('');
    const textAreaValue = useSelector((state)=> state.toolkitList.textAreaValue)
    const textAreaSize = useSelector((state)=> state.toolkitList.textAreaSize)
    const fontColor = useSelector((state)=>state.toolkitList.fontColor)
  
      const file = useSelector((state)=>state.toolkitList.file);
      const textUnderLine = useSelector((state)=>state.toolkitList.textUnderLine);
      



    

      const { createObjectURL } = window.URL || window.webkitURL;

      function handleInsertImageClick() {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
          fileInput.click();
        }
      }
    


      function handleFileUpload(e){
        const file = e.target.files[0];
  const objectURL = createObjectURL(file);
  dispatch(fileUpload(URL, objectURL));
      }



      function undofun(){
        document.execCommand("undo");
    
     }

     function redofun(){
        document.execCommand("redo");
    
     }

    function getFontColor(){
        dispatch(setFontColor(!fontColor))
    }

    function getToggleTextAreaSize(){
        dispatch(toggletextAreaSize())
    }

    function getToggleRedoStack() {
        dispatch(toggleRedoStack());
      }
    
      function getToggleUndoStack() {
        dispatch(toggleUndoStack());
      }

   function getPrintOut(){
    dispatch(printTextArea())
   }

   function getToggleBold(){
    dispatch(toggleBold())
   }

   function getToggleItalic(){
    dispatch(toggleItalic())
   }

    function getCounter(){

        dispatch(setCounter(counter+1))
    }
    function decreaseCounter(){
        dispatch(setCounter(counter-1))
    }
    




    return (
        <>
        <div className={style.wrapper}>
            <div className={style.maincontainer}>
            <SmallToggleButton>
                <UTurnLeftOutlinedIcon sx={{ transform: 'rotate(90deg)' }}  onClick={undofun}/>
                </SmallToggleButton>
                <SmallToggleButton>
                <UTurnRightOutlinedIcon sx={{ transform: 'rotate(270deg)' }} onClick={redofun} />
                </SmallToggleButton>
                <SmallToggleButton>
                <LocalPrintshopOutlinedIcon  onClick={getPrintOut}/>
                </SmallToggleButton>
                <SmallToggleButton>
                <SpellcheckOutlinedIcon />
                </SmallToggleButton>
                <Divider orientation="vertical" flexItem />

                <FormControl  sx={{width:'100px',border:'none',outline:'none'}} >
                    <Select variant='standard' sx={{border:'none'}} onChange={(e) => dispatch(toggletextAreaSize(e.target.value))} value={textAreaSize}>
                        <MenuList>Fit</MenuList>
                        <MenuList>50%</MenuList>
                        <MenuList>75%</MenuList>
                        <MenuList>90%</MenuList>
                        <MenuList>100%</MenuList>
                        <MenuList>125%</MenuList>
                        <MenuList>150%</MenuList>
                        <MenuList>200%</MenuList>
                    </Select>
                </FormControl>
                <Divider orientation="vertical" flexItem />
                <FormControl sx={{width:'150px',border:'none',outline:'none'}}>
                    <Select variant='standard' sx={{border:'none'}}>
                        <MenuList>Choose a font</MenuList>
                        <MenuList>Arial</MenuList>
                        <MenuList >Verdana</MenuList>
                        <MenuList >Helvetica</MenuList>
                        <MenuList>Times New Roman</MenuList>
                        <MenuList>Courier New</MenuList>
                    </Select>
                </FormControl>
                <Divider orientation="vertical" flexItem />
                <div className={style.counter}>
                    <AddIcon onClick={getCounter}/>
                    <Input  style={{ width: '2rem' }} value={counter}  />
                    <RemoveIcon onClick={decreaseCounter}/>
                </div>
                <Divider orientation="vertical" flexItem />
                <SmallToggleButton>
                    <FormatBoldIcon onClick={getToggleBold}/>

                </SmallToggleButton>
                <SmallToggleButton>
                    <FormatItalicIcon onClick={getToggleItalic}/>
                </SmallToggleButton>
                <SmallToggleButton>
                    <FormatUnderlinedIcon  onClick={()=>dispatch(SetTextUnderLine())}/>
                </SmallToggleButton>
                <SmallToggleButton >
                    <FormatColorTextIcon colorOptions  onClick={getFontColor}/>
                </SmallToggleButton>
                <SmallToggleButton>
                    <BorderColorIcon />
                </SmallToggleButton>
                <Divider orientation="vertical" flexItem />
                <SmallToggleButton>
                    <InsertLinkIcon />
                </SmallToggleButton>
                <SmallToggleButton>
                    <AddCommentIcon />
                </SmallToggleButton>
                <SmallToggleButton>
                    <InsertPhotoIcon   onClick={handleInsertImageClick}/>
                    <input type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
                    
                </SmallToggleButton>
                <Divider orientation="vertical" flexItem />
                <SmallToggleButton>
                    <FormatAlignLeftIcon onClick={()=>dispatch(setIsTextAlign())} />

                </SmallToggleButton>
                <SmallToggleButton>
                    <FormatLineSpacingIcon />
                </SmallToggleButton>
                <SmallToggleButton>
                    <ChecklistIcon />
                </SmallToggleButton>
                <SmallToggleButton>
                    <FormatListBulletedIcon />

                </SmallToggleButton>
                <SmallToggleButton>
                    <FormatListNumberedIcon />
                </SmallToggleButton>
                <SmallToggleButton>
                    <FormatIndentDecreaseIcon />
                </SmallToggleButton>
                <SmallToggleButton>
                    <FormatIndentIncreaseIcon />
                </SmallToggleButton>
                <div className={style.corner}>
                    <div>
                        <FormatClearIcon />

                    </div>
                    <div>
                <FormControl>
                        <Select variant='standard'>
                            <MenuItem disableRipple>
                                <EditIcon />
                                <h4>Edit</h4><br />
                                <p>Edit Documents Directly</p>
                            </MenuItem>
                            <MenuItem>
                                <RateReviewIcon />
                                <h4>Suggestion</h4><br />
                                <p>Lorem ipsum dolor sit.</p>


                            </MenuItem>
                            <MenuItem>

                            </MenuItem>
                        </Select>
                </FormControl>

                    </div>
                </div>
                <Divider orientation="vertical" flexItem />



                <div>
                    <KeyboardArrowUpIcon />

                </div>



            </div>
        </div>
        </>
    )
}