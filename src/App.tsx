import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Container from "./components/Container";
import { useGetMarkets } from "./services/api";
import Market from "./types/market";

function App() {
  const { isLoading } = useGetMarkets({
    onSuccess: (data) => setMarkets(data.results),
  });
  const [markets, setMarkets] = useState<Market[]>([]);

  useEffect(() => {
    const ws = new WebSocket("wss://ws.bitpin.ir/");

    const send = (data: any) => ws.send(JSON.stringify(data));

    ws.onopen = () => {
      console.log("WebSocket Client Connected");
      send({ message: "PING" });

      // update_info_price_currency return method not allowed
      send({ method: "sub_to_price_info" });
    };

    ws.onclose = () => console.log("WebSocket Client Closed");

    ws.onmessage = (event) => {
      if (!event.data) return;

      const oldMarket = markets;

      const data = JSON.parse(event.data);
      const ids = Object.keys(data);

      for (const id of ids) {
        const index = markets.findIndex((market) => market.id === +id);
        if (index < 0) continue;
        oldMarket[index] = { ...oldMarket[index], price: data[id].price };
      }

      setMarkets(oldMarket);
    };

    ws.onerror = (event) => {
      console.log("--- on error ---", event);
    };

    return () => ws.close();
  }, [markets]);

  return (
    <div className="App">
      <header className="App-header">
        {isLoading && (
          <div style={{ color: "black", margin: "5rem" }}>loading...</div>
        )}
        <Container>
          {markets.map((market) => (
            <Card key={market.id} title={market.title} price={market.price} />
          ))}
        </Container>
      </header>
    </div>
  );
}

export default App;
