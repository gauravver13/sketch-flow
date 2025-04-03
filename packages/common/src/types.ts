import { z } from "zod"

const CreateUserSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string(),
    name: z.string()
})

const SigninSchema = z.object({
    username: z.string().min(3).max(20),
    passoword: z.string()
})

const CreateRoomSchema = z.object({
    name: z.string().min(3).max(20)
})

export {
    CreateUserSchema,
    SigninSchema,
    CreateRoomSchema
}