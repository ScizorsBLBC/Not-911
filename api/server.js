import express from "express";
import OrganizationList from "./OrganizationList.js";

const app = express()

app.get('/organizations', function (req, res) {
    res.send(OrganizationList)
})

app.listen(3000)