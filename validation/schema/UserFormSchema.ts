import * as z from "zod";

export const UserFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.email({ message: "Email is required" }),
  phone: z.string().min(1, "Phone number is required."),
});
