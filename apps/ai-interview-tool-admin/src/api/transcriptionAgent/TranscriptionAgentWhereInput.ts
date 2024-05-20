import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TranscriptionAgentWhereInput = {
  audioFilePath?: StringNullableFilter;
  id?: StringFilter;
  transcript?: StringNullableFilter;
};
