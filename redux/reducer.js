const DEFAULT_STATE = {
    employees: [],
    isLoading: false,
    error: ''
}

const setEmployeesState = function(state, employees){
    return {...state, employees: employees, isLoading: false}
}

const setError = function(state, error){
    return {...state, error: error.message, isLoading: false}
}

const setLoadingTrue = function(state){
    return{
        ...state, isLoading: true
    }
}

const reducer = function(state = DEFAULT_STATE, action){
    switch(action.type){
        case 'GET_EMPLOYEES_REQUEST':
            return setLoadingTrue(state);
        case 'GET_EMPLOYEES_SUCCESS': 
            return setEmployeesState(state, action.employees)
        case 'GET_EMPLOYEES_FAILURE':
            return setError(state, action.error)
        default:
            return state
    }
}

export default reducer