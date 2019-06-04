import React from 'react'
import {View, Text} from 'react-native'
import {TextField} from 'react-native-material-textfield'
import english from './english.json'


export default class HomeComponent extends React.Component {
    state = {
        word: ''
    }

    handlerText(number) {
        if (number && (number > 0 && number < 2041)) {
            console.log(english[number])
            this.setState({word: english[number]})

            setTimeout(() => {
                // this.setState({word: ''  })
                this.textInput.clear()
             }, 5000)
        } else {
         //   this.setState({word: ''})
        }

        
    }

    render() {
        return(
            <View style={{flex: 1, padding: 20}}>
               <TextField 
               label='Codigo'
               keyboardType='number-pad'
               ref={input => { this.textInput = input}}

               onChangeText = { this.handlerText.bind(this)}
               />

               <Text style={{flex:2, padding: 20, fontSize: 30, textAlign:"center", justifyContent:'center'}}>{this.state.word}</Text>
            </View>
        )
    }
}