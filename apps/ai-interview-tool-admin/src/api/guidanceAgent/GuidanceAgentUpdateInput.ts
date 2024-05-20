import { InputJsonValue } from "../../types";

export type GuidanceAgentUpdateInput = {
  guidance?: string | null;
  keyTopics?: InputJsonValue;
  transcript?: string | null;
};
