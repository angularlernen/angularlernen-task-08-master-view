export interface EventResponse {
  id: number;
  title: string;
  shortDescription: string;
  eventDate: string;
  pictureUrl: string;
  organizerId: number;
  participantIds: number[];
}