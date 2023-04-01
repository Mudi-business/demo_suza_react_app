import { Stack } from '@mui/material'
import React, { useState,useContext } from 'react'
import GeneralDialogActions from '../../utils/GeneralDialogActions'
import ValidationTextField from '../../utils/ValidationTextField'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import environment from '../../environment'
import CircleProgresBar from '../../utils/CircleProgresBar'
export default function SeafoodForm({handleOnClose}) {
    const {setForm,setDiolog,setTbLoading} = useContext(AppContext);
    const [seafood,setSeafood] = useState('')
    const [quantity,setQuantity] = useState(0)
    const [price,setPrice] = useState(0)
    const [loading,setLoading] = useState(false)
    const [loadingColor,setLoadingColor] = useState('inherit')
    
    return (
        <Stack spacing={1} direction={'column'}>
            <Stack direction={'row'} justifyContent={'center'}>
              <CircleProgresBar loading={loading} color={loadingColor} />
            </Stack>
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
        
                    const body = {
                        seafood,
                        quantity,
                        price
                    }
                    const createOrder = async () =>{
                        try {
                               setLoading(true)
                               setLoadingColor('success')
                               const response =  await axios.post(
                                `${environment.baseApiUrl}58d87229539449efb5e8d3ea6a10001b/unicorns`,
                                body
                                )
                                setForm(response.data)
                                setLoading(false)
                                setLoadingColor('inherit')
                                setDiolog(false)
                                setSeafood("")
                                setQuantity(0)
                                setPrice(0)
                        } catch (error) {
                            //pop error
                            setLoadingColor('error')
                            setTimeout(() => {
                                setLoading(false)
                            }, 3000);
                        }
                        
                    }
                    createOrder()
                }}
                handleOnClose={handleOnClose}
            />
        </Stack>
    )
}
