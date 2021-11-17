import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./SignUpCustomerForm.module.css";

function SignUpCustomerForm(props) {
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const phoneNumberRef = useRef();

  async function customerSubmitHandler(event) {
    event.preventDefault();

    const customerFirstName = firstNameRef.current.value;
    const customerLastName = lastNameRef.current.value;
    const customerEmail = emailRef.current.value;
    const customerPassword = passwordRef.current.value;
    const customerConfirmPassword = confirmPasswordRef.current.value;
    const customerCity = cityRef.current.value;
    const customerState = stateRef.current.value;
    const customerPhoneNumber = phoneNumberRef.current.value;

    if (customerPassword !== customerConfirmPassword) {
      setPasswordErrorMessage("Passwords do not match!");
      return;
    } else {
      setPasswordErrorMessage("");
      const customerData = {
        firstName: customerFirstName,
        lastName: customerLastName,
        email: customerEmail,
        city: customerCity,
        state: customerState,
        phoneNumber: customerPhoneNumber,
        password: customerPassword,
        userType: "customer",
      };
      await props.onCreateCustomer(customerData);
    }
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={customerSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            required
            name="firstname"
            ref={firstNameRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            required
            name="lastname"
            ref={lastNameRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="email@email.com"
            required
            name="email"
            ref={emailRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            ref={passwordRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter Password"
            required
            name="confirmPassword"
            ref={confirmPasswordRef}
          />
        </div>
        <div className={classes.error}>
          <p>{passwordErrorMessage}</p>
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="City Name"
            required
            name="city"
            ref={cityRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="state">State</label>
          <input
            type="text"
            pattern="(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])"
            placeholder="State Abbreviation (eg. CA, NY, AZ, etc.)"
            required
            name="state"
            ref={stateRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            required
            name="phone"
            ref={phoneNumberRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Create Account</button>
        </div>
      </form>
    </Card>
  );
}

export default SignUpCustomerForm;