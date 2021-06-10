import React, { useContext } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Picker
} from 'react-native';

import { SchoolContext, selectMention } from '../store/SchoolProvider';
import styles from '../styles';

const AbscenceScreen = ({ navigation, route }) => {
  const [state, dispatch] = useContext(SchoolContext);
  const { student } = route.params;
  const studentState = state.students.find(s => s.id === student.id);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => dispatch({ type: 'INCREMENTE_ATTENDANCE', id: student.id })}
      >
        <Text style={styles.buttonText}>Incrémente abscence (+1) </Text>
      </TouchableOpacity>
      {studentState.attendance > 0 ?
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => dispatch({ type: 'DECREMENT_ATTENDANCE', id: student.id })}
        >
          <Text style={styles.buttonText}>Incrémente abscence (-1) </Text>
        </TouchableOpacity>
        : null}
      <View  >
        <Text >Abscence de : {student.name} nombre d'abscence(s) : {studentState.attendance}</Text>
      </View>
      <Picker
        selectedValue={ selectMention(state.behaviours, student.id) }
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => dispatch({ type :'MENTION' , student : { mention : itemValue , id : student.id } })}
      >
        <Picker.Item label="Aucune" value="Aucune" />
        <Picker.Item label="A" value="A" />
        <Picker.Item label="B" value="B" />
      </Picker>
    </SafeAreaView>
  );
}

export default AbscenceScreen;