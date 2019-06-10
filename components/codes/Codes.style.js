import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  containerScroll: {
    flex: 1,
    marginTop: 30,
  },
  item: {
    marginTop: 4,
    paddingBottom: 4,
    flexDirection: "row",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    textAlign: "center",
    justifyContent: "space-between"
  },

  itemLoad: {
    marginTop: 30,
    paddingBottom: 4,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center"
  },


  icons: {
    color: "#F1C40F",
    borderColor: "red",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 6,
    marginRight: 5,
    flex: 1
  },

  iconsLoad: {
    color: "#eeeeee",
    borderColor: "red",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 6,
    marginRight: 5,
    flex: 1
  },


  text1: {
    flex: 7,
    fontSize: 25,
    textAlign: "left",
    justifyContent: "center"
  },
  text2: {
    flex: 2,
    fontSize: 25,
    textAlign: "right",
    justifyContent: "center"
  },

  text3: {
    color: '#D7D7D7',
    flex: 7,
    fontSize: 25,
    textAlign: "left",
    justifyContent: "center"
  },
  text4: {
    color: '#D7D7D7',
    flex: 2,
    fontSize: 25,
    textAlign: "right",
    justifyContent: "center"
  }

});
