import styled from '@emotion/styled'
import React, { useMemo, useState } from 'react'
import SideMenuItem from './SideMenuItem'
import { FaHome, FaLock, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const Container = styled('div')<{ expanded: boolean }>(({
    expanded
}) => ({
    height: '100%',
    width: expanded ? '250px' : '65px',
    backgroundColor: '#3c4a54',
    display: 'flex',
    flexDirection: 'column',
    transition: 'width 250ms ease-out'
}))

const SideMenu: React.FunctionComponent = () => {
    const [expanded, setExpanded] = useState(true)
    const [selectedItem, setSelectedItem] = useState("all-items")

    const menuItems = useMemo(() => [
        {
            text: "Collapse",
            value: "",
            icon: expanded ? FaLongArrowAltLeft : FaLongArrowAltRight,
            onClick: () => setExpanded(prev => !prev)
        },
        {
            text: "All Items",
            value: "all-items",
            icon: FaHome,
            onClick: () => setSelectedItem("all-items")
        },
        {
            text: "Passwords",
            value: "passwords",
            icon: FaLock,
            onClick: () => setSelectedItem("passwords")
        }
    ], [expanded])

    return (
        <Container expanded={expanded}>
            {
                menuItems.map(item => <SideMenuItem 
                    key={item.value}
                    Icon={item.icon} 
                    text={item.text} 
                    selected={selectedItem === item.value}
                    menuExpanded={expanded}
                    onClick={item.onClick}
                />)
            }
        </Container>
    )
}

export default SideMenu