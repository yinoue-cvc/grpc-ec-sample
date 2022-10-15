console.log('test')
import { 
    Server,
    ServerCredentials,
} from '@grpc/grpc-js';

import { 
    OrderServiceService, 
} from './proto/order_grpc_pb';


const startServer = () => {
    const server = new Server();
    const port = 8081;
    server.addService(OrderServiceService, {});
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