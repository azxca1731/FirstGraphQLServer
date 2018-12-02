const junghun = {
    name: "Junghun",
    age: 24,
    job: "student"
}
const resolvers = {
    Query: {
        person: () => junghun
    }
}
export default resolvers;