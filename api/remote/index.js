import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    let url = "http://colbt.cc:8686/suangua";
    if (req.query.seed) {
      url += "?seed=" + req.query.seed;
    }
    console.log(url);
    const response = await fetch(url);
    const body = await response.text();
    console.log(body);
    res.send(body);
  } catch (er) {
    console.log(error);
    res.status(500).send(err);
  }
}
