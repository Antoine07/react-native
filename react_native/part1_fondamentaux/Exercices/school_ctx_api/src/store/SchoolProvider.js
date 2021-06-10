import React, { createContext, useReducer } from "react"; // on importe createContext qui servira à la création d'un ou plusieurs contextes

// Source de vérité doit être ne doit pas muter
const initialState = {
    students: [
        { id: 1, name: "Alice", lessons: [1, 2], attendance: 0, notes: [11, 12, 18] },
        { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11] },
        { id: 3, name: "Phil", lessons: [1, 2, 3], attendance: 0, notes: [11, 9, 9] },
        { id: 4, name: "Naoudi", lessons: [1], attendance: 0, notes: [14.5, 19, 18] },
        { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] },
    ],
    lessons: [
        { id: 1, title: "React" },
        { id: 2, title: "React Native" },
        { id: 3, title: "MongoDB" },
    ],
    order: false,
    behaviours: [],
    mention: ""

};

const average = notes => {
    if (notes.length > 0) {

        return Math.floor(10 * notes.reduce((acc, curr) => acc + curr, 0) / notes.length) / 10;
    }

    return null;
}

const selectMention = (behaviours, id) => {
    const student = behaviours.filter( s => s.id === id);
    if( student.filter( s => s.id === id).length > 0 ) return student[0].mention;

    return "Aucune";
  }

const SchoolContext = createContext();

// 
const newArrayObject = array => {
    return array.map(object => {
        return { ...object } // une copie de object
    });

    return [];
}

const reducer = (state, action) => {
    // définition de variables locales au reducer
    // pour les actions
    let student, students;

    // la source de vérité ne doit pas changer 
    // console.log( initialState )

    switch (action.type) {

        case 'INCREMENTE_ATTENDANCE':
            student = { ...state.students.find(s => s.id === action.id) };
            student.attendance++;

            // map retourne un nouveau tableau
            students = state.students.map(s => {
                if (s.id != action.id) return s;

                return student;
            })

            return {
                ...state,
                students
            };

        case 'DECREMENT_ATTENDANCE':
            student = {
                ...state.students.find(s => s.id === action.id)
            };

            if (student.attendance > 0)
                student.attendance--;

            students = state.students.map(s => {
                if (s.id != action.id) return s;

                return student;
            })

            return {
                ...state,
                students
            };

        case 'RESET_ATTENDANCE':

            students = state.students.map(student => {
                // créer une copie de chaque étudiant séparée
                let s = { ...student };
                // la modifier 
                s.attendance = 0;

                // puis la retourner dans notre nouveau tableau
                return s;
            });

            // retourner ici notre newState mis à jour
            return {
                ...state,
                students
            }

        case 'ORDER':

            students = newArrayObject(state.students);

            if (action.order)
                students.sort((a, b) => average(a.notes) > average(b.notes) ? - 1 : 0);
            else
                students.sort((a, b) => average(a.notes) < average(b.notes) ? -1 : 0);

            return {
                ...state,
                students: students,
                order: !state.order
            }

        case 'MENTION':

            const { id, mention } = action.student;
            let behaviours = newArrayObject( state.behaviours );

            if ( behaviours.filter(student => student.id === id).length === 0) {
                behaviours.push({ id: id, mention: mention });
            }else {
                behaviours.map( student => {
                    if (student.id === id) student.mention = mention;

                    return student;
                })
            }

            return {
                ...state,
                mention: action.student.mention, // TODO ...
                behaviours
            }

        default:
            throw new Error("Bad Action Type");
    }
};

const SchoolProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SchoolContext.Provider value={[state, dispatch]}>
            {children}
        </SchoolContext.Provider>
    );
}


export { SchoolContext, SchoolProvider, average, selectMention };