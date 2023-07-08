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
  const API = process.env.REACT_APP_API_KEY;
  const [month, setMonth] = useState(3);
  const [response, setResponse] = useState({
    statistics: {},
    barChartData: {},
    pieChartData: [],
  });
  useEffect(() => {
    fetchbackend();
  }, [month]);
  const fetchbackend = async () => {
    await axios
      .get(API + "/combined", {
        params: {
          month: month,
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
                <Statistics response={response.statistics} />
              </div>
              <div className="col-md-12">
                <BarChart response={response.barChartData} />
              </div>
            </div>
            <div className="col-md-6">
              <PieChart response={response.pieChartData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
