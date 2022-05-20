// redux : 전역상태 관리
// nodejs환경에서 사용가능
const {createStore} = require('redux')
const rootReducer = require('./reducers')
// applyMiddleware
// 2. combineReducers // reducer를 쪼갬
// compose
// 1. createStore


const store = createStore(rootReducer) // 상태, 상태를 변경해 주는 함수(useState와 비슷함)

// const [value, setValue] = useState({name:'isak'}) 위에 만든것은 이것과 같은 함수

/* 
    dispatch 상태바꿀때 사용
    getState 전부 담음
*/

console.log(store.getState().board.list)
store.dispatch({type:'change_subject', payload:"isak2"}) // 상태 변환 함수 호출
// const [state, dispatch] = useReducer(reducer, initialState)
console.log(store.getState().board.list)
