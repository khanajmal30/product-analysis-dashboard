import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto/auto.js';

const BarChart = ({ data, onBarClick }) => {
    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }

    const labels = ['A', 'B', 'C', 'D', 'E', 'F'];
    const values = [24, 25, 65, 59, 76, 27];

    const chartData = {
        labels,
        datasets: [{
            label: 'Total Time Spent',
            data: values,
            backgroundColor: labels.map(label => label === 'E' ? 'orange' : 'blue'),
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            hoverBackgroundColor: labels.map(label => label === 'E' ? 'darkorange' : 'lightblue')
        }]
    };

    const options = {
        indexAxis: 'y', // This makes the bar chart horizontal
        onClick: (e, element) => {
            if (element.length > 0) {
                const index = element[0].index;
                onBarClick(labels[index]);
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Axis Title'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Categories'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Title'
            }
        }
    };

    return <Bar data={chartData} options={options} />;
};

export default BarChart;
