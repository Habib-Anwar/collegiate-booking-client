import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }

  return (
    <>
    <header className={`flex items-center w-full bg-white`}>
      <div className="container">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-60">
            <a href="/#" className="block w-full py-5">
              <img
                src="https://i.ibb.co/qj6K0Sz/collegelogo.png"
                alt="logo"
                className="w-full"
              />
            </a>

          </div>
          <div className="flex items-center justify-between w-full px-4">
            <div>
              <button
                // @click="navbarOpen = !navbarOpen"
                onClick={() => setOpen(!open)}
                // :className="navbarOpen && 'navbarTogglerActive' "
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/#"
                  >
                    Home
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/details"
                  >
                    Colleges
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="admission"
                  >
                    Admission
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-primary"
                    NavLink="/#"
                  >
                    My College
                  </ListItem>
                </ul>
              </nav>
            </div>
            <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
  {user?.email ? (
    <div className="w-10 rounded-full group-item hover:bg-slate-100">
      <img src={user?.photoURL} alt="User Profile" className="w-10 rounded-full group-item hover:bg-slate-100"/>
      <button onClick={handleLogOut} className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90">Logout</button>
    </div>
  ) : (
    <>
      <Link
        to="/login"
        className="py-3 text-base font-medium px-7 text-dark hover:text-primary"
      >
        Sign in
      </Link>

      <Link
        to="/signup"
        className="py-3 text-base font-medium text-white rounded-lg bg-primary px-7 hover:bg-opacity-90"
      >
        Sign Up
      </Link>
    </>
  )}
</div>

            </div>
          </div>
        </div>
    </header>
    </>
  );
};

export default NavBar;

const ListItem = ({ children, navItemStyles, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>
  );
};
