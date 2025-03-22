import React, { useState } from "react";
import axios from "axios"; // Import Axios
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField"; // Import TextField
import "./index.scss";
import LoadingButton from "@mui/lab/LoadingButton";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Select from "react-select";
const BookNowForm = ({ open, handleClose }) => {
  const propertiesList = useSelector(
    (state) => state?.mostVisitedPropertiesReducer?.result
  );

  const propertyOption = [
    { value: 1, label: "Delhi" },
    { value: 2, label: "Gurgaon" },
    { value: 3, label: "Faridabad" },
    { value: 4, label: "Panchkula" },
    { value: 5, label: "Kasauli" },
    { value: 6, label: "Shimla" },
    { value: 7, label: "Barog" },
    { value: 8, label: "Mashobra" },
    { value: 9, label: "Bhimtal" },
    { value: 10, label: "Mukteshwar" },
    { value: 11, label: "Jim Corbett" },
    { value: 12, label: "Mumbai" },
    { value: 13, label: "Goa" },
    { value: 14, label: "Sikkim" },
    { value: 15, label: "Kochi" },
    { value: 16, label: "Kolkata" },
    { value: 17, label: "Alwar" },
    { value: 18, label: "Jaipur" },
    { value: 19, label: "Ajmer" },
    { value: 20, label: "Manesar" },
  ];
  const [loading, setloading] = useState(false);
  const notify = () => {
    toast.success("Yup! We have Received.");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    location: "",
    number_of_guest: "",
    check_in: "",
    check_out: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setloading(true);
    axios
      .post("https://app.hostizzy.com/form/booking", formData)
      .then((response) => {
        if (response?.data?.success == true) {
          setloading(false);
          notify();
          setTimeout(() => {
            handleClose(); // Close the dialog after a delay
          }, 1000);
        }
      })
      .catch((error) => {
        setloading(false);
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
        <h3 className="dialog___title">Book your dream stay.</h3>
        <DialogContent
          style={{
            overflowY: "visible",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <TextField
            name="name"
            sx={{ mt: 2, width: "48%" }}
            type="text"
            placeholder="Name"
            size="small"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            name="email"
            sx={{ mt: 2, width: "48%" }}
            type="email"
            placeholder="Email"
            size="small"
            value={formData.Email}
            onChange={handleInputChange}
          />
          <TextField
            name="phone_number"
            sx={{ mt: 2, width: "48%" }}
            type="text"
            placeholder="Number"
            size="small"
            value={formData.phone_number}
            onChange={handleInputChange}
          />
          <TextField
            name="number_of_guest"
            sx={{ mt: 2, width: "48%" }}
            type="text"
            placeholder="Number of Guests"
            size="small"
            value={formData.number_of_guest}
            onChange={handleInputChange}
          />
          <div className="date_filed">
            <p className="date_para">Check in Date</p>
            <TextField
              name="check_in"
              sx={{ width: "100%" }}
              type="date"
              placeholder="Check in Date"
              size="small"
              value={formData.check_in}
              onChange={handleInputChange}
            />
          </div>

          <div className="date_filed">
            <p className="date_para">Check out Date</p>
            <TextField
              name="check_out"
              sx={{ width: "100%" }}
              type="date"
              placeholder="Check out Date"
              size="small"
              value={formData.check_out}
              onChange={handleInputChange}
            />
          </div>
          {/* <TextField
            name="property_details"
            sx={{ mt: 3, width: '100%' }}
            type="textarea"
            placeholder="Select Property"
            size="small"
            value={formData.property_details}
            onChange={handleInputChange}
          /> */}
          <div className="select_div">
            <Select
              type="textarea"
              name="location"
              value={propertyOption?.find(
                (e) => e?.label === formData?.location
              )}
              placeholder="Location"
              onChange={(e) => {
                console.log(e);
                setFormData({ ...formData, location: e?.label });
              }}
              className="select_element"
              components={{
                IndicatorSeparator: () => null,
              }}
              options={propertyOption}
              styles={{
                menu: (provided, state) => ({
                  // Customize the position of the menu (dropdown)
                  ...provided,
                  position: "absolute", // Open the dropdown from the top
                  top: "auto", // Make sure it doesn't overlap with the control
                  bottom: "100%", // Position it above the control
                  zIndex: 999, // Adjust the z-index if needed
                  // Add more styles if needed
                }),
              }}
            />

            <LoadingButton
              onClick={handleSubmit}
              loading={loading}
              variant="outlined"
              sx={{
                width: "48%",
                // Customize the button styles here
                backgroundColor: "black", // Change the background color
                color: "white", // Change the text color,
                border: "none",
                "&:hover": {
                  backgroundColor: "#fe5858",
                  border: "none", // Change the background color on hover
                },
                "& .MuiLoadingButton-startIconCircularProgress": {
                  color: "#fff !important", // Change the color of the loader
                },
              }}
            >
              <span>Submit</span>
            </LoadingButton>
          </div>
        </DialogContent>
      
        {/* <DialogActions>
          <LoadingButton
            onClick={handleSubmit}
            loading={loading}
            variant="outlined"
            sx={{
              // Customize the button styles here
              backgroundColor: "#fe5858", // Change the background color
              color: "white", // Change the text color,
              border: "none",
              "&:hover": {
                backgroundColor: "#fe5858",
                border: "none", // Change the background color on hover
              },
              "& .MuiLoadingButton-startIconCircularProgress": {
                color: "#fff !important", // Change the color of the loader
              },
            }}
          >
            <span>Submit</span>
          </LoadingButton>
        </DialogActions> */}

      </Dialog>
      <Toaster />
    </div>
  );
};

export default BookNowForm;