import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BasicCard from "./ListCard";
import { AiFillCloseCircle } from "react-icons/ai";
import FilledAlerts from "./BasicAlert";

const style = {
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

export default function BasicModal({ data, dateString }) {
  const [open, setOpen] = React.useState(false);
  const [dataItem, setDataItem] = React.useState([]);
  const [empty, setEmpty] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (data.length > 0) {
      setEmpty(false);
      setDataItem(data);
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex justify-between">
              <div className="fixed">
                <AiFillCloseCircle
                  className="text-2xl cursor-pointer fixed top-0 right-0"
                  onClick={handleClose}
                />
              </div>
            </div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Date of travel-{dateString[0]}
            </Typography>

            {dataItem.map((item, index) => (
              <BasicCard item={item} key={index} />
            ))}
          </Box>
        </Modal>
      )}
    </div>
  );
}
