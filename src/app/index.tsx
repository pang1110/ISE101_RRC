import { StyleSheet, Text, View } from 'react-native';
import type { Announcement } from '../../.expo/types/announcement';
import {
  getUnreadAnnouncements,
  getAnnouncementTitles,
} from '../../services/announcementUtils';

const sampleAnnouncements: Announcement[] = [
  {
    id: 'a1',
    title: 'Enrollment reminders',
    category: 'Academic',
    read: false,
  },
  {
    id: 'a2',
    title: 'Campus orientation',
    category: 'Events',
    read: true,
  },
  {
    id: 'a3',
    title: 'Library schedule',
    category: 'Notice',
    read: false,
  },
];

export default function HomeScreen() {
  const unread = getUnreadAnnouncements(sampleAnnouncements);
  const titles = getAnnouncementTitles(sampleAnnouncements);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text>One campus. Connected students.</Text>
      <Text>Welcome to the Week 2 project!</Text>

      <Text style={styles.heading}>Announcements</Text>
      <Text>Unread announcements: {unread.length}</Text>

      {titles.map((title, index) => (
        <Text key={sampleAnnouncements[index].id} style={styles.item}>
          {title}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 10,
  },
  item: {
    marginTop: 8,
  },
});