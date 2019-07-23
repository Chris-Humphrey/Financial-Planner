let savings = (
    state = {
        totalSavings: 0,
        totalIncome: 0,
        totalBills: 0,
        totalFixedBills: 0,
        totalNonFixedBills: 0,
        income: [],
        bills: []
    },
    action
) => {
    switch(action.type){
        case 'addIncome':
            // console.log(state.income)
            return {
                ...state,
                totalSavings: state.totalSavings + parseInt(action.incomeData.incomeAmount),
                totalIncome: state.totalIncome + parseInt(action.incomeData.incomeAmount),
                income: state.income.concat({
                    incomeName: action.incomeData.incomeName,
                    incomeAmount: action.incomeData.incomeAmount
                })
            }
        case 'addBills':
                console.log(action.billsData.billsFixed)
            const fixedBills = ()=> { return action.billsData.billsFixed ? state.totalFixedBills + parseInt(action.billsData.billsAmount) : state.totalFixedBills};
            const nonFixedBills = ()=> { return !action.billsData.billsFixed ? state.totalNonFixedBills + parseInt(action.billsData.billsAmount) : state.totalNonFixedBills};
            return {
                ...state,
                totalSavings: state.totalSavings - parseInt(action.billsData.billsAmount),
                totalBills: state.totalBills + parseInt(action.billsData.billsAmount),
                totalFixedBills: fixedBills(),
                totalNonFixedBills: nonFixedBills(),
                bills: state.bills.concat({
                    billsName: action.billsData.billsName,
                    billsAmount: action.billsData.billsAmount,
                    billsFixed: action.billsData.billsFixed
                })
            }
        default:
            return state
    }
}

export default savings;