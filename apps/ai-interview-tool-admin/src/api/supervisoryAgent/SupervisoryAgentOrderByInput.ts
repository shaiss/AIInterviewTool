import { SortOrder } from "../../util/SortOrder";

export type SupervisoryAgentOrderByInput = {
  backgroundInfo?: SortOrder;
  context?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  suggestedQuestions?: SortOrder;
  summary?: SortOrder;
  updatedAt?: SortOrder;
};
