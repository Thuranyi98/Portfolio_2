import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
  return (
      <div className=' lg:py-[100px]'>{children}</div>
  )
}

export default layout