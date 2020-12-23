export const initialState = {
    user: null,
    playlists: [],
    current_playlist : null,
    playing: false,
    item: null,
    shuffle: false,
    repeat: "off",
    token: null
    // token: "BQB9qtzMXAZLqQB2-3ew8FKEqlqkPdYHWhxZrnQsK2XBpl53rdq9Uz7ybVNo4gquWujvDXGqGIg5c-TUOn7Iz-P59W01IPLhY5LIo3QjAlHTCLcHo8syg5l7ZMfMNxNvmCxI7_B_mkLC7fpcBWYi02BQwWvLqz8rBgMXyQppVCR4eDn2bKB9",
}

const reducer = (state, action) => {
    // console.log(action);

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
                discover_weekly: action.discover_weekly,
                current_playlist: action.discover_weekly
            }
        
        case 'SET_CURRENT_PLAYLIST':
            return {
                ...state,
                current_playlist: action.current_playlist
            }
            
        // case 'SET_CURRENT_PLAYLIST_ID':
        //     return {
        //         ...state,
        //         current_playlist_id: action.current_playlist_id
        //     }
        
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        
        case 'SET_SHUFFLE':
            return {
                ...state,
                shuffle: action.shuffle
            }
        
        case 'SET_ITEM':
            return {
                ...state,
                item : action.item
            }
        
        case 'SET_REPEAT':
            return {
                ...state,
                repeat : action.repeat
            }
            
        default:
            return state;
    }
}

export default reducer;