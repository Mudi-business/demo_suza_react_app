import { Stack } from '@mui/material'
import React, { useState,useContext } from 'react'
import GeneralDialogActions from '../../utils/GeneralDialogActions'
import ValidationTextField from '../../utils/ValidationTextField'
import { AppContext } from '../../context/AppContext'
export default function SeafoodForm({handleOnClose}) {
    const {setForm,setDiolog} = useContext(AppContext);
    const [seafood,setSeafood] = useState('')
    const [quantity,setQuantity] = useState(0)
    const [price,setPrice] = useState(0)
    return (
        <Stack spacing={1} direction={'column'}>
            <ValidationTextField
                name={'seafood'}
                value={seafood}
                type={'text'}
                placeholder={'Enter seafood name'}
                helperText={''}
                label={'Seafood name'}
                onChange={(event)=>{
                    setSeafood(event.target.value)
                }}
                error={false}
            />
            <ValidationTextField
                name={'quantity'}
                value={quantity}
                placeholder={'Enter quantity'}
                helperText={''}
                type={'number'}
                onChange={(event)=>{
                    setQuantity(event.target.value)
                }}
                label={'Quantity'}
                error={false}
            />
            <ValidationTextField
                value={price}
                name={'price'}
                type={'number'}
                placeholder={'Enter price'}
                helperText={''}
                label={'Price'}
                onChange={(event)=>{
                    setPrice(event.target.value)
                }}
                error={false}
            />

            <GeneralDialogActions
                action={'Submit'}
                handleSubmit={()=>{
                    setForm({
                        seafood,
                        quantity,
                        price
                    })
                    setDiolog(false)
                    setSeafood("")
                    setQuantity(0)
                    setPrice(0)
                }}
                handleOnClose={handleOnClose}
            />
        </Stack>
    )
}
