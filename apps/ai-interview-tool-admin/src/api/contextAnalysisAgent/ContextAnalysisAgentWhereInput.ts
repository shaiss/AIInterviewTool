import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContextAnalysisAgentWhereInput = {
  entities?: JsonFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
};
