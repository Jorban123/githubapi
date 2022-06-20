const express = require('express')
const router = express.Router()
const ReposController = require('../Controllers/Repos.controller.js')
router.get('/:user', ReposController.getUser)
router.get('/:user/:repos', ReposController.getRepos)
router.get('/:owner/:repos/issues', ReposController.getIssues)
module.exports = router