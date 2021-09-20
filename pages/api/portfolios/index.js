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

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      // res.status(404).json(portfolios);
      break;
  }
}

export default index;
