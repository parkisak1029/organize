const { combineReducers } = require("redux")
const boardReducer = require('./boardReducer')
// const initialState = {
//     name : 'isak',
//     board:{
//         list:[
//             {
//                 idx:0,
//                 subject:'asd'
//             }
//         ]
//     }
// }

const rootReducer = combineReducers({
    board:boardReducer,
    name:(state,action) =>{
        switch(action.type){
            default: return 'isak'       
        }
        return 'isak2'
    }
})

// const rootReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case "change_name" : {

//         }
//         case "change_subject" : {

//         }
//         default :
//             return state
//     }
// }

module.exports = rootReducer

/* 
    react-redux = 순수 상태만 관리
    provider = 최상단에 모아두고 상태를 꺼내서 사용
    useSelector = provider에서 상태를 꺼내올 때 편하게 가져오기 위해 사용
    useDispatch = useSelector를 이용해 저장된 값을 직접 가져옴

    더 쉽게 리액트에서 사용하려고 만든것들
    useSelector <= store.getStore()
    useDispatch <= store.dispatch()
*/