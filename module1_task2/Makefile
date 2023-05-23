build: ## execute a command that create a new blog
	hugo

clean: ## execute a command that clean the dist directory
	rm -rf dist/*

post:  ## execute a command that create a new post
	hugo new posts/$(POST_NAME).md
	sed -i 's/title: .*/title:"$(POST_TITLE)"/' content/posts/$(POST_NAME).md

help:           ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'