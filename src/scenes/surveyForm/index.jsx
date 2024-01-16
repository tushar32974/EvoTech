import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";


const surveySchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  gender: yup.string().required("Gender is required"),
  nationality: yup.string().required("Nationality is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  address: yup.string().required("Address is required"),
  message: yup.string().required("Message is required"),
});

const initialValuesSurvey = {
    name: "",
    gender: "",
    nationality: "",
    email: "",
    phoneNumber: "",
    address: "",
    message: "",
};

const SurveyForm = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const saveSurvey = async (values, onSubmitProps) => {
    try {
      const response = await fetch("https://survey-177d.onrender.com/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Survey post saved successfully
        console.log("Survey post saved successfully!");
        alert("Survey Saved Successfully!!")
        onSubmitProps.resetForm();
      } else {
        // Handle error when saving survey post
        console.error("Error saving survey post");
      }
    } catch (error) {
      console.error("Error saving survey post:", error);
    }
  };
  
  const redirectToAdminLogin = () => {
    // Redirect to /adminLogin using navigate
    navigate("/adminLogin");
  };

  return (
    <>
      <Box textAlign={"center"} marginTop={"20px"}>
        {/* Button to redirect to /adminLogin */}
        <Button onClick={redirectToAdminLogin} variant="contained">
          Admin Login
        </Button>
      </Box>
      <Box
        width="100%"
        marginTop={"20px"}
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Survey Form
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom={"20px"}
        height="100vh" // You can adjust this height based on your preference
      >
        <Formik
          onSubmit={saveSurvey}
          initialValues={initialValuesSurvey}
          validationSchema={surveySchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                {/* Survey Form Fields */}
                <TextField
                  label="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  error={Boolean(touched.name) && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  label="Gender"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.gender}
                  name="gender"
                  error={Boolean(touched.gender) && Boolean(errors.gender)}
                  helperText={touched.gender && errors.gender}
                />
                <TextField
                  label="Nationality"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.nationality}
                  name="nationality"
                  error={
                    Boolean(touched.nationality) && Boolean(errors.nationality)
                  }
                  helperText={touched.nationality && errors.nationality}
                />
                <TextField
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  label="Phone Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  name="phoneNumber"
                  error={
                    Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)
                  }
                  helperText={touched.phoneNumber && errors.phoneNumber}
                />
                <TextField
                  label="Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                  error={Boolean(touched.address) && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                />
                <TextField
                  label="Message"
                  multiline
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                  name="message"
                  error={Boolean(touched.message) && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />
              </Box>

              {/* BUTTON */}
              <Box>
                <Button
                  fullWidth
                  type="submit"
                  sx={{
                    m: "2rem 0",
                    p: "1rem",
                    backgroundColor: palette.primary.main,
                    color: palette.background.alt,
                    "&:hover": { color: palette.primary.main },
                  }}
                >
                  Save Survey
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default SurveyForm;
