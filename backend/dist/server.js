"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('test');
const grpc_js_1 = require("@grpc/grpc-js");
const order_grpc_pb_1 = require("./proto/order_grpc_pb");
const startServer = () => {
    const server = new grpc_js_1.Server();
    const port = 8081;
    server.addService(order_grpc_pb_1.OrderServiceService, {});
    server.bindAsync(`0.0.0.0:${port}`, grpc_js_1.ServerCredentials.createInsecure(), (error, port) => {
        if (error) {
            console.error(error);
            return;
        }
        server.start();
        console.log(`server start, port: ${port}`);
    });
};
startServer();
