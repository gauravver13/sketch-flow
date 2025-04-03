import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types"

const app = express();

app.post("/signup", async (req, res) => {
    const data = CreateUserSchema.safeParse(req.body);
})

app.post("/signin", async (req, res) => {
    const data = SigninSchema.safeParse(req.body);
})

app.post("/room", async (req, res) => {
    const data = CreateRoomSchema.safeParse(req.body);
})


app.listen(3001);