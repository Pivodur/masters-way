import {MentorComment} from "src/model/businessModel/MentorComment";
import {MentorCommentDTO} from "src/model/firebaseCollection/MentorCommentDTO";

/**
 * Convert {@link MentorCommentDTO} to {@link MentorComment}
 * @param {MentorCommentDTO} mentorCommentDTO {@link MentorCommentDTO}
 * @returns {MentorComment} mentorComment {@link MentorComment}
 */
export const MentorCommentDTOToMentorCommentConverter = (mentorCommentDTO: MentorCommentDTO): MentorComment => {
  return new MentorComment(mentorCommentDTO);
};
