export const getEmpData = (data) => {
    return {
        type: 'EMP_DATA_FROM_API',
        payload: data,
    }
}
export const getEmpDataBegin = () => ({
    type: 'GET_EMP_DATA_BEGIN'
});
export const getEmpDataFailure = (error) => ({
    type: 'GET_EMP_DATA_FAILURE',
    payload: error
});
export const selectedEmpData = (data) => ({
    type: 'SLCTD_EMP_DATA',
    payload: data
})
export const filterSelectedEmp = (selctdEmpData) => {
    return (dispatch) => {

        dispatch(selectedEmpData(selctdEmpData))

    }
}
export const getEmpDataFromApi = () => {
    return (dispatch) => {
        dispatch(getEmpDataBegin());
        //fetch('http://localhost:3000/profiles.json')
        fetch('profiles.json')
            .then(response => {
                if (response.ok)
                    return response.json()
                else
                    throw new Error('Something went wrong');
            })
            .then(data => {
                dispatch(getEmpData(data));
            }).catch(error => {
                dispatch(getEmpDataFailure(error));
            })
    }
}