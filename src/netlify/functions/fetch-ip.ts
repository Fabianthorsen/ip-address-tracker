import { HandlerEvent } from "@netlify/functions";

exports.handler = async function(event: HandlerEvent) {
    try {
        const params = event.queryStringParameters;
        const API = process.env.VITE_API_KEY;

        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API}&ipAddress=${params!.ip}`


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