import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./GalleryModal.scss"
import { VscEyeClosed } from "react-icons/vsc";
import { adaptV4Theme } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const style = {
  position: 'absolute',
  // marginTop:"160px",
  top: '51%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%",
  height: "78%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  borderRadius: 4,
  overflowY: "hidden",
  outline: "none"
};
const GalleryModal = ({ show, setShow, data }) => {
  const [tabsSelected, settabsSelected] = useState("bedroom");
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  const [bedroomPhotos, setbedroomPhotos] = useState([])
  const [Additional, setAdditional] = useState([])
  const [lawn, setlawn] = useState([])
  const [Kitchen, setKitchen] = useState([])
  const [Swim, setSwim] = useState([])
  const [OutdoorSpace, setOutdoorSpace] = useState([])
  const [bathroom, setbathroom] = useState([])
  useEffect(() => {
    data?.forEach((item) => {
      if (item.type === "additional__photos") {
        setAdditional(item.images);
      } else if (item.type === "bedroom") {
        setbedroomPhotos(item.images);
      } else if (item.type === "lawn") {
        setlawn(item.images);
      } else if (item.type === "kitchen") {
        setKitchen(item.images);
      }
      else if (item.type === "swimming") {
        setSwim(item.images);
      }
      else if (item.type === "outdoor_spaces") {
        setOutdoorSpace(item.images);
      }
      else if (item.type === "bathroom") {
        setbathroom(item.images);
      }
    });
  }, [data])

  console.log(bedroomPhotos, Additional, lawn, Kitchen, Swim)
  const stateMapping = {
    bedroom: bedroomPhotos,
    lawn: lawn,
    Kitchen: Kitchen,
    Additional: Additional,
    Swim: Swim
  };
  return (
    <div>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        BackdropProps={{
          sx: {
            background: "rgba(37, 0, 0, 0.2)",

            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        <Box sx={style}>
          <div onClick={() => handleClose()} className={'iconContainer'}><VscEyeClosed style={{ fontSize: "40px" }} /></div>

          <div className={'tabsContainer'}>
            {bedroomPhotos?.length>0?<div onClick={() => settabsSelected("bedroom")} className={tabsSelected == "bedroom" ? 'tabsSelected' : "tabs"}>
              Bedroom
            </div>:null}
           {bathroom?.length>0? <div onClick={() => settabsSelected("bathroom")} className={tabsSelected == "bathroom" ? 'tabsSelected' : "tabs"}>
              Bathroom
            </div>:null}
           {lawn?.length>0 ?<div className={tabsSelected == "lawn" ? 'tabsSelected' : "tabs"} onClick={() => settabsSelected("lawn")}>
              Lawn
            </div>:null}
           {Swim?.length>0? <div className={tabsSelected == "Swim" ? 'tabsSelected' : "tabs"} onClick={() => settabsSelected("Swim")}>
              Swimming
            </div>:null}
           {Kitchen?.length>0? <div className={tabsSelected == "Kitchen" ? 'tabsSelected' : "tabs"} onClick={() => settabsSelected("Kitchen")}>
              Kitchen
            </div>:null}
            {OutdoorSpace?.length>0?<div className={tabsSelected == "outdoor" ? 'tabsSelected' : "tabs"} onClick={() => settabsSelected("outdoor")}>
              Outdoor Spaces
            </div>:null}
            {Additional?.length>0?<div className={tabsSelected == "Additional" ? 'tabsSelected' : "tabs"} onClick={() => settabsSelected("Additional")}>
              Additional Photos
            </div>:null}
          </div>
          <div></div>
          <div style={{ marginLeft: "10%", marginTop: "5%", overflowY: "scroll", height: "85%", display: "flex", alignItems: "center", alignItems: "center", gap: "20px", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", marginTop: "30px", padding: "10px 0px" }}>
            {tabsSelected && stateMapping[tabsSelected] ? (
              stateMapping[tabsSelected].map((item, idx) => {
                return (
                  <LazyLoadImage
                    effect="blur"
                    height={"95%"}
                    key={idx} src={item}
                    width={"90%"}
                    threshold={100}
                    />
                )
              })
            ) : null}
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default GalleryModal