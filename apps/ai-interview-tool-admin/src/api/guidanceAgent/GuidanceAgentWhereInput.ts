import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type GuidanceAgentWhereInput = {
  guidance?: StringNullableFilter;
  id?: StringFilter;
  keyTopics?: JsonFilter;
  transcript?: StringNullableFilter;
};
