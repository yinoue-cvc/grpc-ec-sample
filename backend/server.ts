import { Server, ServerCredentials } from '@grpc/grpc-js';
import { OrderServiceService, IOrderServiceServer } from './proto/order_grpc_pb';
import { CreateOrderResponse, ListOrderResponse, Order } from './proto/order_pb';
import { v4 as uuidv4 } from 'uuid';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

const allOrders: Order[] = [];

const createOrder: IOrderServiceServer['createOrder'] = (call, callback) => {
    console.log('[start]: createOrder');

    // orderを作成
    const order = new Order();
    order.setId(uuidv4());
    order.setCustomerId(call.request.getCustomerId());
    order.setShippingAddress(call.request.getShippingAddress());
    order.setTotal(call.request.getTotal());
    order.setCreatedAt(Timestamp.fromDate(new Date()));

    // レスポンスを作成
    const response = new CreateOrderResponse();
    response.setOrder(order);
    
    allOrders.push(order);
    callback(null, response);
    console.log('[end]: createOrder');
}

const listOrder: IOrderServiceServer['listOrder'] = (call, callback) => {
    console.log('[start]: listOrder');

    // orderを抽出
    const customerId = call.request.getCustomerId();
    const orders = allOrders.filter(order => order.getCustomerId() === customerId);
    
    // レスポンスを作成
    const response = new ListOrderResponse();
    response.setOrdersList(orders);
    
    callback(null, response);
    console.log('[end]: listOrder');
}

const startServer = () => {
    const server = new Server();
    const port = 8081;
    server.addService(OrderServiceService, {
        createOrder,
        listOrder,
    });
    server.bindAsync(
        `0.0.0.0:${port}`,
        ServerCredentials.createInsecure(),
        (error, port) => {
            if (error) {
                console.error(error);
                return;
            }

            server.start();
            console.log(`server start, port: ${port}`);
        }
    )
}

startServer();