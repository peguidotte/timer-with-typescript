import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>STUDY TIME!</h1>
        <div className="buttons">
          <Button onClick={() => console.log("clicked")} label="Add a Planer" />
          <Button onClick={() => console.log("clicked")} label="View my Planer" />
        </div>
      </header>
      <section className="cards">
        <Card className="timecard">Timer</Card>
        <Card className="planercard">Day Planned</Card>
        <Card className="history" aside>History</Card>
      </section>
    </div>
  );
}

export default App;