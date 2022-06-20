const axios = require("axios");
class ReposService {
    async getUser(req, res){
        try {
            const username = req.params.user
            const user = await axios.get(`https://api.github.com/users/${username}`)
            return res.json(user.data)
        }catch (e) {
            return res.json(e)
        }
    }
    async getRepos(req, res){
        try{
            const username = req.params.user
            const reposName = req.params.repos
            const repos = await axios.get(`https://api.github.com/repos/${username}/${reposName}`)
            return res.json(repos.data)
        }catch (e) {
            return res.json(e)
        }
    }
    async getIssues(req, res){
        try{
            const token = process.env.TOKEN || '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'
            const owner = req.params.owner
            const repos = req.params.repos
            const filterBy = req.query.filter || ''
            const sortBy = req.query.sort || ''
            const labels = req.query.labels || ''
            const direction = req.query.direction || ''
            const url = `https://api.github.com/repos/${owner}/${repos}/issues?filter=${filterBy}&sort=${sortBy}&labels=${labels}&direction=${direction}`
            let issues = await axios.get(url,{
                headers: {
                    "Accept": "application/vnd.github.v3+json",
                    "Authorization": `token ${token}`
                }
            })
            return res.json(issues.data)
        }catch (e) {
            res.json(e)
        }
    }
}
module.exports = new ReposService()