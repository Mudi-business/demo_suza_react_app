import { Stack } from '@mui/material'
import React, { useState } from 'react'
import GeneralDialogActions from '../../utils/GeneralDialogActions'
import ValidationTextField from '../../utils/ValidationTextField'

export default function SeafoodForm({handleOnClose}) {

    const [seafood,setSeafood] = useState('')
    const [quantity,setQuantity] = useState(0)
    const [price,setPrice] = useState(0)
    return (
        <Stack spacing={1} direction={'column'}>
            <ValidationTextField
                name={'seafood'}
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
                    console.log(
                        'seafood :',seafood,
                        'qntity :',quantity,
                        'price :',price
                    )
                }}
                handleOnClose={handleOnClose}
            />
        </Stack>
    )
}
