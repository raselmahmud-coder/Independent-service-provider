import { useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    fetch(`serviceData.json`)
        .then(res => res.json())
        .then(data => setServices(data));
    return [services];
}
export { useServices };