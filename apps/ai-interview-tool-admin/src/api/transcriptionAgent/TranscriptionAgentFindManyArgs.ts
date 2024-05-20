import { TranscriptionAgentWhereInput } from "./TranscriptionAgentWhereInput";
import { TranscriptionAgentOrderByInput } from "./TranscriptionAgentOrderByInput";

export type TranscriptionAgentFindManyArgs = {
  where?: TranscriptionAgentWhereInput;
  orderBy?: Array<TranscriptionAgentOrderByInput>;
  skip?: number;
  take?: number;
};
