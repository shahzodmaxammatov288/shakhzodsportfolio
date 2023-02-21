import React, { useEffect, useRef, useState } from "react";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./form.css";

const Form = () => {
  const [data, setData] = useState([]);
  const [phoneValue, setPhoneValue] = useState("");
  const inputNameRef = useRef("");
  const inputPhoneNumberRef = useRef(null);
  const messageRef = useRef("");

  const handelValue = (e) => {
    /*     if (e.target.name == "fName") {
      if (e.target.value.length == 5) {
        inputPhoneNumberRef.current.focus();
      }
    } */

    setData((prev) => {
      return {
        ...prev,
        phoneNumber: phoneValue,
      };
    });
  };

  const addingData = (e) => {
    setData((prev) => {
      return {
        ...prev,
      };
    });
  };

  useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
      };
    });
  }, [data]);

  return (
    <div className="form">
      <h2 className="form__title">Xabar yuborish:</h2>
      <form action="">
        <div className="form__box">
          <label htmlFor="ism" className="form__label">
            Ismingiz:
          </label>
          <input
            type="text"
            id="ism"
            name="fName"
            ref={inputNameRef}
            value={inputNameRef.value}
            onChange={handelValue}
            required
          />
        </div>
        <div className="form__box">
          <label htmlFor="phoneNumber" className="form__label">
            Telefon raqamingiz:
          </label>
          <PhoneInput
            placeholder="Enter phone number"
            value={inputPhoneNumberRef.value}
            onChange={handelValue}
            defaultCountry="UZ"
            international
            error={
              inputPhoneNumberRef.value
                ? isValidPhoneNumber(inputPhoneNumberRef.value)
                  ? undefined
                  : "Invalid phone number"
                : "Phone number required"
            }
          />
          {/*          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            ref={inputPhoneNumberRef}
            value={inputPhoneNumberRef.value}
            onChange={handelValue}
            required
          /> */}
        </div>
        <div className="form__box">
          <label htmlFor="message" className="form__label" required>
            Xabar:
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            style={{ resize: "none" }}
            ref={messageRef}
            value={messageRef.value}
            onChange={handelValue}
          ></textarea>
        </div>
        <button
          className="btn-primary button__link"
          type="submit"
          onClick={addingData}
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default Form;
