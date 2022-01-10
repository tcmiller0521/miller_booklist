
export const getTest = async (req, res) => {
    res.status(200).json("successful get")
    console.log("get test")
}

export const postTest = async (req, res) => {
    res.status(202).json("successful post")
    console.log("post test")
}
