import { useState, useEffect, useCallback } from 'react'
export function useAdvice () {
  const [advice, setAdvice] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getAdvice = useCallback(async () => {
    setAdvice('')
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('https://api.adviceslip.com/advice')
      if (!res.ok) {
        throw new Error('Network response was not ok.')
      }
      const data = await res.json()
      setAdvice(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getAdvice()
  }, [])
  return { advice, loading, error, getAdvice }
}
