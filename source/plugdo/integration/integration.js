plugdo.integration("server-node", (message, send) => {
    let response = {}
    plugdo.collect("serverNodejs").get(message, (data, err) => {
        if (err) {
            send({}, err)
        } else {
            response.result = data;
            send(response)
        }
    })
});