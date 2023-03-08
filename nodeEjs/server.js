const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    const items = [
        {   title: "D ",
            message: "Application development"    
        },
        {   title: "E ",
            message: "EJS use JavaScript to render application"    
        },
        {   title: "M ",
            message: "Very ease to use"    
        },
        {   title: "A ",
            message: "Application development"    
        },
        {   title: "I ",
            message: "Install Ejs"    
        },
        {   title: "S ",
            message: "Sintax simple development"    
        }
    ]
    const subtitle = "EJS use JavaScript to render application"
    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get('/sobre/', (req, res) => {
    res.render("pages/about")
})

app.listen(8080)
console.log("run")