const apiController = {}

apiController.hello = (_,res) => {
  res.send("hello world !!!")
}

module.exports = apiController
