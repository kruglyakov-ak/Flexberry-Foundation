import "./style.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { useEffect, useState } from "react";
import { Ticket } from "../../types/ticket";

function MainPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/tickets")
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Main tickets={tickets} />
    </>
  );
}

export default MainPage;
