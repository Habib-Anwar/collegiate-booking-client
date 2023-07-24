import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Profile = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
        {user && user.email && (
          <div>
            <img src={user.photoURL} alt=""  className="mx-auto"/>
            <h2 className="text-3xl font-semi-bold text-center">{user.displayName}</h2>
            <p className="font-bold text-center">{user.email}</p>
            <button className="btn btn-outline btn-primary w-36 ml-[700px] mb-8">Edit</button>
          </div>
        )}
      </div>
      
    );
};

export default Profile;