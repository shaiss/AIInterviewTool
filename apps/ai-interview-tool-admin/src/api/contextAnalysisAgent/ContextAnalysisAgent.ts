import { JsonValue } from "type-fest";

export type ContextAnalysisAgent = {
  createdAt: Date;
  entities: JsonValue;
  id: string;
  text: string | null;
  updatedAt: Date;
};
