// redux-actions npm install redux-actions // redux-toolkit
/* 
    redux를 좀더 줄이기 위해 만든 모듈들
    redux-actions
    immer
    redux-slice
    handleActions...
    다만 요즘에 잘 안쓰는 추세 알아만 두자.
*/
// const { createAction } = require('redux-actions')

// const CHANGE_SUBJECT = 'change_subject'
// const change_subject = (payload) => ({type:CHANGE_SUBJECT, payload})
// dispatch(change_subject())

// const changeSubject = createAction('change_subject')
// changeSubject.toString() // type안에 들어간 string을 반환해줌
const CHANGE_SUBJECT = 'change_subject'

const initialState = {
    list:[
        {
            idx:0,
            subject:'asd'
        }
    ]
}

const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SUBJECT:{
            const newList = [...state.list]
            newList[0].subject = action.payload
            return {
                ...state,
                list:newList
            }
        }
        default:
            return state
    }
}

module.exports = boardReducer