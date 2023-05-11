#makefile for hugo

#build
build:
	@hugo
#clean
clean:
	rm -rf dist/*

#post
post:
	hugo new posts/$(POST_NAME).md
	sed -i 's/title: .*/title: "$(POST_TITLE)"/' content/posts/$(POST_NAME).md