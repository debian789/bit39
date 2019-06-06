import React from 'react'
import {View, Text, FlatList} from 'react-native'
import {TextField} from 'react-native-material-textfield'
import english from '../../constants/english.json'


export default class WordsComponent extends React.Component {

        state = {
            words: [],
            number: ''
        }
    
        handlerText(textSearch) {
            const textValue = textSearch.trim().toLowerCase()
console.log(textSearch.toLowerCase())
         //   const wordRegExp = new RegExp(`^${textSearch.toLowerCase()}([a-z])\w+`, 'g')

            const wordRegExp = new RegExp(`^${textValue}`)
            
            if (english ) {
                
               let data = english
               .filter((item, index) => {
                  // console.log(item)
                  /*if (item[index + 1] == 'source') {
                       console.log('------------')
                       console.log(item)
                       console.log(wordRegExp.test(item[index +1].trim()))
                  }*/
                  return item[index +1].trim().includes(textValue)
                  /// return wordRegExp.test(item[index +1].trim())
                })

              .map((item) => {
                  // console.log(item)
                  // console.log('*****')
                   return {'key': Object.values(item), code: Object.keys(item)}
               })

             //   console.log(data)

                this.setState({words: data})


              console.log(data)

            } 
          

           /* if (number && (number > 0 && number < 2041)) {
                console.log(english[number])
                this.setState({word: english[number], number})
    **
                setTimeout(() => {
                    this.textInput.clear()
                 }, 5000)
            } else {
            }*/
    
            
        }
    
        render() {
            return(
                <View style={{flex: 1, padding: 20}}>
                   <TextField 
                   label='Palabras'
                   ref={input => { this.textInput = input}}
    
                   onChangeText = { this.handlerText.bind(this)}
                   />

                   <FlatList 
                   
                   data = {this.state.words}

                   renderItem={
                       ({item}) => <Text> {item.key} -  {item.code}</Text>
                   }
                   />

    
                   <Text style={{ paddingTop: 30, fontSize: 40, textAlign:"center", justifyContent:'center'}}>{this.state.word}</Text>
                   <Text style={{ padding: 25, fontSize: 20, textAlign:"center", }}>{this.state.number}</Text>
                </View>
            )
        }
    }