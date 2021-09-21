import { portfolios } from "../portfolios/projectArray";

export default async function allProjects(req, res) {
  const method = req.method;
  const newPost = req.body;

  switch (method) {
    case "GET":
      try {
        return res.status(200).json(portfolios);
      } catch (error) {
        res.status(500).json(`Error: ${error}`);
        console.log(error);
      }
      break;
    case "POST":
      try {
        return res.status(200).json({
          title: newPost.title,
          description: newPost.description,
          image: newPost.image,
          url: newPost.url,
          type: newPost.type,
        });
      } catch (error) {
        res.status(500).json(`Error: ${error}`);
        console.log(error);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${httpMethod} is not allowed`);
  }
}
