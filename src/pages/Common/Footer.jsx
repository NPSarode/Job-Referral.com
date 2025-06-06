import React from 'react'

const Footer = ({title, tech}) => {
  return (
    <div className='foot'>
      <h6>Made by <em> {title} </em> Using <em> {tech} </em> </h6>
    </div>
  )
}

export default Footer
