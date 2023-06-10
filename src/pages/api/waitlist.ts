import dbConnect from "@/utils/dbConnect";
import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";
import WaitlistModel from "schemas/waitlist.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect();
        const body = JSON.parse(req.body);
        console.log('====================================');
        console.log(body);
        console.log('====================================');
        const user = await WaitlistModel.findOne({
            $or: [{ discord: body.discord }, { walletAddress: body.walletAddress }]
        }).setOptions({sanitizeFilter: true})
        if (user) return res.status(400).json({ message: "Venom wallet or discordID is existed!" });
        const newUser = await WaitlistModel.create({ discord: body.discord, walletAddress: body.walletAddress })
        res.status(200).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}