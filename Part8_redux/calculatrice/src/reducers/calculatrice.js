import { SHUFFLE, SET_NUMBER, MULTIPLICATION, ADD, RESET } from "../constants/actions";

// source de vérité
const stateInit = {
    numbers : [1, 2, 8, 7 ],
    number1 : '', // le contrôle de l'élément ajouter dans le reducer
    number2 : '', // le contrôle de l'élément ajouter dans le reducer
    result : '',
    message : ''
}

// algo
const reducer = (state = stateInit, action ) =>{

    switch(action.type){

        case SHUFFLE:
            const numbers = [ ...state.numbers ] ;
            // astuce pour mélanger des nombres dans un tableau
            // cela joue sur l'algorithme de tri de la fonction sort
            // un coup positif un coup négatif
            numbers.sort(() => 0.5 - Math.random() );

            return {
                ...state,
                numbers : numbers
            }
        
        case SET_NUMBER:
            const { value, name } = action.payload;

            console.log(action)

            return {
                ...state,
                [name] : value,
                message : ''
            }

        case MULTIPLICATION:
        case ADD:
            const { number1, number2 } = state;
            const { type  } = action;

            // trim retire les espaces avant ou après
            if( number1.trim() === '' || number2.trim() === ''){

                return {
                    ...state,
                    message : "Attention un/les champ(s) est/sont vides"
                }
            }

            if( isNaN( parseFloat(number1) ) ||  isNaN( parseFloat(number2) ) ){

                return {
                    ...state,
                    message :  `Attention le type de l'une de vos variables n'est pas bon, ${number1} ${number2}`
                }
            }

            return {
                ...state,
                result : type === 'ADD' ? parseFloat(number1) + parseFloat(number2) : parseFloat(number1)  * parseFloat(number2),
                message : 'Voici votre résultat'
            }

        case RESET:

            return {
                ...state,
                ...stateInit
            }

        default: 
            return state;
    }
}

export default reducer;