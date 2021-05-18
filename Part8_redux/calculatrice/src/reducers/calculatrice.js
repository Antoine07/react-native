
// source de vérité
const stateInit = {
    numbers : [1, 2, 8, 7 ],
    number : '' // le contrôle de l'élément ajouter dans le reducer
}

// algo
const reducer = (state = stateInit, action ) =>{

    switch(action.type){

        case "SHUFFLE":
            const numbers = [ ...state.numbers ] ;
            // astuce pour mélanger des nombres dans un tableau
            // cela joue sur l'algorithme de tri de la fonction sort
            // un coup positif un coup négatif
            numbers.sort(() => 0.5 - Math.random() );

            return {
                ...state,
                numbers : numbers
            }


        default: 
            return state;
    }
}

export default reducer;