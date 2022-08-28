import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Application(){
    return(
        <View>
        <View style={{marginHorizontal:16 }}>
            <Text style={{fontFamily:'Inter-SemiBold' , fontSize:18 , lineHeight:28 , fontWeight:"600" , paddingBottom:22 , color:'#344054'}}>Employee Application</Text>
            <View style={{flexWrap:'wrap' , flexDirection:'row' , alignItems:'center'}}>
                <View style={styles.cardStyle}>
                    <View style={{backgroundColor:'#D444F1' , borderRadius:99 , width:48 , height:48 , justifyContent:'center' , alignItems:'center' , marginTop:6}}>
                        <MaterialCommunityIcons name="bag-suitcase" size={35} color="#fff"/>
                    </View>
                    <Text style={{fontFamily:'Inter-Regular' , fontSize:14 , lineHeight:17 , fontWeight: "400" , color:"#1D2939" , paddingTop: 4 , textAlign:'center'}}>Leave</Text>
                </View>
                <View style={styles.cardStyle}>
                <View style={{backgroundColor:'#2E90FA' , borderRadius:99 , width:48 , height:48 , justifyContent:'center' , alignItems:'center' , marginTop:6}}>
                        <Ionicons name="car-sharp" size={35} color="#fff"/>
                    </View>
                    <Text style={{fontFamily:'Inter-Regular' , fontSize:14 , lineHeight:17 , fontWeight: "400" , color:"#1D2939" , paddingTop: 4 , textAlign:'center'}}>Movement</Text>
                </View>
                <View style={{width:86 , alignItems:'center', marginEnd:10 }}>
                <View style={{backgroundColor:'#F63D68' , borderRadius:99 , width:48 , height:48 , justifyContent:'center' , alignItems:'center' , marginTop:24 , marginBottom:4}}>
                        <MaterialIcons name="person-pin-circle" size={35} color="#fff"/>
                    </View>
                    <Text style={{fontFamily:'Inter-Regular' , fontSize:14 , lineHeight:17 , fontWeight: "400" , color:"#1D2939" , padding:0, textAlign:'center' , alignItems:'center' , justifyContent:'center'}}>Remote Attendance</Text>
                </View>
                <View style={{width:86 ,  alignItems:'center'}}>
                <View style={{backgroundColor:'#F79009' , borderRadius:99 , width:48 , height:48 , justifyContent:'center' , alignItems:'center' , marginTop:6}}>
                        <Image source={require("../Assets/IOU.png")} style={{width:24 , height:26.67}}/>
                    </View>
                    <Text style={{fontFamily:'Inter-Regular' , fontSize:14 , lineHeight:17 , fontWeight: "400" , color:"#1D2939" , paddingTop: 4 , textAlign:'center'}}>IOU</Text>
                </View>
                <View style={styles.cardStyle}>
                <View style={{backgroundColor:'#669F2A' , borderRadius:99 , width:48 , height:48 , justifyContent:'center' , alignItems:'center' , marginTop:6}}>
                        <Image source={require("../Assets/Loan.png")} style={{width: 24 , height: 26.67}}/>
                    </View>
                    <Text style={{fontFamily:'Inter-Regular' , fontSize:14 , lineHeight:17 , fontWeight: "400" , color:"#1D2939" , paddingTop: 4 , textAlign:'center'}}>Loan</Text>
                </View>
                <View style={styles.cardStyle}>
                <View style={{backgroundColor:'#875BF7' , borderRadius:99 , width:48 , height:48 , justifyContent:'center' , alignItems:'center' , marginTop:6}}>
                        <MaterialIcons name="schedule-send" size={26} color="#fff"/>
                    </View>
                    <Text style={{fontFamily:'Inter-Regular' , fontSize:14 , lineHeight:17 , fontWeight: "400" , color:"#1D2939" , paddingTop: 4 , textAlign:'center'}}>Overtime</Text>
                </View>
            </View>
        </View>
        <View style={{borderWidth : 4 , borderColor: "#F2F2F7" ,  marginVertical: 16}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle : {
        width:86 ,
        height:98 ,
        justifyContent:'center' ,
        alignItems:'center' ,
        marginEnd: 12,
        marginBottom: 12
    }
})