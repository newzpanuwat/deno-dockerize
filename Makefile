build:
	docker compose -f docker-compose.yaml build

start:
	docker compose up -d

tag:
	docker tag deno-image 82xcherodinger/deno-on-aws-lightsail

pushimage:
	docker push 82xcherodinger/deno-on-aws-lightsail