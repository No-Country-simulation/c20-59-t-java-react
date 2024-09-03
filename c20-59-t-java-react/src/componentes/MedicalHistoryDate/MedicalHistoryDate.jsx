import React from 'react'
import './MedicalHistoryDateStyles.css'

const MedicalHistoryDate = ({date}) => {
  return (
    <div className='medicalHistory px-3 py-4 mb-2'>
        {/* {date} */}
        <p className='historyDate mb-2'>2/09/24</p>
        <p className='historyResume p-0 m-0'>Consulta al traumatólogo. Se recomienda reposo de dos semanas y 5 sesiones de kinesiologia</p>
    </div>
  )
}

export default MedicalHistoryDate