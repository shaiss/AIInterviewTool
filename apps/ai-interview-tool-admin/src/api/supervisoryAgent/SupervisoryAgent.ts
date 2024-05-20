import { JsonValue } from "type-fest";

export type SupervisoryAgent = {
  backgroundInfo: string | null;
  context: string | null;
  createdAt: Date;
  id: string;
  suggestedQuestions: JsonValue;
  summary: string | null;
  updatedAt: Date;
};
