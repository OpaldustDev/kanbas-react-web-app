import PathParameters from "./PathParameters.js";
export default function Lab5(app) {
    app.get("/lab5/welcome", (req, res) => {
        res.send("Welcome to Lab 5");
    });

    PathParameters(app);

    app.get("/lab5/multiply/:a/:b", (req, res) => {
        const a = Number(req.params.a);
        const b = Number(req.params.b);
        res.send(`The multiplication of ${a} and ${b} is ${a * b}`);
    });
    
    app.get("/lab5/divide/:a/:b", (req, res) => {
        const a = Number(req.params.a);
        const b = Number(req.params.b);
        if(b === 0) {
            res.send("Cannot divide by zero");
        } else {
            res.send(`The division of ${a} and ${b} is ${a / b}`);
        }
    });
}