import React from 'react'

export default function RectRoundButton({action, href, label}) {
    const renderButton = () => {
        if(action) {
            return <button onClick={action} className='combtn rect-round-btn theme-btn common-button filled-btn'>{label}</button>
        } else if(href){
            return <a href={href} className='combtn rect-round-btn theme-btn common-button filled-btn'>{label}</a>
        } else {
            return <button className='combtn rect-round-btn theme-btn common-button filled-btn'>{label}</button>
        }
    }
  return (
    renderButton()
  )
}
