const ReposService = require('../Services/Repos.service.js')
class ReposController{
    async getUser(req, res){
        return ReposService.getUser(req, res)
    }
    async getRepos(req, res){
        return ReposService.getRepos(req, res)
    }
    async getIssues(req, res){
        return ReposService.getIssues(req, res)
    }
}
module.exports = new ReposController()