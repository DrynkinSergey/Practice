import React from 'react'

export const Item = ({item}) => {
  return (
    <div>{item.name} :  {item.price}</div>
  )
}
