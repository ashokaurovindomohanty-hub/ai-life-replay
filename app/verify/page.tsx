'use client'
import { useState } from 'react'
export default function VerifyPage() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [age, setAge] = useState(false)
  const verify = async () => {
    const res = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ email, otp, ageConfirmed: age })
    })
    const data = await res.json()
    alert(data.success ? 'Verified' : data.error)
  }
  return (
    <div>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="OTP" onChange={e=>setOtp(e.target.value)} />
      <label><input type="checkbox" checked={age} onChange={e=>setAge(e.target.checked)} /> I confirm I am 18+</label>
      <button onClick={verify}>Verify</button>
    </div>
  )
}

