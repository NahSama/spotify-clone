export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
    // token: "BQB9qtzMXAZLqQB2-3ew8FKEqlqkPdYHWhxZrnQsK2XBpl53rdq9Uz7ybVNo4gquWujvDXGqGIg5c-TUOn7Iz-P59W01IPLhY5LIo3QjAlHTCLcHo8syg5l7ZMfMNxNvmCxI7_B_mkLC7fpcBWYi02BQwWvLqz8rBgMXyQppVCR4eDn2bKB9",
}

const reducer = (state, action) => {
    console.log(action);

    // Action -> Type, [Payload]

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;