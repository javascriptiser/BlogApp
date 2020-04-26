import React from "react";
import preloader from '../../../Assets/Images/PreLoaderImage.gif'

let PreLoader = (props) => {
    return <>{
        <img src={preloader} alt={"PRELOADER"}/>
    }</>
}


export default PreLoader