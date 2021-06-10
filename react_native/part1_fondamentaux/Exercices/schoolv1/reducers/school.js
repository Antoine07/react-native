import {
    LOAD_SCHOOL_DATA,
    REVERSE_ORDER,
    INCREMENT_ATTENDANCE, 
    SET_STUDENT, 
    DECREMENT_ATTENDANCE, 
    SET_MESSAGE
} from "../constants/actions";

import { updateNestedStudents, average } from '../actions/actions-types';

const stateInit = {
    students: [],
    lessons: [],
    order: false,
    behaviours: [],
    mention: "",
    order: true,
    student: '',
    message : ''
}

const reducer = (state = stateInit, action = {}) => {
    let students;

    switch (action.type) {

        case LOAD_SCHOOL_DATA:
            students = Object.entries(action.payload).map(([k, v]) => ({ id: k, ...v }));

            return {
                ...state,
                students
            }

        case REVERSE_ORDER:
            students = updateNestedStudents(state.students);
            students.sort((a, b) => (state.sens ? 1 : -1) * (average(a.notes) - average(b.notes)));

            return {
                ...state,
                students,
                sens: !state.sens
            }

        case DECREMENT_ATTENDANCE:
        case INCREMENT_ATTENDANCE:
            students = updateNestedStudents(state.students);

            students = students.map(student => {
                if (student.id === action.payload.id)
                    return action.payload
                return student;
            });

            return {
                ...state,
                students,
                message : ''
            }

        case SET_STUDENT:

            return {
                ...state,
                student: action.payload
            }

        case SET_MESSAGE:

            return {
                ...state,
                message : action.payload
            }
        default:
            return state;
    }
}

export default reducer;