import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-10-18',
    meetingType: 'testimony',
    presiding: 'Bishop Aaron Miller',
    conducting: 'Sister Naomi Carter',
    announcements: ['Temple recommend interviews are available after the meeting.', 'Youth choir rehearsal begins at 4:00 PM on Tuesday.'],
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Brother Caleb Jensen',
    wardBusiness: [{ description: 'Sustaining of the new Primary presidency.' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
    speakers: [
      { name: 'Members of the Maple Grove Ward', topic: 'Testimonies', type: 'speaker' },
    ],
    closingHymn: { number: 227, title: 'There Is Sunshine in My Soul Today' },
    closingPrayer: 'Sister Ruth Park',
  },
  {
    id: 2,
    date: '2026-10-25',
    meetingType: 'regular',
    presiding: 'Bishop Aaron Miller',
    conducting: 'Brother Thomas Lee',
    announcements: ['Food drive donations can be left in the foyer through Sunday.'],
    openingHymn: { number: 81, title: 'Press Forward, Saints' },
    openingPrayer: 'Sister Elena Morales',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
    speakers: [
      { name: 'Elder Mason Reed', topic: 'Finding peace in Christ', type: 'speaker' },
      { name: 'Maple Grove Young Women', topic: 'Come unto Christ', type: 'musical-number' },
      { name: 'Sister Hannah Brooks', topic: 'Ministering with intention', type: 'speaker' },
    ],
    closingHymn: { number: 223, title: 'Have I Done Any Good?' },
    closingPrayer: 'Brother David Kim',
  },
  {
    id: 3,
    date: '2026-11-01',
    meetingType: 'regular',
    presiding: 'Bishop Aaron Miller',
    conducting: 'Sister Naomi Carter',
    announcements: ['Relief Society service night is Wednesday at 7:00 PM.', 'Please review the November ministering assignments.'],
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Brother James Walton',
    wardBusiness: [{ description: 'Ward conference follow-up and volunteer sign-ups.' }],
    stakeBusiness: true,
    sacramentHymn: { number: 194, title: 'There Is a Green Hill Far Away' },
    speakers: [
      { name: 'President Laura Chen', topic: 'A house of prayer and faith', type: 'speaker' },
      { name: 'Brother Isaac Moore', topic: 'Remembering the covenant path', type: 'speaker' },
    ],
    closingHymn: { number: 97, title: 'Lead, Kindly Light' },
    closingPrayer: 'Sister Grace Wilson',
  },
  {
    id: 4,
    date: '2026-11-08',
    meetingType: 'stake',
    presiding: 'President Miguel Santos',
    conducting: 'Brother Thomas Lee',
    announcements: ['Stake youth devotional begins at 6:00 PM this evening.'],
    openingHymn: { number: 66, title: 'Rejoice, the Lord Is King!' },
    openingPrayer: 'Sister Priya Shah',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
    speakers: [
      { name: 'President Miguel Santos', topic: 'Gathering in faith', type: 'speaker' },
      { name: 'Sister Celeste Rivera', topic: 'The Lord knows our names', type: 'speaker' },
    ],
    closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
    closingPrayer: 'Elder Noah Whitaker',
  },
  {
    id: 5,
    date: '2026-11-15',
    meetingType: 'regular',
    presiding: 'Bishop Aaron Miller',
    conducting: 'Sister Naomi Carter',
    announcements: ['The Thanksgiving service project is collecting pantry staples in the cultural hall.', 'Next Sunday is the ward choir presentation.'],
    openingHymn: { number: 227, title: 'There Is Sunshine in My Soul Today' },
    openingPrayer: 'Brother Caleb Jensen',
    wardBusiness: [{ description: 'Calling of two Sunday School teachers.' }],
    stakeBusiness: false,
    sacramentHymn: { number: 173, title: 'While of These Emblems We Partake' },
    speakers: [
      { name: 'Sister Naomi Carter', topic: 'Making room for gratitude', type: 'speaker' },
      { name: 'Maple Grove Ward Choir', topic: 'Come, Ye Thankful People', type: 'musical-number' },
      { name: 'Brother Thomas Lee', topic: 'Small acts, lasting faith', type: 'speaker' },
    ],
    closingHymn: { number: 219, title: 'Because I Have Been Given Much' },
    closingPrayer: 'Sister Ruth Park',
  },
];

export function getMeetings(date?: string): SacramentMeeting[] {
  const result = date ? meetings.filter((meeting) => meeting.date === date) : meetings;
  return [...result].sort((a, b) => b.date.localeCompare(a.date));
}

export function getMeetingById(id: number): SacramentMeeting | undefined {
  return meetings.find((meeting) => meeting.id === id);
}

export function getCurrentMeeting(): SacramentMeeting {
  return getMeetings()[0];
}
