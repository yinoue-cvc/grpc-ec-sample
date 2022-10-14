// package: order
// file: order.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as order_pb from "./order_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IOrderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOrder: IOrderServiceService_IcreateOrder;
    listOrder: IOrderServiceService_IListOrder;
}

interface IOrderServiceService_IcreateOrder extends grpc.MethodDefinition<order_pb.CreateOrderRequest, order_pb.CreateOrderResponse> {
    path: "/order.OrderService/createOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.CreateOrderRequest>;
    requestDeserialize: grpc.deserialize<order_pb.CreateOrderRequest>;
    responseSerialize: grpc.serialize<order_pb.CreateOrderResponse>;
    responseDeserialize: grpc.deserialize<order_pb.CreateOrderResponse>;
}
interface IOrderServiceService_IListOrder extends grpc.MethodDefinition<order_pb.ListOrderRequest, order_pb.ListOrderResponse> {
    path: "/order.OrderService/ListOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.ListOrderRequest>;
    requestDeserialize: grpc.deserialize<order_pb.ListOrderRequest>;
    responseSerialize: grpc.serialize<order_pb.ListOrderResponse>;
    responseDeserialize: grpc.deserialize<order_pb.ListOrderResponse>;
}

export const OrderServiceService: IOrderServiceService;

export interface IOrderServiceServer extends grpc.UntypedServiceImplementation {
    createOrder: grpc.handleUnaryCall<order_pb.CreateOrderRequest, order_pb.CreateOrderResponse>;
    listOrder: grpc.handleUnaryCall<order_pb.ListOrderRequest, order_pb.ListOrderResponse>;
}

export interface IOrderServiceClient {
    createOrder(request: order_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    createOrder(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    createOrder(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    listOrder(request: order_pb.ListOrderRequest, callback: (error: grpc.ServiceError | null, response: order_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
    listOrder(request: order_pb.ListOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
    listOrder(request: order_pb.ListOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
}

export class OrderServiceClient extends grpc.Client implements IOrderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createOrder(request: order_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    public createOrder(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    public createOrder(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    public listOrder(request: order_pb.ListOrderRequest, callback: (error: grpc.ServiceError | null, response: order_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
    public listOrder(request: order_pb.ListOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
    public listOrder(request: order_pb.ListOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
}
