import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { item: [...state.item, action.payload]}
        },
        removeOne: (state, action) => {
            console.log(action)
            let array = [...state.item]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { item: array }
            }
        },
        clearTodo: () => {
            return { item: [] }
        }
    }
})

export const { addTodo, removeOne, clearTodo } = todoSlice.actions

export default todoSlice.reducer