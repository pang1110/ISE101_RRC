import type { Announcement } from '../.expo/types/announcement';

// Exercise 12: Filter unread announcements
export function getUnreadAnnouncements(items: Announcement[]): Announcement[] {
  return items.filter((item) => item.read === false);
}

// Exercise 11: Format student full name
export function formatStudentName(
  firstName: string,
  lastName: string
): string {
  return `${firstName} ${lastName}`;
}

// Exercise 13: Get announcement titles
export function getAnnouncementTitles(items: Announcement[]): string[] {
  return items.map((item) => item.title);
}

// Exercise 15: Get the sum of numbers
export function getTotal(numbers: number[]): number {
  return numbers.reduce((total, number) => total + number, 0);
}

// Exercise 17: Load announcements from API
type ApiAnnouncement = {
  id: number;
  title: string;
};

export async function loadAnnouncements(): Promise<ApiAnnouncement[]> {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data: unknown = await response.json();

    return data as ApiAnnouncement[];
  } catch (error) {
    console.error('Unable to load announcements:', error);
    throw error;
  }
}