module.exports = (mongoose) => {
    const ActivityDetailsDAL =
        require('../data_access/ActivityDetailsDataAccess')(mongoose);

    const errorHandler = (error, res) => {
        console.log(error);
        res.status(500).json({
            err: error
        })
    }

    return {
        async AddExplanation(req, res) {
            try {
                await ActivityDetailsDAL.AddExplanation(req);
                res.send({
                    message: `Explanation added succesfully`
                })
            } catch (error) {
                errorHandler(error, res)
            }
        },
        async SetAsSeen(req, res) {
            try {
                await ActivityDetailsDAL.SetAsSeen(req);
                res.send({
                    message: `Updated to seen succesfully`
                })
            } catch (error) {
                errorHandler(error, res);
            }
        }
    }
}