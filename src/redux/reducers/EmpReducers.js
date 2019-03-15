const initialState = {
    data: [],
    error: false,
    selctdEmpData: [],
    selctdEmpIds: []
}
function empApp(state = initialState, action) {
    switch (action.type) {
        case 'EMP_DATA_FROM_API': {
            return {
                ...state,
                data: action.payload
            }
        }
        case 'GET_EMP_DATA_BEGIN': {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case 'GET_EMP_DATA_FAILURE': {
            return {
                ...state,
                error: true
            }
        }
        case 'SLCTD_EMP_DATA': {
            return {
                ...state,
                selctdEmpData: action.payload,
                selctdEmpIds: [...state.selctdEmpIds, action.payload._id]
            }
        }
        default:
            return { ...state };
    }
}

export default empApp;