import { InputJsonValue } from "../../types";

export type SupervisoryAgentUpdateInput = {
  backgroundInfo?: string | null;
  context?: string | null;
  suggestedQuestions?: InputJsonValue;
  summary?: string | null;
};
