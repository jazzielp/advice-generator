export function Loading () {
  return (
    <div className='flex gap-5 justify-center'>
      <span className='relative flex h-6 w-6'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-light-cyan opacity-75' />
        <span className='relative inline-flex rounded-full h-6 w-6 bg-light-cyan' />
      </span>
      <span className='relative flex h-6 w-6'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-light-cyan opacity-75' />
        <span className='relative inline-flex rounded-full h-6 w-6 bg-light-cyan' />
      </span>
      <span className='relative flex h-6 w-6'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-light-cyan opacity-75' />
        <span className='relative inline-flex rounded-full h-6 w-6 bg-light-cyan' />
      </span>
    </div>
  )
}
