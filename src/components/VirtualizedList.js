import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { FixedSizeList } from "react-window";

const customStyles = makeStyles({
  listItemText: {
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#3798FF",
      color: "white",
      fontWeight: "extra-large",
    },
  },
});

function renderRow(props) {
  const { index, style, data } = props;
  const { depList, items, handleSetDepFromClick } = data;
  const item = items[index];
  if (!item || !item.code) {
    return null;
  }
  const { code, name } = item;
  const classes = customStyles();

  const handleItemClick = () => {
    depList(false);
    handleSetDepFromClick(code);
  };

  return (
    <ListItem
      style={style}
      key={index}
      component="div"
      disablePadding
      onClick={handleItemClick}
    >
      <ListItemButton>
        <ListItemText
          primary={`${name} : ${code}`}
          className={classes.listItemText}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList({ items, depList, handleSetDepFromClick }) {
  const listHeight = Math.min(400, items.length * 46);
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList
        height={listHeight}
        width={300}
        itemSize={55}
        itemCount={10}
        overscanCount={5}
        itemData={{ items, depList, handleSetDepFromClick }}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
