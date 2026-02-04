import React from 'react'

const Header = ({data}) => {
  return (
    <div>
      <div className="Header">
        {data.map((item,index)=>
        <div key={index} className="logo">
            <img src={item.img} alt="Logo" />
            <p>{item.title}</p>
        </div>
        )}
        
      </div>
    </div>
  )
}

export default Header
