// pages/api/webhook.js
export let blockData = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const block = data.event.data.block;
    blockData = blockData.concat(block.logs);
    res.status(200).end();
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
