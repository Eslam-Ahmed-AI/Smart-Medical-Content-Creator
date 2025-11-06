'use client';

import React, { useState } from 'react';
import { Copy, Check, Stethoscope, TrendingUp, Users, Clock, ChevronRight, MessageCircle, Share2, Download } from 'lucide-react';

export default function DentalContentGenerator() {
  const [formData, setFormData] = useState({
    doctorName: '',
    country: 'مصر',
    specialty: 'طبيب أسنان عام',
    goal: 'زيادة الوعي',
    audience: 'كلاهما',
    platform: 'Instagram',
    contentType: 'بوست نصي',
    presentationType: 'بوست عادي',
    topic: '',
    tone: 'رسمي / موثوق',
    length: 'متوسط (100-250 كلمة)',
    language: 'عربي عامي',
    visualStyle: 'احترافي / نظيف',
    colorScheme: 'أزرق وأبيض (ثقة وطب)',
    duration: '30 ثانية',
    addExample: 'لا',
    exampleDetails: '',
    visualElements: '',
    hashtags: '',
    autoHashtags: true,
    previousContent: '',
    notes: ''
  });

  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [totalGenerated, setTotalGenerated] = useState(() => {
    if (typeof window !== 'undefined') {
      return parseInt(localStorage.getItem('totalGenerated') || '0');
    }
    return 0;
  });

  // ... (نفس باقي الكود من المكون React)
  // انسخ كل الكود من الأداة أعلاه
}