import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BasicCard from "./ListCard";
import { AiFillCloseCircle } from "react-icons/ai";
import FilledAlerts from "./BasicAlert";

const modalContainerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  borderRadius: "7px",
};

const leftPortionStyle = {
  flex: 1,
  padding: "0 16px",
};

const rightPortionStyle = {
  flex: 1,
  padding: "0 16px",
};

export default function BasicModalRound({ data }) {
  const [open, setOpen] = React.useState(false);
  const [dataItem, setDataItem] = React.useState([]);
  const [empty, setEmpty] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (data.length > 0) {
      setEmpty(false);
      setDataItem(data);
      // console.log(data);
    } else {
      setEmpty(true);
    }
  }, [data]);

  return (
    <div>
      <button
        className="text-white mx-auto py-2 px-4 flex items-center font-semibold"
        onClick={handleOpen}
      >
        FIND FLIGHTS
      </button>
      {!empty && (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalContainerStyle}>
              <div className="flex justify-between">
                <div style={leftPortionStyle}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    From {dataItem[0].departure} To {dataItem[0].arrival}<br/>
                    Date of Travel - {dataItem[0].date} 
                  </Typography>
                  {dataItem[0].results.map((item, index) => (
                    <BasicCard item={item} key={index} />
                  ))}
                </div>
                <div style={rightPortionStyle}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  From {dataItem[1].departure} To {dataItem[1].arrival}<br/>
                    Date of Travel - {dataItem[1].date} 
                  </Typography>
                  {dataItem[1].results.map((item, index) => (
                    <BasicCard item={item} key={index} />
                  ))}
                </div>
              </div>
              <div className="fixed">
                <AiFillCloseCircle
                  className="text-2xl cursor-pointer fixed top-0 right-0"
                  onClick={handleClose}
                />
              </div>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}
