import 'bootstrap/dist/css/bootstrap.min.css';
import '../Date/DateStyles.css'

const Date = () => {
  return (
    <div className="d-flex justify-content-between align-items-center date px-3 rounded-4 mb-2">
      <div className=''>
        <p className='headline-2 m-0 p-0'>Dolor de cabeza</p>
        <p className='homeDr m-0 '>Dr. Ramirez</p>
      </div>
      <div className='homeCircleDate d-flex flex-column justify-content-center'>
        <p className='headline-2 m-0'>4-Sep</p>
        <p className='homeTime mb-2'>10:30am</p>
      </div>
    </div>
  );
};

export default Date;
