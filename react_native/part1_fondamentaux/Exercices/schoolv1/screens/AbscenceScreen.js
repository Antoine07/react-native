import React, { useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  ActivityIndicator
} from 'react-native';

import {
  get_student_firebase,
  increment_attendance_firebase,
  decrement_attendance_firebase
} from '../actions/actions-types';

import { useDispatch, useSelector } from 'react-redux';

import styles from '../Styles';

const AbscenceScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  const { isAuth, student, message, isLoading } = useSelector(state => {
    return {
      isAuth: state.firebase.isAuth,
      student: state.school.student,
      message: state.school.message,
      isLoading: state.load.isLoading
    }
  });

  useEffect(() => {
    dispatch(get_student_firebase(id));
  }, [id]);

  if (isLoading)
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text>{isAuth ? "connect" : "disconnect"}</Text>
      { message !== '' && <Text>{message}</Text>}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => dispatch(increment_attendance_firebase(id))}
      >
        <Text style={styles.buttonText}>Incrémente abscence (+1) </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => dispatch(decrement_attendance_firebase(id))}
      >
        <Text style={styles.buttonText}>Incrémente abscence (-1) </Text>
      </TouchableOpacity>
      <View  >
        <Text >Abscence de :  nombre d'abscence(s) : {student && student.attendance} </Text>
      </View>
    </SafeAreaView>
  );
}

export default AbscenceScreen;