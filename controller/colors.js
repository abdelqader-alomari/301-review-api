const { default: axios } = require('axios')
const { colorModel } = require('../model/colorSchema')

const getColors = (req, res) => {
    const url = 'https://ltuc-asac-api.herokuapp.com/allColorData'
    axios.
        get(url)
        .then(color => res.send(color.data))
        .catch(err => console.log(err))
}

const createFav = (req, res) => {
    const { title, imageUrl } = req.body;
    console.log(title, imageUrl)
    const newColor = new colorModel({
        title: title,
        imageUrl: imageUrl
    })
    newColor.save();
}

const favColors = (req, res) => {
    colorModel.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    })
}

const deleteFav = (req, res) => {
    const id = req.params.id;
    console.log(id)
    colorModel.deleteOne({ _id: id }, (error, data) => {

    })
    colorModel.find({}, (error, data) => {
        res.send(data);
    })
};
const updateFav = (req, res) => {
    const colorId = req.params.color_id;
    const { title, imageUrl } = req.body;
    colorModel.findByIdAndUpdate(
        { _id: colorId }, {
        title: title,
        imageUrl: imageUrl,
    },
        { new: true },
        (err, data) => {
            res.send(data)
        }
    )
}



module.exports = { getColors, createFav, favColors, deleteFav, updateFav }