import { SortOrder } from "../../util/SortOrder";

export type TranscriptionAgentOrderByInput = {
  audioFilePath?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  transcript?: SortOrder;
  updatedAt?: SortOrder;
};
