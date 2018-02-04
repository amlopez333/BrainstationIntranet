export const getDepartments = function(){
    return function(dispatch){
        dispatch({type: 'GET_DEPARTMENTS_REQUEST'});
        fetch('http://localhost:3000/departments')
        .then(function(response){
            return response.json()
        }).then(function(data){
            return dispatch({
                type: 'GET_DEPARTMENTS_SUCCESS',
                departments: data
            })
        }).catch(function(error){
            return dispatch({
                type: 'GET_DEPARTMENTS_FAILURE',
                error: error
            })
        })
    }
}

export const getEmployees = function(){
    return function(dispatch){
        dispatch({type: 'GET_EMPLOYEES_REQUEST'});
        fetch('http://localhost:3000/employees')
        .then(function(response){
            return response.json()
        }).then(function(data){  
            return dispatch({
                type: 'GET_EMPLOYEES_SUCCESS',
                employees: data
            })
        }).catch(function(error){
            return dispatch({
                type: 'GET_EMPLOYEES_FAILURE',
                error: error
            })
        })
    }
}

export const addEmployees = function(){
    
}