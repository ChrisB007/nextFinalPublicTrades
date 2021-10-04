// import { portfolios } from "./projectArray";

// async function singlePortfolio(req, res) {
//   const portfolioId = req.query.portfolioId;
//   const { title, url, description, type, image } = req.body;
//   const httpMethod = req.method;
//   const result = portfolios.filter(
//     (portfolio) => portfolio.id === parseInt(portfolioId)
//   );

//   switch (httpMethod) {
//     case "GET":
//       if (result.length > 0) {
//         res.status(200).json(result[0]);
//       } else {
//         res
//           .status(404)
//           .json(`message: Portfolio with id ${portfolioId} is not found`);
//       }
//       break;
//     case "PUT":
//       res.status(200).json({ title, url, description, type, image });
//       break;
//     case "DELETE":
//       res.status(200).json(result[0]);
//       break;
//     default:
//       res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
//       res.status(405).end(`Method ${httpMethod} not allowed`);
//       break;
//   }
// }

// export default singlePortfolio;
