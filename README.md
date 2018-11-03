# restful-mockup-serever


build Image
-------------

docker build .

build with tag name
docker build -t username/image_name:tag_name .

remove image
-------------
docker rmi <imageName>

run docker image as a container
-------------------------------

docker run -d <imageId>

login to a docker container with different entry point(override CMD)
docker run -it --entrypoint=/bin/bash  0358b8b79846 -i


docker-compose config
docker-compose up -d