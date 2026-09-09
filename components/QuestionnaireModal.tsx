"use client"

import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { useLanguage } from '../context/LanguageContext'
import Questionnaire from './Questionnaire'

const QuestionnaireModal: React.FC = () => {
  const { language } = useLanguage()
  const lang = language === 'es' ? 'es' : 'en'
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-questionnaire', handler)
    return () => window.removeEventListener('open-questionnaire', handler)
  }, [])

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
  }

  const handleComplete = () => {
    setOpen(false)
  }

  if (!mounted) return null

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-black/95 border border-[#00d9ff33] text-white sm:max-w-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">
          {lang === 'es' ? 'Revision rapida de sintomas' : 'Quick symptom check'}
        </DialogTitle>
        <Questionnaire bare onComplete={handleComplete} />
      </DialogContent>
    </Dialog>
  )
}

export default QuestionnaireModal
