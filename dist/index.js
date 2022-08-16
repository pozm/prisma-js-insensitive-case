"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
(async () => {
    let l = await prisma.user.findFirst({
        where: {
            Name: {
                mode: "insensitive",
                equals: "luna"
            }
        }
    });
    console.log(l);
})();
//# sourceMappingURL=index.js.map