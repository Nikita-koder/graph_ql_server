import "reflect-metadata";
import {ApolloServer} from 'apollo-server'
// import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core'
import {resolvers} from './prisma/generated/type-graphql'
import { PrismaClient } from '@prisma/client';
import { buildSchema } from 'type-graphql';


async function main() {
    const prisma = new PrismaClient()
    await prisma.$connect();

    const schema = await buildSchema({
        resolvers,
        validate: false,
    });

    const everythingLooksHealthy = () => {
        return true;
    };

    const server = new ApolloServer({
        schema: schema,
        context: () => ({
            prisma, // Provide the Prisma Client instance in the context
          }),
        // context: async ({req, res}) : Promise<any> => {
        //     var context = { req, res, prisma } // создали контекст из req, res и prisma

        //     // добавит в контекст инфу про юзера или кинет исключение
        //     return context
        // },
        // cache: 'bounded',
        // plugins: [
        //     ApolloServerPluginLandingPageLocalDefault({ embed: false }),
        // ],
        // async onHealthCheck() {
        //     if (everythingLooksHealthy()) {
        //         return;
        //     } else {
        //         throw new Error('...');
        //     }
        // },
    });

    await server.listen(process.env.BACKEND_API_PORT || 4000, (err: any)=>{
        if(err) console.log(err);
        else console.log("Successful connection")
    })
}

main();
