import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


(async()=>{

    await prisma.user.create({
        data:{
            Name:"Luna",
            ApiKey:"aaaaaaaaa"
        }
    }).catch(_=>{})
    let l = await prisma.user.findFirst({
        where:{
            Name: {
                mode: "insensitive",
                equals:"luna"
            }
        }
    })
    
    console.log(l)
})()