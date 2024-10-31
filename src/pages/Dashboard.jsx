import { Container, Row } from "react-bootstrap";
import MyBarChart from "../components/BarChart.jsx";

export const Dashboard = () => {
  return (
    <>
      <Container className="p-5">
        <Row className="bg-dark p-5 rounded shadow">
          <MyBarChart />
        </Row>
      </Container>
    </>
  );
};
