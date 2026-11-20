'use client';

import { useEffect, useState } from 'react';
import { formatMeetingDate } from '@/lib/formatters';

export default function CurrentDate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setDate(new Date().toISOString().slice(0, 10)), 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return <span>{date ? formatMeetingDate(date, { month: 'short', day: 'numeric', year: 'numeric' }) : 'Today'}</span>;
}
