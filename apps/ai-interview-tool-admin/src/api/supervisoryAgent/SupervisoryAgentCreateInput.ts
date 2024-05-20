import { InputJsonValue } from "../../types";

export type SupervisoryAgentCreateInput = {
  backgroundInfo?: string | null;
  context?: string | null;
  suggestedQuestions?: InputJsonValue;
  summary?: string | null;
};
