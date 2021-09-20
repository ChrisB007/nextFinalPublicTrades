import portfolios from "../../projectArray";

async function index(req, res) {
  try {
    await res.status(200).send(portfolios);
  } catch (error) {
    res.send(`We have a server error: ${error}`);
    console.log(`error: ${error}`);
  }
}

export default index;
