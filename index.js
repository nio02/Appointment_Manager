import { PrismaClient } from './generated/prisma/client.js'

const prisma = new PrismaClient()

async function main(){
    // const newUser = await prisma.user.create({
    //     data: {
    //         name: "Sofi",
    //         email: "sofi@hola.com"
    //     }
    // })
    
    // console.log(newUser)

    const user = await prisma.user.findFirst({
        where: {
            id: 4
        }
    })
    
    console.log(user)

    await prisma.user.deleteMany()
}

main()