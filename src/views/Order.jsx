import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import GeneralDialogActions from '../utils/GeneralDialogActions';
import PrimarySearchAppBar from '../utils/AppBar';
import BasicDialog from '../utils/BasicDialog';
import SideBar from '../utils/SideBar';
import BasicTable from '../utils/Table';
import CustomPaginationActionsTable from '../utils/Table';
import SeafoodForm from '../components/order/SeafoodForm';
export default function Order() {
  //sheria
  //state
  const [open, setOpen] = useState(false)
  const [rows, setRows] = useState([])
  const handleOnClick = () => {
    setOpen(true)
  }
  const handleOnClose = () => {
    setOpen(false)
  }
  const handleOnSubmit = () => {
    setOpen(false)
  }
  return (
    <div>
      <Button
        onClick={handleOnClick}
        sx={{ float: 0, mb: 2 }}
        color={'success'}
        variant='contained'>
        Add seafood
      </Button>

      {/* DIALOG TUMITAA KUTOKA UTILS*/}
      <BasicDialog
        open={open}
        title={'Place Your seafood order'}
        // TUMEITA KUTOKA KWENYE COMPONENTS YA ORDER
        content={
          <SeafoodForm
            handleOnClose={handleOnClose}
          />
        }
      />
      <BasicTable rows={rows} />
    </div>
  );


}
