// pages/api/blockData.js
import { blockData } from "./webhook";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(blockData);
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
