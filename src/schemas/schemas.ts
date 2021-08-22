import Joi from "joi";

export const GroupMeNewTextSchema = Joi.object({
  attachments: Joi.array().required(),
  avatar_url: Joi.string().allow("").required(),
  created_at: Joi.number().required(),
  group_id: Joi.string().required(),
  id: Joi.string().required(),
  name: Joi.string().required(),
  sender_id: Joi.string().required(),
  sender_type: Joi.string().required(),
  source_guid: Joi.string().required(),
  system: Joi.boolean().required(),
  text: Joi.string().required(),
  user_id: Joi.string().required(),
});
