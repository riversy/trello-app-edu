import React from 'react';
import {AppContainer, ColumnContainer, ColumnTitle, CardContainer} from "./styles"

function App() {
    return (
        <AppContainer>
            <ColumnContainer>
                <ColumnTitle>Column</ColumnTitle>
                <CardContainer>Card 1</CardContainer>
                <CardContainer>Card 2</CardContainer>
            </ColumnContainer>
        </AppContainer>
    );
}

export default App;
