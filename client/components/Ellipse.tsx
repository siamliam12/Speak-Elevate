import { View } from "react-native";

export default function Ellipse({bg,width,height}:{
    bg:string,
    width:number,
    height:number
}){
    return(
        <View
        style={{
            width:width,
            backgroundColor:`${bg}`,
            borderRadius:"50%",
            height:height,
        }}
        ></View>
    )
}