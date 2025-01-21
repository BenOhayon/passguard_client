import styled from "@emotion/styled";
import { IconType } from "react-icons";

interface SideMenuItemProps {
    Icon: IconType;
    text: string;
    selected: boolean;
    menuExpanded: boolean;
    onClick: () => void;
}

interface Selected {
    selected: boolean
}

const menuItemStyles = {
    width: '25px',
    height: '25px',
    flexShrink: 0
}

const Container = styled('div')<Selected>(({ selected }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    backgroundColor: selected ? '#22303a' : '#22303a00',
    padding: '15px 20px',
    cursor: 'pointer',
    ":hover": {
        backgroundColor: '#36424b'
    }
}))

const ItemContent = styled('div')<Selected>(({ selected }) => ({
    fontSize: '16px',
    color: selected ? '#ffffff' : '#a9b9c5',
    fontWeight: 600
}))

const SideMenuItem: React.FunctionComponent<SideMenuItemProps> = ({
    Icon,
    text,
    selected,
    menuExpanded,
    onClick = () => { }
}) => {
    return (
        <Container 
            selected={selected}
            onClick={onClick}
        >
            <Icon style={menuItemStyles} color={selected ? '#ffffff' : '#000000'} />
            {menuExpanded && <ItemContent selected={selected}>{text}</ItemContent>}
        </Container>
    )
}

export default SideMenuItem
