import Dice from './assets/Icons/Dice'
import { Loading } from './assets/Icons/Loading'
import { PatternDividerDesktop } from './assets/Icons/PatternDividerDesktop'
import { PatternDividerMobile } from './assets/Icons/PatternDividerMobile'
import { useAdvice } from './hooks/useAdvice'

function App () {
  const { advice, loading, error, getAdvice } = useAdvice()
  const { slip } = advice
  return (
    <>
      {error && <p>Error: {error.message}</p>}
      <div className='bg-dark-grayish-blue rounded-2xl px-6 md:px-12 py-12 w-[343px] md:w-[540px] text-center mx-auto relative'>
        <h1 className='font-manrope text-[11px] md:text-[13px] font-extrabold text-red-400 text-neon-green tracking-[4.9px] mb-6'>ADVICE {'#' + slip ? slip?.id : ''}</h1>
        <p className='font-manrope font-extrabold text-2xl md:text-[28px] tracking-[-0.26px] text-light-cyan mb-10'>{loading ? <Loading /> : `“${slip.advice}”`}</p>
        <PatternDividerMobile className='mb-6 md:hidden' />
        <PatternDividerDesktop className='mb-12 hidden md:block' />
        <button onClick={getAdvice} className='flex justify-center items-center size-16 rounded-full bg-neon-green absolute bottom-[-25px] left-[50%] transform -translate-x-1/2 cursor-pointer hover:shadow-neon-green transition-all duration-200 ease-in-out'>
          <Dice />
        </button>
      </div>

    </>
  )
}

export default App
