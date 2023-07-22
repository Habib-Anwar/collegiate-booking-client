import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import Paper from "./Paper";


const ImgGallery = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/college')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])
    return (
        <>
        <div className=" grid grid-cols-3 gap-8">
            {
                colleges.map(college =><Gallery
                key={college._id}
                college={college}></Gallery>)
            }
            </div>
            <h2 className="text-3xl semi-bold text-center mt-6">Research Paper</h2>
            <div className="grid grid-cols-3 gap-8 mt-4">
            {
                colleges.map(college =><Paper
                key={college._id}
                college={college}></Paper>)
            }
            </div>
          
            </>
    );
};

export default ImgGallery;