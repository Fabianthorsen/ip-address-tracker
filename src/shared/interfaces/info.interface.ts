export interface Info {
    title: string
    content: string
}

export interface GeoData {
    [key: string]: unknown;
    ipAddress: string,
    location: string,
    timezone: string,
    coordinates: {
        lat: number,
        lng: number
    }
    isp: string
}

export default Info