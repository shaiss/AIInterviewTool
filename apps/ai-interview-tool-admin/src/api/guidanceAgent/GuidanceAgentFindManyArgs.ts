import { GuidanceAgentWhereInput } from "./GuidanceAgentWhereInput";
import { GuidanceAgentOrderByInput } from "./GuidanceAgentOrderByInput";

export type GuidanceAgentFindManyArgs = {
  where?: GuidanceAgentWhereInput;
  orderBy?: Array<GuidanceAgentOrderByInput>;
  skip?: number;
  take?: number;
};
