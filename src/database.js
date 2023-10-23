import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(await prisma.user.update({where:{email: 'test@test.test'}, data: {name: 'Test mod', username: 'testmod', email: 'test@testmod.test', password: 'testmod'}}))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })