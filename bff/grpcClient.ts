import { CreateOrderRequest, CreateOrderResponse, ListOrderRequest, ListOrderResponse } from './proto/order_pb';
import { OrderServiceClient } from './proto/order_grpc_pb';
import { credentials } from '@grpc/grpc-js';
import dayjs from 'dayjs';

const serverUrl = 'backend:8081';

export type CreateOrderCommand = {
    customerId: string,
    total: number,
    shippingAddress: string,
};

export const createOrder = async (command: CreateOrderCommand) => {
    const client = new OrderServiceClient(
        serverUrl, 
        credentials.createInsecure(),
    );

    const request = new CreateOrderRequest();
    request.setCustomerId(command.customerId);
    request.setTotal(command.total);
    request.setShippingAddress(command.shippingAddress);

    const respose = await new Promise<CreateOrderResponse>((resolve, reject) => {
        client.createOrder(request, (error, response) => {
            if (error) {
                console.error(error);
                reject(error);
            }
            resolve(response);
        });
    });
};

export type ListOrderQuery = {
    customerId: string,
};

export const listOrder = async (query: ListOrderQuery) => {
    const client = new OrderServiceClient(
        serverUrl, 
        credentials.createInsecure(),
    );

    const request = new ListOrderRequest();
    request.setCustomerId(query.customerId);

    const respose = await new Promise<ListOrderResponse>((resolve, reject) => {
        client.listOrder(request, (error, response) => {
            if (error) {
                console.error(error);
                reject(error);
            }
            resolve(response);
        });
    });

    return respose.getOrdersList()
    .map(_ => _.toObject())
    .map(_ => {
            //TODO: createdAtを必須にしてif文をなくす
            if (_.createdAt != null) {
                return {
                    ..._,
                    createdAt: dayjs.unix(_.createdAt.seconds).format(),
                }
            }
            return _;
        });
};