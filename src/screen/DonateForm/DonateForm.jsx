import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../../CommonComponents/FormInput/FormInput";
import BlueBtn from "../../CommonComponents/BlueBtn/BlueBtn";

import "./DonateForm.scss";

import { FaTelegramPlane } from "react-icons/fa";
import Marque from "../../components/Marque/Marque";

const DonateForm = () => {
  const validate = Yup.object({
    fullName: Yup.string()
      .min(2, "Name must be 2 character")
      .max(20, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Required"),
    amount: Yup.number()
      .min(1, "Must be at least 1 charaters")
      .required("Required"),
  });

  return (
    <>
      <div className="donate">
        <div class="mobile-marque">
          <Marque />
        </div>
        <br />
        <br />
        <div className="only-for-desktop">
          <div className="only-for-desktop-chat-icon">
            <FaTelegramPlane />
          </div>
        </div>
        <div className="deskone-chaticon-mobile">
          <div className="only-for-mobile">
            <div className="chat-icon">
              <FaTelegramPlane />
            </div>
          </div>
        </div>
        <div className="donate-container">
          <div className="donateform">
            <center>
              <p className="donateform-heading">Donate Us</p>
            </center>
            <center>
              <p className="donateform-subheading">
                Lorem Ipsum dolor sit amet, consectetur
              </p>
            </center>

            <div className="form-width">
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  amount: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <div>
                    <Form className="donate-form">
                      <FormInput
                        label="Full Name"
                        name="fullName"
                        type="text"
                      />
                      <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                      />
                      <FormInput
                        label="Enter Amount"
                        name="amount"
                        type="number"
                      />
                      <div className="donateform-btn">
                        <center>
                          <BlueBtn type="submit" text="Next" />
                        </center>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateForm;
