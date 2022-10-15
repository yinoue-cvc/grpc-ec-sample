# Makefile
OUTPUT=gen
WORK_DIR=/home/node/app
NPM_BIN=$(WORK_DIR)/schema/node_modules/.bin

GRPC_TOOL=$(NPM_BIN)/grpc_tools_node_protoc
TYPESCRIPT_PLUGIN=protoc-gen-ts=$(NPM_BIN)/protoc-gen-ts

COMMAND=$(GRPC_TOOL) \
	--plugin=${TYPESCRIPT_PLUGIN} \
	--js_out=import_style=commonjs,binary:$(OUTPUT) \
	--grpc_out=grpc_js:$(OUTPUT) \
	--ts_out=grpc_js:$(OUTPUT) -I . ./*.proto

.PHONY: protogen

test:
	echo `$(COMMAND)`

protogen:
	docker run --rm -it -v ${PWD}:$(WORK_DIR) -w $(WORK_DIR)/schema node:16 \
	/bin/bash -c "\
	export npm_config_target_arch=x64 \
	&& npm install \
	&& rm -rf $(OUTPUT) \
	&& mkdir -p $(OUTPUT) \
	&& $(COMMAND) \
	&& rm -rf ../backend/proto \
	&& cp -r ${OUTPUT} ../backend/proto \
	&& rm -rf ../backend/dist/proto \
	&& cp -r ${OUTPUT} ../backend/dist/proto \
	&& rm -rf ../bff/dist/proto \
	&& cp -r ${OUTPUT} ../bff/dist/proto \
	"