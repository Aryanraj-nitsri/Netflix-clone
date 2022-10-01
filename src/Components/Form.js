import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./Form.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn} from "../features/Userslice";


function Form({ setstarted }) {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .then((user) => {
        dispatch(
          signIn({
            email: user.email,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    setemail("");
    setpassword("");
  };
  const SinUphandler = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .then((user) => {
        dispatch(
          signIn({
            email: user.email,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
    setemail("");
    setpassword("");
  };

  return (
    <div className="Form_container">
      <div className="form_elements">
        <h1>Sign In</h1>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <Button variant="contained" type="Submit">Sign In</Button>
        </form>
        <div className="extra_details">
          <div className="checkbox">
            <Checkbox sx={{ color: "white" }} />
            <p>Remember me</p>
          </div>
          <p>Need help?</p>
        </div>
        <div className="form_signup">
          <p>New to Netflix?</p>
          <span onClick={SinUphandler}>Sign up now</span>
        </div>
      </div>
    </div>
  );
}
export default Form;
