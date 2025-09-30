// Buy & Sell Statistics
export const SellStatisticsSeries = [{
    type: 'bar',
    name: "Buy",
    data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
}, {
    type: 'line',
    name: "Sell",
    data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
}]
export const SellStatisticsOptions = {
    chart: {
        height: 316,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "28%",
            borderRadius: 2
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: "top",
        horizontalAlign: "center",
        offsetX: -15,
        fontWeight: "bold",
    },
    stroke: {
        curve: 'smooth',
        width: ["1", "1"],
    },
    markers: {
        size: 4,
        hover: {
            size: 6
        },
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    colors: ["rgb(121, 97, 245)", "rgba(244, 110, 244, 1)"],
    yaxis: {
        title: {
            text: 'Statistics',
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
    xaxis: {
        type: 'month',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: true,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90
        }
    }
}

interface CryptoItem {
    label: string;
    value: number;
}

export const Cryptodata: CryptoItem[] = [
    { label: 'BTC', value: 1 },
    { label: 'ETH', value: 2 },
    { label: 'XRP', value: 3 },
    { label: 'DASH', value: 4 },
    { label: 'NEO', value: 5 },
    { label: 'LTC', value: 6 },
    { label: 'BSD', value: 7 },
]
export const Crypto1: CryptoItem[] = [
    { label: 'USD', value: 1 },
    { label: 'AED', value: 2 },
    { label: 'AUD', value: 3 },
    { label: 'ARS', value: 4 },
    { label: 'AZN', value: 5 },
    { label: 'BGN', value: 6 },
    { label: 'BRL', value: 7 },
]
export const SellCrypto: CryptoItem[] = [
    { label: 'BTC', value: 1 },
    { label: 'ETH', value: 2 },
    { label: 'XRP', value: 3 },
    { label: 'DASH', value: 4 },
    { label: 'NEO', value: 5 },
    { label: 'LTC', value: 6 },
    { label: 'BSD', value: 7 },
]
export const SellCrypto1: CryptoItem[] = [
    { label: 'USD', value: 1 },
    { label: 'AED', value: 2 },
    { label: 'AUD', value: 3 },
    { label: 'ARS', value: 4 },
    { label: 'AZN', value: 5 },
    { label: 'BGN', value: 6 },
    { label: 'BRL', value: 7 },
]
export const Amount: CryptoItem[] = [
    { label: 'BTC', value: 1 },
    { label: 'ETH', value: 2 },
    { label: 'XRP', value: 3 },
    { label: 'DASH', value: 4 },
    { label: 'NEO', value: 5 },
    { label: 'LTC', value: 6 },
    { label: 'BSD', value: 7 },
]