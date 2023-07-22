

const Gallery = ({college}) => {
    const {image_gallery} = college;
    return (
        <>
        <div>
            <img src={image_gallery} alt=""  className="rounded-3xl mt-6 mx-auto"/>
     
        </div>
       </>
    );
};

export default Gallery;