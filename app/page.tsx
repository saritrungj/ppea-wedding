import { WeddingInvitation } from "@/components/wedding-invitation";
import en from "@/messages/en.json";
import th from "@/messages/th.json";

export default function Home() {
  return <WeddingInvitation dictionaries={{ th, en }} defaultLocale="th" />;
}
