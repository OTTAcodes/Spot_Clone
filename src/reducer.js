export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null,
    spotify: null, //edit
    discover_weekly: null, //edit
    top_artists: null, //edit
};

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYING": //edit
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM": //edit
            return {
                ...state,
                item: action.item,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };    
            default:
                return state;    
    }
};

export default reducer;