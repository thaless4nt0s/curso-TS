// 1 - Iniciando o projeto
console.log('Express + TS !!!');

// 2 - Inicializar o express
import express, {Request, Response, NextFunction} from 'express';
const app = express();

// 3 - Rota com POST
app.use(express.json());

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction){
    console.log(req.path);
    next();
}

app.use(showPath);

app.get("/", (req, res) =>{
    return res.send("Olá, express");
})

// 3 - rota com POST
app.post("/api/product", (req, res) =>{
    console.log(req.body);
    res.send('produto adicionado !!');
})

// 4 - rota para todos os verbos
app.all('/api/product/check', (req, res) =>{
    // req.method == VERBO HTTP
    if(req.method === "POST"){
        return res.send("Inseriu algum registro !!");
    }else if(req.method === "GET"){
        return res.send("Leu algum registro");
    }else{
        res.send("Não podemos realizar essa operacao !!");
    }
})

// 5 - Interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) =>{
    return res.send("utilizando as interfaces");
})

// 6 - Enviando JSON
app.get("/api/json", (req: Request, res: Response) =>{
    return res.json({
        name: "Shirt",
        price: 30.99,
        color: "blue",
        sizes: ['P','M','G']
    })
})

// 7 - Router Parameters
app.get("/api/product/:id", (req: Request, res: Response) =>{
    console.log(req.params);
    const id = req.params.id
    if(id === "1"){
        const product = {
            id: 1,
            name: "Boné",
            price: 10.99
        }
        return res.json(product);
    }else{
        return res.send("Produto não encontrado");
    }
    
})

// 8 - Rotas Complexas
app.get('/api/product/:productId/review/:reviewId', (req: Request, res: Response) =>{
    console.log(req.params);
    const productId = req.params.productId;
    const reviewId = req.params.reviewId;
    res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

// 9 - router handler 
function getUser(req: Request, res: Response){
    console.log(`resgatando o usuario com  os parametros ${req.params.id}`);
    return res.send("O usuário foi encontrado !!");
}

app.get("/api/user/:id", getUser);

// 10 - Middleware
function checkUser(req: Request, res: Response, next: NextFunction){
    if(req.params.id === "1"){
        console.log(`Pode seguir`);
        next()
    }else{
        console.log("Acesso negado");
    }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res:Response) =>{
    return res.json({msg: `Bem vindo a area administrativa !`});
});


// 12 - req e res com generics
app.get("/api/user/:id/details/:name", 
        (req: Request<{id: string, name: string}>, res: Response<{status: boolean}>)=>{
            console.log(`ID: ${req.params.id}`);
            console.log(`name: ${req.params.name}`);

            return res.json({status: true});
})

// 13 - Tratando erros
app.get("/api/error", (req: Request, res: Response) =>{
    try{
        throw new Error("Deu ruim");
    }catch(e: any){
        res.status(500).json({msg: e.message});
    }
})

app.listen(3000, ()=>{
    console.log('Aplicacao de TS + express funcionando !!');
})


