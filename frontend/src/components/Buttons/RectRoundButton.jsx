import React from 'react'

export default function RectRoundButton({action, href, label}) {
    const renderButton = () => {
        if(action) {
            return <button onClick={action} className='combtn'>{label}</button>
        } else if(href){
            return <a href={href} className='combtn'>{label}</a>
        } else {
            return <button className='combtn'>{label}</button>
        }
    }
  return (
    renderButton()
  )
}
