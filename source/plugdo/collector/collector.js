
var objectCon = global.settings.db
plugdo.collector("serverNodejs", {
    type: "db",
    action: "mysql",
    server: objectCon,
    queryType: "stored-procedure",
    query: "call selectUser()",
    parameter: []
});


plugdo.collector("establecimientoid2", {
    type: "db",
    action: "mysql",
    server: objectCon,
    queryType: "stored-procedure",
    query: "call getEstabeclimiento",
    parameter: ["json:post.id"]
});