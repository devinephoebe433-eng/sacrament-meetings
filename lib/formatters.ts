import type { MeetingType } from './types';

export function formatMeetingDate(date: string, options?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat('en-US', options ?? { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(
    new Date(`${date}T12:00:00`),
  );
}

export function formatShortDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(`${date}T12:00:00`));
}

export function meetingTypeLabel(type: MeetingType): string {
  return {
    testimony: 'Testimony meeting',
    regular: 'Sacrament meeting',
    stake: 'Stake conference',
    general: 'General conference',
  }[type];
}
