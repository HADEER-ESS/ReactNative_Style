import React from "react";
import { ScrollView} from "react-native";
import Header from "../Components/Header";
import UserDetails from "../Components/UserDetails";
import Application from "../Components/Application";
import Info from "../Components/Info";
import Button from "../Components/Button";
export default class HomeScreen extends React.Component{
    render(){
        return(
            <ScrollView style={{flex:1}}>
                <Header/>
                <UserDetails/>
                <Application/>
                <Info/>
                <Button/>
            </ScrollView>
        )
    }
}