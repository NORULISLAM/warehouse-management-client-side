import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://mighty-plateau-24695.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);
    return [inventory, setInventory]
}

export default useInventory; 