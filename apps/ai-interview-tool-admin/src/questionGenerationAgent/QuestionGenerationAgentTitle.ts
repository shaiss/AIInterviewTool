import { QuestionGenerationAgent as TQuestionGenerationAgent } from "../api/questionGenerationAgent/QuestionGenerationAgent";

export const QUESTIONGENERATIONAGENT_TITLE_FIELD = "apiKey";

export const QuestionGenerationAgentTitle = (
  record: TQuestionGenerationAgent
): string => {
  return record.apiKey?.toString() || String(record.id);
};
