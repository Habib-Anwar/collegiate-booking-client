

const DetailCard = ({college}) => {
    const {college_name, college_image, admission_date, admission_process, event, research, sports } = college;
    return (
        <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={college_image} alt="broken image" /></figure>
  <div className="card-body">
    <h2 className="card-title">{college_name}</h2>
    <p>{admission_date}</p>
    <p>{admission_process}</p>
    <div>
        <p>{event.title}</p>
        <p>{event.details}</p>
        <p>{research.history}</p>
        <p>{research.works}</p>
        <p>{sports.categories}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default DetailCard;