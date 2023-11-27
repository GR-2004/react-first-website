import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <footer className='bg-light text-center m-5'>
        <p>©️ {year} Ganesh Rana. All Rights reserved | Terms and Condition</p>
      </footer>
    </>
  )
}

export default Footer
