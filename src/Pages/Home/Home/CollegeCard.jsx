import { Link } from "react-router-dom";


const CollegeCard = ({college}) => {

    const {college_name, college_image, admission_date, event, research, sports } = college;
    return (
        <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img src={college_image} alt="broken image" /></figure>
  <div className="card-body">
    <h2 className="card-title">{college_name}</h2>
    <p>{admission_date}</p>
    <div>
        <p>{event.title}</p>
        <p>{research.history}</p>
        <p>{sports.categories}</p>
    </div>
    <div className="card-actions justify-end">
    <Link to='/details'>
    <button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CollegeCard;