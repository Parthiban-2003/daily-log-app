export type Entry = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "completed" | "pending";
};