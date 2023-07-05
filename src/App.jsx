import { useEffect, useState } from "react";
import axios from "axios";
import DMap from "./Components/Dmap/DMap";
import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";

const App = () => {
  const [position, setPosition] = useState({
    lat: 51.505,
    lng: -0.09,
  });

  const [err, setErr] = useState("");

  const [data, setData] = useState();
  const [ip, setIp] = useState("8.8.8.8");

  const fetching = async (ip) => {
    try {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_lAlZoPBBnPnpezuMCeJv1zGohLINR&ipAddress=${ip}`
      );
      const data = res.data;
      setPosition({
        lat: data.location.lat,
        lng: data.location.lng,
      });
      setData(data);
    } catch (e) {
      setErr(e.message);
    }
  };

  const getIP = async () => {
    try {
      const myIp = await axios("https://ipinfo.io?token=39edd1e98053fe");
      console.log(myIp.data.ip);
      setIp(myIp.data.ip);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetching(ip);
    getIP();
  }, [ip]);

  return (
    <Layout>
      <Header
        err={err}
        onClick={(e) => {
          fetching(e);
        }}
        data={data}
      />
      <DMap position={position} />
    </Layout>
  );
};

export default App;
