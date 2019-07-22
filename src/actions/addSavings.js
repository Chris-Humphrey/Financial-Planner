let addSavings = (item) => {
    return {
        type: 'addSavings',
        itemData: {
            savingsName: item.savingsName,
            savingsPrice: item.savingsPrice
        }
    }
}

export default addSavings;