import React from 'react'
import {View, Text, FlatList} from 'react-native'
import {TextField} from 'react-native-material-textfield'
import english from '../../constants/english.json'
import WordsStyle from './Words.style'
import Icon from "@expo/vector-icons/Ionicons";

export default class WordsComponent extends React.Component {

        state = {
            words: [],
            number: ''
        }
    
        handlerText(textSearch, event) {
            const textValue = textSearch.trim().toLowerCase()
            if (english ) {        
                    let data = english
                    .filter((item, index) => {
                       return item.word.trim().includes(textValue)
                     })
                    this.setState({words: data})               
            } 
        }
    
        render() {
            return(
                <View style={WordsStyle.container}>
                   <TextField 
                   label='Palabras'
                   ref={input => { this.textInput = input}}
    
                   onChangeText = { this.handlerText.bind(this)}
                   />

                   <FlatList                   
                   data = {this.state.words}
                   renderItem={
                       ({item}) => {
                           return ( 
                            <View style={WordsStyle.item}>
                            <Icon style={WordsStyle.icons} name="md-key" size={25} />
                
                            <Text style={WordsStyle.text1}>{item.word}</Text>
                            <Text style={WordsStyle.text2}>{item.id}</Text>
                          </View>                           
                           )
                       }
                   }
                   keyExtractor={(item, index) => index.toString()}
                   />
                </View>
            )
        }
    }