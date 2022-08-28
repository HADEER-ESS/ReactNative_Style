import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Button(){
    return(
        <View style={{flex:1,justifyContent:'center' , alignItems:'center' , marginTop:24 ,  marginBottom:31}}>
        <TouchableOpacity style={{width:88 , height:40 , backgroundColor:"#299647" , borderRadius:100 , justifyContent:'center' , alignItems:'center' }}>
            <Text style={{fontFamily:'inter-SemiBold' , fontSize:14 , lineHeight:20 , color:'#fff' , fontWeight:"600"}}>Apply</Text>
        </TouchableOpacity>
        </View>
    )
}