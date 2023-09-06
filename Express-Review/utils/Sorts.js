const sortsMinToMax = (results, req, res, type) => {
  if (req.query.ordenar === type) {
    // Se establece un ordenamiento de menor a mayor...
    return res
      .status(200)
      .send(JSON.stringify(results.sort((a, b) => a.vistas - b.vistas)))
  }

  return res.status(200).send(JSON.stringify(results))
}

module.exports = {
  sortsMinToMax
}
