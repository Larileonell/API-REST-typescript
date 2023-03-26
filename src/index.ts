import Express  from "express";
import { AppDataSource } from "./DataSource";
AppDataSource.initialize().then(()=>{
    const app = Express()

    app.use(Express.json())
    app.get('/', (req, res) => {
        return res.json('tudo certo')
    })
    return app.listen(process.env.PORT)
});
