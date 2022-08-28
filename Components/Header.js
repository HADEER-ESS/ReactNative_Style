import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header () {
    return (
        <View style={{height : 56 , backgroundColor: "#299647" , flexDirection:'row' , alignItems:'center' , padding: 16}}>
            <TouchableOpacity>
            <MaterialIcons name="menu" color="#fff" size={24}/>
            </TouchableOpacity>
            <Text style={{fontFamily: "Inter-SemiBold" , fontSize: 20 , lineHeight : 24.2 , color : "#fff" , marginLeft:19}}>Employee Profile</Text>
        </View>
    )
}