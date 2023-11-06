export class Message {
  constructor(content, user) {
    this.content = content;
    this.user = user;

  }
}

const MessageConverter = {
  toFirestore(message) { return { content: message.content, user: message.user } },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return data
  }
}

export default MessageConverter