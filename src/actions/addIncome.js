let addIncome = (item) => {
    return {
        type: 'addIncome',
        incomeData: {
            incomeName: item.incomeName,
            incomeAmount: item.incomeAmount
        }
    }
}

export default addIncome;