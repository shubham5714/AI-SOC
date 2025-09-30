// Basic Scatter Chart
export const BasiSlopChartSeries = [
    {
        name: 'Primary',
        data: [
            {
                x: 'Jan',
                y: 43,
            },
            {
                x: 'Feb',
                y: 58,
            },
        ],
    },
    {
        name: 'Primary',
        data: [
            {
                x: 'Jan',
                y: 33,
            },
            {
                x: 'Feb',
                y: 38,
            },
        ],
    },
    {
        name: 'Warning',
        data: [
            {
                x: 'Jan',
                y: 55,
            },
            {
                x: 'Feb',
                y: 21,
            },
        ],
    },
]
export const BasiSlopChartOptions = {

    chart: {
        height: 350,
        width: 400,
        type: 'line'
    },
    plotOptions: {
        line: {
            isSlopeChart: true
        }
    },
}

// Multi-group Slope Chart
export const MultigroupSeries = [
    {
        name: 'Primary',
        data: [
            {
                x: 'Category 1',
                y: 503,
            },
            {
                x: 'Category 2',
                y: 580,
            },
            {
                x: 'Category 3',
                y: 135,
            },
        ],
    },
    {
        name: 'Primary',
        data: [
            {
                x: 'Category 1',
                y: 733,
            },
            {
                x: 'Category 2',
                y: 385,
            },
            {
                x: 'Category 3',
                y: 715,
            },
        ],
    },
    {
        name: 'Warning',
        data: [
            {
                x: 'Category 1',
                y: 255,
            },
            {
                x: 'Category 2',
                y: 211,
            },
            {
                x: 'Category 3',
                y: 441,
            },
        ],
    },
    {
        name: 'Secondary',
        data: [
            {
                x: 'Category 1',
                y: 428,
            },
            {
                x: 'Category 2',
                y: 749,
            },
            {
                x: 'Category 3',
                y: 559,
            },
        ],
    },
]
export const MultigroupOptions = {
    chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        line: {
            isSlopeChart: true,
        },
    },
    tooltip: {
        followCursor: true,
        intersect: false,
        shared: true,
    },
    dataLabels: {
        background: {
            enabled: true,
        },
        formatter(val, opts) {
            const seriesName = opts.w.config.series[opts.seriesIndex].name
            return val !== null ? seriesName : ''
        },
    },
    yaxis: {
        show: true,
        labels: {
            show: true,
        },
    },
    xaxis: {
        position: 'bottom',
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
    },
    stroke: {
        width: [2, 3, 4, 2],
        dashArray: [0, 0, 5, 2],
        curve: 'smooth',
    },
    colors: ["var(--primary-color)", "#f46ef4", "#FFC658", "#9e5cf7"]
}