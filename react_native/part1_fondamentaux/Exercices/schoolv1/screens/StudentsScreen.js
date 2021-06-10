import React from 'react';
import {
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import styles from '../Styles';
import Student from '../components/Student';
import { reverseOrder, reset_attendance, average } from '../actions/actions-types';

const StudentsScreen = ({ navigation }) => {

    const { students, isAuth, sens } = useSelector(state => {
        return {
            students: state.school.students,
            isAuth: state.firebase.isAuth,
            sens : state.school.sens
        }
    });

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }} >
            <Text>{isAuth ? "connect" : "disconnect"}</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => { dispatch(reset_attendance()) } }>
                <Text style={styles.buttonText}>Reset abscence</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => dispatch(reverseOrder())}>
                <Text style={styles.buttonText}>Ordonner la moyenne par ordre {sens ? 'croissant' : 'decroissant'}</Text>
            </TouchableOpacity>
            <FlatList
                style={styles.containerStudent}
                data={students}
                renderItem={({ item }) => {
                    const { notes } = item;

                    return (
                        <Student
                            key={item.id}
                            {...item}
                            average={average(notes)}
                            navigation={navigation}
                        />
                    );
                }}
            />
        </SafeAreaView>
    )
}

export default StudentsScreen;