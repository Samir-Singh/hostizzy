import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField, FormLabel } from "@mui/material";
import "./index.scss";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const EnquiryForm = ({ open, handleClose, propertyName,arrival_date,
  departure_date, }) => {
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    organization: "",
    holiday_moods: "",
    arrival: arrival_date,
    departure:departure_date,
    comments: "",
    property_details: propertyName,
  });
  const notify = () => {
    toast.success("Yup! We have Received");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("https://app.hostizzy.com/form/enquiry", formData)
      .then((response) => {
        // Handle the API response here
        console.log("API call successful:", response.data);
        // Optionally, you can reset the form fields here if needed
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          organization: "",
          holiday_moods: "",
          arrival: "",
          departure: "",
          comments: "",
          property_details: "",
        });
        if (response?.data?.success == true) {
          setloading(false);
          notify();
          setTimeout(() => {
            handleClose(); // Close the dialog after a delay
          }, 1000);
        }
      })

      .catch((error) => {
        // Handle errors from the API call
        console.error("API call error:", error);
      });
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          // You can define your styles here
          "& .MuiDialog-paper": {
            // Add your custom styles to the dialog
            overflowY: "visible",
            // For more styles, add additional properties
            borderTop: "4px solid #fe5858",
            // borderBottom:"4px solid #fe5858",
            width: 600,
          },
        }}
        BackdropProps={{
          sx: {
            background: "rgba(37, 0, 0, 0.2)",

            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        <DialogTitle className="dialog___title">Enquiry Form</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mt: 3, width: "100%" }}
            type="text"
            placeholder="Name"
            size="small"
          />
          <TextField
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mt: 3, width: "100%" }}
            type="email"
            placeholder="Email"
            size="small"
          />
          <TextField
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            sx={{ mt: 3, width: "100%" }}
            type="number"
            placeholder="Number"
            size="small"
          />
          <TextField
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            sx={{ mt: 3, width: "100%" }}
            type="text"
            placeholder="Company / Organization"
            size="small"
          />
          <TextField
            name="holiday_moods"
            value={formData.holiday_moods}
            onChange={handleChange}
            sx={{ mt: 3, width: "100%" }}
            type="text"
            placeholder="Holiday Moods"
            size="small"
          />
          <Box className="d-flex" sx={{ flexDirection: "column" }}>
            <FormLabel sx={{ mt: 3, width: "100%" }}>Check in</FormLabel>
            <TextField
              name="arrival"
              value={formData.arrival}
              onChange={handleChange}
              sx={{ mt: 1 }}
              type="date"
              placeholder="Arrival"
              size="small"
            />
          </Box>
          <Box className="d-flex" sx={{ flexDirection: "column" }}>
            <FormLabel sx={{ mt: 3, width: "100%" }}>Check out</FormLabel>
            <TextField
              name="departure"
              value={formData.departure}
              onChange={handleChange}
              sx={{ mt: 1 }}
              type="date"
              placeholder="Departure"
              size="small"
            />
          </Box>
          <TextField
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            sx={{ mt: 3, width: "100%" }}
            type="textarea"
            placeholder="Comments"
            size="small"
          />
          <TextField
            name="property_details"
            value={formData.property_details}
            onChange={handleChange}
            sx={{ mt: 3, width: "100%" }}
            type="text"
            placeholder="Property"
            size="small"
            disabled={true}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            className="button__submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Toaster />
    </div>
  );
};

export default EnquiryForm;
