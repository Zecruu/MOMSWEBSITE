"use client"

import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { useLanguage } from '../context/LanguageContext'
import Questionnaire from './Questionnaire'

const COMPLETED_KEY = 'questionnaire-completed'
const DISMISSED_KEY = 'questionnaire-dismissed'
const AUTO_OPEN_DELAY_MS = 1200

const QuestionnaireModal: React.FC = () => {
  const { language } = useLanguage()
  const lang = language === 'es' ? 'es' : 'en'
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const completed = typeof window !== 'undefined' && localStorage.getItem(COMPLETED_KEY) === 'true'
    const dismissed = typeof window !== 'undefined' && sessionStorage.getItem(DISMISSED_KEY) === 'true'
    if (!completed && !dismissed) {
      const t = setTimeout(() => setOpen(true), AUTO_OPEN_DELAY_MS)
      return () => clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-questionnaire', handler)
    return () => window.removeEventListener('open-questionnaire', handler)
  }, [])

  const handleOpenChange = (next: boolean) => {
    if (!next && open) {
      try {
        sessionStorage.setItem(DISMISSED_KEY, 'true')
      } catch {}
    }
    setOpen(next)
  }

  const handleComplete = () => {
    try {
      localStorage.setItem(COMPLETED_KEY, 'true')
    } catch {}
    setOpen(false)
  }

  if (!mounted) return null

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-black/95 border border-[#00d9ff33] text-white sm:max-w-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">
          {lang === 'es' ? 'Cuestionario rápido' : 'Quick questionnaire'}
        </DialogTitle>
        <Questionnaire bare onComplete={handleComplete} />
      </DialogContent>
    </Dialog>
  )
}

export default QuestionnaireModal
