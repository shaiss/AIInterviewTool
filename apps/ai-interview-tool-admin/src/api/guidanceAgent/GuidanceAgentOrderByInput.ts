import { SortOrder } from "../../util/SortOrder";

export type GuidanceAgentOrderByInput = {
  createdAt?: SortOrder;
  guidance?: SortOrder;
  id?: SortOrder;
  keyTopics?: SortOrder;
  transcript?: SortOrder;
  updatedAt?: SortOrder;
};
