const express = require('express');



const app = express();
app.use(express.json());

const users = [{
    name: "varun",
    kidneys: [{ healthy: false }, { healthy: true }]
},
{
    name: "arun",
    kidneys: [{ healthy: false }, { healthy: false }]
},
{
    name: "tarun",
    kidneys: [{ healthy: true }, { healthy: true }]
},
{
    name: "shushu",
    kidneys: [{ healthy: false }, { healthy: true }]
},
{
    name: "labradog",
    kidneys: [{ healthy: true }, { healthy: false }]
}

];

app.get('/', function (req, res) {
    const userKey = req.query.userKey;
    let kidneyCnt = users[userKey].kidneys.length;
    let healthyKidneyCount = 0;
    for (let i = 0; i < kidneyCnt; i++) {
        if (users[userKey].kidneys[i].healthy == true) {
            healthyKidneyCount++;
        }
    }
    res.send(`${users[userKey].name} has ${kidneyCnt} kidneys and has ${healthyKidneyCount} healthy kidneys and ${kidneyCnt - healthyKidneyCount} unhealthy kidneys`);
})


app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy;
    const userKey = req.query.userKey;
    users[userKey].kidneys.push(
        { healthy: isHealthy }
    )
    res.json({
        msg: "Done!"
    })
})

app.put('/', function (req, res) {
    const userKey = req.query.userKey;
    let kidneyCnt = users[userKey].kidneys.length;
    for (let i = 0; i < kidneyCnt; i++) {
        if (users[userKey].kidneys[i].healthy == false) {
            users[userKey].kidneys[i].healthy = true;
        }
    }
    res.json({
        msg: "Done!"
    })
})


app.delete('/', function (req, res) {
    const newKidneys = [];
    const userKey = req.query.userKey;
    let kidneyCnt = users[userKey].kidneys.length;
    for (let i = 0; i < kidneyCnt; i++) {
        if (users[userKey].kidneys[i].healthy) {
            newKidneys.push({ healthy: true });
        }
    }
    users[userKey].kidneys = newKidneys;
    res.json(
        { msg: "Done!" }
    )
})

app.listen(3000);