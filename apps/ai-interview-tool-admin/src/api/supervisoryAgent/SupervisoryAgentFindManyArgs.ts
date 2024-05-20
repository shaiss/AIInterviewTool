import { SupervisoryAgentWhereInput } from "./SupervisoryAgentWhereInput";
import { SupervisoryAgentOrderByInput } from "./SupervisoryAgentOrderByInput";

export type SupervisoryAgentFindManyArgs = {
  where?: SupervisoryAgentWhereInput;
  orderBy?: Array<SupervisoryAgentOrderByInput>;
  skip?: number;
  take?: number;
};
