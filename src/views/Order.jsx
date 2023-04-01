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
import environment from "../environment";
import axios from "axios";


export default function Order() {
  //sheria
  //state

  const [order, setOrder] = useState([]);
  
  const {AppForm,getDialogStatus,setDiolog,getTbLoading} = useContext(AppContext);
  const open = getDialogStatus();
  const [loading,setLoading] = useState(false)
  const [loadingColor,setLoadingColor] = useState('inherit')
  const appFormData = AppForm();
  const handleOnClick = () => {
    // setOpen(true);
    setDiolog(true)
  };
  const handleOnClose = () => {
    // setOpen(false);
    setDiolog(false)
  };

  useEffect(()=>{

   
     
     async function fetch(){
          try {
            setLoading(true)
            setLoadingColor('success')
            const response = await axios.get(`${environment.baseApiUrl}58d87229539449efb5e8d3ea6a10001b/unicorns`)
            console.log('resp :',response.data);
            setOrder(response.data)
            setLoading(false)
          } catch (error) {
            setTimeout(() => {
              setLoading(false)
            }, 4000);
            setLoadingColor('error')
          }
      }
      fetch();
     
  },[appFormData])

  // useMemo(()=>{
  //   setRows(prev=>[...prev,appFormData])
  // },[appFormData])

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
      <BasicTable rows={order} loading={loading} loadingColor={loadingColor} />
    </div>
  );
}
