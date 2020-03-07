export default payload => {
    return function(dispatch, getState) {
        const state = getState()
        console.log(state)
    };
}