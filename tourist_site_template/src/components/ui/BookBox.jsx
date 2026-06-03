export const BookBox = ({display, bg, position}) => {
  return (
    <div className={`book-box bg-[${bg}] ${position}`}>
    <form action="" className={`${display} bg-gray-100 rounded-[10px] h-[60%] self-center w-[30%] p-[10px] border-none`}>
    <input type="text" placeholder='Search activities or Destinations' className=' border-none text-black text-[15px] w-[100%]'/>
    <img src="./search.png" alt="" />
    </form>
    <div>
      <span>Guest(s)</span>
      <div className='flex items-center gap-[5px]'>
        <p>2 Adults</p>
        <img src="./chevron-bottom.png" alt="dropdown" />
        </div>
      </div>
      <div>
        <span>Date</span>
        <div className='flex items-center gap-[5px]'>
          <p>12 - 13 April 2021</p>
          <img src="./chevron-bottom.png" alt="dropdown" />
        </div>
      </div>
      <div>
        <span>Package</span>
        <div className='flex items-center gap-[5px]'>
          <p>All</p>
          <img src="./chevron-bottom.png" alt="dropdown" />
        </div>
      </div>
      <div>
        <button className='text-white border border-[#304f47] bg-[#c7923e] rounded-[8px] px-13.5 py-2.5'>Book Now</button>
      </div>
  </div>
  )
}