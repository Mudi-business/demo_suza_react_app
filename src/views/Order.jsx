import { Button } from "@mui/material";
import React, { useEffect, useState,useMemo, useContext } from "react";
import GeneralDialogActions from "../utils/GeneralDialogActions";
import PrimarySearchAppBar from "../utils/AppBar";
import BasicDialog from "../utils/BasicDialog";
import SideBar from "../utils/SideBar";
import BasicTable from "../utils/Table";
import CustomPaginationActionsTable from "../utils/Table";
import SeafoodForm from "../components/order/SeafoodForm";
import { AppContext } from "../context/AppContext";
export default function Order() {
  //sheria
  //state

  const [rows, setRows] = useState([]);
  
  const {AppForm,getDialogStatus,setDiolog,setForm} = useContext(AppContext);
  const open = getDialogStatus();
  const appFormData = AppForm();
  const handleOnClick = () => {
    // setOpen(true);
    setDiolog(true)
  };
  const handleOnClose = () => {
    // setOpen(false);
    setDiolog(false)
  };

  useMemo(()=>{
    setRows(prev=>[...prev,appFormData])
  },[appFormData])

  return (
    <div>
      <Button
        onClick={handleOnClick}
        sx={{ float: 0, mb: 2 }}
        color={"success"}
        variant="contained"
      >
        Add seafood
      </Button>

      {/* DIALOG TUMITAA KUTOKA UTILS*/}
      <BasicDialog
        open={open}
        title={"Place Your seafood order"}
        // TUMEITA KUTOKA KWENYE COMPONENTS YA ORDER
        content={<SeafoodForm handleOnClose={handleOnClose} />}
      />
      <BasicTable rows={Object.values(appFormData).length === 0?[]:rows} />
    </div>
  );
}
