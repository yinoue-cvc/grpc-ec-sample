// package: order
// file: order.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Order extends jspb.Message { 
    getId(): string;
    setId(value: string): Order;
    getCustomerId(): string;
    setCustomerId(value: string): Order;
    getTotal(): number;
    setTotal(value: number): Order;
    getShippingAddress(): string;
    setShippingAddress(value: string): Order;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        id: string,
        customerId: string,
        total: number,
        shippingAddress: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateOrderRequest extends jspb.Message { 
    getCustomerId(): string;
    setCustomerId(value: string): CreateOrderRequest;
    getTotal(): number;
    setTotal(value: number): CreateOrderRequest;
    getShippingAddress(): string;
    setShippingAddress(value: string): CreateOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrderRequest): CreateOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrderRequest;
    static deserializeBinaryFromReader(message: CreateOrderRequest, reader: jspb.BinaryReader): CreateOrderRequest;
}

export namespace CreateOrderRequest {
    export type AsObject = {
        customerId: string,
        total: number,
        shippingAddress: string,
    }
}

export class CreateOrderResponse extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): Order | undefined;
    setOrder(value?: Order): CreateOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrderResponse): CreateOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrderResponse;
    static deserializeBinaryFromReader(message: CreateOrderResponse, reader: jspb.BinaryReader): CreateOrderResponse;
}

export namespace CreateOrderResponse {
    export type AsObject = {
        order?: Order.AsObject,
    }
}

export class ListOrderRequest extends jspb.Message { 
    getCustomerId(): string;
    setCustomerId(value: string): ListOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOrderRequest): ListOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOrderRequest;
    static deserializeBinaryFromReader(message: ListOrderRequest, reader: jspb.BinaryReader): ListOrderRequest;
}

export namespace ListOrderRequest {
    export type AsObject = {
        customerId: string,
    }
}

export class ListOrderResponse extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<Order>;
    setOrdersList(value: Array<Order>): ListOrderResponse;
    addOrders(value?: Order, index?: number): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOrderResponse): ListOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOrderResponse;
    static deserializeBinaryFromReader(message: ListOrderResponse, reader: jspb.BinaryReader): ListOrderResponse;
}

export namespace ListOrderResponse {
    export type AsObject = {
        ordersList: Array<Order.AsObject>,
    }
}
