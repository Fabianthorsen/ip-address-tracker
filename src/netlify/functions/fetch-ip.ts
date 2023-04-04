exports.handler = async function(event, context) {
    try {
        const {ip} = event.queryStringParameter;
        const API = process.env.VITE_API_KEY;

        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API}&ipAddress=${ip}`

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return {
            statusCode: 200,
            body: JSON.stringify({data})
        }
    } catch(err) {
        console.log(err);
        return {
            statusCode: 400,
            body: JSON.stringify({error: 'Failed fetching data'})
        }
    }
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