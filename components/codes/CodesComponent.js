import React from "react";
import { View, Text, Keyboard } from "react-native";
import { TextField } from "react-native-material-textfield";
import english from "../../constants/english.json";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";
import CodesStyle from "./Codes.style";

export default class CodesComponent extends React.Component {
  state = {
    word1: "",
    word2: "",
    word3: "",
    word4: "",
    word5: "",
    word6: "",
    word7: "",
    word8: "",
    word9: "",
    number1: "",
    number2: "",
    number3: "",
    number4: "",
    number5: "",
    number6: "",
    number7: "",
    number8: ""
  };

  handlerText(number) {
    number = Number(number);
    if (number && (number > 0 && number < 2049)) {
      let numberA,numberB, numberC, numberD, numberE, numberF, numberG, numberH ,numberI;
      let wordA, wordB, wordC, wordD, wordE,wordF,wordG,wordH,wordI;

      
      if (number + 1 >= 2049) {
        numberF = 1;
      } else {
        numberF = Number(number) + 1;
      }

      if (number + 2 > 2049) {
        numberG = 2;
      } else {
        numberG = Number(number) + 2;
      }

      if (number + 3 > 2049) {
        numberH = 3;
      } else {
        numberH = Number(number) + 3;
      }

      if (number + 4 > 2049) {
        numberI = 4;
      } else {
        numberI = Number(number) + 4;
      }



      if (number - 1 < 1) {
        numberD = 2048;
      } else {
        numberD = Number(number) - 1;
      }

      if (number - 2 < 1) {
        numberC = 2048;
      } else {
        numberC = Number(number) - 2;
      }

      if (number - 3 < 1) {
        numberB = 2047;
      } else {
        numberB = Number(number) - 3;
      }

      if (number - 4 < 1) {
        numberA = 2046;
      } else {
        numberA = Number(number) - 4;
      }

      wordA = english[numberA - 1].word;
      wordB = english[numberB - 1].word;
      wordD = english[numberD - 1].word;
      wordC = english[numberC - 1].word;
      //wordE = english[numberE - 1].word;

      wordF = english[numberF - 1].word;
      wordG = english[numberG - 1].word;
      wordH = english[numberH - 1].word;
      wordI = english[numberI - 1].word;


      this.setState({
        word1: wordA,
        word2: wordB,
        word3: wordC,
      //  word3: english[number - 1].word,
        word4: wordD,
        word5: english[number - 1].word,
        word6: wordF,
        word7: wordG,
        word8: wordH,
        word9: wordI,

        number1: numberA,
        number2: numberB,
        number3: numberC,
       // number3: number,
        number4: numberD,
        number5: number,
        number6: numberF,
        number7: numberG,
        number8: numberH,
        number9: numberI
      });

      setTimeout(() => {
        this.textInput.clear();
        Keyboard.dismiss();
      }, 3000);
    }
  }

  containerKey() {
    if (this.state.number3) {
      return (
        <ScrollView style={CodesStyle.containerScroll}>
          <View style={CodesStyle.item}>
            <Icon style={CodesStyle.icons} name="md-key" size={25} />
            <Text style={CodesStyle.text3}>{this.state.word1}</Text>
            <Text style={CodesStyle.text4}>{this.state.number1}</Text>
          </View>
          <View style={CodesStyle.item}>
            <Icon style={CodesStyle.icons} name="md-key" size={25} />
            <Text style={CodesStyle.text3}>{this.state.word2}</Text>
            <Text style={CodesStyle.text4}>{this.state.number2}</Text>
          </View>
          <View style={CodesStyle.item}>
            <Icon style={CodesStyle.icons} name="md-key" size={25} />
            <Text style={CodesStyle.text3}>{this.state.word3}</Text>
            <Text style={CodesStyle.text4}>{this.state.number3}</Text>
          </View>
          <View style={CodesStyle.item}>
            <Icon style={CodesStyle.icons} name="md-key" size={25} />

            <Text style={CodesStyle.text3}>{this.state.word4}</Text>
            <Text style={CodesStyle.text4}>{this.state.number4}</Text>
          </View>
          <View style={CodesStyle.item}>
            <Icon style={CodesStyle.icons} name="md-key" size={25} />

            <Text style={CodesStyle.text1}>{this.state.word5}</Text>
            <Text style={CodesStyle.text2}>{this.state.number5}</Text>
          </View>
          <View style={CodesStyle.item}>
            <Icon style={CodesStyle.icons} name="md-key" size={25} />

            <Text style={CodesStyle.text3}>{this.state.word6}</Text>
            <Text style={CodesStyle.text4}>{this.state.number6}</Text>
          </View>
          <View style={CodesStyle.item}>
            <Icon style={CodesStyle.icons} name="md-key" size={25} />

            <Text style={CodesStyle.text3}>{this.state.word7}</Text>
            <Text style={CodesStyle.text4}>{this.state.number7}</Text>
          </View>
          <View style={CodesStyle.item}>
            <Icon style={CodesStyle.icons} name="md-key" size={25} />

            <Text style={CodesStyle.text3}>{this.state.word8}</Text>
            <Text style={CodesStyle.text4}>{this.state.number8}</Text>
          </View>
          <View style={CodesStyle.item}>
            <Icon style={CodesStyle.icons} name="md-key" size={25} />

            <Text style={CodesStyle.text3}>{this.state.word9}</Text>
            <Text style={CodesStyle.text4}>{this.state.number9}</Text>
          </View>
        </ScrollView>
      );
    } else {
      return (
        <View style={CodesStyle.itemLoad}>
          <Icon style={CodesStyle.iconsLoad} name="md-list" size={325} />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={CodesStyle.container}>
        <TextField
          label="Codigo"
          keyboardType="number-pad"
          ref={input => {
            this.textInput = input;
          }}
          onChangeText={this.handlerText.bind(this)}
        />
        {this.containerKey()}
      </View>
    );
  }
}
