import { useState, useEffect } from 'react'
export default function useDeviceType () {
  const [deviceType, setDeviceType] = useState('desktop')
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (/mobile|adroid|iphone|ipad|tablet/.test(userAgent)) {
      if (/tablet/.test(userAgent)) {
        setDeviceType('tablet')
      } else {
        setDeviceType('mobile')
      }
    }
  }, [])
  return { deviceType }
}
