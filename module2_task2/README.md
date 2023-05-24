## Prerequisites :
    Life-cycle of this application:

    A Makefile should be present and valid
    The binary awesome-api must NOT exist at the beginning, in the source code
    The goals build, run , stop, clean test should be implemented and mapped to the life-cycle stages of the same name:

## Lifecycle :
    “build”: compile the source code of the application to a binary named awesome-api (the name awesome-api comes from the command go mod init github.com/<your github handle>/awesome-api) with the command go build.
    “run”: Run the application in background by executing the binary awesome-api, and write logs into a file named awesome-api.log with the command ./awesome-api >./awesome-api.log 2>&1 &.
    “stop”: Stop the application with the command kill XXXXX where XXXXX is the Process ID of the application. For instance: pkill awesome-api.
    “clean”: Stop the application. Delete the binary awesome-api and the log file awesome-api.log.
    “test”: You want to test it to ensure that it behaves as expected. With the application started, you may want to use the command line curl (or your web browser, or the command wget or any other HTTP client).
    “lint”: The goal lint should be implemented and should fail when the linter catches and error.
    “help”: Show help for all command.
    “unit-tests”: should be implemented and should execute (successfully) the Golang unit tests.