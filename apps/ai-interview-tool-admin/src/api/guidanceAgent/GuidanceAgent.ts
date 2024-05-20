import { JsonValue } from "type-fest";

export type GuidanceAgent = {
  createdAt: Date;
  guidance: string | null;
  id: string;
  keyTopics: JsonValue;
  transcript: string | null;
  updatedAt: Date;
};
