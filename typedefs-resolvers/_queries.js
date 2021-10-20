const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        teams(
            manager: String, 
            cleaning_duty: String
            ): [Team]
        team(id: ID!): Team
        people: [People],
        peopleFiltered(
            team: Int,
            sex: Sex,
            blood_type: BloodType,
            from: String
        ): [People]
        person(id: ID!): People
        peoplePaginated(
            page: Int!,
            per_page: Int!
        ): [People]
        equipments: [Equipment]
        equipmentAdvs: [EquipmentAdv]
        softwares: [Software]
        software: Software
        supplies: [Supply]
        givens: [Given]
        roles: [RoleInfo]
        role(id: ID!): RoleInfo
    }
`

module.exports = typeDefs