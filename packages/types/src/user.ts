import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type User = z.infer<typeof UserSchema>;
