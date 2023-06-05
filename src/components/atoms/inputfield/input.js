import style from './input.module.css'


export default function Input(props){


    return(
        <div>
            <input type={props.type} style={props.style}  className={style.inputbox} value={props.value}/>
        </div>
    )
}