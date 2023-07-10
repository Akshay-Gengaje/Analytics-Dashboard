import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import TransationsTable from "./components/TransationsTable/TransationsTable";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import BarChart from "./components/BarChat/BarChart";
import PieChart from "./components/PieChart/PieChart";
import Statistics from "./components/Statistics/Statistics";
function App() {
  const API = process.env.REACT_APP_API_KEY + "api/combined";
  const [month, setMonth] = useState({ name: "March", number: 3 });
  const [response, setResponse] = useState({
    statistics: { amount: 0, sold: 0, unsold: 0 },
    barChartData: {},
    pieChartData: [],
  });
  useEffect(() => {
    fetchbackend();
  }, [month.name]);
  const fetchbackend = async () => {
    await axios
      .get(API, {
        params: {
          month: month.number,
        },
      })
      .then((res) => setResponse({ ...res.data }))
      .catch((err) => console.log(err));
  };
  return (
    <div className="app">
      <header>
        <Nav month={month} setMonth={setMonth} />
      </header>
      <main>
        <TransationsTable month={month} />
        <div className="container">
          <div className="row d-flex justify-content-between ">
            <div className="col-md-6">
              <div className="col-md-12">
                <Statistics response={response.statistics} month={month} />
              </div>
              <div className="col-md-12">
                <BarChart response={response.barChartData} month={month} />
              </div>
            </div>
            <div className="col-md-6">
              <PieChart response={response.pieChartData} month={month} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
