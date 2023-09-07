const sortsMinToMax = (results, res) => {
  return res
    .status(200)
    .send(JSON.stringify(results.sort((a, b) => a.vistas - b.vistas)))
}

module.exports = {
  sortsMinToMax
}
