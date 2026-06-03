export const Hero = ({head, par, items, children, tc}) => {
  return (
    <div className={`hero-sec h-[40rem] items-${items} text-${tc}`}>
      <h1 className='font-[Lora,_sans-serif] font-semibold text-[60px] w-[65%]'>{head}</h1>
      <p className='font-[25px]'>{par}</p>
      {children}
    </div>
  )
}