import { Request, Response } from "express";
import supabase from "configs/supabase";
import { Tables } from "models/types";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase
    .from("users")
    .select("userid, username, avatarurl, gender, email, role")
    .returns<Tables<"users">>();

  if (error) {
    res.status(400).json({ error });
    return;
  }
  res.status(200).json({ data });
  return;
};

export { getAllUsers };
