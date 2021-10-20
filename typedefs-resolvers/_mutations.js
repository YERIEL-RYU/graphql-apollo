const { gql } = require('apollo-server')

const typeDefs = gql`
    type Mutation {
      deleteEquipment(id: String): Equipment
      deleteSupply(id: String): Supply
      postPerson (input: PostPersonInput): People!
      postTeam(input: PostTeamInput!): Team!,
      editTeam(
          id: ID!,
          input: PostTeamInput!
      ): Team!
      deleteTeam(id: ID!): Team!
    }
`

module.exports = typeDefs