import { FormEvent, useEffect, useReducer, useState } from "react";
import InfoList from "./Components/info-list/InfoList";
import { GeoData } from "./shared/interfaces/info.interface";
import { apiKey } from "./config";
import Map from "./Components/map/Map";
import InputForm from "./Components/input-form/InputForm";
import Header from "./Components/UI/header/Header";
import FloatingCard from "./Components/UI/floating-card/FloatingCard";

let dummy: GeoData = {
  ip: "89.11.196.92",
  timezone: "UTC +02:00",
  location: "Sandvika",
  coordinates: { lat: 59.89, lng: 10.53 },
  isp: "Altibox AS",
};

export default function App() {
  let [inputIp, setInputIp] = useState("89.11.196.92");
  let [state, setState] = useState<undefined | GeoData>(dummy);

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
      ip: data.ip,
      timezone: "UTC " + data.location.timezone,
      location: data.location.city,
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
      ip: data.ip,
      timezone: "UTC " + data.location.timezone,
      location: data.location.city,
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
    <main className="grid grid-rows-3 h-screen">
      {state && (
        <FloatingCard>
          <InfoList geoData={state} />
        </FloatingCard>
      )}
      <Header title="IP Address Tracker">
        <InputForm
          onChange={inputChangeHandler}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            console.log(state);
          }}
          value={inputIp}
        />
      </Header>
      <section className="bg-slate-400 row-span-2 z-10">
        <Map />
      </section>
    </main>
  );
}
