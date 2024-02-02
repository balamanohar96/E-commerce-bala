//taskLogin -venkateswara rao
import React, { useRef, useState, useEffect } from "react";
import "./Login.css";
import { headings } from "../../constants/Headings/headings";
// import login from "../../Assets/login.jpeg";

const Login = (props) => {
  const [userDetails, setUserDetails] = useState([]);

  //error in login and succefully
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  //successfully login
  const [loginState, setLoginState] = useState(false);

  //singup page for clicking not account singnup
  const registerPageOpenHandler = () => {
    props.createAccout(true);
    props.modalClose(false);
  };

  //login intergration with dummyjson data
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setUserDetails(res.users); //get the userData
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  //using ref read the dat user entires
  const usernameRef = useRef();
  const passwordRef = useRef();

  //submit the data for  check the login actions
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    //adding new user data it similar to post method
    const newUserData = localStorage.getItem("UserDetails");
    if (newUserData !== undefined) {
      userDetails.push(JSON.parse(newUserData));
    }

    //sample user details username:atuny0 password:9uQFF1Lh
    const userData = {
      username,
      password,
    };
    //checking the user enter details or not
    if (username === "" || password === "") {
      setError(true);
      setMessage("Enter Username and Password Correctly");
    }
    // password length check and validation password
    else if (password.length < 8) {
      setError(true);
      setMessage("Password must be above 8 char");
    }
    //if data is correct find the userdetails
    else {
      const data = userDetails.find(
        (person) =>
          person.username === userData.username &&
          person.password === userData.password
      );
      if (!data) {
        setError(true);
        setMessage("invalid login"); //if invalid details entered
      } else {
        setError(false);
        setLoginState(true); //if no error in login show login message
        //this for showing the succesfuuly message and close the modal
        setTimeout(() => {
          props.modalClose(false);
          props.logOutShow(true);
          //using filter get the logiend user details

          const name = userDetails.filter(
            (person) => person.username === userData.username
          );
          props.userDetailsGet(name);
        }, 2000);
      }
    }
  };

  const closeModal = () => {
    props.modalClose(false);
  };
  return (
    <div className="Modal_container">
      <div className="Modal_content_container ">
        <div className="cardContainerLogin  order-0 w-sm-100 flex-fill ">
          <div className="login_exitSection">
            <button onClick={closeModal} className="login_exitbutton">
              X
            </button>
          </div>
          <div>
            <h2
              data-testid="LoginHeading"
              className="login_titleHeading text-center"
            >
              {headings.loginHeading}
            </h2>
          </div>
          <form onSubmit={onSubmitHandler}>
            <div className="userLoginContainer">
              <label>{headings.UserName}</label>
              <input
                type="text"
                placeholder="Enter username"
                className="form-control"
                ref={usernameRef}
              />
              <label>{headings.Password}</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                ref={passwordRef}
              />
            </div>
            <div>
              {error && <p className="ErrorMessage">{message}</p>}
              {loginState && (
                <p className="successfullymessage">
                  {headings.userLoginMessgae}
                </p>
              )}
            </div>
            <div className="login_buttonSection">
              <button type="submit" className="userLoginButton">
                Login
              </button>
            </div>
          </form>
          <hr />
          <div className="text-center text-muted delimiter">
            {headings.socialMessage}
          </div>
          {/* present we not implement through login and signup with social buttons  */}
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="socailButton btn-primary m-2 btn-round"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                type="button"
                className="socailButton btn-info m-2 btn-round"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </button>
              <button
                type="button"
                className="socailButton btn-secondary  m-2 btn-round"
                data-toggle="tooltip"
                data-placement="top"
                title="Linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </button>
            </div>

            <div className="modal-footer d-flex justify-content-center">
              <div className="signup-section">
                {headings.socialMessage}{" "}
                <button
                  onClick={registerPageOpenHandler}
                  className="signUpbutton"
                >
                  {headings.signUp}
                </button>
                .
              </div>
            </div>
          </div>
        </div>

        <img
          className="imageLogin flex-fill order-1 d-none d-md-block"
          src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
