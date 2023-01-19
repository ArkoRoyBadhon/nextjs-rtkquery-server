const express = require('express')
require("./src/db/conn")
const cors = require("cors")

const Mensdata = require('./src/models/mens')
const Productdata = require('./src/models/products')
const SlideData = require('./src/models/imageL')

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors());


app.get("/", async (req, res) => {
    res.send("Hello badhon")
})

// handle post req
app.post("/mens", async (req, res) => {
    try {
        const adddata = new Mensdata(req.body)
        // console.log(adddata);
        const insertUsers = await adddata.save();
        res.status(200).send(insertUsers)
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
})
app.get("/mens", async (req, res) => {
    try {
        const getMens = await Mensdata.find({})
        res.send(getMens);
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
})
app.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await Mensdata.find({ _id })
        res.send(getMens);
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
})
app.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await Mensdata.findByIdAndUpdate(_id, req.body, { new: true })
        res.send(getMens);
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
})
app.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMens = await Mensdata.findByIdAndDelete(_id)
        res.send(getMens);
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
})

app.get("/allproduct", async (req, res) => {
    try {
        const getProducts = await Productdata.find({});
        res.send(getProducts);
    } catch (error) {
        res.status(400).send(error.message)
    }
})
app.get("/item/:id", async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(Object(id));
        const getProducts = await Productdata.find({ _id: Object(id) });
        res.send(getProducts);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get("/images", async (req, res) => {
    try {
        const getImages = await SlideData.find({});
        // console.log(getImages);
        res.send(getImages);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.patch("/images/:idd", async (req, res) => {
    try {
        const data = req.body;
        const _id = req.params.idd
        const info = {
            _id: Object(_id),
            id: data.idValue,
            link: data.linkValue
        }
        // console.log(info);
        const getImage = await SlideData.findByIdAndUpdate(Object(_id), info, { new: true })
        // console.log("res", getImage);
        res.send(getImage);
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})