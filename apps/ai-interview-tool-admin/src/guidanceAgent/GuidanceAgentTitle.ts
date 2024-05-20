import { GuidanceAgent as TGuidanceAgent } from "../api/guidanceAgent/GuidanceAgent";

export const GUIDANCEAGENT_TITLE_FIELD = "id";

export const GuidanceAgentTitle = (record: TGuidanceAgent): string => {
  return record.id?.toString() || String(record.id);
};
