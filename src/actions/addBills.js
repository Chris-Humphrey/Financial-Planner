let addBills = (item) => {
    return {
        type: 'addBills',
        itemData: {
            billsName: item.billsName,
            billsPrice: item.billsPrice
        }
    }
}

export default addBills;