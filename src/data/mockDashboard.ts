import { Users, CalendarCheck, Star, Trophy, Award } from 'lucide-react';
import type {
  AmbassadorProfile,
  ReferralProgress,
  DashboardStat,
  Resource,
  EventItem,
  Badge,
  RewardItem,
  NotificationItem,
} from '../types/dashboard';

// TODO: replace with real API calls once the backend is ready

export const mockProfile: AmbassadorProfile = {
  name: 'Jordan Bello',
  email: 'jordan.bello@example.com',
  phone: '+234 801 234 5678',
  university: 'University of Lagos',
  department: 'Computer Engineering',
  academicLevel: '300 Level',
  state: 'Lagos',
  motivation:
    'I want to help fellow students discover opportunities in tech and build a stronger community of ambassadors across campus.',
  socialMediaLinks: 'linkedin.com/in/jordanbello · x.com/jordanbello',
};

export const mockReferralProgress: ReferralProgress = {
  current: 14,
  goal: 25,
};

export const mockPoints = 320;

export const mockStats: DashboardStat[] = [
  { label: 'Total Referrals', value: 14, icon: Users },
  { label: 'Events Attended', value: 6, icon: CalendarCheck },
  { label: 'Points Earned', value: mockPoints, icon: Star },
  { label: 'Current Rank', value: '#4', icon: Trophy },
];

export const mockResources: Resource[] = [
  {
    id: 'r1',
    title: 'Ambassador Onboarding Guide',
    description: 'Everything you need to know to get started as an EDSIP ambassador.',
    type: 'guide',
    url: '#',
  },
  {
    id: 'r2',
    title: 'Brand Style Guide',
    description: 'Logos, colors, and typography for representing EDSIP correctly.',
    type: 'guide',
    url: '#',
  },
  {
    id: 'r3',
    title: 'Social Media Caption Templates',
    description: 'Ready-to-use captions for promoting events and referrals.',
    type: 'template',
    url: '#',
  },
  {
    id: 'r4',
    title: 'Event Planning Checklist',
    description: 'A step-by-step checklist for running a successful campus event.',
    type: 'template',
    url: '#',
  },
  {
    id: 'r5',
    title: 'Referral Tracking Sheet',
    description: 'A simple spreadsheet to log and follow up on your referrals.',
    type: 'template',
    url: '#',
  },
  {
    id: 'r6',
    title: 'Official Ambassador Community',
    description: 'Join the WhatsApp group to connect with other ambassadors.',
    type: 'link',
    url: '#',
  },
];

export const mockEvents: EventItem[] = [
  {
    id: 'e1',
    title: "Freshers' Welcome Talk",
    date: 'Sep 5, 2026',
    location: 'Main Auditorium, UNILAG',
    status: 'upcoming',
  },
  {
    id: 'e2',
    title: 'Tech Career Fair 2026',
    date: 'Aug 20, 2026',
    location: 'Main Auditorium, UNILAG',
    status: 'upcoming',
  },
  {
    id: 'e3',
    title: 'Ambassador Onboarding Meetup',
    date: 'Aug 12, 2026',
    location: 'Online (Zoom)',
    status: 'upcoming',
  },
  {
    id: 'e4',
    title: 'Campus Coding Bootcamp',
    date: 'Jul 15, 2026',
    location: 'CS Building, UNILAG',
    status: 'past',
  },
  {
    id: 'e5',
    title: 'Referral Drive Kickoff',
    date: 'Jun 30, 2026',
    location: 'Student Center',
    status: 'past',
  },
  {
    id: 'e6',
    title: 'EDSIP Demo Day',
    date: 'Jun 10, 2026',
    location: 'Innovation Hub',
    status: 'past',
  },
];

export const mockBadges: Badge[] = [
  { id: 'b1', title: 'First Referral', icon: Users, earned: true },
  { id: 'b2', title: 'Event Enthusiast', icon: CalendarCheck, earned: true },
  { id: 'b3', title: 'Top Recruiter', icon: Trophy, earned: true },
  { id: 'b4', title: 'Community Builder', icon: Award, earned: false },
  { id: 'b5', title: 'Perfect Attendance', icon: Star, earned: false },
];

export const mockRewards: RewardItem[] = [
  {
    id: 'rw1',
    title: 'Exclusive Webinar Access',
    description: 'Get early access to ambassador-only webinars.',
    pointsCost: 150,
  },
  {
    id: 'rw2',
    title: 'Feature on Instagram',
    description: 'Get shouted out on the official EDSIP Instagram page.',
    pointsCost: 200,
  },
  {
    id: 'rw3',
    title: 'Certificate of Excellence',
    description: 'A signed certificate recognizing your contribution.',
    pointsCost: 350,
  },
  {
    id: 'rw4',
    title: 'EDSIP Hoodie',
    description: 'Official branded hoodie, shipped to your address.',
    pointsCost: 500,
  },
];

export const mockNotifications: NotificationItem[] = [
  {
    id: 'n1',
    title: 'New event added',
    description: 'Tech Career Fair 2026 has been added to your events.',
    time: '2h ago',
    read: false,
  },
  {
    id: 'n2',
    title: 'Referral milestone',
    description: "You're 11 referrals away from this month's goal.",
    time: '1d ago',
    read: false,
  },
  {
    id: 'n3',
    title: 'Resource updated',
    description: 'The Brand Style Guide was just updated.',
    time: '3d ago',
    read: true,
  },
  {
    id: 'n4',
    title: 'Welcome to EDSIP!',
    description: 'Thanks for joining the Ambassador Program.',
    time: '1w ago',
    read: true,
  },
];