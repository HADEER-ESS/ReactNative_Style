import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Info extends React.Component{
    render(){
        return(
            <View style={{marginHorizontal:16}}>
                <Text style={styles.textStyle}>Please input your information</Text>
                <View style={{borderWidth:1 , borderColor:'transparent' , padding:24 ,elevation:3}}>
                    <View style={{marginBottom:16}}>
                        <Text style={[styles.inputStyle , {paddingBottom: 14}]}>Leave type</Text>
                        <View style={{borderBottomColor: "#D0D5DD" , borderBottomWidth:1 , paddingBottom:13}}>
                            <Fontisto name="caret-down" color="#323232" size={10} style={{textAlign:'right'}}/>
                        </View>
                    </View>
                    <View style={{flexDirection:"row" , marginBottom:16}}>
                        <View style={{width:'45%' , marginEnd:37}}>
                            <Text style={styles.inputStyle }>From Date</Text>
                            <View style={{borderBottomColor: "#D0D5DD" , borderBottomWidth:1 , paddingBottom:13}}>
                                <MaterialCommunityIcons name="calendar-today" color="#323232" size={20} style={{textAlign:'right' , marginEnd:3 }}/>
                            </View>
                        </View>
                        <View style={{width:"45%"}}>
                            <Text style={styles.inputStyle }>To Date</Text>
                            <View style={{borderBottomColor: "#D0D5DD" , borderBottomWidth:1 , paddingBottom:13}}>
                                <MaterialCommunityIcons name="calendar-today" color="#323232" size={20} style={{textAlign:'right' , marginEnd:3}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom:16}}>
                        <Text style={[styles.inputStyle , {paddingBottom:17}]}>Location</Text>
                        <View style={{borderBottomColor: "#D0D5DD" , borderBottomWidth:1 , paddingBottom:16}}></View>
                    </View>
                    <View style={{marginBottom:16}}>
                        <Text style={[styles.inputStyle , {paddingBottom:17}]}>Reason</Text>
                        <View style={{borderBottomColor: "#D0D5DD" , borderBottomWidth:1 , paddingBottom:16}}></View>
                    </View>
                    <View style={{marginBottom:10 , flexDirection : "row" , alignItems:'center' , marginTop:34}}>
                        <MaterialCommunityIcons name="upload" size={20} color="#34D853"/>
                        <Text style={styles.uploadTextStyle}>File Upload</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textStyle : {
        fontFamily: 'Inter-SemiBold',
        fontWeight: "600",
        fontSize:18,
        lineHeight:28,
        color : "#344054",
        paddingBottom : 16 ,
        paddingTop: 12
    },
    inputStyle : {
        fontFamily:"Inter-Regular",
        fontSize:14,
        fontWeight:'400' , 
        lineHeight: 20 ,
        color : "#299647",
    },
    uploadTextStyle : {
        fontFamily:"Inter-Medium",
        fontSize:14,
        fontWeight:'500' , 
        lineHeight: 20 ,
        color : "#34D853",
        marginLeft: 13,
    }
})