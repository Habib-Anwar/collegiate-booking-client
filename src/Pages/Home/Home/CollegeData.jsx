import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";



const CollegeData = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/collegiate')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-8">
            {
                colleges.map(college =><CollegeCard
                key={college._id}
                college={college}></CollegeCard>)
            }
        </div>
    );
};

export default CollegeData;