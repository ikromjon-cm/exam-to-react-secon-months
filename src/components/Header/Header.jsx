import React from 'react'

const Header = ({ data }) => {
  return (
    <div className="section">
      <div className="header">
        {data.map((item, index) => (
          <div key={index} className="logo">
            <img src={item.img} alt={item.title} />
            <p className="title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header