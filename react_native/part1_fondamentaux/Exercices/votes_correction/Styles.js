import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
    backgroundColor: '#147efb',
    width: 200,
    margin: 2
  },
  btnLabel: {
    color: 'white',
    fontWeight: 'bold'
  },
  btnDistable: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
    backgroundColor: 'tomato',
    width: 200,
    margin: 2
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  textPress: {
    fontWeight: 'bold',
    padding : 2,
    fontSize : 20,
    color : "palevioletred",
   alignSelf : "center"
  },
  text : {
    color : "tomato",
    alignSelf : "center"
  }
});

export default styles;
