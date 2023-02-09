import React, { useEffect, useRef, useState } from "react";
import "./form.css";

const Form = () => {
  const [data, setData] = useState([]);
  const inputNameRef = useRef("salom");
  const inputPhoneNumberRef = useRef(+998);
  const messageRef = useRef("");

  const handelValue = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const addingData = (e) => {
    setData((prev) => {
      return {
        ...prev,
      };
    });
    console.log(data);
  };

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
            autoComplete="off"
            required
          />
        </div>
        <div className="form__box">
          <label htmlFor="phoneNumber" className="form__label">
            Telefon raqamingiz:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            ref={inputPhoneNumberRef}
            defaultValue="+998"
            value={inputPhoneNumberRef.value}
            onChange={handelValue}
            autoComplete="off"
            required
          />
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
            autoComplete="off"
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
