import TodoReducer from '../../src/reducers/todoReducer'

describe('>>> TODO REDUCER', () => {
    let initial_state

    beforeEach(() => {
        initial_state = {
            description: '',
            list: []
        }
    })

    it('++ test unkown type', () => {
        expect(TodoReducer(undefined, {})).toEqual(initial_state)
    })

    it('++ test ADD_TODO', () => {
        const action = {
            type: 'ADD_TODO',
            payload: [{ _id: 1, description: 'Test 1' }]
        }
        const expectedValue = { "list": [{ "_id": 1, "description": "Test 1" }] }
        expect(TodoReducer({}, action)).toEqual(expectedValue)
    })
})