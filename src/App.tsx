import { useEffect, useReducer, useState } from "react";
import InfoList from "./Components/InfoList/InfoList";
import { GeoData } from "./shared/interfaces/info.interface";
import { apiKey } from "./config";

type Action = { type: "setGeoData"; payload: GeoData };

export default function App() {
  let [inputIp, setInputIp] = useState("192.212.174.101");
  function reducer(_: GeoData, action: Action) {
    switch (action.type) {
      case "setGeoData":
        return { ...action.payload };
    }
  }

  async function fetchData() {
    const resp = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${inputIp}`
    );
    const data = await resp.json();
    const geoData: GeoData = {
      ip: data.ip,
      timezone: "UTC " + data.location.timezone,
      location: data.location.city,
      isp: data.isp,
    };
    dispatch({ type: "setGeoData", payload: geoData });
  }

  const [state, dispatch] = useReducer(reducer, {
    ip: "",
    timezone: "",
    location: "",
    isp: "",
  });
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {state.ip && state.timezone && state.location && state.isp && (
        <aside className="bg-white absolute -translate-x-1/2 top-1/4 left-1/2 h-max p-3 rounded-lg">
          <InfoList geoData={state} />
        </aside>
      )}
      <section className="grid grid-rows-3 h-screen">
        <header className="bg-mobile-image md:bg-desktop-image bg-cover">
          <h1>IP Address Tracker</h1>
          <form className="bg-yellow-400" action="submit">
            <input type="text" />
            <button type="submit">&gt;</button>
          </form>
        </header>
        <section className="bg-red-400 row-span-2"></section>
      </section>
    </main>
  );
}
