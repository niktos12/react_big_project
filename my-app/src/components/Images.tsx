import { ImgHTMLAttributes } from "react";
interface ImageType extends ImgHTMLAttributes<HTMLImageElement> { 
    path:string; 
    src?:string; 
} 
 
export function ImageComponent(props:ImageType) { 
    return( 
        <img src={`${process.env.PUBLIC_URL}/img${props.path}`} {...props}/>
    ) 
}