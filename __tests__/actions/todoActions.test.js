import { sortAsc } from '../../src/actions/todoActions'

describe('>>> TODO ACTION', () => {
    describe('>> sort asc action', () => {
        it('+++ has the correct type', () => {
            const action = sortAsc([])
            expect(action.type).toBe('ORDER_ASC')
        })
        it('+++ has the correct payload', () => {
            const list = [
                { _id: 3, description: 'Teste 3' },
                { _id: 1, description: 'Teste 1' },
                { _id: 2, description: 'Teste 2' }
            ]
            const listOrdered = [
                { _id: 1, description: 'Teste 1' },
                { _id: 2, description: 'Teste 2' },
                { _id: 3, description: 'Teste 3' }
            ]
            const action = sortAsc(list)
            expect(action.payload).toEqual(listOrdered)
        })
    })
})
