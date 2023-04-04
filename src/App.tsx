import * as dotenv from "dotenv";
import { FormEvent, useEffect, useState } from "react";

import Card from "./components/UI/card/Card";
import Header from "./components/UI/header/Header";
import Loading from "./components/UI/loading/Loading";
import InfoList from "./components/info-list/InfoList";
import InputForm from "./components/input-form/InputForm";
import Map from "./components/map/Map";
import { GeoData } from "./shared/interfaces/info.interface";

export default function App() {
  let [inputIp, setInputIp] = useState("");
  let [state, setState] = useState<undefined | GeoData>(undefined);

  function inputChangeHandler(event: { target: HTMLInputElement }) {
    setInputIp(event.target.value);
  }

  async function fetchData(event: FormEvent) {
    event.preventDefault();
    const resp = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_API_KEY
      }&ipAddress=${inputIp}`
    );
    const data = await resp.json();
    const geoData: GeoData = {
      ipAddress: data.ip,
      location: data.location.city,
      timezone: "UTC " + data.location.timezone,
      coordinates: {
        lat: Number(data.location.lat),
        lng: Number(data.location.lng),
      },
      isp: data.isp,
    };
    setState(geoData);
  }

  async function initialFetch() {
    const resp = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await resp.json();
    const geoData: GeoData = {
      ipAddress: data.ip,
      location: data.location.city,
      timezone: "UTC " + data.location.timezone,
      coordinates: {
        lat: Number(Number(data.location.lat).toFixed(2)),
        lng: Number(Number(data.location.lng).toFixed(2)),
      },
      isp: data.isp,
    };
    setState(geoData);
  }

  useEffect(() => {
    initialFetch();
  }, []);

  return (
    <main className="grid grid-rows-5 h-screen w-full md:grid-rows-3">
      <Header
        title="IP Address Tracker"
        className="flex flex-col items-center relative row-span-2 md:row-span-1"
      >
        <InputForm
          onChange={inputChangeHandler}
          onSubmit={fetchData}
          value={inputIp}
        />
        {state && (
          <Card className="w-10/12 md:w-3/4 z-20 py-3 mt-5 rounded-xl bg-white shadow-md">
            <InfoList geoData={state} />
          </Card>
        )}
      </Header>
      <section
        className={`bg-white z-10 row-span-3 md:row-span-2 ${
          !state && "flex justify-center items-center"
        }`}
      >
        {state ? <Map coordinates={state!.coordinates} /> : <Loading />}
      </section>
    </main>
  );
}
