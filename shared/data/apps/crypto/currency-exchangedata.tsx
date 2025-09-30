import { ColorOptionType } from "../../widgetsdata";

export const CurrencyExchangeSeries = [
    {
        name: "Value",
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
]
export const CurrencyExchangeOptions = ({ color }: ColorOptionType) => ({
    chart: {
        type: "area",
        height: 45,
        width: 230,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
        }
    },
    stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 1,
    },
    fill: {
        gradient: {
            enabled: true
        }
    },
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false,
        },
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
    },

    colors: [color],
    tooltip: {
        enabled: false,
    },
})

export const Cryptocurrencies = [
    { id: 1, name: "Bitcoin", symbol: "BTC", percentage: "24.3%", change: "+0.5", arrow: "up", value: "0.00434", price: "$30.29", chartId: "btc-currency-chart", logo: "../../../assets/images/crypto-currencies/square-color/Bitcoin.svg", chartOptions: CurrencyExchangeOptions({ color: 'rgb(244, 110, 244)' }), chartSeries: CurrencyExchangeSeries },
    { id: 2, name: "Ethereum", symbol: "ETH", percentage: "18.7%", change: "+0.9", arrow: "up", value: "0.01758", price: "$2564.89", chartId: "eth-currency-chart", logo: "../../../assets/images/crypto-currencies/square-color/Ethereum.svg", chartOptions: CurrencyExchangeOptions({ color: 'rgba(106, 78, 237,0.5)' }), chartSeries: CurrencyExchangeSeries },
    { id: 3, name: "Dash", symbol: "DASH", percentage: "12.5%", change: "-0.30", arrow: "down", value: "0.00487", price: "$116.78", chartId: "dash-currency-chart", logo: "../../../assets/images/crypto-currencies/square-color/Dash.svg", chartOptions: CurrencyExchangeOptions({ color: 'rgba(10, 145, 81,0.5)' }), chartSeries: CurrencyExchangeSeries },
    { id: 4, name: "Litecoin", symbol: "LTC", percentage: "8.2%", change: "+0.15", arrow: "up", value: "0.00789", price: "$158.42", chartId: "ltc-currency-chart", logo: "../../../assets/images/crypto-currencies/square-color/Litecoin.svg", chartOptions: CurrencyExchangeOptions({ color: 'rgba(227, 192, 11, 0.5)' }), chartSeries: CurrencyExchangeSeries },
    { id: 5, name: "Ripple", symbol: "XRP", percentage: "6.5%", change: "+0.10", arrow: "up", value: "0.00123", price: "$0.79", chartId: "xrs-currency-chart", logo: "../../../assets/images/crypto-currencies/square-color/Ripple.svg", chartOptions: CurrencyExchangeOptions({ color: 'rgba(252, 108, 133, 0.5)' }), chartSeries: CurrencyExchangeSeries },
    { id: 6, name: "Golem", symbol: "GNT", percentage: "4.8%", change: "-0.02", arrow: "down", value: "0.000045", price: "$1.23", chartId: "glm-currency-chart", logo: "../../../assets/images/crypto-currencies/square-color/Golem.svg", chartOptions: CurrencyExchangeOptions({ color: 'rgba(244, 110, 244, 0.5)' }), chartSeries: CurrencyExchangeSeries },
    { id: 7, name: "Monero", symbol: "XMR", percentage: "3.2%", change: "+0.08", arrow: "up", value: "0.00456", price: "$182.34", chartId: "monero-currency-chart", logo: "../../../assets/images/crypto-currencies/square-color/Monero.svg", chartOptions: CurrencyExchangeOptions({ color: 'rgba(237, 78, 131, 0.5)' }), chartSeries: CurrencyExchangeSeries },
    { id: 8, name: "EOS", symbol: "EOS", percentage: "5.7%", change: "+0.23", arrow: "up", value: "0.00234", price: "$4.78", chartId: "eos-currency-chart", logo: "../../../assets/images/crypto-currencies/square-color/EOS.svg", chartOptions: CurrencyExchangeOptions({ color: 'rgba(70, 178, 201, 0.5)' }), chartSeries: CurrencyExchangeSeries },
    { id: 9, name: "Stratis", symbol: "STRAX", percentage: "2.1%", change: "+0.04", arrow: "up", value: "0.001234", price: "$2.34", chartId: "strax-currency-chart", logo: "../../../assets/images/crypto-currencies/square-color/Stratis.svg", chartOptions: CurrencyExchangeOptions({ color: 'rgba(70, 178, 201, 0.5)' }), chartSeries: CurrencyExchangeSeries }
];