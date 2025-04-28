import { transactionList , addToTransactionList , userBalance , deleteTransaction } from "../js/tracker.js";

afterEach(() => {
    transactionList.length = 0
})
describe('[ transactionList ]', () => { 
    test('should be defined', () => {
        expect( transactionList ).toBeDefined()
    })

    test('should be an array', () => {
        expect(Array.isArray(transactionList)).toBe(true)
    })

})

describe('[ addToTransactionListFn ]', () => {
    test('should be defined', () => {
        expect( addToTransactionList ).toBeDefined()
    })

    test('should be a function', () => {
        expect(typeof addToTransactionList ).toBe('function')
    })

    test('should have 3 parameters', () => {
        expect(() => addToTransactionList() ).toThrow()
    })

    test('should have a valid description', () => {
        let desc = 'we'
        expect(() => addToTransactionList(desc)).toThrow()

        desc = 87
        expect(() => addToTransactionList(desc)).toThrow()
    })

    test('should have valid amount', () => {
        let amount = -10
        expect(() => addToTransactionList(amount)).toThrow()

        amount = 'amount'
        expect(() => addToTransactionList(amount)).toThrow()
    })

    test('should add item to array', () => {
        addToTransactionList('Salary','income',20)
        expect(transactionList.length).toBe(1)
    })
})

describe('[ userBalanceFn ]', () => {
    test('should be defined', () => {
        expect( userBalance ).toBeDefined()
    })

    test('should be a function', () => {
        expect(typeof userBalance ).toBe('function')
    })

    test('should have 2 parameters', () => {
        expect(() => userBalance() ).toThrow()
    })

    test('should have valid amount', () => {
        let amount = -10
        expect(() => userBalance(amount)).toThrow()

        amount = 'amount'
        expect(() => userBalance(amount)).toThrow()
    })
})

describe('[ deleteTransactionFn ]', () => { 
    test('should be defined', () => {
        expect( deleteTransaction ).toBeDefined()
    })

    test('should be a function', () => {
        expect(typeof deleteTransaction ).toBe('function')
    })

    test('should have a parameter', () => {
        expect(() => deleteTransaction() ).toThrow()
    })
    
    test('should delete from transactionList', () => { 

        addToTransactionList('salary', 'income', 1)
        //console.log(transactionList)
        deleteTransaction('salary')

        expect(transactionList.length).toBe(0)
    })


})