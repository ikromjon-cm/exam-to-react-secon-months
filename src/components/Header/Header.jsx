import React from 'react'

const Header = ({data}) => {
  return (
    <div>
      <div className="Header">
        <div className="logo">
            <img src={data.img} alt="jj" />
            <p>{data.title}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Header
