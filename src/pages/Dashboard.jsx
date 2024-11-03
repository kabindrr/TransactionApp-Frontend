import { Container, Row } from "react-bootstrap";
import MyBarChart from "../components/BarChart.jsx";

export const Dashboard = () => {
  return (
    <>
      <Container className="p-5">
        
        <Row className="bg-dark p-5 rounded shadow">
          
          {/* dashboard update with balance */}


          {/* dashboard with income and expenses graph */}

          <MyBarChart />
        </Row>
      </Container>
    </>
  );
};
