import portfolios from "../../projectArray";

async function index(req, res) {
  const httpMethod = req.method;
  const { title, image, description, url, type } = req.body;

  switch (httpMethod) {
    case "GET":
      await res.status(200).json(portfolios);
      break;
    case "POST":
      res.status(200).json({ title, image, description, url, type });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${httpMethod} not allowed`);
      break;
  }
}

export default index;
