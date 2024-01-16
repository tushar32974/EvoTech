import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import SurveyPostWidget from "./SurveyPostWidget";

const PostsWidget = () => {
  const [surveyPosts, setSurveyPosts] = useState([]);
  const token = useSelector((state) => state.token);

  const getSurveyPosts = async () => {
    try {
      const response = await fetch("https://survey-177d.onrender.com/survey", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setSurveyPosts(data);
    } catch (error) {
      console.error("Error fetching survey posts:", error);
    }
  };

  useEffect(() => {
    getSurveyPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {surveyPosts.map(
        ({
          _id,
          name,
          gender,
          nationality,
          email,
          phoneNumber,
          address,
          message,
        }) => (
          <SurveyPostWidget
            key={_id}
            postId={_id}
            name={name}
            gender={gender}
            nationality={nationality}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
            message={message}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
