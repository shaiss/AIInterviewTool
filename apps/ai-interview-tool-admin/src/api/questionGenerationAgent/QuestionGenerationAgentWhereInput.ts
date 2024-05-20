import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type QuestionGenerationAgentWhereInput = {
  apiKey?: StringNullableFilter;
  generatedQuestion?: StringNullableFilter;
  id?: StringFilter;
  transcript?: StringNullableFilter;
};
