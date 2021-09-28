// Named Exports

console.log("Get Fortune");

const MAGIC_NUMBER = Math.round(Math.random() * 100)


export const getLuckynumber = () => {
    return MAGIC_NUMBER
}

export const getFortune = () => "Today is your lucky day"

