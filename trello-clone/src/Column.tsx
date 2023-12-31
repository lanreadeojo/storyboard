import React, {PropsWithChildren} from 'react';
import {AddNewItem} from './AddNewItem'
import {ColumnContainer,ColumnTitle} from './styles'
interface ColumnProps{
    text: string
}
export const  Column = ({text, children} : PropsWithChildren<ColumnProps>)=>{
    return(
      <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {children}
        <AddNewItem toggleButtonText = '+ Add new item' onAdd={console.log}/>
        </ColumnContainer>
    )
}