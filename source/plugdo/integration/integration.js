plugdo.integration("server-node", (message, send) => {
    let response = {}
    plugdo.collect("serverNodejs").get(message, (data, err) => {
        console.log(message)
        if (err) {
            send({}, err)
        } else {
            response.result = data;
            send(response)
        }
    })
});



plugdo.integration("establecimiento-id", (message, send) => {
    let response = {}
    plugdo.collect("establecimientoid2").get(message, (data, err) => {
        console.log(message)
        if (err) {
            send({}, err)
        } else {
            response.result = data;
            send(response)
        }
    })
});