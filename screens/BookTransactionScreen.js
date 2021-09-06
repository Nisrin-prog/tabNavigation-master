import React from 'react';
import { Text, TouchableOpacity, View ,StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class TransactionScreen extends React.Component {
   constructor(){
     super()
     this.state = {
       hasCameraPermission : null,
       scanned:false,
       scannedData: '',
       buttonState : 'normal'
     }
   }
   getCameraPermissions=()=>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA)
      console.log(status)
      this.setState({
        hasCameraPermission:status === "granted",
        buttonState : "clicked"
      })
   }
    render() {
      const hasCameraPermission =  this.state.hasCameraPermission
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{hasCameraPermission===true?this.state.scannedData:"Requestcamera permissions"}</Text>
          <TouchableOpacity style={ styles.button} onPress={()=>this.getCameraPermissions}>
            <Text>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    button:{
      backgroundColor:"green",
      width:100,
      height:50,
      borderRadius:2
    }
  })