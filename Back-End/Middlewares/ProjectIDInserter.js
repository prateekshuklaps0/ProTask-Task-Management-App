const ProjectIDInserter = (req, res, next) => {
  const projectId = req.headers.projectid;

  if (!projectId) {
    return res
      .status(400)
      .json({ msg: "Provide projectid in request header." });
  }

  req.body.projectId = projectId;

  next();
};

module.exports = { ProjectIDInserter };
