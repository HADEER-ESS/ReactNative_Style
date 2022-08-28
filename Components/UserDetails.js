import React from "react";
import { Image, Text, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function UserDetails() {
    return(
        <View>
            <View style={{flexDirection:'row' , marginTop: 22 , marginLeft:16}}>
                <Image source={require("../Assets/profile.png")} style={{width: 72 , height: 72 , marginRight:19}}/>
                <View>
                    <Text style={{fontFamily:'Inter-SemiBold' , fontSize:20 , lineHeight:30 , color:'#344054', paddingBottom:4}}>Darlene Robertson</Text>
                    <Text style={{fontFamily:'Inter-Regular' , fontSize: 16 , lineHeight:20 , color:'#344054' , paddingBottom:4}}>Senior UX Designer</Text>
                    <View>
                        <View style={{flexDirection:'row' , justifyContent: "space-between" , alignItems:'center'}}>
                        <Text style={{fontFamily:'Inter-Regular' , fontSize: 16 , lineHeight:20 , color:'#344054'}}>ID43178</Text>
                        <View style={{backgroundColor:'#E6F9E9' , width: 53 , height:20 , borderRadius : 99 , justifyContent:'center' , alignItems:'center' , marginLeft:172}}>
                            <Text style={{fontFamily:'Inter-SemiBold' , fontSize:12 , lineHeight:18 , color:'#299647'}}>Active</Text>
                        </View>
                        </View>
                    </View>
                </View>
            </View> 
            <View style={{borderWidth : 1 , borderColor: "#F2F2F7" , marginHorizontal:16 , marginVertical: 8}}></View>
            <View style={{marginLeft: 18 , flexDirection:'row'}}>
                <MaterialIcons name="business-center" color="#323232" size={20} style={{marginRight:18 ,marginTop:3}}/>
                <View>
                    <Text style={{fontFamily:'Inter-SemiBold' , fontSize:16 , lineHeight:24 , color:'#344054' , paddingBottom:4}}>Human Resource</Text>
                    <Text style={{fontFamily:'Inter-Regular' , fontSize:12 , lineHeight:18 , color:'#667085'}}>Department</Text>
                </View>
            </View>
            <View style={{borderWidth : 1 , borderColor: "#F2F2F7" , marginHorizontal:16 , marginVertical: 8}}></View>
            <View style={{marginLeft: 19 , flexDirection:'row'}}>
                <MaterialIcons name="cake" color="#323232" size={18} style={{marginRight:19 , marginTop:5}}/>
                <View>
                    <Text style={{fontFamily:'Inter-SemiBold' , fontSize:16 , lineHeight:24 , color:'#344054' , paddingBottom:4}}>28 Septamber, 1990</Text>
                    <Text style={{fontFamily:'Inter-Regular' , fontSize:12 , lineHeight:18 , color:'#667085'}}>Date of Birth</Text>
                </View>
            </View>
            <View style={{borderWidth : 1 , borderColor: "#F2F2F7" , marginHorizontal:16 , marginVertical: 8}}></View>
            <View style={{marginLeft: 20 , flexDirection:'row'}}>
                <FontAwesome name="user" color="#323232" size={16} style={{marginRight:20 ,marginTop:0.5}}/>
                <View>
                    <Text style={{fontFamily:'Inter-SemiBold' , fontSize:16 , lineHeight:24 , color:'#344054' , paddingBottom:4}}>Female</Text>
                    <Text style={{fontFamily:'Inter-Regular' , fontSize:12 , lineHeight:18 , color:'#667085'}}>Gender</Text>
                </View>
                <View style={{borderWidth: 1 , borderColor:"#f2f2f2" , marginHorizontal:24}}></View>
                <View>
                    <Text style={{fontFamily:'Inter-SemiBold' , fontSize:16 , lineHeight:24 , color:'#344054' , paddingBottom:4}}>Islam</Text>
                    <Text style={{fontFamily:'Inter-Regular' , fontSize:12 , lineHeight:18 , color:'#667085'}}>Religion</Text>
                </View>
            </View>
            <View style={{borderWidth : 4 , borderColor: "#F2F2F7" ,  marginVertical: 16}}></View>
        </View>
    )
}