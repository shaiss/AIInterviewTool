import { TranscriptionAgent as TTranscriptionAgent } from "../api/transcriptionAgent/TranscriptionAgent";

export const TRANSCRIPTIONAGENT_TITLE_FIELD = "audioFilePath";

export const TranscriptionAgentTitle = (
  record: TTranscriptionAgent
): string => {
  return record.audioFilePath?.toString() || String(record.id);
};
