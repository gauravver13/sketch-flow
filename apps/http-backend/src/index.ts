import express, { Request, Response } from "express";
// import type { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types"
import { prismaClient } from "@repo/db/client";
import cors from "cors"
import bcrypt from "bcryptjs"

const app = express();
app.use(express.json());
app.use(cors())


app.post("/signup", async (req: Request, res: any) => {
    const parsedData = CreateUserSchema.safeParse(req.body);
    // data is ok
    // check in db if user exist if exist -> return user already exit else create a user 

    if(!parsedData.success) {
        console.log("Incorrect Inputs", parsedData.error);
        return res.status(501).json({
            messsage: "Incorrect Inputs"
        })
    }

    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);

    // const userExist = await prismaClient.user.findFirst({
    //         where: {
    //             OR: [
    //                 { username: parsedData.data.username },  
    //                 { email: parsedData.data.email }
    //             ]
    //         }
    // })

    // if(userExist) {
    //     console.log("user already existed in db");
    //     return res.status(501).json({
    //         message: "User already exist"
    //     })
    // }

    try {
            const user = await prismaClient.user.create({
                data: {
                    name: parsedData.data.name,
                    email: parsedData.data.email,
                    username: parsedData.data.username,
                    password: hashedPassword,
                    photo: parsedData.data.photo ?? "no photo"
                }
            })
        
            console.log("USER SUCCESSFULLY CREATED!!");
        
            return res.status(200).json({
                message: "User Signed up Successfully",
                user
            })
    } catch (error) {
        return res.status(411).json({
            message: "User already exist with this username or email",
            error
        })
    }

})

app.post("/signin", async (req: Request, res: any) => {
    const parsedData =  SigninSchema.safeParse(req.body);

    if(!parsedData.success) {
        console.log("incorrect inputs", parsedData.error);
        return res.status(501).json({
            message: "Incorrect Inputs"
        })
    }

    try {
            const user = await prismaClient.user.findFirst({
                where: {
                    OR: [
                        { username: parsedData.data.username },
                        { email: parsedData.data.email }
                    ]
                }
            })
        
            if(!user) {
                return res.status(403).json({
                    message: "User not authorised"
                })
            }
        
            const userId = user?.id;
        
            const token = jwt.sign({ 
                userId
            }, JWT_SECRET)
        
            return res.status(201).json({
                message: "User Signed up Successfully",
                token
            })
    } catch (error) {
        return res.status(500).json({
            message: "Signed In Failed, Try Again!!"
        })
    }

    // check in db user exist
    // if exist, check pass
    // if pass wrong, wrong!
    // sign user with a jwt token
    // return user 


})

app.post("/room", async (req, res) => {
    const data = CreateRoomSchema.safeParse(req.body);
})


app.listen(3001);