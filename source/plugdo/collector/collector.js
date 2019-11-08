
var objectCon = global.settings.db
plugdo.collector("serverNodejs", {
    type: "db",
    action: "mysql",
    server: objectCon,
    queryType: "stored-procedure",
    query: "call selectUser()",
    parameter: []
});