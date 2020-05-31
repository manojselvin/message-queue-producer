# Production Level RabbitMQ Demo App

Project is made using Typescript (Subsequent JS files also included for reference).

### RabbitMQ Producer Project
This is producer project and if you haven't cloned the consumer project for RabbitMQ. follow the How does this work instructions.


## How Does this Work
1. Clone this Producer Repository by running `git clone https://github.com/manojselvin/message-queue-producer`
2. Clone Consumer Repository by running `git clone https://github.com/manojselvin/message-queue-worker`
3. Run Both the projects by following the steps mentioned to run the project in each projects `README.md` file.

## Steps to Run Producer Project
1. Clone this project by running ``git clone https://github.com/manojselvin/message-queue-producer``
2. `cd` into `project dir`
3. Complete `Steps to generate Connection URL for RabbitMQ`. 
4. run `npm install` to install all dependencies
5. run `npm start` to run the producer server.
6. Now use `postman` to post data to the route `POST /msg`

```json
{
    "queueName": "<Queue name from config/config.json>",
    "payload": "<Any message in the form of string or json to be pushed into the queue>"
}
```

## Steps to generate Connection URL for RabbitMQ
---
Note: (Skip if already followed this on Consumer Project setup)
1. Go to https://www.cloudamqp.com/plans.html
2. Select `free plan`.
3. Sign up for a `free account`.
4. Create a new instance in the `regions` listed.
5. Create a `new queue` and note down the `name of the queue`.
6. `Click on the instance` and from `side navigation` `click on Details` then `copy` the `AMQP URL`.
7. Paste the connection url and queue name in `config/config.json` file.