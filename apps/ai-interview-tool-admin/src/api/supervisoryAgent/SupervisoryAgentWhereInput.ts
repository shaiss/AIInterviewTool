import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SupervisoryAgentWhereInput = {
  backgroundInfo?: StringNullableFilter;
  context?: StringNullableFilter;
  id?: StringFilter;
  suggestedQuestions?: JsonFilter;
  summary?: StringNullableFilter;
};
