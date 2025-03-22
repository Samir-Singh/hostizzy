import React from "react";
import Dialog from "@mui/material/Dialog";

const ThingsToKnow = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            overflowY: "visible",
            borderTop: "4px solid #fe5858",
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
        <div className="things_to_know_modal">
          <h1 className="modal_heading">House rules</h1>
          <p className="modal_heading_para">
            You'll be staying in someone's home, so please teat it with care and
            respect.
          </p>

          <div className="things_data">Check-in: 3:00 pm - Flexible</div>
          <div className="things_data">Checkout before 11:00 am</div>
          <div className="things_data">12 guests maximum</div>
        </div>
      </Dialog>
    </div>
  );
};

export default ThingsToKnow;