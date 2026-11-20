'use client';

import { useEffect, useState } from 'react';
import { formatMeetingDate } from '@/lib/formatters';

export default function CurrentDate() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    setDate(new Date().toISOString().slice(0, 10));
  }, []);

  return <span>{date ? formatMeetingDate(date, { month: 'short', day: 'numeric', year: 'numeric' }) : 'Today'}</span>;
}
