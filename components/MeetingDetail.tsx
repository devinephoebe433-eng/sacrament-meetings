import type { ReactNode } from 'react';
import type { SacramentMeeting } from '@/lib/types';
import { formatMeetingDate, meetingTypeLabel } from '@/lib/formatters';
import PrintButton from './PrintButton';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

function AgendaSection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="agenda-section">
      <div className="agenda-index" aria-hidden="true">{number}</div>
      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-bold tracking-tight text-ink">{title}</h2>
        <div className="mt-3 text-[15px] leading-7 text-slate-600">{children}</div>
      </div>
    </section>
  );
}

function HymnLine({ hymn }: { hymn: { number: number; title: string } }) {
  return <p><span className="font-bold text-ink">#{hymn.number}</span> · {hymn.title}</p>;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  const speakers = meeting.speakers.filter((item) => item.type === 'speaker');
  const musicalNumbers = meeting.speakers.filter((item) => item.type === 'musical-number');

  return (
    <div className="print-program">
      <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cobalt">{meetingTypeLabel(meeting.meetingType)}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">{formatMeetingDate(meeting.date)}</h1>
          <p className="mt-4 text-sm text-slate-500">Presiding: <span className="font-semibold text-slate-700">{meeting.presiding}</span> · Conducting: <span className="font-semibold text-slate-700">{meeting.conducting}</span></p>
        </div>
        <PrintButton />
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Order of worship</p>
          <div className="space-y-8">
            <AgendaSection number="01" title="Announcements">
              {meeting.announcements?.length ? (
                <ul className="space-y-2">
                  {meeting.announcements.map((announcement) => <li key={announcement} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" aria-hidden="true" />{announcement}</li>)}
                </ul>
              ) : <p>No announcements listed.</p>}
            </AgendaSection>
            <AgendaSection number="02" title="Opening hymn"><HymnLine hymn={meeting.openingHymn} /></AgendaSection>
            <AgendaSection number="03" title="Opening prayer"><p>{meeting.openingPrayer}</p></AgendaSection>
            <AgendaSection number="04" title="Ward business">
              {meeting.wardBusiness.length ? <ul className="space-y-2">{meeting.wardBusiness.map((item) => <li key={item.description} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" aria-hidden="true" />{item.description}</li>)}</ul> : <p>No ward business scheduled.</p>}
            </AgendaSection>
            <AgendaSection number="05" title="Stake business"><p>{meeting.stakeBusiness ? 'Stake business is included in today’s program.' : 'No stake business scheduled.'}</p></AgendaSection>
            <AgendaSection number="06" title="Sacrament hymn"><HymnLine hymn={meeting.sacramentHymn} /></AgendaSection>
            <AgendaSection number="07" title="Speakers and musical numbers">
              <div className="space-y-4">
                {speakers.map((speaker) => <div key={`${speaker.name}-${speaker.topic}`}><p className="font-bold text-ink">{speaker.name}</p><p>{speaker.topic}</p></div>)}
                {musicalNumbers.map((number) => <div key={`${number.name}-${number.topic}`} className="border-l-2 border-blue-200 pl-4"><p className="font-bold text-ink">Musical number · {number.name}</p><p>{number.topic}</p></div>)}
              </div>
            </AgendaSection>
            <AgendaSection number="08" title="Closing hymn"><HymnLine hymn={meeting.closingHymn} /></AgendaSection>
            <AgendaSection number="09" title="Closing prayer"><p>{meeting.closingPrayer}</p></AgendaSection>
          </div>
        </div>

        <aside className="space-y-4 print:hidden">
          <div className="rounded-2xl bg-ink p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Meeting notes</p>
            <p className="mt-4 text-2xl font-bold tracking-tight">A prepared meeting makes room for people.</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">Use the print button to share a simple program with ushers, musicians, and the congregation.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-blue-pale p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cobalt">Program check</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4"><dt className="text-slate-500">Hymns</dt><dd className="font-bold text-ink">3</dd></div>
              <div className="flex items-center justify-between gap-4"><dt className="text-slate-500">Speakers</dt><dd className="font-bold text-ink">{speakers.length}</dd></div>
              <div className="flex items-center justify-between gap-4"><dt className="text-slate-500">Music</dt><dd className="font-bold text-ink">{musicalNumbers.length}</dd></div>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
