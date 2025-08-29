import React from 'react'

export default function Player({song}) {
  return (
    <div className='full-h'>{JSON.stringify(song)}</div>
  )
}
