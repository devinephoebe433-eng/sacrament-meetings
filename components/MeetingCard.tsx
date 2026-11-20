import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';
import { formatMeetingDate, meetingTypeLabel } from '@/lib/formatters';

interface MeetingCardProps {
  meeting: SacramentMeeting;
  featured?: boolean;
}

export default function MeetingCard({ meeting, featured = false }: MeetingCardProps) {
  const speakingCount = meeting.speakers.filter((item) => item.type === 'speaker').length;
  const musicCount = meeting.speakers.filter((item) => item.type === 'musical-number').length;

  return (
    <article className={`group relative overflow-hidden rounded-2xl border bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 ${featured ? 'border-blue-200 shadow-md shadow-blue-100/60' : 'border-slate-200'}`}>
      <div className="absolute left-0 top-0 h-full w-1 bg-cobalt" aria-hidden="true" />
      <div className="p-6 pl-7 sm:p-7 sm:pl-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cobalt">{formatMeetingDate(meeting.date, { weekday: 'short', month: 'short', day: 'numeric' })}</p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">{meetingTypeLabel(meeting.meetingType)}</h3>
          </div>
          {featured ? <span className="rounded-full bg-blue-pale px-3 py-1 text-xs font-bold text-cobalt">Most recent</span> : null}
        </div>
        <div className="mt-6 grid gap-4 border-t border-slate-100 pt-5 text-sm sm:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Presiding</p>
            <p className="mt-1 font-semibold text-slate-700">{meeting.presiding.replace(/^(Bishop|President) /, '')}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Agenda</p>
            <p className="mt-1 font-semibold text-slate-700">{speakingCount} {speakingCount === 1 ? 'speaker' : 'speakers'}{musicCount ? ` · ${musicCount} musical` : ''}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Business</p>
            <p className="mt-1 font-semibold text-slate-700">{meeting.stakeBusiness ? 'Stake included' : 'Ward focus'}</p>
          </div>
        </div>
        <Link href={`/meetings/${meeting.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cobalt transition-colors hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2">
          Open program <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
