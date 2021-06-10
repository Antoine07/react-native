import {
    LOADING,
    LOAD_SCHOOL_DATA,
    SET_ERROR,
    AUTH,
    EMAIL,
    PASSWORD,
    REVERSE_ORDER,
    INCREMENT_ATTENDANCE,
    SET_STUDENT,
    DECREMENT_ATTENDANCE,
    SET_MESSAGE
} from '../constants/actions';

// Firebase
import firebaseConfig from '../config';
import * as firebase from "firebase/app";
import 'firebase/auth';

const database = firebase.database();

// reducer school
export const load_school_data = payload => {
    return {
        type: LOAD_SCHOOL_DATA, payload
    };
}

export const get_student = payload => {
    return {
        type: SET_STUDENT, payload
    };
}

export const decrement_attendance = payload => {
    return {
        type: DECREMENT_ATTENDANCE, payload
    };
}

export const increment_attendance = payload => {
    return {
        type: INCREMENT_ATTENDANCE, payload
    };
}

export const reverseOrder = () => {
    return {
        type: REVERSE_ORDER
    };
}


export const set_message = payload => {
    return {
        type: SET_MESSAGE, payload
    };
}

export const load_students_data_firebase = () => {

    return dispatch => {
        // Approche database avec Firebase
        database.ref('students').once('value').then(snapshot => {
            if (snapshot) {
                dispatch(set_loading(true));
                dispatch(load_school_data(snapshot.val()));
                console.log(snapshot.val())
                dispatch(set_loading(false));
            }
        }).catch(err => {
            console.error("Axios load_students_data_firebase :", err);
            dispatch(set_error({ error: "API Fixer load_students_data_firebase", date: "Now" }));
        })
    };
};

export const increment_attendance_firebase = id => {

    return dispatch => {

        dispatch(set_loading(true));
        // transaction pour éviter la concurrence entre les requêtes sur la bd
        database.ref(`students/${id}`).transaction(student => {
            if (student) {
                student.attendance++;

                // Reducer
                dispatch(increment_attendance({ id: id, ...student }));
                dispatch(set_loading(false));
            }

            return student;
        }).catch(err => {
            console.error("Axios incrementAttendance :", err);
            dispatch(set_error({ err: "API Firebase incrementAttendance", date: "Now" }));
        })
    }
}

export const decrement_attendance_firebase = id => {

    return dispatch => {

        dispatch(set_loading(true));
        // transaction pour éviter la concurrence entre les requêtes sur la bd
        database.ref(`students/${id}`).transaction(student => {
            if (student) {

                if (student.attendance === 0) {

                    // Reducer
                    dispatch(decrement_attendance({ id: id, ...student }));
                    dispatch(set_loading(false));

                    dispatch(set_message(`decrement impossible ...`))
                } else {

                    student.attendance--;

                    // Reducer
                    dispatch(decrement_attendance({ id: id, ...student }));
                    dispatch(set_loading(false));
                }
            }

            return student;
        }).catch(err => {
            console.error("Axios incrementAttendance :", err);
            dispatch(set_error({ err: "API Firebase incrementAttendance", date: "Now" }));
        })
    }
}

export const get_student_firebase = id => {
    return dispatch => {
        database.ref(`students/${id}`).on('value', snapshot => {
            dispatch(get_student(snapshot.val()));
        })
    }
}

export const reset_attendance = () => {
    return dispatch => {
       
        database.ref(`students`).once('value').then(snapshot => {
            if (snapshot) {
                snapshot.forEach(sn => {
                    const update = {};
                    const key = sn.key;
                    const student =sn.val();
                    student.attendance = 0;
                    database.ref(`students/${sn.key}`).set(student);
                });
            }

            dispatch(load_students_data_firebase());

        }).catch(err => {
            console.error("Axios load_students_data_firebase :", err);
            dispatch(set_error({ error: "API Fixer load_students_data_firebase", date: "Now" }));
        })
    }
}

// reducer loading
export const set_loading = payload => {
    return {
        type: LOADING, payload
    };
}

// reducer error
export const set_error = payload => {
    return {
        type: SET_ERROR, payload
    };
}

// reducer firebase
export const connect = payload => {

    return {
        type: AUTH, payload
    };
}

export const connect_firebase = () => {

    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(EMAIL, PASSWORD)
            .then(res => {
                dispatch(connect(true));
            }).catch(err => {
                dispatch(set_error('Error connect'));
            });
    }
}

// ----- utils ------------
export const average = notes => {
    const nbNotes = Array.isArray(notes) && notes.length;

    if (nbNotes === 0) return;

    const sum = notes.reduce((acc, curr) => acc + curr);

    return Math.floor((sum / nbNotes) * 100) / 100;
}

export const updateNestedStudents = students => {

    return students.map(student => {

        const { notes, lessons } = student;

        return {
            ...student,
            lessons: [...lessons],
            notes: [...notes],
        }

    })
}
