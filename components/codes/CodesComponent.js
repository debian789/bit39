import React from 'react'
import {View, Text} from 'react-native'
import {TextField} from 'react-native-material-textfield'
import english from '../../constants/english.json'


export default class CodesComponent extends React.Component {
    state = {
        word: '',
        number: ''
    }

    handlerText(number) {
        if (number && (number > 0 && number < 2041)) {
            console.log(english[number -1 ])
            this.setState({word: english[number -1 ][number], number: number })

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

               <Text style={{ paddingTop: 30, fontSize: 40, textAlign:"center", justifyContent:'center'}}>{this.state.word}</Text>
               <Text style={{ padding: 25, fontSize: 20, textAlign:"center", }}>{this.state.number}</Text>
            </View>
        )
    }
}