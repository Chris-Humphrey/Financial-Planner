let addBills = (item) => {
    return {
        type: 'addBills',
        billsData: {
            billsName: item.billsName,
            billsAmount: item.billsAmount,
            billsFixed: item.billsFixed
        }
    }
}

export default addBills;