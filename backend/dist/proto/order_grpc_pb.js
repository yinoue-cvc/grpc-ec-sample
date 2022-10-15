// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var order_pb = require('./order_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_order_CreateOrderRequest(arg) {
  if (!(arg instanceof order_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type order.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CreateOrderRequest(buffer_arg) {
  return order_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_CreateOrderResponse(arg) {
  if (!(arg instanceof order_pb.CreateOrderResponse)) {
    throw new Error('Expected argument of type order.CreateOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CreateOrderResponse(buffer_arg) {
  return order_pb.CreateOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_ListOrderRequest(arg) {
  if (!(arg instanceof order_pb.ListOrderRequest)) {
    throw new Error('Expected argument of type order.ListOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_ListOrderRequest(buffer_arg) {
  return order_pb.ListOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_ListOrderResponse(arg) {
  if (!(arg instanceof order_pb.ListOrderResponse)) {
    throw new Error('Expected argument of type order.ListOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_ListOrderResponse(buffer_arg) {
  return order_pb.ListOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderServiceService = exports.OrderServiceService = {
  createOrder: {
    path: '/order.OrderService/createOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.CreateOrderRequest,
    responseType: order_pb.CreateOrderResponse,
    requestSerialize: serialize_order_CreateOrderRequest,
    requestDeserialize: deserialize_order_CreateOrderRequest,
    responseSerialize: serialize_order_CreateOrderResponse,
    responseDeserialize: deserialize_order_CreateOrderResponse,
  },
  listOrder: {
    path: '/order.OrderService/ListOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.ListOrderRequest,
    responseType: order_pb.ListOrderResponse,
    requestSerialize: serialize_order_ListOrderRequest,
    requestDeserialize: deserialize_order_ListOrderRequest,
    responseSerialize: serialize_order_ListOrderResponse,
    responseDeserialize: deserialize_order_ListOrderResponse,
  },
};

exports.OrderServiceClient = grpc.makeGenericClientConstructor(OrderServiceService);
