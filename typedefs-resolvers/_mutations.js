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
      editPerson(
        id: ID!,
        input: PostPersonInput!
      ): People!
      deletePerson(id: ID!): People!
      }
`

module.exports = typeDefs