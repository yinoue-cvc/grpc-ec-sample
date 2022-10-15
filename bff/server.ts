import express from 'express';
import { CreateOrderCommand, createOrder, ListOrderQuery, listOrder } from './grpcClient';

const port = 9000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post("/orders", async (req: express.Request, res: express.Response, next) => {
    console.log('[start] PUT: /orders');
    
    const command: CreateOrderCommand = {
        customerId: req.body.customer_id,
        total: req.body.total,
        shippingAddress: req.body.shippingAddress,
    };
    await createOrder(command);
    res.json({
        message: 'ok',
        data: null,
    });
    
    console.log('[end] PUT: /orders');
    
    next();
});

app.get("/customers/:id/orders", async (req: express.Request, res: express.Response, next) => {
    console.log('[start] GET: /customers/:id/orders');
    
    console.log(req.params)
    const query: ListOrderQuery = {
        customerId: req.params.id,
    };
    const data = await listOrder(query);
    res.json({
        message: 'ok',
        data,
    });
    
    console.log('[end] GET: /customers/:id/orders');
    
    next();
});

app.listen(port, () => {
    console.log(`Client server, port: ${port}`);
});