export type Locale = "th" | "en";

export type Dictionary = typeof import("@/messages/en.json");

export type RSVPForm = {
  name: string;
  attendance: "yes" | "no" | "";
  guestCount: string;
  mealNote: string;
  phone: string;
  message: string;
};
