// SurveyPostWidget.js
import React from "react";
import "./SurveyPostWidget.css";

const SurveyPostWidget = ({
  postId,
  name,
  gender,
  nationality,
  email,
  phoneNumber,
  address,
  message,
}) => {
  return (
    <div className="survey-post-container">
      <h3 className="survey-post-heading">{name}</h3>
      <p className="survey-post-detail">Gender: {gender}</p>
      <p className="survey-post-detail">Nationality: {nationality}</p>
      <p className="survey-post-detail">Email: {email}</p>
      <p className="survey-post-detail">Phone Number: {phoneNumber}</p>
      <p className="survey-post-detail">Address: {address}</p>
      <p className="survey-post-detail">Message: {message}</p>
    </div>
  );
};

export default SurveyPostWidget;
