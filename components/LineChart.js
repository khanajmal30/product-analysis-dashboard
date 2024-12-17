import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto/auto.js';

const LineChart = ({ data }) => {
    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }

    const labels = ['28-Aug', '29-Aug', '30-Aug', '31-Aug', '01-Sep', '02-Sep', '03-Sep'];
    const values = [5, 10, 8, 15, 7, 12, 3];

    const chartData = {
        labels,
        datasets: [{
            label: 'Time Trend',
            data: values,
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            fill: false
        }]
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Dates'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Values'
                },
                min: 0,
                max: 20
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Chart Title'
            },
            legend: {
                display: true,
                position: 'top'
            }
        }
    };

    return <Line data={chartData} options={options} />;
};

export default LineChart;
