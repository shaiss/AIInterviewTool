import { QuestionGenerationAgentWhereInput } from "./QuestionGenerationAgentWhereInput";
import { QuestionGenerationAgentOrderByInput } from "./QuestionGenerationAgentOrderByInput";

export type QuestionGenerationAgentFindManyArgs = {
  where?: QuestionGenerationAgentWhereInput;
  orderBy?: Array<QuestionGenerationAgentOrderByInput>;
  skip?: number;
  take?: number;
};
