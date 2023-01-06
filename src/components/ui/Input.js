import React from "react"
import classes from "./Input.module.css"
const Input=React.forwardRef((props,ref)=>{
 return(
    <div>
    <label className={classes.label} htmlFor={props.input.id}>{props.label}:</label>
    <input className={classes.input} {...props.input} ref={ref}/>
    </div>
 )
}
)
export default Input