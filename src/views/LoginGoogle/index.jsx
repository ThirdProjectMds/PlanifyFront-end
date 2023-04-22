import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'

export const LoginGoogle = () => {
  const [searchParams] = useSearchParams()
  const { login } = useContext(AuthContext)
  const token = searchParams.get("callbackToken")

  useEffect(() => {
    login(token);
  }, [])
}
