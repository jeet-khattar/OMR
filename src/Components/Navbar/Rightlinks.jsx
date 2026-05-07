import "./Nav.css";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Rightlinks = ({seachfunc}) => {
  
  return (
    <div className="rightlink">
      <ul>
        <li className="searchbtn" onClick={seachfunc}>Search</li>
        <SignedOut>
          <li>
            <Link to="Login">
              <User />
            </Link>
          </li>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ul>
    </div>
  );
};

export default Rightlinks;
