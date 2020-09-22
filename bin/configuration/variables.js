const variables = {
    Api : {
        port: process.env.port || 4040
    },
    Database: {
        connection : process.env.connection || `mongodb+srv://admin:@@1234qwer@cluster0.lvveh.gcp.mongodb.net/ford_care?retryWrites=true&w=majority`
    },
    Security:{
        secret: 'de1c34c409288e4a50db3b6a2b2be4a4'
    }
}

module.exports = variables