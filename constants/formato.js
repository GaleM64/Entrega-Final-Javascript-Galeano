export function forNum(num) {

    if (num < 1000) return Math.round(num)
    
    const match = [
        { valor: 1000, simbolo: "k"},
        { valor: 1_000_000, simbolo: "m"},
        { valor: 1000_000_000, simbolo: "b"},
        { valor: 1000_000_000_000, simbolo: "t"},
    ]

    let item = match.findLast(function(obj){return num >= obj.valor})

    return (num / item.valor).toFixed(2) + item.simbolo

}