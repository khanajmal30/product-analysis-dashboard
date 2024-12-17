import { useEffect, useState } from 'react';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import Filters from '../components/Filters';
import Layout from '../components/Layout';
import axios from 'axios';

const Index = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({ age: "15-25", gender: "Male", dateFrom: "", dateTo: "" });
    const [selectedFeature, setSelectedFeature] = useState(null);

    useEffect(() => {
        axios.get('/api/data')
            .then(response => setData(response.data));
    }, []);

    useEffect(() => {
        const applyFilters = () => {
            let filtered = data;

            if (filters.age) {
                filtered = filtered.filter(item => item.Age === filters.age);
            }

            if (filters.gender) {
                filtered = filtered.filter(item => item.Gender === filters.gender);
            }

            if (filters.dateFrom && filters.dateTo) {
                const dateFrom = new Date(filters.dateFrom);
                const dateTo = new Date(filters.dateTo);
                filtered = filtered.filter(item => {
                    const date = new Date(item.Date);
                    return date >= dateFrom && date <= dateTo;
                });
            }

            setFilteredData(filtered);
        };

        applyFilters();
    }, [filters, data]);

    const handleBarClick = (feature) => {
        setSelectedFeature(feature);
    };

    return (
        <Layout>
            <Filters filters={filters} setFilters={setFilters} />
            <div id="charts" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ flex: 1 }}>
                    <BarChart data={filteredData} onBarClick={handleBarClick} />
                </div>
                <div style={{ flex: 1 }}>
                    <LineChart data={filteredData} />
                </div>
            </div>
        </Layout>
    );
};

export default Index;
