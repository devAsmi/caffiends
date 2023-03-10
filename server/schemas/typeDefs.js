const {gql}= require('appollo');

const typeDefs = gql`

type History {
    history_id: ID 
    items:[Items]
    total: Int
    points: Int
}`

type Items