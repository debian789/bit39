import React from 'react'
import {View, Text} from 'react-native'
import {TextField} from 'react-native-material-textfield'
import english from '../../constants/english.json'
import { ScrollView } from 'react-native-gesture-handler';


export default class CodesComponent extends React.Component {
    state = {
        word1: '',
        word2: '',
        word3: '',
        word4: '',
        word5: '',
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        number5: ''
    }

    handlerText(number) {
        if (number && (number > 0 && number < 2049)) {

            let numberA,numberB,numberC,numberD,numberE;
            let wordA,wordB,wordC,wordD,wordE
            

            if (number + 1 > 2049) {
                numberD = 1
       
            } else {
                numberD = Number(number) + 1                
            }

            if (number + 2 > 2049) {
                numberE = 2
            } else {
                numberE = Number(number) + 2
            }

            if (number - 1 < 1) {
                numberB = 2048
            } else {
                numberB = Number(number) - 1
            }

            if (number - 2 < 1) {
                numberA = 2047
            } else {
                numberA = Number(number) - 2
            }



            wordA = english[numberA -1 ][numberA]
            wordB = english[numberB -1 ][numberB]
            wordD = english[numberD -1 ][numberD]
            wordE = english[numberE -1 ][numberE]
            
            
            this.setState({
                word1: wordA,
                word2: wordB,
                word3: english[number -1 ][number],
                word4: wordD,
                word5: wordE,
                number1: numberA,
                number2: numberB,
                number3: number,
                number4: numberD,
                number5: numberE
            })


            setTimeout(() => {
                this.textInput.clear()
             }, 5000)
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
               <ScrollView  style={{flex: 1, borderColor: 'red', borderWidth: 1}}>
   
               <View style={{flexDirection:"row", borderBottomColor:'#ccc', borderBottomWidth: 1, justifyContent: 'space-between'}}>
                 <Text style={{ padding: 25, fontSize: 40, textAlign:"center", justifyContent:'center'}}>{this.state.word1}</Text>
                 <Text style={{ padding: 25, fontSize: 40, textAlign:"center", justifyContent:'center' }}>{this.state.number1}</Text>
                 </View>

                 <View style={{flexDirection:"row", borderBottomColor:'#ccc', borderBottomWidth: 1, justifyContent: 'space-between'}}>
                 <Text style={{ padding: 25, fontSize: 40, textAlign:"center", justifyContent:'center'}}>{this.state.word2}</Text>
                 <Text style={{ padding: 25, fontSize: 40, textAlign:"center", justifyContent:'center' }}>{this.state.number2}</Text>
                 </View>



                 <View style={{flexDirection:"row", borderBottomColor:'#ccc', borderBottomWidth: 1, justifyContent: 'space-between'}}>
                 <Text style={{ padding: 25, fontSize: 40, textAlign:"center", justifyContent:'center'}}>{this.state.word3}</Text>
                 <Text style={{ padding: 25, fontSize: 40, textAlign:"center", justifyContent:'center' }}>{this.state.number3}</Text>
                 </View>

                 <View style={{flexDirection:"row", borderBottomColor:'#ccc', borderBottomWidth: 1, justifyContent: 'space-between'}}>
                 <Text style={{ padding: 25, fontSize: 40, textAlign:"center", justifyContent:'center'}}>{this.state.word4}</Text>
                 <Text style={{ padding: 25, fontSize: 40, textAlign:"center", justifyContent:'center' }}>{this.state.number4}</Text>
                 </View>

                 <View style={{flexDirection:"row", borderBottomColor:'#ccc', borderBottomWidth: 1, justifyContent: 'space-between'}}>
                 <Text style={{ padding: 25, fontSize: 40, textAlign:"center", justifyContent:'center'}}>{this.state.word5}</Text>
                 <Text style={{ padding: 25, fontSize: 40, textAlign:"center", justifyContent:'center' }}>{this.state.number5}</Text>
                 </View>


             
               </ScrollView>
              
            </View>
        )
    }
}