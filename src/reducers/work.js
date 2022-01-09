const reducers = (works = [],action) => {
    switch(action.type){
        case "DELETE" :
             return works.filter(
                 (work) => work._id !== action.payload 
             );
        case "UPDATE" :
            return works.map(
                (work) => work._id === action.payload._id? action.payload : work
            );
        case "FETCH_ALL" :
            return action.payload ;
        case "CREATE" :
            return [...works,action.payload] ;
        default :
            return works;
     }

     
     
}
export default reducers ;             