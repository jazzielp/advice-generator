import { useState, useEffect } from 'react'
export function useAdvice () {
  const [advice, setAdvice] = useState('')
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(setAdvice)
  }, [])
  return { advice }
}
