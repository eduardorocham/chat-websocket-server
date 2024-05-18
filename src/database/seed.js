// Este arquivo não funciona quando a string de conexão em connectToDatabase vem das variáveis de ambiente
import { connectToDatabase } from "./dbConnect.js";

async function seedDB() {
    const db = await connectToDatabase(); 

    try {
        const usersCollection = db.collection('users');
        const users = [
            {
                username: 'john_doe',
                email: 'john@example.com',
                password: 'hash_da_senha_1',
                createdAt: new Date('2024-05-14'),
                updatedAt: new Date('2024-05-14')
            },
            {
                username: 'alice_smith',
                email: 'alice@example.com',
                password: 'hash_da_senha_2',
                createdAt: new Date('2024-05-15'),
                updatedAt: new Date('2024-05-15')
            },
            {
                username: 'bob_jackson',
                email: 'bob@example.com',
                password: 'hash_da_senha_3',
                createdAt: new Date('2024-05-16'),
                updatedAt: new Date('2024-05-16')
            }
        ];

        await usersCollection.insertMany(users);
        console.log('Users data insect with success');

        // Coleção de conversas
        const talksCollection = db.collection('talks');
        const talks = [
            {
                participants: [
                    { userId: users[0]._id, lastRead: new Date('2024-05-14') },
                    { userId: users[1]._id, lastRead: new Date('2024-05-15') }
                ],
                messages: [
                    {
                        senderId: users[0]._id,
                        content: 'Olá, Alice!',
                        timestamp: new Date('2024-05-14T10:00:00Z')
                    },
                    {
                        senderId: users[1]._id,
                        content: 'Oi, John! Como vai?',
                        timestamp: new Date('2024-05-14T10:05:00Z')
                    }
                ],
                createdAt: new Date('2024-05-14'),
                updatedAt: new Date('2024-05-15')
            },
            {
                participants: [
                    { userId: users[1]._id, lastRead: new Date('2024-05-15') },
                    { userId: users[2]._id, lastRead: new Date('2024-05-16') }
                ],
                messages: [
                    {
                        senderId: users[1]._id,
                        content: 'Olá, Bob!',
                        timestamp: new Date('2024-05-15T12:00:00Z')
                    },
                    {
                        senderId: users[2]._id,
                        content: 'Oi, Alice!',
                        timestamp: new Date('2024-05-15T12:10:00Z')
                    }
                ],
                createdAt: new Date('2024-05-15'),
                updatedAt: new Date('2024-05-16')
            }
        ];

        await talksCollection.insertMany(talks);
        console.log('Talks data insect with success');

    } catch (err) {
        console.error('Seending error database:', err);
    } finally {
        await db.close();
        console.log('Connection closed');
    }
}

seedDB();
