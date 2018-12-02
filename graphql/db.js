export const people = [
    {
        id: 1,
        name: "Junghun",
        age: 24,
        job: "student"
    },
    {
        id: 2,
        name: "Dahun",
        age: 22,
        job: "student"
    },
    {
        id: 3,
        name: "Sunghun",
        age: 14,
        job: "student"
    },
    {
        id: 4,
        name: "Jihun",
        age: 25,
        job: "student"
    },
    {
        id: 5,
        name: "gihun",
        age: 34,
        job: "student"
    },
]

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id)
    return  filteredPeople[0]
}