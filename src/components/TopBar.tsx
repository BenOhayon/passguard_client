import React, { useState } from 'react'
import styled from "@emotion/styled"
import SearchBox from './SearchBox'

const Container = styled('div')(({ theme }) => ({
    width: '100vw',
    height: '60px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    backgroundColor: theme.colors.primary,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '10px 20px'
}))

const Logo = styled('div')(() => ({
    fontWeight: 'bold',
    fontSize: '25px',
    color: 'white'
}))

const LeftContainer = styled('div')(() => ({
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
}))

const TopBar: React.FunctionComponent = () => {

    const [searchQuery, setSearchQuery] = useState('')

    return (
        <Container>
            <LeftContainer>
                <Logo>PassGuard</Logo>
                <SearchBox
                    value={searchQuery}
                    onSearchChange={setSearchQuery}
                />
            </LeftContainer>
            <div>Account</div>
        </Container>
    )
}

export default TopBar