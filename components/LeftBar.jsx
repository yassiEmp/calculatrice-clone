import React from 'react'

const LeftBar = () => {
  return (
    <section className='h-full w-1/5 absolute top-0 right-0 grow max-[650px]:hidden '>
      <nav className='w-full h-8 flex gap-5'>
        <p className='h-6'>Historique</p>
        <p className='h-6'>memoire</p>
      </nav>
    </section>
  )
}

export default LeftBar
