import React from 'react'

export const metadata = {
  title: 'Résumé',
  description: 'Curriculum Vitae of Thura Nyi',
}

export default function ResumePage() {
  return (
    <div className='fixed inset-0 w-screen h-screen'>
      <object
        data='/assets/Resume/thuranyi.pdf#zoom=140'
        type='application/pdf'
        width='100%'
        height='100%'
      >
        <iframe
          src='/assets/Resume/thuranyi.pdf#zoom=140&toolbar=1&navpanes=0&scrollbar=1'
          width='100%'
          height='100%'
          title='Thura Nyi Résumé'
        />
        <p className='p-4'>
          Your browser does not support viewing PDFs. You can
          {' '}
          <a className='underline' href='/assets/Resume/thuranyi.pdf' target='_blank' rel='noopener noreferrer'>
            download the résumé here
          </a>
          .
        </p>
      </object>
    </div>
  )
}


