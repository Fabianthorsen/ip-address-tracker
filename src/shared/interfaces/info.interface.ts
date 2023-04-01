export interface Info {
    title: string
    content: string
}

export interface GeoData {
    ip: string,
    timezone: string,
    location: string,
    coordinates: {
        lat: number,
        lng: number
    }
    isp: string
}

export default Info