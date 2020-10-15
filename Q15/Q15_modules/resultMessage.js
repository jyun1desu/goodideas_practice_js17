module.exports = function resultMessage(amountItem, item) {
    const totalweight = amountItem.totalweight(item)

    let result = ""
    for (i = 0; i < item.length; i++) {
        result += `${item[i]["name"]}${amountItem.data[i]}個，`
    }
    result += `總重${totalweight}公斤`
    return result
}