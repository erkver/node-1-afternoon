let messages = [];
let id = 0;
let name = "Tommy";

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({name, id, text, time});
        id++;
        return res.status(200).json(messages);
    },
    get: (req, res) => {
        return res.status(200).json(messages)
    },
    update: (req, res) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];
        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        console.log(req.body)
        return res.status(200).json(messages)
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex(message => message.id == deleteID);
        messages.splice(messageIndex, 1)
        return res.status(200).json(messages)
    }
};


