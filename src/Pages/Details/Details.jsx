import { useEffect, useState } from "react";
import DetailCard from "./DetailCard";


const Details = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/college')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-8">
            {
                colleges.map(college =><DetailCard
                key={college._id}
                college={college}></DetailCard>)
            }
        </div>
    );
};

export default Details;