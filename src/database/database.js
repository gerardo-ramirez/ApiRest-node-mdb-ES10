import MongoClient from 'mongodb';

export async function connect() {
    //importate podemos usar async await prromasas(then,rejected)o callback()
    //usamos try y catch para manejar errores. que se dan de manera sincrona 

    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
        const db = client.db('tareas');
        console.log('conectado')
        return db;

    }
    catch (e) {
        console.log(e)

    }

}


