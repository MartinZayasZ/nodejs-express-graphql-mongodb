import { tasks } from './sample.js'

export const resolvers = {
    
    Query: {
        hello: () => {
            return "Hellow World with Graphql"
        },
        greet(root, args) {
            console.log(args.name)
            return `Hellow ${args.name}`
        },
        tasks() {
            return tasks
        },
    },

    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length
            tasks.push(input)
            return input
        }
    }
}