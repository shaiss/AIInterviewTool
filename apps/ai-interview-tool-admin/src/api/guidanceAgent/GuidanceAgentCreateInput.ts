import { InputJsonValue } from "../../types";

export type GuidanceAgentCreateInput = {
  guidance?: string | null;
  keyTopics?: InputJsonValue;
  transcript?: string | null;
};
