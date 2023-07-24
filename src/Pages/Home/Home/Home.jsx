
import CollegeData from "./CollegeData";
import ImgGallery from "./ImgGallery/ImgGallery";
import Review from "./Review/Review";




const Home = () => {
    return (
        <div>
            <div >
           <CollegeData></CollegeData>
           </div>
           <h2 className="text-3xl semi-bold text-center">
            Image Gallery
           </h2>
           <div>
           <ImgGallery></ImgGallery>
           </div>
           <Review></Review>
        </div>
    );
};

export default Home;