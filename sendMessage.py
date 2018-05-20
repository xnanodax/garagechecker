from twilio.rest import Client

# Your Account SID from twilio.com/console
account_sid = "AC9afc0f00b7ff5f1f9786cc0c52f51c02"
# Your Auth Token from twilio.com/console
auth_token  = "e669384c5ea6c5e105087dfd7dbf3ba2"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+14153000526", 
    from_="+16263178743",
    body="I'm send you text messages")

print(message.sid)