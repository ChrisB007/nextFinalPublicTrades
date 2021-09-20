import portfolios from "../../projectArray";

async function singlePortfolio(req, res) {
  const portfolioId = req.query.portfolioId;
  const result = portfolios.filter(
    (portfolio) => portfolio.id === parseInt(portfolioId)
  );

  if (result.length > 0) {
    res.status(200).json(result[0]);
  } else {
    res
      .status(404)
      .json(`message: Portfolio with id ${portfolioId} is not found`);
  }
}

export default singlePortfolio;
