import styled from "styled-components"

export const FeatureCard = styled.div`
    min-height: 220px;
    min-width: 200px;
    background: #fff;
    border-radius: 10px;
`;

export const FeaturesWrapper = styled.section`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    grid-gap: 1.3em;
    padding-top: 2em;
`;