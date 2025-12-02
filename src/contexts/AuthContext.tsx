"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type UserType = 'guest' | 'amateur' | 'legends'

interface AuthContextType {
  userType: UserType
  isLoggedIn: boolean
  setViewMode: (type: UserType) => void
  login: (type: 'amateur' | 'legends') => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<UserType>('amateur')

  useEffect(() => {
    // Load from localStorage on mount
    const savedUserType = localStorage.getItem('userType') as UserType
    if (savedUserType) {
      setUserType(savedUserType)
    }
  }, [])

  const setViewMode = (type: UserType) => {
    setUserType(type)
    localStorage.setItem('userType', type)
  }

  const login = (type: 'amateur' | 'legends') => {
    setUserType(type)
    localStorage.setItem('userType', type)
  }

  const logout = () => {
    setUserType('guest')
    localStorage.removeItem('userType')
  }

  const isLoggedIn = userType !== 'guest'

  return (
    <AuthContext.Provider value={{ userType, isLoggedIn, setViewMode, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}