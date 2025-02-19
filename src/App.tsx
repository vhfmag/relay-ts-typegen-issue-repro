import { graphql } from "relay-runtime";

// exporting gql nodes isn't idiomatic but we're doing this just to appease the unused variables lint rule
export const query = graphql`
    query AppQuery($showEmail: Boolean!) @raw_response_type {
        ...AppFragment
        ...AppConditionalFragment
    }
`;

export const fragment = graphql`
    fragment AppFragment on Query {
        account {
            name
        }
    }
`;

export const conditionalFragment = graphql`
    fragment AppConditionalFragment on Query {
        account @include(if: $showEmail) {
            email
        }
    }
`;
