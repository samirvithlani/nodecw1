const zod = require("zod");
const userValidationSchema = zod.object(
    {
    body: zod.object({
        name: zod.string().min(3).max(255),
        email: zod.string().email(),
        age: zod.number().min(18).max(100),
        password: zod.string().min(8).max(255),
    }).strict(),
    
})
module.exports = userValidationSchema;