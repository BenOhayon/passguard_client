import styled from "@emotion/styled"
import { useState } from "react"
import { IoMdSearch } from "react-icons/io"

interface SearchBoxProps {
    value: any,
    onSearchChange: (val: string) => void
}

const Container = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '10px 15px',
    backgroundColor: 'rgba(255, 255, 255, .2)',
    transition: 'all 300ms ease-out',
    '&:has(> :focus)': {
        backgroundColor: '#ffffff'
    }
}))

const SearchInput = styled('input')(() => ({
    fontSize: '18px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#ffffff00',
    color: 'hsla(0, 0%, 100%, .6)',
    transition: 'all 300ms ease-out',
    '::placeholder': {
        color: 'hsla(0, 0%, 100%, .6)'
    },
    ':focus': {
        color: '#000000'
    },
    ':focus::placeholder': {
        color: '#ffffff'
    }
}))

const SearchIcon = styled(IoMdSearch)<{isFocused: boolean}>(({ isFocused }) => ({
    width: '20px',
    height: '20px',
    transition: 'all 300ms ease-out',
    fill: isFocused ? '#000000' : '#ffffff'
}))

const SearchBox: React.FunctionComponent<SearchBoxProps> = ({
    value,
    onSearchChange
}) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)

    return (
        <Container>
            <SearchIcon isFocused={isFocused} />
            <SearchInput
                placeholder="search vault"
                value={value}
                onChange={e => onSearchChange(e.currentTarget.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </Container>
    )
}

export default SearchBox
