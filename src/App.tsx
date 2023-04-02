import { FormEvent, useEffect, useState } from "react";

import Card from "./Components/UI/card/Card";
import Header from "./Components/UI/header/Header";
import Loading from "./Components/UI/loading/Loading";
import InfoList from "./Components/info-list/InfoList";
import InputForm from "./Components/input-form/InputForm";
import Map from "./Components/map/Map";
import { apiKey } from "./config";
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
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${inputIp}`
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
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
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
    <main className="grid grid-rows-5 h-screen w-full">
      <Header
        title="IP Address Tracker"
        className="flex flex-col items-center relative row-span-2"
      >
        <InputForm
          onChange={inputChangeHandler}
          onSubmit={fetchData}
          value={inputIp}
        />
        {state && (
          <Card className="w-10/12 z-20 py-3 mt-5 rounded-xl bg-white shadow-md">
            <InfoList geoData={state} />
          </Card>
        )}
      </Header>
      <section
        className={`bg-white z-10 row-span-3 ${
          !state && "flex justify-center items-center"
        }`}
      >
        {state ? <Map coordinates={state!.coordinates} /> : <Loading />}
      </section>
    </main>
  );
}
