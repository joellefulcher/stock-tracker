// const baseUrl = "http://localhost:8080";

// project specs: no back-end; info is hard coded
let stocks = [
    { id: 1, symbol: "PG", name: "P&G", location: "Cincinnati, OH",
        current: 126.41, paid: 125.11, gainOrLoss: +1.30, shares: 10, value: 1264.1 },
    { id: 2, symbol: "MSFT", name: "Microsoft", location: "Redmond, WA",
        current: 167.10, paid: 162.32, gainOrLoss: +4.76, shares: 100, value: 12710.00 },
    { id: 3, symbol: "AMZN", name: "Amazon", location: "Bellevue, WA",
        current: 1884.72, paid: 1888.33, gainOrLoss: -4.21, shares: 2, value: 3769.44 }
]

$().ready(() => {

});

const display = () => {
    for(var i = 0; i < stocks.length; i++) {
        console.log(stocks[i]);
    }
    return display;
}
