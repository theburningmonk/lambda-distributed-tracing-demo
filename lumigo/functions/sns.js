const AWS = require('aws-sdk')
const EventBridge = new AWS.EventBridge()

module.exports.handler = async (event) => {
  await EventBridge.putEvents({
    Entries: [{
      Source: "my.events",
      DetailType: "my.event.type",
      Detail: event.Records[0].Sns.Message
    }]
  }).promise()
}